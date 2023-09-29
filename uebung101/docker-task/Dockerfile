FROM node:alpine
WORKDIR /src
ADD app.js package*.json ./
RUN npm install
EXPOSE 8080
CMD [ "node", "/src/app.js" ]
