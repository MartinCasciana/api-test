module.exports = {
    '/api/car': {
        get: {
            security: [],
            summary: 'List Cars',
            parameters: [
                {
                    in: 'query',
                    name: 'brand',
                    schema: {
                        type: 'string',
                        pattern: '^[A-Z]{2}$'
                    },
                    description: 'Marca del automóvil solicitado'
                },
                {
                    in: 'query',
                    name: 'model',
                    schema: {
                        type: 'string',
                        pattern: '^[A-Z]{2}$'
                    },
                    description: 'Modelo del automóvil solicitado'
                },
                {
                    in: 'query',
                    name: 'year',
                    schema: { type: 'integer' },
                    description: 'Año del automóvil solicitado'
                },
                {
                    in: 'params',
                    name: 'id',
                    schema: { type: 'uuid' },
                    description: 'Id del automóvil solicitado'
                }
            ],

            responses: {
                200: {
                    description: 'list of cars',
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
                description: 'Nuevo Automóvil',
                required: true,
                content: { 'application/json': { schema: { $ref: '#/components/schemas/Cars' } } }
            },
            responses: {
                200: {
                    description: 'list of cars',
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
    '/api/car/{id}': {
        get: {
            security: [],
            summary: 'List Cars for ID',
            parameters: [{$ref: '#/components/parameters/Path'}],
            responses: {
                200: {
                    description: 'ID del Automóvil',
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
                content: { 'application/json': { schema: { $ref: '#/components/schemas/Cars' } } }
            },
            responses: {
                200: {
                    description: 'list of cars',
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
                    description: 'ID del automóvil solicitado'
                }
            ],
            responses: {
                200: {
                    description: 'list of cars',
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
