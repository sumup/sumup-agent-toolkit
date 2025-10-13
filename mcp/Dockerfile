FROM node:24-alpine@sha256:6ff78d6d45f2614fe0da54756b44a7c529a15ebcaf9832fab8df036b1d466e73

RUN npm install -g typescript

RUN addgroup -S group && adduser -S user -G group

WORKDIR /app

COPY . .

RUN npm install --frozen-lockfile && npm run build

USER user

ENTRYPOINT ["node", "/app/dist/index.mjs"]
