<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Ejecutar en desarollo

1.  Clonar repositorio
2.  Ejecutar

```
npm install
```

3.  Instalar Nest CLI

```
npm i -g @nest/cli
```

4. Levantar DB

```
docker-compose up -d
```

5. Clonar el archivo **.env.template\_** y renombrarlo como **.env\_** y llenar las variables

6. Start app

```
npm run start:dev
```

8. DB Seed

```
http://localhost:3000/api/v1/seed
```

## Stack

- MongoDB
- Nest

# Production Build

1. Crear archico `.env.prod` y llenar variables de entorno
2. Crear imagen

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

# Development Build

1. Crear archico `.env` y llenar variables de entorno
2. Crear imagen

```
docker-compose -f docker-compose.dev.yaml --env-file .env up --build
```

Remover flag `--build` cuando se quiera levantar la imagen previamente construida

# Nota

Por defecto, docker-compose usa el archivo .env, por lo que si tienen el archivo .env y lo configuran con sus variables de entorno de producción, bastaría con

```
docker-compose -f docker-compose.prod.yaml up --build
```

```
docker-compose -f docker-compose.dev.yaml up --build
```
