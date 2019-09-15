FROM node:10.16-alpine
RUN mkdir /app
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm install
COPY ./src ./src
ENV PORT=3000
ENV SENDGRID_API_KEY=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
ENV JWT_SECRET=secretkeyformynewfiles
ENV MONGODB_URL=mongodb://127.0.0.1:27017/task-manager-api
CMD ["npm", "run", "start"]
