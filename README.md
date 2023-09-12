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
