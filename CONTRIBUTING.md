# 🤝 Guía de Contribución - FinExus API

¡Gracias por tu interés en contribuir a FinExus API! Este documento te guiará a través del proceso de contribución.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [Cómo Contribuir](#cómo-contribuir)
- [Configuración del Entorno](#configuración-del-entorno)
- [Estándares de Código](#estándares-de-código)
- [Proceso de Pull Request](#proceso-de-pull-request)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Mejoras](#sugerir-mejoras)

## 🤝 Código de Conducta

Este proyecto y todos los participantes están gobernados por nuestro Código de Conducta. Al participar, se espera que mantengas este código.

## 🚀 Cómo Contribuir

### Tipos de Contribuciones

1. **🐛 Reportar Bugs**
2. **✨ Sugerir Mejoras**
3. **📝 Mejorar Documentación**
4. **🔧 Contribuir Código**

### Configuración del Entorno

#### 1. Fork y Clone
```bash
# Fork el repositorio en GitHub
# Luego clona tu fork
git clone https://github.com/TU_USUARIO/api-finexus.git
cd api-finexus

# Agregar el repositorio original como upstream
git remote add upstream https://github.com/ravelojhon/api-finexus.git
```

#### 2. Instalar Dependencias
```bash
# Con Docker (Recomendado)
docker-compose up --build

# O desarrollo local
npm install
npx prisma generate
npx prisma migrate dev
```

#### 3. Crear Rama de Feature
```bash
git checkout -b feature/nombre-de-tu-feature
```

## 📝 Estándares de Código

### Convenciones de Git

#### Conventional Commits
Usamos [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Estructura
<tipo>[scope opcional]: <descripción>

# Tipos válidos
feat: nueva funcionalidad
fix: corrección de bug
docs: cambios en documentación
style: cambios de formato (espacios, etc.)
refactor: refactorización de código
test: agregar o modificar tests
chore: cambios en build, dependencias, etc.

# Ejemplos
feat(auth): add JWT authentication
fix(products): resolve validation error
docs(readme): update installation instructions
test(services): add unit tests for user service
```

#### Naming de Ramas
```bash
# Formato
<tipo>/<descripción>

# Tipos
feature/    # Nuevas funcionalidades
bugfix/     # Corrección de bugs
hotfix/     # Fixes críticos
docs/       # Documentación
test/       # Tests
chore/      # Tareas de mantenimiento

# Ejemplos
feature/user-authentication
bugfix/product-validation-error
docs/api-documentation-update
```

### Estándares de TypeScript

#### Configuración
- Usar **TypeScript estricto**
- Preferir **interfaces** sobre types cuando sea posible
- Usar **tipos explícitos** en funciones públicas
- Evitar `any`, usar tipos específicos

#### Ejemplo de Código
```typescript
// ✅ Bueno
interface ProductInput {
  name: string;
  price: number;
  stock: number;
  category?: string;
}

export const productService = {
  create: async (data: ProductInput): Promise<Product> => {
    return await productRepository.create(data);
  }
};

// ❌ Evitar
export const productService = {
  create: async (data: any): Promise<any> => {
    return await productRepository.create(data);
  }
};
```

### Estándares de Testing

#### Cobertura Requerida
- **Servicios**: 100% de cobertura
- **Controladores**: Tests de integración
- **Repositorios**: Tests con base de datos de prueba

#### Estructura de Tests
```typescript
describe("productService (unit)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debería crear un producto exitosamente", async () => {
    // Arrange
    const productData = { name: "Test", price: 10, stock: 1 };
    mockedRepository.create.mockResolvedValue(mockProduct);

    // Act
    const result = await productService.create(productData);

    // Assert
    expect(result).toEqual(mockProduct);
    expect(mockedRepository.create).toHaveBeenCalledWith(productData);
  });
});
```

### Estándares de Documentación

#### Swagger/OpenAPI
- Documentar todos los endpoints
- Incluir ejemplos de request/response
- Especificar códigos de estado HTTP
- Documentar esquemas de validación

#### README
- Mantener instrucciones actualizadas
- Incluir ejemplos de uso
- Documentar cambios importantes

## 🔄 Proceso de Pull Request

### 1. Preparar tu Contribución

```bash
# Asegurar que estás en la rama correcta
git checkout feature/tu-feature

# Agregar tus cambios
git add .
git commit -m "feat(auth): add JWT authentication middleware"

# Push a tu fork
git push origin feature/tu-feature
```

### 2. Crear Pull Request

1. Ve a tu fork en GitHub
2. Haz click en "New Pull Request"
3. Completa la plantilla del PR
4. Asigna reviewers apropiados

### 3. Plantilla de Pull Request

```markdown
## 📝 Descripción
Breve descripción de los cambios realizados.

## 🔗 Tipo de Cambio
- [ ] Bug fix
- [ ] Nueva funcionalidad
- [ ] Breaking change
- [ ] Documentación

## 🧪 Testing
- [ ] Tests unitarios agregados/actualizados
- [ ] Tests de integración ejecutados
- [ ] Cobertura de tests mantenida

## 📚 Documentación
- [ ] README actualizado
- [ ] Documentación de API actualizada
- [ ] Comentarios en código agregados

## ✅ Checklist
- [ ] Código sigue los estándares del proyecto
- [ ] Self-review completado
- [ ] Tests pasan localmente
- [ ] Documentación actualizada
```

## 🐛 Reportar Bugs

### Usar el Template de Issues

```markdown
**Descripción del Bug**
Descripción clara y concisa del problema.

**Pasos para Reproducir**
1. Ve a '...'
2. Click en '...'
3. Scroll hasta '...'
4. Ver error

**Comportamiento Esperado**
Qué esperabas que pasara.

**Screenshots**
Si aplica, agregar screenshots.

**Información del Entorno**
- OS: [ej. Windows 10]
- Node.js: [ej. 18.17.0]
- Docker: [ej. 24.0.0]

**Logs Adicionales**
```
Pegar logs relevantes aquí
```
```

## 💡 Sugerir Mejoras

### Usar el Template de Feature Request

```markdown
**¿Es tu feature request relacionada a un problema?**
Descripción del problema.

**Describe la solución que te gustaría**
Descripción clara de lo que quieres que pase.

**Describe alternativas consideradas**
Otras soluciones o features que consideraste.

**Contexto Adicional**
Cualquier otro contexto sobre la feature request.
```

## 🔍 Code Review

### Para Reviewers

#### Checklist de Review
- [ ] Código sigue los estándares
- [ ] Tests apropiados incluidos
- [ ] Documentación actualizada
- [ ] Performance considerada
- [ ] Seguridad verificada
- [ ] Breaking changes documentados

#### Comentarios Constructivos
```markdown
# ✅ Buenos comentarios
"Considera usar async/await en lugar de .then() para mejor legibilidad"

"Este método podría beneficiarse de validación adicional"

# ❌ Evitar
"Esto está mal"

"Cambia esto"
```

### Para Contributors

#### Responder a Reviews
- Responde a todos los comentarios
- Haz commits adicionales si es necesario
- Pide clarificación si no entiendes algo
- Mantén una actitud positiva y constructiva

## 📚 Recursos Adicionales

### Documentación
- [Conventional Commits](https://www.conventionalcommits.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Jest Testing](https://jestjs.io/docs/getting-started)
- [Prisma Documentation](https://www.prisma.io/docs/)

### Herramientas
- [Prettier](https://prettier.io/) - Formateo de código
- [ESLint](https://eslint.org/) - Linting de JavaScript/TypeScript
- [Husky](https://typicode.github.io/husky/) - Git hooks

## 🎉 Reconocimiento

Todos los contributors serán reconocidos en:
- README.md del proyecto
- Changelog.md
- Releases de GitHub

---

**¡Gracias por contribuir a FinExus API! 🚀**
