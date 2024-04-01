FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]























# build env
# FROM node:13.12.0-alpine as build
# FROM node:18.13.0 as build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . ./
# RUN npm run build
# CMD ["node", "app.js"]

# CMD [cp -r build result_build]

# CMD cp -r build result_build

# RUN npm install --only=production && npm cache clean --force && npm install -g typescript
