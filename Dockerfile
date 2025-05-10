FROM node:alpine AS build

WORKDIR /app
COPY package*.json ./
COPY db ./db/
RUN apt update -y \ 
    && npm install
COPY . .

RUN npm run build

FROM node:alpine AS runtime 

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/build ./build
COPY --from=build /app/db ./db