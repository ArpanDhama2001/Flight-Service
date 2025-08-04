FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

WORKDIR /app/src

RUN npx sequelize db:create || true
RUN npx sequelize db:migrate
RUN npx sequelize db:seed:all

CMD ["npm", "run", "dev"]
