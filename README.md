# Portfolio de Rubén Pérez

Portfolio profesional desarrollado con Astro, Tailwind CSS 4, Bootstrap Grid, GSAP, ScrollTrigger y Lenis.

## Requisitos

- Node.js `22.23.4` o superior
- npm

## Desarrollo

```sh
npm install
npm run dev
```

Astro sirve el sitio en `http://localhost:4321`.

## Producción

```sh
npm run build
npm run preview
```

La salida estática se genera en `dist/`.

## Estructura

- `src/pages/`: Inicio, Servicios, Proyectos, Sobre mí y Contacto.
- `src/layouts/BaseLayout.astro`: metadatos, fuentes y estilos compartidos.
- `src/components/`: navegación, formulario, introducciones y tarjeta reutilizable.
- `src/scripts/animations.ts`: Lenis, GSAP y reveals con ScrollTrigger.
- `src/styles/`: tokens Tailwind, Bootstrap Grid y estilos del sitio.

## Antes de publicar

- Cambia los proyectos conceptuales y sus imágenes por trabajos propios.
- Reemplaza `cambia-este-correo@example.com` en `src/components/ContactForm.astro` por tu correo. El formulario prepara un mensaje en la aplicación de correo del visitante; para recibir envíos directamente en el sitio, conecta un proveedor de formularios o un endpoint propio.
- Añade tus datos personales y, cuando esté lista, la PDF de tarifas a la página Servicios.
