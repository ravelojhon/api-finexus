import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'FinExus API',
      version: '1.0.0',
      description: 'API REST para gestión de productos',
    },
    servers: [
      {
        url: 'http://localhost:4000',
        description: 'Servidor de desarrollo',
      },
    ],
    components: {
      schemas: {
        Product: {
          type: 'object',
          required: ['name', 'price', 'stock'],
          properties: {
            id: {
              type: 'integer',
              description: 'ID único del producto',
              example: 1,
            },
            name: {
              type: 'string',
              description: 'Nombre del producto',
              example: 'Laptop Gaming',
              minLength: 2,
            },
            price: {
              type: 'number',
              description: 'Precio del producto',
              example: 1200.50,
              minimum: 0,
            },
            stock: {
              type: 'integer',
              description: 'Cantidad en stock',
              example: 10,
              minimum: 0,
            },
            category: {
              type: 'string',
              description: 'Categoría del producto',
              example: 'Electronics',
              nullable: true,
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Fecha de creación',
              example: '2025-10-06T02:20:05.281Z',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Fecha de última actualización',
              example: '2025-10-06T02:20:05.281Z',
            },
          },
        },
        ProductInput: {
          type: 'object',
          required: ['name', 'price', 'stock'],
          properties: {
            name: {
              type: 'string',
              description: 'Nombre del producto',
              example: 'Laptop Gaming',
              minLength: 2,
            },
            price: {
              type: 'number',
              description: 'Precio del producto',
              example: 1200.50,
              minimum: 0,
            },
            stock: {
              type: 'integer',
              description: 'Cantidad en stock',
              example: 10,
              minimum: 0,
            },
            category: {
              type: 'string',
              description: 'Categoría del producto',
              example: 'Electronics',
            },
          },
        },
        ValidationError: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Error de validación',
            },
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  field: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                    example: ['name'],
                  },
                  message: {
                    type: 'string',
                    example: 'El nombre es obligatorio',
                  },
                },
              },
            },
          },
        },
      },
    },
    paths: {
      '/api/products': {
        get: {
          tags: ['Products'],
          summary: 'Obtener todos los productos',
          description: 'Retorna una lista de todos los productos disponibles',
          responses: {
            '200': {
              description: 'Lista de productos obtenida exitosamente',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Product',
                    },
                  },
                },
              },
            },
          },
        },
        post: {
          tags: ['Products'],
          summary: 'Crear un nuevo producto',
          description: 'Crea un nuevo producto en el sistema',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ProductInput',
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'Producto creado exitosamente',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Product',
                  },
                },
              },
            },
            '400': {
              description: 'Error de validación',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/ValidationError',
                  },
                },
              },
            },
          },
        },
      },
      '/api/products/{id}': {
        get: {
          tags: ['Products'],
          summary: 'Obtener producto por ID',
          description: 'Retorna un producto específico por su ID',
          parameters: [
            {
              name: 'id',
              in: 'path',
              required: true,
              description: 'ID del producto',
              schema: {
                type: 'integer',
                example: 1,
              },
            },
          ],
          responses: {
            '200': {
              description: 'Producto obtenido exitosamente',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Product',
                  },
                },
              },
            },
            '404': {
              description: 'Producto no encontrado',
            },
          },
        },
        put: {
          tags: ['Products'],
          summary: 'Actualizar producto',
          description: 'Actualiza un producto existente',
          parameters: [
            {
              name: 'id',
              in: 'path',
              required: true,
              description: 'ID del producto',
              schema: {
                type: 'integer',
                example: 1,
              },
            },
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ProductInput',
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'Producto actualizado exitosamente',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Product',
                  },
                },
              },
            },
            '400': {
              description: 'Error de validación',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/ValidationError',
                  },
                },
              },
            },
            '404': {
              description: 'Producto no encontrado',
            },
          },
        },
        delete: {
          tags: ['Products'],
          summary: 'Eliminar producto',
          description: 'Elimina un producto del sistema',
          parameters: [
            {
              name: 'id',
              in: 'path',
              required: true,
              description: 'ID del producto',
              schema: {
                type: 'integer',
                example: 1,
              },
            },
          ],
          responses: {
            '204': {
              description: 'Producto eliminado exitosamente',
            },
            '404': {
              description: 'Producto no encontrado',
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'], // Archivos que contienen anotaciones JSDoc
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };
