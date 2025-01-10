FROM node:23
WORKDIR /app

COPY ./ . 

RUN rm -f .env local.db \
    && apt-get update && apt-get install -y libc6 libstdc++6 \
    && npm cache clean --force \
    && npm install -D \
    && DATABASE_PATH=local.db npm run build \
    && rm -f local.db

EXPOSE 5000
ENV DATABASE_PATH=local.db

CMD npx drizzle-kit push && npm run host
