module.exports = {
    '/api/instrument': {
        get: {
            security: [],
            summary: 'List Instruments',
            parameters: [
                {
                    in: 'query',
                    name: 'hexcode',
                    schema: {
                        type: 'string',
                        pattern: '^[A-Z]{2}$'
                    },
                    description: 'Código Hex del instrumento solicitado'
                },
                {
                    in: 'query',
                    name: 'family',
                    schema: {
                        type: 'string',
                        pattern: '^[A-Z]{2}$'
                    },
                    description: 'Tipo de familia del instrumento solicitado'
                },
                {
                    in: 'query',
                    name: 'instrument',
                    schema: { type: 'string' },
                    description: 'Nombre del instrumento solicitado'
                },
                {
                    in: 'params',
                    name: 'id',
                    schema: { type: 'uuid' },
                    description: 'Id del instrumento solicitado'
                }
            ],

            responses: {
                200: {
                    description: 'list of instruments',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        id: {
                                            type: 'string',
                                            format: 'uuid'
                                        },
                                        name: {type: 'string'}
                                    }
                                }
                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        },
        post: {
            security: [],
            requestBody: {
                description: 'Nuevo Instrumento',
                required: true,
                content: { 'application/json': { schema: { $ref: '#/components/schemas/Instruments' } } }
            },
            responses: {
                200: {
                    description: 'list of instruments',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {}

                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } }
                }
            }
        }
    },
    '/api/instrument/{id}': {
        get: {
            security: [],
            summary: 'List Instruments for ID',
            parameters: [{$ref: '#/components/parameters/Path'}],
            responses: {
                200: {
                    description: 'ID del Instrumento',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {}
                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } }
                }
            }
        },
        put: {
            security: [],
            parameters: [{ $ref: '#/components/parameters/Path' }],
            requestBody: {
                description: 'Descripción Opcional',
                required: true,
                content: { 'application/json': { schema: { $ref: '#/components/schemas/Instruments' } } }
            },
            responses: {
                200: {
                    description: 'list of instruments',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {}

                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } }
                }
            }
        },
        delete: {
            security: [],
            parameters: [
                {
                    in: 'path',
                    name: 'id',
                    schema: {
                        type: 'string',
                        format: 'uuid'
                    },
                    required: true,
                    description: 'ID del instrumento solicitado'
                }
            ],
            responses: {
                200: {
                    description: 'list of instruments',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {}
                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } }
                }
            }
        }
    }
};