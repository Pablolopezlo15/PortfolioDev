# 🚀 Pablo López Lozano - Portfolio

Portfolio personal de **Pablo López Lozano**, Desarrollador Full-Stack Junior. Sitio responsivo y moderno construido con **Next.js 16**, **React 19** y **TypeScript**, desplegado en **GitHub Pages**.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Desarrollo](#desarrollo)
- [Compilación](#compilación)
- [Despliegue](#despliegue)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contacto](#contacto)

## ✨ Características

- ✅ **Totalmente responsivo** - Optimizado para móvil, tablet y escritorio
- ✅ **Animaciones suaves** - Animaciones on-scroll con AOS (Animate On Scroll)
- ✅ **Modo oscuro/claro** - Soporte para tema claro y oscuro
- ✅ **Rendimiento optimizado** - Next.js 16 con Turbopack
- ✅ **Componentes modulares** - Interfaz limpia y reutilizable
- ✅ **Formulario de contacto** - Con validación y notificaciones
- ✅ **SEO-friendly** - Metadatos optimizados y estructura semántica

## 🛠️ Tecnologías

### Frontend
- **Next.js 16.1.6** - Framework React moderno
- **React 19.2.3** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Tailwind CSS 3.4.19** - Utilidades de estilo
- **Radix UI** - Componentes accesibles
- **React Hook Form** - Gestión de formularios
- **Zod** - Validación de esquemas TypeScript

### Animaciones & UX
- **AOS** - Animate On Scroll
- **Tailwind Animate** - Animaciones CSS
- **Sonner** - Notificaciones toast
- **Embla Carousel** - Carrusel responsivo

### Utilidades
- **Next Themes** - Gestión de temas
- **Recharts** - Gráficos y visualizaciones
- **Lucide React** - Iconografía
- **clsx** - Concatenación de clases CSS
- **date-fns** - Manipulación de fechas

## 📦 Instalación

### Requisitos previos
- Node.js 20 o superior
- pnpm 8 o superior

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/PortfolioDev.git
cd PortfolioDev
```

2. **Instalar dependencias**
```bash
pnpm install
```

## 🚀 Desarrollo

Inicia el servidor de desarrollo:

```bash
pnpm dev
```

La aplicación estará disponible en `http://localhost:3000`

### Características en desarrollo
- Hot Module Replacement (HMR) habilitado
- Sin basePath en desarrollo para mejor experiencia
- Sin compilación de tipos
- Compilación rápida con Turbopack

## 🔨 Compilación

Para construir el proyecto para producción (exportación estática):

```bash
pnpm build
```

Esto generará una carpeta `out/` con los archivos HTML estáticos listos para desplegar.

### Variables de compilación
- `NODE_ENV: production` - Modo producción
- `NEXT_PUBLIC_BASE_PATH: /portfolio` - Base path para GitHub Pages

## 🌐 Despliegue

El proyecto se despliega automáticamente en **GitHub Pages** mediante GitHub Actions.

### Workflows disponibles

#### 1. `deploy.yml`
- Se ejecuta en cada push a `main`
- Usa pnpm para instalar dependencias
- Compila con Next.js
- Despliega en GitHub Pages en `https://tu-usuario.github.io/portfolio/`

#### 2. `nextjs.yml`
- Workflow alternativo con detección automática de package manager
- Caching inteligente de dependencias
- Soporte para pnpm, yarn y npm

### Configuración de despliegue

**Archivo**: `next.config.mjs`
```javascript
{
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  trailingSlash: true
}
```

**Para habilitar GitHub Pages:**
1. Ve a Settings → Pages
2. Selecciona "Deploy from a branch"
3. Branch: `gh-pages`
4. Carpeta: `/ (root)`

## 📁 Estructura del Proyecto

```
PortfolioDev/
├── .github/workflows/          # Workflows de GitHub Actions
│   ├── deploy.yml             # Workflow principal de despliegue
│   └── nextjs.yml             # Workflow alternativo
├── app/
│   ├── layout.tsx             # Layout raíz
│   ├── page.tsx               # Página principal
│   └── globals.css            # Estilos globales
├── components/
│   ├── navigation.tsx         # Navegación principal
│   ├── hero.tsx              # Sección hero
│   ├── experience.tsx        # Experiencia laboral
│   ├── skills.tsx            # Habilidades técnicas
│   ├── projects.tsx          # Proyectos destacados
│   ├── education.tsx         # Educación
│   ├── contact.tsx           # Formulario de contacto
│   ├── footer.tsx            # Pie de página
│   ├── side-elements.tsx     # Elementos secundarios
│   ├── theme-provider.tsx    # Provider de temas
│   ├── AOSProvider.tsx       # Provider de AOS
│   └── ui/                   # Componentes UI reutilizables
├── public/
│   ├── favicon/              # Iconos del sitio
│   └── images/               # Imágenes del portfolio
├── styles/
│   └── globals.css           # Estilos globales adicionales
├── lib/
│   └── utils.ts              # Utilidades compartidas
├── hooks/
│   ├── use-mobile.tsx        # Hook para detectar móvil
│   └── use-toast.ts          # Hook para notificaciones
├── next.config.mjs           # Configuración de Next.js
├── tailwind.config.ts        # Configuración de Tailwind
├── tsconfig.json             # Configuración de TypeScript
├── postcss.config.mjs        # Configuración de PostCSS
├── package.json              # Dependencias del proyecto
└── pnpm-lock.yaml            # Lock file de pnpm
```

## 📝 Secciones del Portfolio

### 🎯 Hero
Sección de bienvenida con presentación e información inicial del desarrollador.

### 💼 Experiencia
Lista de experiencias laborales previas con detalles de roles y responsabilidades.

### 🛠️ Habilidades
Conjunto de habilidades técnicas organizadas por categorías (Frontend, Backend, Herramientas, etc.).

### 🚀 Proyectos
Proyectos destacados con descripción, tecnologías utilizadas y enlaces a repositorios.

### 🎓 Educación
Formación académica y certificaciones relevantes.

### 📬 Contacto
Formulario de contacto para comunicarse directamente.

## 🎨 Personalización

### Cambiar tema
La aplicación usa `next-themes` para soporte de modo oscuro. Edita `components/theme-provider.tsx`.

### Colores
Los colores se definen en `tailwind.config.ts`. Modifica la paleta según tus preferencias.

### Contenido
Edita los componentes en `components/` para actualizar el contenido del portfolio.

## 📊 Rendimiento

- ⚡ **Turbopack**: Compilación ultrarrápida en desarrollo
- 📦 **Static Export**: Exportación estática para máximo rendimiento
- 🎯 **Tree-shaking**: Eliminación automática de código no utilizado
- 🖼️ **Image Optimization**: Optimización de imágenes (aunque exportadas como estáticas)

## 🐛 Troubleshooting

### Error: "pnpm not found"
Asegúrate de tener pnpm instalado globalmente:
```bash
npm install -g pnpm
```

### Error: "basePath 404 en desarrollo"
Si obtienes errores 404 en desarrollo, verifica que `basePath` esté vacío. Esto se configura automáticamente según `NODE_ENV`.

### Build falla por tipos
Si el build falla por errores de TypeScript, puedes ignorarlos modificando `next.config.mjs`:
```javascript
typescript: {
  ignoreBuildErrors: true,
}
```

## 📄 Licencia

Este proyecto es personal. Siéntete libre de usarlo como referencia para tu propio portfolio.

## 👤 Autor

**Pablo López Lozano**
- Desarrollador Full-Stack Junior
- 📧 [Tu email aquí]
- 🔗 [Tu LinkedIn]
- 💻 [Tu GitHub]

---

**Desplegado en:** [https://tu-usuario.github.io/portfolio/](https://tu-usuario.github.io/portfolio/)

Hecho con ❤️ usando Next.js y React
