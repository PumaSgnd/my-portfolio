# Stage 1: Build React App
FROM node:18 AS build

WORKDIR /app

# Copy dan install dependencies untuk client
COPY package*.json ./
RUN npm install

# Copy seluruh source code dan build React client
COPY . .
RUN npm run build

# Stage 2: Run Express Server
FROM node:18

WORKDIR /app

# Copy hanya yang diperlukan untuk server
COPY package*.json ./
RUN npm install --only=production

# Copy build React ke folder server (sesuai path di Express)
COPY --from=build /app/build ./build
COPY server.js .

# Expose port dan jalankan server
EXPOSE 5000
CMD ["npm", "run", "server"]
