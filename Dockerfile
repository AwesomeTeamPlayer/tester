FROM node:8.5.0

ADD . /app
WORKDIR /app

RUN npm install

CMD echo "10 sec to run tests" && sleep 5 && echo "5 sec to run tests" && sleep 5 && nodejs /app/run.js