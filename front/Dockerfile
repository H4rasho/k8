FROM node:16-alpine

workdir /app

COPY . .
RUN npm install
RUN npm run build
EXPOSE 3005
CMD ["npm", "run", "dev"]