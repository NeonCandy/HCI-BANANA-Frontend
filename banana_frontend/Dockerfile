FROM node:23-slim
WORKDIR /app
COPY ./ .
RUN rm -f .env local.db && npm install -D && DATABASE_PATH=local.db npm run build && rm -f local.db
EXPOSE 5000
CMD npm run db:push && npm run host
