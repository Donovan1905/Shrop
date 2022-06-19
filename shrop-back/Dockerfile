FROM node:latest

WORKDIR /usr/src/app

COPY . . 

USER root

RUN npm install

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "node", "dist/app.js" ]
