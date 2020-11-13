FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

WORKDIR /usr/src/app/data

COPY ./data/db.json .

EXPOSE 3050
CMD [ "npm", "start" ]