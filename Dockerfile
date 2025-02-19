# Stage 1: Build React App
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . . 

RUN chmod -R 755 /app

RUN npm install -g react-scripts && npm run build

# Stage 2: Run Express Server
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY --from=build /app/build ./build
COPY server.js .

EXPOSE 5000

CMD ["npm", "run", "server"]
