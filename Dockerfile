# Stage 1: Build React App
FROM node:18 AS build

WORKDIR /app

# Salin file package.json & package-lock.json (jika ada) dan install dependencies
COPY package*.json ./
RUN npm install

# Perbaiki izin file (hindari permission denied)
RUN chmod -R 755 /app

# Salin seluruh source code dan build React client
COPY . . 
RUN npm install -g react-scripts && npm run build

# Stage 2: Run Express Server
FROM node:18

WORKDIR /app

# Salin package.json & install dependencies untuk production
COPY package*.json ./
RUN npm install --only=production

# Salin hasil build dari stage pertama
COPY --from=build /app/build ./build
COPY server.js .

# Expose port 5000
EXPOSE 3000

# Jalankan server
CMD ["npm", "run", "server"]
