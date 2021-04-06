FROM node:8-slim

WORKDIR /usr/src/
CMD yarn build

COPY --chown=node:node ./icons        ./icons
COPY --chown=node:node ./build.js     .
COPY --chown=node:node ./package.json .

RUN yarn install --silent && yarn cache clean --all
