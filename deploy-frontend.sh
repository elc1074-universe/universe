cd ./frontend

npm install

ng build

sudo rm -rf /usr/share/nginx/html/*

sudo cp -r ./dist/frontend/* /usr/share/nginx/html
