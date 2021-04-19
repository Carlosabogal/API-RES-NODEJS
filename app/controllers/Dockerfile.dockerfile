#base image
FROM node:12.2.0

WORKDIR /app

COPY . /app

RUN npm install
RUN npm install -g @angular/cli@7.3.9

CMD ng serve --host 0.0.0.0 -disable-host-check --port =3000