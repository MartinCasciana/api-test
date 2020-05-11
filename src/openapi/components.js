module.exports = {
    schemas: {
        ArrayString: {
            type: 'array',
            uniqueItems: true,
            items: {type: 'string'}
        },
        ArrayNumber: {
            type: 'array',
            uniqueItems: true,
            items: {type: 'integer'}
        },
        Role: {
            type: 'object',
            properties: {
                id: {type: 'string'},
                name: {type: 'string'},
                order: {type: 'integer'}
            }
        },
        ids: {
            type: 'array',
            uniqueItems: true,
            items: {
                type: 'string',
                format: 'uuid'
            }
        },
        Countries: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'uuid',
                    nullable: true
                },
                name: {type: 'string'},
                code: {type: 'string'},
                iso2: {type: 'string'}
            }
        },
        Cars: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'uuid',
                    nullable: true
                },
                brand: {type: 'string'},
                model: {type: 'string'},
                year: {type: 'string'}
            }
        },
        Instruments: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'uuid',
                    nullable: true
                },
                hexcode: {type: 'string'},
                family: {type: 'string'},
                instrument: {type: 'string'}
            }
        },
        Animals: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'uuid',
                    nullable: true
                },
                animal: {type: 'string'},
                scientific_name: {type: 'string'},
                gender: {type: 'string'}
            }
        },
        Error: {
            type: 'object',
            required: [
                'code',
                'message'
            ],
            properties: {
                code: {
                    type: 'integer',
                    format: 'int32'
                },
                message: {type: 'string'}
            }
        }
    },
    securitySchemes: {
        bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
        }
    }
};
