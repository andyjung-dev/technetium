  # WORKDIR /usr/src/build
  # RUN chmod 777 /usr/src/build
FROM node:12
  WORKDIR /usr/src/app
  COPY package*.json ./
  RUN npm install
  EXPOSE 9723
  ENV NODE_ENV "prod"

  # Copy source 
  COPY . . 


  CMD [ "node", "src/main.js" ]
