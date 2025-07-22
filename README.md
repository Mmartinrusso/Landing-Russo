# MiTienda - E-commerce React

Este es un proyecto de e-commerce desarrollado con React como parte de la entrega 1 del curso.

## Componentes Creados

### 1. NavBar
- Barra de navegación principal
- Incluye logo de la tienda ("MiTienda")
- Enlaces de navegación: Inicio, Productos, Categorías, Contacto
- Integra el componente CartWidget

### 2. CartWidget
- Widget del carrito de compras
- Muestra un ícono de carrito con contador
- Ubicado en la barra de navegación

### 3. ItemListContainer
- Contenedor principal que mostrará el catálogo de productos
- Utiliza props para recibir un mensaje de bienvenida personalizado
- Incluye placeholders para futuros productos

## Estructura de Archivos

```
src/
├── components/
│   ├── NavBar.js
│   ├── NavBar.css
│   ├── CartWidget.js
│   ├── CartWidget.css
│   ├── ItemListContainer.js
│   └── ItemListContainer.css
├── App.js
├── App.css
└── index.js
```

## Características Implementadas

- ✅ Componentes funcionales de React
- ✅ Uso de props para comunicación entre componentes
- ✅ Estilos CSS personalizados
- ✅ Diseño responsive
- ✅ Integración de Font Awesome para íconos
- ✅ Estructura modular y organizada

## Cómo Ejecutar el Proyecto

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm start
```

3. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## Tecnologías Utilizadas

- React 18
- CSS3
- Font Awesome (íconos)
- HTML5

## Próximos Pasos

- Implementar catálogo de productos
- Agregar funcionalidad al carrito de compras
- Integrar sistema de categorías
- Implementar filtros de búsqueda
