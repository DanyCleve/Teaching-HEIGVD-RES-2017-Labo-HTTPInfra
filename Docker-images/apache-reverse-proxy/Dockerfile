FROM php:5.6-apache

MAINTAINER dany Simo

RUN apt-get update && \
	apt-get install nano
	
COPY conf/ /etc/apache2

RUN a2enmod proxy proxy_http
RUN a2ensite 000-* 001-*