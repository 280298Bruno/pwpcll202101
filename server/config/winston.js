// importando a wiston
import winston, { format } from 'winston';
import appRoot from 'app-root-path';

// Componentes para crear el formato personalizado
const { combine, timestamp, printf, uncolorize , json, colorize} = format;
//
// Perfil de color para el log
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'green',
};
// Agregando el prefil a winston
winston.addColors(colors);

//Formato de consola
const myFormat = combine(
    colorize({ all: true}),
    timestamp(),
    printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
);

//Formato para la salida de los archivos de log
const myFileFormat = combine(
    uncolorize(),
    timestamp(),
    json ()
);

// Creando objetos de configuracion
const options = {
    infoFile: {
        level: 'info',
        filename: `${appRoot}/server/logs/infos.log`,
        handleExceptions: true,
        maxsize: 5242880, 
        maxFiles: 5,
        format: myFileFormat,
    },
    warnFile: {
        level: 'warn',
        filename: `${appRoot}/server/logs/warns.log`,
        handleExceptions: true,
        maxsize: 5242880, 
        maxFiles: 5,
        format: myFileFormat,
    },
    errorFile: {
        level: 'error',
        filename: `${appRoot}/server/logs/error.log`,
        handleExceptions: true,
        maxsize: 5242880, 
        maxFiles: 5,
        format: myFileFormat,
    },
    console: {
        lavel: 'debug',
        handleExceptions: true,
        format: myFormat,
    },
};

// creando la instancia del logger
const logger = winston.createLogger({
    transports: [
        new winston.transport.File(options.infoFile),
        new winston.transport.File(options.warnFile),
        new winston.transport.File(options.errorFile),
        new winston.transport.Console(options.console),
    ],
    exitOnError: false,
});

// Manejo de un Stream de entrada
logger.stream = {
    write(message) {
        logger.info(massage);
    },
};

export default logger;
