// esta es la sin librerías externas a nest, con esto puedes trabajar pero el Joi es para los errores cuando falta alguna variable de entorno

export const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3000,
    defaultLimit: +process.env.DEFAULT_LIMIT || 10
});