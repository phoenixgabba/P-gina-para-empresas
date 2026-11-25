FROM node:22-bookworm-slim
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev
COPY src ./src
COPY migrations ./migrations
RUN mkdir -p /var/lib/forma/uploads && chown -R node:node /var/lib/forma
USER node
EXPOSE 8080
CMD ["node","src/index.mjs"]
