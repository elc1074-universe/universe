cd ./universe/frontend

npm install

ng build

sudo rm -r /usr/share/nginx/html/*

sudo cp -r ./dist/frontend/* /usr/share/nginx/html
