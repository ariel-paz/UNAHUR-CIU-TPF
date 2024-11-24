
# Frontend Catálogo de Productos - Empresa de Manufactura

Este proyecto es una aplicación web frontend desarrollada en React para la visualización y navegación de un catálogo de productos de una empresa de manufactura. La aplicación se conecta a una API backend que gestiona productos, fabricantes y componentes.

## Tabla de Contenidos
- [Descripción del Proyecto](#descripción-del-proyecto)
- [Características Principales](#características-principales)
- [Instalación y Configuración](#instalación-y-configuración)
  - [Instalación del Frontend](#instalación-del-frontend)
  - [Instalación del Backend](#instalación-del-backend)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Rutas Disponibles](#rutas-disponibles)
- [Uso](#uso)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Autor(es)](#autores)

## Descripción del Proyecto
Esta aplicación permite a los usuarios navegar a través de un catálogo de productos, visualizar detalles específicos de cada producto y obtener información sobre fabricantes y componentes asociados. El diseño se centra en una experiencia visualmente atractiva, facilitando la navegación y presentación de información.

## Características Principales
- **Página de Inicio**: Presentación de la empresa con historia, filosofía, información de contacto, videos y mapa interactivo.
- **Catálogo de Productos**: Lista interactiva de productos con imágenes, descripciones y precios.
- **Detalles del Producto**: Información completa de cada producto, incluyendo componentes y fabricantes asociados.
- **Detalles del Componente**: Información completa de cada componente.
- **Detalles del Fabricante**: Información completa de cada fabricantes.
- **Fabricantes y Componentes**: Páginas dedicadas a explorar fabricantes y componentes disponibles.

## Instalación y Configuración

### Instalación del Frontend
1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/ariel-paz/UNAHUR-CIU-TPF.git
   cd UNAHUR-CIU-TPF
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Accede a la aplicación en [http://localhost:5173](http://localhost:5173).

### Instalación del Backend
1. **Clona el repositorio del backend**:
   ```bash
   git clone https://github.com/MaxiGomez5431/api-sqlite-productos.git
   cd api-sqlite-productos
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Configura CORS (si es necesario)**: Verifica que el backend permita el acceso del frontend.

4. **Inicia el backend**:
   ```bash
   npm run dev
   ```
   La API estará disponible en [http://localhost:5000](http://localhost:5000).

## Estructura del Proyecto
```plaintext
├── public/
│   └── images/
├── src/
│   ├──  components/ 
│   │   ├── CarritoContext.jsx
│   │   ├── CarritoHeader.jsx 
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── DetalleItem.jsx
│   │   ├── Elemento.jsx
│   │   ├── CatalogoElementos.jsx 
│   │   ├── SectionContainer.jsx
│   │   ├── Separacion.jsx 
│   │   └── useCarrito.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── FabricantesComponentes.jsx 
│   │   ├── DetalleProducto.jsx
│   │   ├── DetalleFabricante.jsx
│   │   ├── DetalleComponente.jsx 
│   │   └── Carrito.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── src_config_api.js
│   └── main.js
├── index.html
├── README.md
└── package.json
```

## Rutas Disponibles
- `/`: Página de inicio con la presentación de la empresa.
- `/catalogo`: Catálogo de productos con la lista de productos disponibles.
- `/carrito`: Pagina de carrito.
- `/productos/:id`: Detalles de un producto específico.
- `/fabricantes`: Lista de fabricantes y componentes.
- `/fabricantes/:id`: Detalles de un fabricantes específico.
- `/componentes/:id`: Detalles de un componente específico.

## Uso
- **Navegación**: Usa el menú superior para moverte entre páginas.
- **Exploración de Productos**: En el catálogo, selecciona un producto para ver sus detalles.
- **Fabricantes y Componentes**: Explora esta sección desde el menú principal.

## Tecnologías Utilizadas
- **Frontend**: React, React Router DOM.
- **Estilos**: Tailwind CSS.
- **Backend**: Node.js con SQLite (Repositorio: [api-sqlite-productos](https://github.com/MaxiGomez5431/api-sqlite-productos)).

## Autor(es)
- Maximiliano Tomás Gomez
- Alexis Paulino Chebeste
- Ariel Paz
