FROM node:8

ENV PORT=80
ENV NAME=World

EXPOSE $PORT

COPY index.js /app/

CMD [ "node", "/app/index.js" ]

