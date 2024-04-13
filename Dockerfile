FROM node:20.11.0-alpine

WORKDIR /src

# copies both package.json and package-lock.json
COPY package*.json ./

RUN npm install

# copies rest of the files
COPY . .

EXPOSE ${PORT} 

CMD [ "npm", "run", "start"] 