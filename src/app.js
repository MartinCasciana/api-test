const express = require('express')();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const {OpenApiValidator} = require('express-openapi-validator');

const mongoose = require('./helpers/mongoose');
const logger = require('./helpers/logger');

const Router = require('./routes');
const packageJson = require('../package.json');

const {
    BODY_LIMIT,
    NODE_ENV,
    PORT
} = process.env;

class App {
    constructor() {
        /**
         * @var {express} app
         */
        this.app = express;
    }

    test() {
        express.use(bodyParser.json({limit: BODY_LIMIT}));
        express.use(bodyParser.urlencoded({extended: true}));
        this._routes();
        return express;
    }

    _onListening() {
        if(NODE_ENV !== 'test') {
            logger.info(`Started ${packageJson.name} at port ${PORT} in ${NODE_ENV} environment`);
        }
    }

    _onError(err) {
        logger.error(`App Crashed, Error: ${err.errorMessage}`);
        process.exit;
    }

    async init() {
        await this._configure();
        express.listen(PORT, this._onListening);
        express.on('error', this._onError);
        return express;
    }

    _configure() {
        mongoose.configure();
        this._middleWares();
        return this._routes();
    }

    _middleWares() {
        express.use(bodyParser.json({limit: BODY_LIMIT}));
        express.use(bodyParser.urlencoded({extended: true}));
        express.use(cookieParser());
        express.use(cors({
            credentials: true,
            origin: /^http:\/\/localhost/
        }));

        return;
    }

    async _routes() {
        const apiSpec = include('openapi');
        const options = {swaggerOptions: {validatorUrl: null}};
        express.use('/docs', swaggerUi.serve, swaggerUi.setup(apiSpec, options));

        await new OpenApiValidator({
            apiSpec,
            validateRequests: true,
            validateResponses: true
        }).install(express);
        Router.configure(express);
        return;
    }
}

module.exports = App;
