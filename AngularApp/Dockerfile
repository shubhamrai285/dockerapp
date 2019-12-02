FROM httpd

CMD ng build --prod
COPY ./dist/AngularApp/* /usr/local/apache2/htdocs/

EXPOSE 80
CMD apachectl -D FOREGROUND