FROM node:24-alpine@sha256:37712740dc486f179b9540be1c6703cef3f805ea932573a007db748b71189afe

RUN npm install -g typescript

RUN addgroup -S group && adduser -S user -G group

WORKDIR /app

COPY . .

RUN npm install --frozen-lockfile && npm run build

USER user

ENTRYPOINT ["node", "/app/dist/index.mjs"]
