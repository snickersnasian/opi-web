FROM --platform=linux/amd64 node:12-alpine as build

WORKDIR /app

COPY ./package*.json ./

RUN npm install --production

COPY . .

RUN npm install --production --prefix ./frontend
RUN npm run build --prefix ./frontend


CMD ["node", "app.js"]
