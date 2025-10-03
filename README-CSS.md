# Dashboard de Abogados - Sin Tailwind CSS

## 🎨 Implementación con CSS Puro

Este proyecto ha sido convertido para usar **CSS puro** en lugar de Tailwind CSS, siguiendo las mejores prácticas de organización de estilos.

## 📁 Estructura del Proyecto

```
prueba-tecnica/
├── src/
│   ├── components/
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.jsx
│   │   │   └── Sidebar.css          ✅ Estilos del Sidebar
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css           ✅ Estilos del Header
│   │   ├── StatsCards/
│   │   │   ├── StatsCards.jsx
│   │   │   └── StatsCards.css       ✅ Estilos de las tarjetas
│   │   ├── TasksTable/
│   │   │   ├── TasksTable.jsx
│   │   │   └── TasksTable.css       ✅ Estilos de la tabla
│   │   ├── CalendarWidget/
│   │   │   ├── CalendarWidget.jsx
│   │   │   └── CalendarWidget.css   ✅ Estilos del calendario
│   │   └── RecentFiles/
│   │       ├── RecentFiles.jsx
│   │       └── RecentFiles.css      ✅ Estilos de archivos
│   ├── data/
│   │   └── dashboardData.json
│   ├── page/
│   │   └── dashboard/
│   │       ├── dashboard.jsx
│   │       └── dashboard.css        ✅ Estilos del dashboard
│   ├── App.js
│   ├── index.js
│   └── index.css                    ✅ Estilos globales + variables CSS
├── package.json
└── postcss.config.js
```

## 🚀 Comandos

### Desinstalar Tailwind CSS (si aún está instalado)
```bash
npm uninstall tailwindcss autoprefixer postcss
```

### Iniciar el proyecto
```bash
npm start
```

### Compilar para producción
```bash
npm run build
```

## 🎨 Características de los estilos

### Variables CSS Globales (index.css)
Todas las variables de color están definidas en `:root`:
- `--color-primary`
- `--color-gray-*` (50, 100, 200, ..., 900)
- `--color-blue-*`
- `--color-red-*`
- `--color-slate-*`
- `--color-amber-*`

### Organización de CSS
Cada componente tiene su propio archivo CSS con:
- ✅ Nombres de clases descriptivos con prefijo del componente
- ✅ Variables CSS para colores consistentes
- ✅ Estilos responsive
- ✅ Transiciones suaves
- ✅ Hover states

## 📦 Dependencias

El proyecto ahora solo necesita:
- **React**: Framework principal
- **lucide-react**: Librería de iconos
- **react-scripts**: Configuración de Create React App

## ✨ Ventajas de usar CSS Puro

1. **Sin dependencias extras**: No necesitas Tailwind CSS ni PostCSS
2. **Más ligero**: El bundle final es más pequeño
3. **CSS personalizado**: Control total sobre los estilos
4. **Mejor rendimiento**: Sin procesamiento de Tailwind en tiempo de compilación
5. **Fácil de mantener**: Un archivo CSS por componente

## 🎯 Componentes y sus estilos

### 1. Sidebar (Sidebar.css)
- Menú lateral con gradiente
- Estados hover y activo
- Iconos personalizados

### 2. Header (Header.css)
- Barra de búsqueda con icono
- Notificaciones y usuario
- Diseño flexible

### 3. StatsCards (StatsCards.css)
- Grid de 3 columnas
- Tarjetas con iconos
- Botón de acción

### 4. TasksTable (TasksTable.css)
- Tabla con scroll
- Headers sticky
- Estados hover en filas

### 5. CalendarWidget (CalendarWidget.css)
- Widget compacto
- Eventos con colores
- Botón personalizado

### 6. RecentFiles (RecentFiles.css)
- Lista de archivos
- Iconos de acción
- Hover effects

### 7. Dashboard (dashboard.css)
- Layout principal
- Grid responsive
- Banner con gradiente

## 🔧 Solución de problemas

Si el proyecto no inicia correctamente:

1. **Limpiar cache**:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

2. **Verificar que no esté instalado Tailwind**:
```bash
npm list tailwindcss
```
Si aparece, desinstálalo:
```bash
npm uninstall tailwindcss
```

3. **Reiniciar el servidor**:
```bash
npm start
```

## 📝 Modificar estilos

Para cambiar colores o estilos:

1. **Colores globales**: Edita las variables en `src/index.css`
2. **Estilos de componente**: Edita el archivo `.css` correspondiente
3. **Layout**: Edita `src/page/dashboard/dashboard.css`

## 🌈 Paleta de colores

- **Primary Blue**: `#2563eb`
- **Gray Scale**: `#f9fafb` a `#111827`
- **Slate**: `#334155` a `#0f172a`
- **Amber**: `#d97706`
- **Red**: `#fee2e2` (fondo) / `#b91c1c` (texto)

## 👨‍💻 Estructura de clases CSS

Cada componente usa un prefijo para evitar conflictos:
- `.sidebar-*`
- `.header-*`
- `.stat-card-*`
- `.tasks-table-*`
- `.calendar-*`
- `.recent-file-*`
- `.dashboard-*`

## ✅ Todo listo

El proyecto está completamente funcional con CSS puro. Ejecuta `npm start` y disfruta de tu dashboard sin dependencias de Tailwind CSS.
