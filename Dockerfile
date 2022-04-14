FROM node:16-alpine as build

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

RUN yarn build


FROM nginx:stable-alpine

COPY --from=build /usr/src/app/build/ /usr/share/nginx/html