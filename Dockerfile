FROM node:8.5.0

ADD . /app
WORKDIR /app

RUN npm install
RUN npm install --save asyncawait
