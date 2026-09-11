# Web académica de Cristian Navarro

Código fuente de <https://cristian-navarro.com>, una web académica construida
con Jekyll y publicada mediante GitHub Pages.

## Publicación

El flujo de trabajo utiliza GitHub Pages como entorno de construcción, por lo
que no requiere una instalación local de Ruby, Bundler o Jekyll:

```sh
git add -A
git commit -m "Descripción del cambio"
git push origin main
```

Cada actualización de `main` inicia una nueva publicación. El estado del
proceso puede consultarse en la pestaña **Actions** del repositorio. Una vez
terminado, conviene recargar la web sin caché para comprobar la versión nueva.

La carpeta generada `_site/`, las credenciales y los tokens privados no deben
incluirse en el repositorio.

## Crear una web a partir de este repositorio

El repositorio puede bifurcarse en GitHub o clonarse directamente:

```sh
git clone https://github.com/cnavarroserrano/cnavarroserrano.github.io.git
```

Para adaptar una copia:

1. Sustituir el título, la descripción, la URL y los datos del autor en
   `_config.yml`.
2. Actualizar la fotografía, el nombre, el correo y la navegación en
   `_includes/sidebar.html`.
3. Reemplazar el contenido académico en `index.md` y los archivos de
   `papers/`, `photos/` y `resume/`.
4. Eliminar `CNAME` si no se utiliza un dominio propio, o sustituir su
   contenido por el dominio correspondiente.
5. Activar GitHub Pages desde **Settings → Pages**, publicando la rama `main`
   desde la raíz del repositorio.

Para una web de usuario en GitHub Pages, el repositorio suele llamarse
`usuario.github.io`.

## Estructura principal

- `index.md`: página principal, publicaciones, proyectos, resúmenes, docencia
  y enlaces al CV.
- `_config.yml`: configuración general de Jekyll, URL, extensiones,
  comentarios y analítica.
- `_includes/sidebar.html`: retrato, identidad, contacto y navegación.
- `_includes/head.html`: metadatos, favicon, hojas de estilo, MathJax, feed y
  SEO.
- `_layouts/`: estructuras HTML reutilizadas por páginas, entradas y
  etiquetas.
- `public/css/hyde.css`: layout, tipografía, barra lateral y temas de color.
- `public/css/poole.css`: estilos base y componentes del tema.
- `public/css/custom.css`: estilos específicos de la página principal.
- `papers/`, `photos/` y `resume/`: documentos e imágenes públicas.
- `CNAME`, `robots.txt` y `atom.xml`: dominio, indexación y feed.

## Actualizaciones habituales

- **Cambiar el retrato:** sustituir
  `photos/portrait_main_adjustedside.jpg` conservando el nombre, o modificar
  el atributo `src` correspondiente en `_includes/sidebar.html`.
- **Actualizar el CV:** sustituir `resume/cv_cnavarro.pdf`; si cambia el
  nombre del archivo, actualizar también su enlace en `index.md`.
- **Añadir o actualizar un artículo:** guardar el PDF en `papers/` y editar
  en `index.md` el título, los autores, el enlace y el resumen.
- **Editar la presentación, los proyectos o la docencia:** modificar la sección
  correspondiente de `index.md`.
- **Cambiar los datos de contacto o la navegación:** editar
  `_includes/sidebar.html`.
- **Cambiar colores o estilos:** utilizar `public/css/custom.css` para ajustes
  específicos y `public/css/hyde.css` para el tema y el layout general.
- **Cambiar el favicon:** sustituir `public/favicon.ico`.
- **Cambiar el dominio:** actualizar `url` en `_config.yml` y editar o
  eliminar `CNAME`, según se utilice o no un dominio propio.

## Actualizar contenido

Conviene mantener estables los nombres públicos de los PDF para no romper
enlaces existentes. Si cambia un nombre, su referencia en `index.md` debe
actualizarse en el mismo commit.

Cada control de resumen en `index.md` contiene:

- un enlace con la clase `abs-toggle`;
- un panel con un atributo `id` único;
- una referencia a ese mismo identificador en el atributo `onclick`.

El catálogo de `photos/` incluye alternativas conservadas para cambios de
diseño futuros. La ausencia de una referencia activa no implica necesariamente
que una imagen deba eliminarse.

## Infraestructura opcional de blog

El repositorio conserva soporte para publicaciones aunque actualmente no
contenga entradas:

- `_layouts/post.html`, `_layouts/page.html` y `_layouts/tagpage.html`;
- archivos de archivo, etiquetas, comentarios y enlaces sociales en
  `_includes/`;
- rutas de categorías y feed mediante `category.html` y `atom.xml`;
- resaltado de código en `public/css/syntax.css`;
- generación de páginas de etiquetas mediante `tag_generator.py`.

Las entradas se guardan como `_posts/AAAA-MM-DD-identificador.md` con cabecera
YAML de Jekyll. Después de modificar sus etiquetas, las páginas correspondientes
pueden regenerarse con:

```sh
python tag_generator.py
```

MathJax está disponible para contenido matemático. Google Analytics permanece
desactivado mientras `google_analytics` esté vacío en `_config.yml`. Disqus se
configura mediante `disqus.shortname` en el mismo archivo.

## Comprobaciones recomendadas

Después de publicar, revisar:

- la página principal y la página 404;
- los enlaces al CV, los artículos y las imágenes;
- la apertura y el cierre de los resúmenes;
- la navegación y el desplazamiento de la barra lateral;
- el resultado en pantallas de escritorio y móviles;
- las categorías, etiquetas y el feed si se utiliza el blog.

## Créditos y licencia

La web está basada en [Hyde](https://github.com/poole/hyde), distribuido con
licencia MIT. La licencia original se conserva en `LICENSE.md`. La tipografía
Cooper Hewitt se acredita en el pie de la página.
