# TheCodePapers

Blog personal minimalista construido con **Astro 5** y **Markdown**, desplegado en GitHub Pages.

## Tecnologías

- [Astro 5](https://astro.build) — Framework web moderno para sitios estáticos
- [TypeScript](https://www.typescriptlang.org) — Tipado estático
- [Markdown](https://daringfireball.net/projects/markdown/) — Contenido de las publicaciones
- GitHub Pages + GitHub Actions — Despliegue automático

## Comandos

| Comando | Acción |
|---------|--------|
| `npm install` | Instala dependencias |
| `npm run dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build` | Genera build de producción en `./dist/` |
| `npm run preview` | Previsualiza el build localmente |
| `npm run astro ...` | Comandos CLI de Astro |

## Estructura del proyecto

```text
/
├── public/
├── src/
│   ├── components/      # Componentes reutilizables (Header, Footer, PostCard, ThemeToggle)
│   ├── content/
│   │   └── blog/        # Publicaciones en Markdown
│   ├── layouts/         # Layouts base (BaseLayout, BlogPostLayout)
│   ├── pages/           # Páginas y rutas
│   │   ├── index.astro  # Listado de publicaciones
│   │   └── blog/        # Rutas dinámicas de publicaciones
│   │       └── [slug].astro
│   ├── styles/          # Estilos globales CSS
│   └── content.config.ts # Configuración de colecciones de contenido
├── astro.config.mjs     # Configuración de Astro (site, base)
├── package.json
├── tsconfig.json
└── README.md
```

## Crear una nueva publicación

1. Crea un archivo `.md` en `src/content/blog/`
2. Añade el frontmatter requerido (ver esquema abajo)
3. Escribe el contenido en Markdown
4. El sitio se regenera automáticamente al hacer push a `main`

### Esquema de frontmatter

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `title` | `string` | Sí | Título de la publicación |
| `description` | `string` | No | Descripción breve / extracto |
| `pubDate` | `date` | Sí | Fecha de publicación (YYYY-MM-DD) |
| `updatedDate` | `date` | No | Fecha de última modificación editorial |
| `author` | `string` | Sí | Autor |
| `tags` | `string[]` | No | Etiquetas (por defecto: `[]`) |

**Notas:**
- El `slug` de la URL se deriva automáticamente del nombre del archivo (sin la extensión `.md`)
- Si no se proporciona `updatedDate`, se usa `pubDate` como fecha de última modificación
- Las fechas deben usar formato ISO: `YYYY-MM-DD`
- El contenido Markdown soporta: encabezados, párrafos, negritas, cursivas, listas, enlaces, imágenes, citas, bloques de código, código inline, tablas y separadores horizontales

### Plantilla de publicación

```markdown
---
title: "Título de la publicación"
description: "Breve descripción o extracto que aparecerá en el listado."
pubDate: 2026-11-24
updatedDate: 2026-11-24
author: "Andy"
tags:
  - Development
  - Programming
  - Markdown
---

# Título de la publicación

Contenido en Markdown...

## Sección

Más contenido...

```typescript
const code = "example";
console.log(code);
```
```

## Temas (Light / Dark Mode)

- Detección automática de la preferencia del sistema (`prefers-color-scheme`)
- Control manual visible en la cabecera
- Preferencia guardada en `localStorage`
- Sin destello de tema incorrecto al cargar (script inline en `<head>`)

### Paleta Light Mode
- Fondo: `#F9F7F7`
- Superficies: `#DBE2EF`
- Acentos/Enlaces: `#3F72AF`
- Texto: `#112D4E`

### Paleta Dark Mode
- Fondo: `#071B2B`
- Acentos/Detalles: `#167D8D`
- Enlaces/Secundarios: `#B9E4E8`
- Texto: `#EEEEEE`

## Despliegue

El sitio se despliega automáticamente en GitHub Pages al hacer push a la rama `main`.

URL de producción: `https://andytechnologies.github.io/TheCodePapers/`

El workflow (`.github/workflows/deploy.yml`) usa las acciones oficiales de Astro y GitHub Pages con versiones fijadas por SHA.

## Configuración de Astro para GitHub Pages

```js
// astro.config.mjs
export default defineConfig({
  site: 'https://andytechnologies.github.io',
  base: '/TheCodePapers',
});
```

Todos los enlaces internos y recursos usan `import.meta.env.BASE_URL` para funcionar correctamente bajo el prefijo `/TheCodePapers/`.