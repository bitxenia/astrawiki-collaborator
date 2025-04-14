FROM node:23-slim

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

EXPOSE 40001
EXPOSE 40002
EXPOSE 40003

COPY . .

CMD ["node", "run_astrawiki.js"]