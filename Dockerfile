FROM node:alpine

RUN mkdir -p /usr/src/ttgel-api && chown -R node:node /usr/src/ttgel-api

WORKDIR /usr/src/ttgel-api

COPY package.json yarn.lock ./

USER node

RUN yarn install --pure-lockfile

COPY --chown=node:node . .

EXPOSE 3000
