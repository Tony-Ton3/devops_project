# using long term support node version 
FROM node:v20.12.1

# setting workdir to /src for conventional sake since the core functionality of the app is in the src folder
WORKDIR /src

COPY package*.json ./

RUN npm install

# ignored node_modules and Dockerfile 
COPY . .

# this is meta data
EXPOSE 80

CMD [ "npm", "run", "start" ] 