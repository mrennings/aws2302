FROM node:alpine

WORKDIR /app
COPY app.js package.json ./

RUN npm install

EXPOSE 3000
USER node

CMD ["node", "./app.js"]
