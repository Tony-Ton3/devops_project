FROM node:latest

# setting workdir to /src for conventional sake since the core functionality of the app is in the src folder
WORKDIR /src

COPY package*.json ./

RUN npm install

# ignored node_modules and Dockerfile in .dockerignore
COPY . .

# this is meta data
EXPOSE 80

CMD [ "npm", "run", "start" ] 