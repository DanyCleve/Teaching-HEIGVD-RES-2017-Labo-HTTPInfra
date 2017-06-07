FROM node:6.10

MAINTAINER Dany Tchente

COPY src /opt/app

RUN apt-get update && \
	apt-get install -y vim

CMD ["node", "/opt/app/index.js"]