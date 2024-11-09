# Frontend Catálogo de Productos - Empresa de Manufactura

Este proyecto es una aplicación web frontend desarrollada en React para la visualización y navegación de un catálogo de productos de una empresa de manufactura. Esta aplicación se conecta a una API backend que gestiona productos, fabricantes y componentes.

## Tabla de Contenidos
- [Descripción del Proyecto](#descripción-del-proyecto)
- [Características Principales](#características-principales)
- [Instalación y Configuración](#instalación-y-configuración)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Rutas Disponibles](#rutas-disponibles)
- [Uso](#uso)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Autor(es)](#autores)

## Descripción del Proyecto
Esta aplicación permite a los usuarios navegar a través de un catálogo de productos, visualizar detalles específicos de cada producto, y obtener información de fabricantes y componentes asociados. La app ha sido desarrollada con un diseño visualmente atractivo, enfocado en la presentación de información y la navegación sin modificar los datos del backend.

## Características Principales
- **Página de Inicio**: Incluye una presentación de la empresa, historia, filosofía, información de contacto, videos y un mapa interactivo de la ubicación de la empresa.
- **Catálogo de Productos**: Lista de productos disponibles, con imagen, nombre, descripción y precio en cada tarjeta. Cada tarjeta permite hacer clic para ver detalles.
- **Detalles del Producto**: Información completa de un producto específico, incluyendo descripción, precio, componentes y fabricantes.
- **Fabricantes y Componentes**: Página dedicada a la visualización de la lista completa de fabricantes y componentes, accesible desde la página principal.

## Instalación y Configuración
Sigue estos pasos para ejecutar el proyecto en tu máquina local.

### Pre-requisitos
- Node.js (v14 o superior)
- Backend API de gestión de productos disponible localmente en `http://localhost:5000`

### Instalación
Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/nombre-del-repositorio.git
cd nombre-del-repositorio
```

Instala las dependencias del proyecto:
```bash
npm install
```

Inicia la aplicación en modo de desarrollo:
```bash
npm start
```
La aplicación debería estar disponible en `http://localhost:3000`.

### Configuración del Backend (cors)
Si estás utilizando el backend proporcionado, asegúrate de habilitar cors en el backend para permitir que el frontend acceda a sus recursos:

Navega a la carpeta del backend y asegúrate de instalar las dependencias:
```bash
npm install
```

Inicia el backend:
```bash
npm run dev
```

## Estructura del Proyecto
```plaintext
.
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── Producto.js
│   │   └── Listado.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Catalogo.js
│   │   └── Detalle.js
│   ├── App.js
│   ├── App.css
├── public/
│   ├── index.html
│   └── images/
├── README.md
└── package.json
```

## Rutas Disponibles
- `/`: Página de inicio con la presentación de la empresa.
- `/catalogo`: Catálogo de productos con la lista de productos disponibles.
- `/productos/:id`: Página de detalles de un producto específico.
- `/fabricantes`: Página con la lista de fabricantes y componentes.

## Uso
- **Navegación**: Utiliza el menú superior para navegar entre las páginas.
- **Catálogo**: En la página de catálogo, selecciona cualquier producto para ver sus detalles.
- **Fabricantes y Componentes**: Explora la lista de fabricantes y componentes desde la sección correspondiente en el menú.

## Tecnologías Utilizadas
- **Frontend**: React, react-router-dom, axios
- **Estilos**: Bootstrap, CSS
- **Backend**: API proporcionada en el repositorio de CIU-UnaHur

## Autor(es)
- Nombre del Integrante 1
- Nombre del Integrante 2
- Nombre del Integrante 3
- Nombre del Integrante 4