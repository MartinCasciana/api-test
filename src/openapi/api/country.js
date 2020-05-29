module.exports = {
    '/api/country': {
        get: {
            security: [],
            summary: 'List Countries',
            parameters: [
                {
                    in: 'query',
                    name: 'code',
                    schema: {
                        type: 'string',
                        pattern: '^[A-Z]{2}$'
                    },
                    description: 'Código de país solicitado'
                }
            ],
            responses: {
                200: {
                    description: 'list of countries',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    country: {
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
                                    },
                                    total: {type: 'integer'},
                                    limit: {type: 'string'}
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
            summary: 'create a country',
            requestBody: {
                description: 'Añadir País',
                required: true,
                content: { 'application/json': { schema: { $ref: '#/components/schemas/Countries'}}}
            },
            responses: {
                200: {
                    description: 'login succes',
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
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        }
    },

    'api/country/{id}': {
        get: {
            security: [],
            summary: 'List Countries for ID',
            parameters: [{$ref: '#/components/parameters/Path'}],
            responses: {
                200: {
                    description: 'ID del País',
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
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }

        },

        put: {
            security: [],
            summary: 'List Countries',
            parameters: [{$ref: '#/components/parameters/Path'}],
            requestBody: {
                description: 'Modificar',
                required: true,
                content: {'application/json': {scehma: {$ref: '#/components/schemas/Countries'}}}
            },
            responses: {
                200: {
                    description: 'login succes',
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
                    description: 'Errir',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        },

        delete: {
            security: [],
            summary: 'List Countries',
            parameters: [{$ref: '#/components/parameters/Path'}],
            responses: {
                200: {
                    description: 'login succes',
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
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }

        }
    }
};
