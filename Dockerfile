FROM ubuntu:18.04

WORKDIR /app

RUN apt update

RUN apt-get -y install curl gnupg

RUN curl -sL https://deb.nodesource.com/setup_16.x  | bash -

RUN apt-get -y install nodejs

RUN apt-get install -y chromium-browser

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]