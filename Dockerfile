# Etapa 1: Construir la aplicación React con Vite
FROM node:14.17.0-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Etapa 2: Configurar NGINX y servir la aplicación
FROM nginx:1.21.0-alpine

WORKDIR /app

COPY --from=build /app/dist /app/dist

COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080