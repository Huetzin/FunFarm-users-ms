FROM node:22.11-apline3.20

ARG NODE_ENV

ENV NODE_ENV=$NODE_ENV
ENV APP_ROOT /usr/src/app

RUN mkdir -p ${APP_ROOT}

WORKDIR ${APP_ROOT}

ADD . ${APP_ROOT}

# RUN npm install --save --legacy-peer-deps

RUN npm run build

RUN pwd && ls -latr && cd dist && ls -latr

CMD [ "npm", "run", "start:prod" ]