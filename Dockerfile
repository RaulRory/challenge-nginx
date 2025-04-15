FROM node:22.14.0-alpine as builder

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./src ./src
COPY ./.env ./

RUN npm install

FROM node:22.14.0-alpine as application

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/src ./src
COPY --from=builder /usr/src/app/.env ./.env
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/node_modules ./node_modules

COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

