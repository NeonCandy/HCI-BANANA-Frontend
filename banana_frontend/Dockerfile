FROM node:18-slim

WORKDIR /app

COPY ./package*.json ./

RUN npm install stylus sugarss terser tsx yaml picomatch

COPY ./ .

# RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "dev"]
