FROM node:8.5.0

ADD . /app
WORKDIR /app

RUN npm install

CMD sleep 10 && nodejs /app/run.js