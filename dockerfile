

FROM node:18-bullseye-slim AS base

# Install required dependecies
FROM base as dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install

# Build Application
FROM base AS builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Application runner
FROM base AS runner
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/dist ./dist
CMD ["node", "./build/index.js"]


