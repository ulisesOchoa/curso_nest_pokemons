# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar

```
yarn install
```

3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```
docker compose up -d
```

5. Clonar el archivo **_.env.example_** y renombrar a **_.env_**

6. Reconstruir la BD con la semilla

```
http://localhost:3000/api/seed
```

## Production Build

1. Crear el archivo .en.prod
2. Llenar las variables de entorno
3. Crear la imagen

```
docker compose -f docker-compose.prod.yaml --env-file .env.prod up --build -d
```

## Stacks

- MongoDb
- Nest
