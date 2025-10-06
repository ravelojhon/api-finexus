# 🚀 Guía de Inicio Rápido - FinExus API

## ⚡ Inicio en 5 Minutos

### Prerrequisitos
- Docker y Docker Compose instalados
- Git instalado

### Pasos Rápidos

```bash
# 1. Clonar el proyecto
git clone https://github.com/ravelojhon/api-finexus.git
cd api-finexus

# 2. Levantar todo con Docker
docker-compose up --build

# 3. ¡Listo! La API está funcionando
# - API: http://localhost:4000/api
# - Documentación: http://localhost:4000/api/docs
# - Base de datos: localhost:5432
```

## 🧪 Probar la API

### Crear un producto
```bash
curl -X POST http://localhost:4000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Laptop Gaming",
    "price": 1200.50,
    "stock": 10,
    "category": "Electronics"
  }'
```

### Obtener todos los productos
```bash
curl http://localhost:4000/api/products
```

### Ver documentación
Abrir en el navegador: http://localhost:4000/api/docs

## 🔧 Comandos Útiles

```bash
# Ver logs de la API
docker-compose logs backend

# Reiniciar solo el backend
docker-compose restart backend

# Detener todos los servicios
docker-compose down

# Ver estado de servicios
docker-compose ps
```

## 🆘 Problemas Comunes

### Puerto 4000 ocupado
```bash
# Cambiar puerto en docker-compose.yml
ports:
  - "4001:4000"  # Usar puerto 4001
```

### Error de base de datos
```bash
# Limpiar y volver a crear
docker-compose down -v
docker-compose up --build
```

### Error de build
```bash
# Limpiar cache de Docker
docker system prune -f
docker-compose up --build --no-cache
```

---

**¡En menos de 5 minutos tienes la API funcionando! 🎉**
