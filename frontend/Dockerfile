# ==== CONFIGURE =====
FROM node:18-alpine
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci
# Build the app
RUN npm run build
# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
# Start the app
CMD cp -r build result_build







# FROM node:18.13.0 as build

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# CMD cp -r build result_build


# FROM node:13.12.0-alpine as build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . ./
# RUN npm run build
# CMD cp -r build result_build





# CMD ["node", "app.js"]


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
