# Stage 1: Build
FROM node:23 AS builder

# Set working directory
WORKDIR /app

# Copy package info and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

COPY  . .

# Stage 2: Runtime container
FROM node:23

WORKDIR /app

COPY --from=builder /app/ ./

# Astrachat ports
EXPOSE 50001 50001/udp

CMD ["npm", "run", "start"]
