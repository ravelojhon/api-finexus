# 🚀 FinExus API

API REST para gestión de productos desarrollada con Node.js, TypeScript, Express y PostgreSQL.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Prerrequisitos](#-prerrequisitos)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Uso](#-uso)
- [API Endpoints](#-api-endpoints)
- [Testing](#-testing)
- [Docker](#-docker)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Decisiones Técnicas](#-decisiones-técnicas)
- [Extensión de la Solución](#-extensión-de-la-solución)
- [Contribución](#-contribución)

## ✨ Características

- ✅ **API RESTful** completa con operaciones CRUD
- ✅ **Arquitectura por capas** (Repository → Service → Controller → Routes)
- ✅ **Validaciones robustas** con Zod
- ✅ **Documentación automática** con Swagger UI
- ✅ **Manejo de errores** centralizado
- ✅ **Pruebas unitarias** con Jest
- ✅ **Dockerización** completa
- ✅ **TypeScript** para tipado estático
- ✅ **PostgreSQL** con Prisma ORM

## 🛠 Tecnologías

### Backend
- **Node.js 18** - Runtime de JavaScript
- **TypeScript** - Tipado estático
- **Express.js** - Framework web
- **Prisma** - ORM para PostgreSQL
- **Zod** - Validación de esquemas
- **Jest** - Framework de testing

### Base de Datos
- **PostgreSQL 15** - Base de datos relacional
- **PostgREST** - API REST automática

### DevOps
- **Docker** - Contenedorización
- **Docker Compose** - Orquestación de servicios

### Documentación
- **Swagger UI** - Documentación interactiva
- **OpenAPI 3.0** - Especificación de API

## 📋 Prerrequisitos

- **Node.js** 18 o superior
- **npm** o **yarn**
- **Docker** y **Docker Compose** (opcional)
- **Git**

## 🚀 Instalación y Configuración

### Opción 1: Desarrollo Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/ravelojhon/api-finexus.git
cd api-finexus

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus configuraciones

# 4. Configurar base de datos
npx prisma generate
npx prisma migrate dev

# 5. Iniciar servidor de desarrollo
npm run dev
```

### Opción 2: Con Docker (Recomendado)

```bash
# 1. Clonar el repositorio
git clone https://github.com/ravelojhon/api-finexus.git
cd api-finexus

# 2. Levantar todos los servicios
docker-compose up --build

# 3. ¡Listo! La API estará disponible en http://localhost:4000
```

## 🎯 Uso

### Servidor de Desarrollo

```bash
# Iniciar en modo desarrollo (con hot reload)
npm run dev

# Compilar TypeScript
npm run build

# Ejecutar en producción
npm start
```

### Docker

```bash
# Levantar todos los servicios
docker-compose up --build

# Levantar en segundo plano
docker-compose up -d

# Ver logs
docker-compose logs backend

# Detener servicios
docker-compose down
```

## 📡 API Endpoints

### Base URL
```
http://localhost:4000/api
```

### Productos

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/products` | Obtener todos los productos |
| GET | `/products/:id` | Obtener producto por ID |
| POST | `/products` | Crear nuevo producto |
| PUT | `/products/:id` | Actualizar producto |
| DELETE | `/products/:id` | Eliminar producto |

### Documentación Interactiva
- **Swagger UI**: http://localhost:4000/api/docs

### Ejemplos de Uso

```bash
# Obtener todos los productos
curl http://localhost:4000/api/products

# Crear un producto
curl -X POST http://localhost:4000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Laptop Gaming",
    "price": 1200.50,
    "stock": 10,
    "category": "Electronics"
  }'

# Obtener producto por ID
curl http://localhost:4000/api/products/1

# Actualizar producto
curl -X PUT http://localhost:4000/api/products/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Laptop Gaming Pro",
    "price": 1500.00,
    "stock": 8,
    "category": "Electronics"
  }'

# Eliminar producto
curl -X DELETE http://localhost:4000/api/products/1
```

## 🧪 Testing

```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas con coverage
npm run test

# Ejecutar pruebas en modo watch
npm run test:watch
```

### Cobertura de Pruebas
- **Statements**: 100%
- **Branches**: 100%
- **Functions**: 100%
- **Lines**: 100%

## 🐳 Docker

### Servicios Disponibles

| Servicio | Puerto | Descripción |
|----------|--------|-------------|
| `backend` | 4000 | API Node.js |
| `db` | 5432 | PostgreSQL |
| `postgrest` | 3001 | API REST automática |

### Comandos Docker Útiles

```bash
# Reconstruir solo el backend
docker-compose up --build backend

# Ver logs en tiempo real
docker-compose logs -f backend

# Acceder al contenedor de la base de datos
docker-compose exec db psql -U postgres -d productdb

# Limpiar volúmenes
docker-compose down -v
```

## 📁 Estructura del Proyecto

```
finexus-api/
├── src/
│   ├── controllers/          # Controladores HTTP
│   │   └── product.controller.ts
│   ├── services/            # Lógica de negocio
│   │   ├── product.service.ts
│   │   └── __tests__/       # Pruebas unitarias
│   ├── repositories/        # Acceso a datos
│   │   └── product.repository.ts
│   ├── routes/             # Definición de rutas
│   │   └── product.routes.ts
│   ├── schemas/            # Validaciones Zod
│   │   └── product.schema.ts
│   ├── middlewares/        # Middlewares globales
│   │   └── errorHandler.ts
│   ├── prisma/            # Cliente Prisma
│   │   └── client.ts
│   ├── app.ts             # Configuración Express
│   ├── index.ts           # Punto de entrada
│   └── swagger.ts         # Configuración Swagger
├── prisma/
│   ├── migrations/        # Migraciones de BD
│   └── schema.prisma      # Esquema de base de datos
├── docker-compose.yml     # Orquestación de servicios
├── Dockerfile            # Imagen del backend
├── jest.config.cjs       # Configuración de pruebas
├── package.json          # Dependencias y scripts
└── README.md            # Este archivo
```

## 🔧 Decisiones Técnicas

### Arquitectura por Capas
- **Repository**: Acceso a datos con Prisma
- **Service**: Lógica de negocio
- **Controller**: Manejo de HTTP requests
- **Routes**: Definición de endpoints

### Validación
- **Zod** para validación de esquemas
- Validación tanto en runtime como en TypeScript

### Manejo de Errores
- Middleware global para captura de errores
- Status HTTP apropiados
- Mensajes de error en español

### Base de Datos
- **PostgreSQL** para robustez y escalabilidad
- **Prisma** como ORM para type-safety
- **PostgREST** para API automática adicional

### Testing
- **Jest** para pruebas unitarias
- Mocks para aislamiento de dependencias
- Coverage completo en servicios

## 🚀 Extensión de la Solución

### Agregar Nuevas Entidades

1. **Crear migración**:
```bash
npx prisma migrate dev --name add_new_entity
```

2. **Actualizar esquema** (`prisma/schema.prisma`):
```prisma
model NewEntity {
  id        Int      @id @default(autoincrement())
  name      String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

3. **Crear capas**:
```bash
# Schema de validación
touch src/schemas/new-entity.schema.ts

# Repository
touch src/repositories/new-entity.repository.ts

# Service
touch src/services/new-entity.service.ts

# Controller
touch src/controllers/new-entity.controller.ts

# Routes
touch src/routes/new-entity.routes.ts
```

4. **Integrar en app.ts**:
```typescript
import newEntityRoutes from './routes/new-entity.routes';
app.use('/api/new-entities', newEntityRoutes);
```

### Agregar Autenticación

1. **Instalar dependencias**:
```bash
npm install jsonwebtoken bcryptjs
npm install -D @types/jsonwebtoken @types/bcryptjs
```

2. **Crear middleware de autenticación**:
```typescript
// src/middlewares/auth.ts
export const authenticateToken = (req, res, next) => {
  // Lógica de autenticación
};
```

### Agregar Logging

```bash
npm install winston
```

```typescript
// src/utils/logger.ts
import winston from 'winston';

export const logger = winston.createLogger({
  // Configuración de logging
});
```

### Agregar Cache

```bash
npm install redis
```

```typescript
// src/services/cache.service.ts
export const cacheService = {
  // Implementación de cache
};
```

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

### Estándares de Código

- Usar **TypeScript** para tipado estático
- Seguir **arquitectura por capas**
- Escribir **pruebas unitarias** para servicios
- Documentar endpoints con **Swagger**
- Usar **conventional commits**

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 👥 Equipo

- **Desarrollador**: [Tu Nombre]
- **Proyecto**: FinExus API
- **Versión**: 1.0.0

---

## 🆘 Soporte

Si tienes problemas o preguntas:

1. Revisa la [documentación de Swagger](http://localhost:4000/api/docs)
2. Consulta los logs: `docker-compose logs backend`
3. Verifica que todos los servicios estén corriendo: `docker-compose ps`

---

**¡Happy coding! 🚀**
