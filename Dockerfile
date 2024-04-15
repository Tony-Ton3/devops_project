FROM node:latest

WORKDIR /src

# copies both package.json and package-lock.json
COPY package*.json ./

RUN npm install

# copies index.mjs within src into the docker image 
COPY . .

EXPOSE 80

CMD [ "npm", "run", "start"] 