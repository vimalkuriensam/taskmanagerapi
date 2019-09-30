FROM node:10.16-alpine
RUN mkdir /app
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm install
COPY ./src ./src
ENV PORT=3000
ENV JWT_SECRET=secretkeyformynewfiles
ENV MONGODB_URL=mongodb://127.0.0.1:27017/task-manager-api
CMD ["npm", "run", "start"]
