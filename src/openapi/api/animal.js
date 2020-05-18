module.exports = {
    '/api/animal': {
        get: {
            security: [],
            summary: 'List Animals',
            parameters: [
                {
                    in: 'query',
                    name: 'animal',
                    schema: {
                        type: 'string',
                        pattern: '^[A-Z]{2}$'
                    },
                    description: 'Especie de animal solicitada'
                },
                {
                    in: 'query',
                    name: 'scientific_name',
                    schema: {
                        type: 'string',
                        pattern: '^[A-Z]{2}$'
                    },
                    description: 'Nombre científico del animal solicitado'
                },
                {
                    in: 'query',
                    name: 'gender',
                    schema: { type: 'string' },
                    description: 'Género del animal solicitado'
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
                    description: 'list of animals',
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
                description: 'Nuevo Animal',
                required: true,
                content: { 'application/json': { schema: { $ref: '#/components/schemas/Animals' } } }
            },
            responses: {
                200: {
                    description: 'list of animals',
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
    '/api/animal/{id}': {
        get: {
            security: [],
            summary: 'List Animals for ID',
            parameters: [{$ref: '#/components/parameters/Path'}],
            responses: {
                200: {
                    description: 'ID del Animal',
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
                content: { 'application/json': { schema: { $ref: '#/components/schemas/Animals' } } }
            },
            responses: {
                200: {
                    description: 'list of animals',
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
                    description: 'ID del animal solicitado'
                }
            ],
            responses: {
                200: {
                    description: 'list of animals',
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
