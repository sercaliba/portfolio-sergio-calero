# Portfolio de Sergio Calero Ibáñez

Portfolio profesional de Marketing y Publicidad preparado para GitHub Pages.

## Arquitectura

La web separa la presentación profesional de los casos de estudio:

```text
.
|-- index.html
|-- styles.css
|-- script.js
|-- .nojekyll
|-- projects/
|   `-- analisis-oportunidades-digitales.html
`-- assets/
    |-- marketing-hero.png
    |-- cv-sergio-calero.pdf
    `-- placeholders/
```

`index.html` funciona como portada del portfolio. Presenta el perfil, los proyectos, las áreas de marketing aplicado, el método, la experiencia y el contacto.

Cada caso vive en `projects/` y puede tener su propia narrativa, navegación y SEO. Esta estructura permite añadir nuevos proyectos sin hacer crecer indefinidamente la portada.

## Proyecto incluido

El primer proyecto es un caso independiente de análisis digital aplicado a una escuela de formación anonimizada:

1. Auditoría digital integral.
2. Rediseño conceptual de una landing orientada a captación.
3. Sistema de contenidos de 30 días con Metricool e IA.

No se atribuye una relación profesional con la empresa analizada ni se presentan resultados ficticios.

## Ver en local

Puede abrirse `index.html` directamente o servirse desde la carpeta raíz:

```bash
python -m http.server 5500
```

Después, abre `http://localhost:5500`.

## Publicar en GitHub Pages

1. Sube los archivos a un repositorio de GitHub.
2. Abre `Settings` > `Pages`.
3. En `Build and deployment`, selecciona `Deploy from a branch`.
4. Elige la rama principal y la carpeta `/root`.
5. Guarda la configuración.

## Antes de publicar

- Sustituir `tu-email@ejemplo.com` por el email profesional.
- Reemplazar `assets/cv-sergio-calero.pdf` por el CV definitivo.
- Añadir la URL canónica cuando se conozca la dirección final.
- Incorporar las evidencias SEO reales y anonimizadas en los espacios preparados.
