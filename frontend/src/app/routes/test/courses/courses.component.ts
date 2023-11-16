import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import TestService from "src/app/services/test.service";
import UFSMCourseRetrievalDTO from "src/app/models/dto/test/UFSMCourseRetrievalDTO";
import UserService from "src/app/services/user.service";

interface Course {
  id: number;
  name: string;
  level: string;
  site: string;
}

const coursesByTrait = {
  R: [6, 7, 9, 11, 26, 34, 38, 39, 41, 42, 48, 49, 50, 51, 43, 44, 45, 46, 53, 62, 64, 75, 77, 83, 87, 86, 87, 94, 99],
  I: [17, 16, 17, 21, 20, 27, 41, 42, 48, 49, 50, 51, 46, 39, 52, 54, 56, 57, 61, 62, 64, 75, 77, 79, 80, 82, 86, 89, 94, 99],
  A: [11, 13, 14, 26, 38, 84, 97],
  S: [2, 12, 13, 14, 27, 84, 90, 30, 31, 36, 53, 59, 60, 65, 66, 67, 70, 71, 72, 74, 79, 82, 85, 89, 93, 97, 98],
  E: [2, 6, 18, 20, 27, 84, 90, 45, 64, 65, 66, 70, 89],
  C: [2, 12, 18, 20, 84, 90, 27, 45, 34, 52, 65, 66, 70, 72, 80, 83, 86, 87, 89],
};

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {
  results: any;
  userCode: string;
  username: string;

  constructor(
    private TestService: TestService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userCode = "";
    this.username = "";
    this.results = { mostInterested: '', interestCode: '', courseRecommendations: [] };
  }

  ngOnInit(): void {
    this.userCode = this.route.snapshot.paramMap.get("userCode") || "";
    if (this.userCode) {
      this.getResults(this.userCode);
      this.userService.findByCode(this.userCode).subscribe((data: any) => {
        this.username = data.username;
      });
    }
  }

  getResults(userCode: string): void {
    this.TestService.getResultByUserCode(userCode).subscribe(
      async (data) => {
        if (data) {
          this.results = data;
          const interestMapping: Record<string, string> = {
            R: "Realista",
            I: "Investigativo",
            A: "Artístico",
            S: "Social",
            E: "Empreendedor",
            C: "Convencional",
          };
          this.results.mostInterested =
            interestMapping[this.results.interestCode[0]];
          this.results.courseRecommendations = await this.recommendCourses(
            this.results.interestCode
          );
        } else {
          this.router.navigate(["/no-result"]);
        }
      },
      (error) => {
        console.error(error);
        this.router.navigate(["/no-result"]);
      }
    );
  }

  async recommendCourses(userProfile: string, numRecommendations = 5): Promise<Course[]> {
    let commonCourses =
      coursesByTrait[userProfile[0] as keyof typeof coursesByTrait];
    for (let i = 1; i < userProfile.length; i++) {
      commonCourses = commonCourses.filter((id) =>
        coursesByTrait[userProfile[i] as keyof typeof coursesByTrait].includes(
          id
        )
      );
    }

    if (commonCourses.length >= numRecommendations) {
      return Promise.all(
        commonCourses
          .slice(0, numRecommendations)
          .map((id) => this.findCourseByID(id))
      );
    }

    let recommendations = [...commonCourses];
    for (let i = 0; i < userProfile.length; i++) {
      for (let j = i + 1; j < userProfile.length; j++) {
        let doubleCourses = coursesByTrait[
          userProfile[i] as keyof typeof coursesByTrait
        ].filter((id) =>
          coursesByTrait[
            userProfile[j] as keyof typeof coursesByTrait
          ].includes(id)
        );
        for (let id of doubleCourses) {
          if (!recommendations.includes(id)) {
            recommendations.push(id);
          }
          if (recommendations.length >= numRecommendations) {
            return Promise.all(
              recommendations.map((id) => this.findCourseByID(id))
            );
          }
        }
      }
    }
    return Promise.all(recommendations.map((id) => this.findCourseByID(id)));
  }

  goToCode(): void {
    this.router.navigate(["/test/code-result"]);
  }

  findCourseByID(id: number): Promise<Course> {
    return new Promise((resolve, reject) => {
      this.TestService.findCourse(id).subscribe(
        (course: UFSMCourseRetrievalDTO | null) => {
          if (course) {
            resolve({
              id: course.id,
              name: course.name,
              level: course.level,
              site: course.site,
            });
          }
        },
        (error) => {
          console.error(error);
          reject(error);
        }
      );
    });
  }
}