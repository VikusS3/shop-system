<div align="center">

# ◆ WebMarket

**Marketplace de Sistemas Web Premium, Productos SaaS y Servicios Digitales**

[![Astro](https://img.shields.io/badge/Astro-7.0-ff5e00?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Node](https://img.shields.io/badge/Node.js->=22.12-3c873a?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

[Caracteristicas](#caracteristicas) • [Stack Tecnologico](#stack-tecnologico) • [Estructura](#estructura-del-proyecto) • [Empezar](#empezar) • [Rutas](#rutas) • [Modelo de Datos](#modelo-de-datos) • [Despliegue](#despliegue)

</div>

WebMarket es un marketplace premium para descubrir sistemas web, productos SaaS y servicios digitales. Los compradores pueden explorar un catalogo curado, comparar productos y contactar directamente con los vendedores via WhatsApp.

## Caracteristicas

- **Catalogo Curado** — Coleccion de sistemas web y SaaS seleccionados por calidad e innovacion
- **Categorias Especializadas** — Sistemas Empresariales, IA, Marketing, Hosteleria, Educacion y mas
- **Contacto Directo** — Los compradores se conectan con vendedores via WhatsApp sin intermediarios
- **Paginas Estaticas** — Generacion de sitio estatico rapido con Astro para maxima velocidad
- **SEO Optimizado** — Schema.org JSON-LD, Open Graph, Twitter Cards, Sitemap automatico
- **Diseno Responsive** — Interfaz adaptable a todos los dispositivos con tipografia elegante
- **Analitica Incorporada** — Estadisticas en tiempo real de productos, vendedores y categorias

## Stack Tecnologico

| Tecnologia | Detalle |
|---|---|
| **Framework** | [Astro](https://astro.build) v7.0.2 (SSG) |
| **Lenguaje** | TypeScript estricto |
| **Estilos** | CSS nativo con propiedades personalizadas |
| **Fuentes** | Epilogue (titulos), DM Sans (cuerpo) |
| **SEO** | Schema.org JSON-LD, Open Graph, Twitter Cards |
| **Sitemap** | `@astrojs/sitemap` v3.7.3 |
| **Entorno** | Node >= 22.12.0, pnpm |

## Estructura del Proyecto

```
shop-system/
├── public/
│   ├── fonts/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── og-image.webp
│   └── robots.txt
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── HotProduct.astro
│   │   ├── Navbar.astro
│   │   ├── ProductCard.astro
│   │   ├── ProductImage.astro
│   │   ├── PublishSection.astro
│   │   └── Stats.astro
│   ├── data/
│   │   └── products.json
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   └── data.ts
│   └── pages/
│       ├── index.astro
│       ├── category/
│       │   └── [...category].astro
│       └── products/
│           └── [...slug].astro
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Empezar

### Requisitos

- Node.js >= 22.12.0
- pnpm

### Instalacion

```bash
pnpm install
pnpm dev
```

El servidor de desarrollo se iniciara en `http://localhost:4321`.

### Comandos

| Comando | Accion |
|---|---|
| `pnpm dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Compila el sitio para produccion en `./dist/` |
| `pnpm preview` | Previsualiza la compilacion de produccion localmente |
| `pnpm astro` | Ejecuta comandos CLI de Astro |

## Rutas

| Ruta | Pagina | Descripcion |
|---|---|---|
| `/` | Inicio | Hero, productos destacados, categorias, todos los productos, CTA para vendedores |
| `/category/[categoria]` | Categoria | Listado de productos filtrados por categoria con barra lateral |
| `/products/[slug]` | Producto | Detalle completo del producto, precio, vendedor, contacto WhatsApp, relacionados |

## Modelo de Datos

Los productos se almacenan en `src/data/products.json` con la siguiente estructura:

```typescript
interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: string;
  video?: string;
  seller: string;
  whatsapp: string;
  price: number;
  currency: 'USD' | 'EUR' | 'GBP' | 'PEN';
  category: string;
  type: 'Sistema' | 'SaaS';
  tags: string[];
  rating: number;
  featured: boolean;
  createdAt: string;
}
```

### Categorias Disponibles

| Categoria | Productos | Rango de Precios |
|---|---|---|
| Sistemas Empresariales | 8 | $18 - $499 |
| Herramientas de IA | 3 | $19 - $39 |
| Servicios Web | 4 | $12 - $39 |
| Hosteleria | 2 | $279 - $399 |
| Herramientas de Marketing | 3 | $24 - $49 |
| Educacion | 1 | $349 |
| Productividad | 1 | $22 |

### Funciones de ayuda (`src/lib/data.ts`)

| Funcion | Retorno | Descripcion |
|---|---|---|
| `getAllProducts()` | `Product[]` | Todos los productos |
| `getProductBySlug(slug)` | `Product \| undefined` | Producto por slug |
| `getFeaturedProducts()` | `Product[]` | Solo destacados |
| `getHotProduct()` | `Product \| undefined` | Producto mas reciente |
| `getCategories()` | `string[]` | Nombres de categorias |
| `getProductsByCategory(cat)` | `Product[]` | Filtro por categoria |
| `searchProducts(query)` | `Product[]` | Busqueda en nombre, descripcion, tags |
| `getStats()` | `object` | Totales de productos, vendedores, categorias, tipos |
| `getRelatedProducts(product, limit)` | `Product[]` | Productos relacionados |
| `formatPrice(price, currency)` | `string` | Formato de precio con simbolo |
| `getWhatsAppUrl(number, message)` | `string` | Genera enlace de WhatsApp |

## Diseno y Branding

### Paleta de Colores

| Token | Color | Uso |
|---|---|---|
| `--color-accent` | `#0d7377` | Color principal (teal) |
| `--color-highlight` | `#d4a373` | Acento secundario (oro) |
| `--color-badge` | `#c75b39` | Insignias y etiquetas |
| `--color-text-primary` | `#1a1a2e` | Texto principal |
| `--color-text-secondary` | `#6b6560` | Texto secundario |

### Componentes

| Componente | Proposito |
|---|---|
| `Navbar` | Navegacion sticky con menu de categorias desplegable y CTA |
| `Hero` | Banner principal con titulo, descripcion y botones CTA |
| `HotProduct` | Seccion de "Sistema de la Semana" |
| `Stats` | Barra de estadisticas (productos, vendedores, categorias, tipos) |
| `ProductCard` | Tarjeta reutilizable para grilla de productos |
| `ProductImage` | Imagen con fallback gradiente |
| `PublishSection` | Seccion CTA para vendedores |
| `Footer` | Pie de pagina multi-columna |

## Despliegue

El sitio se compila a HTML estatico con Astro:

```bash
pnpm build
```

El resultado se genera en `./dist/` y puede desplegarse en cualquier servidor estatico (Vercel, Netlify, Cloudflare Pages, etc.).

La configuracion del sitio se encuentra en `astro.config.mjs`:

```js
site: 'https://webmarket.com',
```

> [!NOTE]
> Asegurate de actualizar la URL del sitio en `astro.config.mjs` antes de desplegar a produccion.

## SEO y Metadatos

- Schema.org JSON-LD: Organization, WebSite, Product, BreadcrumbList, CollectionPage
- Open Graph y Twitter Cards en todas las paginas
- Sitemap generado automaticamente con `@astrojs/sitemap`
- `robots.txt` permite indexacion completa (excepto `/api/` y `/admin/`)
- URLs canonicas en todas las paginas

## Contacto

**Para compradores:** Contacta a los vendedores directamente via WhatsApp desde cada pagina de producto.

**Para vendedores:** Si quieres publicar tu sistema en WebMarket, contactanos por WhatsApp.

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=flat-square&logo=whatsapp&logoColor=white)](https://wa.me/51906492166)

---

<div align="center">
  <sub>Hecho con ◆ por WebMarket</sub>
</div>
