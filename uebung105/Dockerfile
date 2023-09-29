FROM node:alpine as build

WORKDIR /src
COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine
WORKDIR /app
COPY --from=build /src/build/* .
COPY --from=build /src/build/static ./static
COPY default /etc/nginx/conf.d/default.conf

EXPOSE 80
