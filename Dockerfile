# Stage 1: Build React/Vite app
FROM node:18-bullseye AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies inside Linux container
RUN npm install --legacy-peer-deps

# Copy all source code
COPY . .

# Build Vite app
RUN npm run build

# Stage 2: Serve built files with Nginx
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
