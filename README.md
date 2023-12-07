<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# GIFT PLANNER API

Gift Planner API is a REST API that allows you to manage your gifts for your friends made
with [Nest](https://github.com/nestjs/nest) framework.

## Installation

```bash
$ npm install
```

## Running the app

* Démarrer la base de données Postgresql (voir section Docker)
* Démarrer l'application

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Docker

Les données initiales sont dans le fichier `database/init_postgre.sql`.

```shell
docker build -t gift_planner/gift_planner_postgresql . -f database/Dockerfile_postgresql
docker run -d -p 5432:5432 --name gift_planner_postgresql gift_planner/gift_planner_postgresql
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
