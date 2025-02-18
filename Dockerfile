# Gunakan image node sebagai base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy semua file ke dalam container
COPY . .

# Install dependencies
RUN npm install

# Build aplikasi
RUN npm run build

# Perintah default saat container dijalankan
CMD ["npm", "start"]
