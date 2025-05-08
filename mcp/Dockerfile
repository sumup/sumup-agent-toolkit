FROM node:23-alpine@sha256:86703151a18fcd06258e013073508c4afea8e19cd7ed451554221dd00aea83fc

RUN npm install -g typescript

RUN addgroup -S group && adduser -S user -G group

WORKDIR /app

COPY . .

RUN npm install --frozen-lockfile && npm run build

USER user

ENTRYPOINT ["node", "/app/dist/index.mjs"]
