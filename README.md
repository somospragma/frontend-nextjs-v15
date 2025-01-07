<div align="center">
  <div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Logo" width="260" height="120">
    <h2 align="center">Arquetipo NextJS v15</h2>
  </div>

  <p align="center">
    Plantilla del correcto uso de NextJS 15
    <br />
    <a href="https://github.com/Saisho137/Archetype_NextJS"><strong>Explorar Repositorio</strong></a>
  </p>
</div>

<details>
  <summary>Tabla de contenidos</summary>
  <ol>
    <li>
      <a href="#sobre-el-proyecto">Sobre el proyecto</a>
      <ul>
        <li><a href="#construido-con">Construido con</a></li>
      </ul>
    </li>
    <li>
      <a href="#cómo-empezar">Cómo empezar</a>
      <ul>
        <li><a href="#prerrequisitos">Prerrequisitos</a></li>
        <li><a href="#instalación">Instalación</a></li>
      </ul>
    </li>
    <li>
      <a href="#documentación">Documentación</a>
      <ul>
        <li>
          <a href="#estándares">Estándares</a>
          <ul>
            <li><a href="#estructura-de-carpetas">Estructura de carpetas</a></li>
            <li><a href="#importaciones">Importaciones</a></li>
            <li><a href="#linters">Linters</a></li>
            <li><a href="#estilos">Estilos</a></li>
            <li><a href="#interfaces">Interfaces</a></li>
            <li><a href="#seo-y-accesibilidad">SEO y Accesibilidad</a></li>
            <li><a href="#testing">Testing</a></li>
          </ul>
        </li>
        <li>
          <a href="#guias-adicionales">Guías Adicionales</a>
          <ul>
            <li><a href="#paths-aliases">Paths Aliases (Typescript)</a></li>
            <li><a href="#iconos">Iconos</a></li>
            <li><a href="#documentacion">Documentación</a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ol>
</details>

<!-- SOBRE EL PROYECTO -->

## Sobre el proyecto

Con este proyecto se busca dar una guía auto explicativa para construir un Frontend sólido con la última versión del Meta Framework NextJS (v15). Definiendo la estructura de carpetas, tecnologías y configuraciones básicas; junto con simples ejemplos que dan a entender mejor la forma de organizar los archivos (Se espera que estos archivos de ejemplo sean limpiados antes de construir una nueva aplicación).

### Construido con

- [![NextJs]][next-url]
- [![Typescript]][typescript-url]
- [![Sass]][sass-url]
- [![Jest]][jest-url]
- [![TestingLibrary]][testinglibrary-url]
- [![ESLint]][eslint-url]

## Cómo empezar

Para ejecutar este proyecto localmente, por favor siga las instrucciones a continuación

### Prerrequisitos

- Node.js
  - Si usa [nvm](https://github.com/nvm-sh/nvm), ejecute `nvm use`
  - Si no usa [nvm](https://github.com/nvm-sh/nvm) o no funcionó el comando anterior, instale la versión de NodeJS especificada en el archivo `.nvmrc`
- npm
  ```sh
  npm install npm@latest -g
  ```

### Instalación

1. Clonar el repositorio
   ```sh
   git clone https://github.com/Saisho137/Archetype_NextJS
   ```
2. Instalar las dependencias
   ```sh
   cd ARCHETYPE_NEXTJS && npm install
   ```
3. Validar/Agregar las variables de entorno
   ```sh
   src/env/.env.local
   ```
4. Iniciar el servidor local
   ```sh
   npm run dev
   ```
5. Construir el archivo estático ("Compilar")
   ```sh
   npm run build
   ```
6. Construir el archivo estático ("Compilar")
   ```sh
   npm run start:ssg
   ```

## Documentación

Esta sección enumera y explica los estándares y guías utilizados por el equipo.

### Estándares

#### Estructura de carpetas

El siguiente diagrama muestra la estructura principal del proyecto, centrándose en lo más relevante y con archivos ejemplificadores:

    .
    ├── public
    ├── src
    ├──   app/
    ├──       (root)/
    ├──           ClientPage/
    ├──               ClientPage.tsx
    ├──               ClientPage.spec.tsx
    ├──               ClientPage.module.scss
    ├──           page.tsx
    ├──           page.spec.tsx
    ├──           page.module.scss
    ├──       favicon.ico
    ├──       layout.tsx
    ├──       layout.spec.tsx
    ├──   assets
    ├──       fonts/
    ├──       images/
    ├──   components
    ├──       atoms
    ├──           ...
    ├──           Button
    ├──             Button.tsx
    ├──             Button.spec.tsx
    ├──             Button.module.scss
    ├──             index.ts
    ├──           index.ts
    ├──       molecules/
    ├──       organisms/
    ├──       templates/
    ├──   config/
    ├──       environments.ts
    ├──       fonts.ts
    ├──   shared/
    ├──       guards/
    ├──       hooks/
    ├──       mocks/
    ├──       services/
    ├──   store/
    ├──   styles/
    ├──   types/
    ├──   utils/
    ├──       constants/
    ├──       helpers/
    ├── .env
    ├── .env.local
    ├── .env.production
    └── ...

- Carpeta `assets`: Contiene los archivos estáticos de la página, como las fuentes (.ttf o .wof) e imágenes.

- Carpeta `components`: Sigue la metodología **atomic design** (atoms, molecules, organisms & templates). Cada una de estas subcarpetas tendrá un archivo de barril (index.ts) que exportará todos los componentes de esa carpeta. Esta carpeta contiene componentes transversales y reutilizables en todo el sitio, que puedan ser trasladados a una biblioteca de componentes fácilmente.

- Estructura de componentes: Cada componente del proyecto tendrá su propia carpeta con todos sus archivos relacionados.

  ```js
  Button / Button.tsx;
  Button.spec.tsx;
  Button.module.scss;
  index.ts;
  ```

  Estos deben ser exportados por default y, en el index, asignarles el nombre propio del componente:

  ```js
  Index /
  export { default as Name } from './Name';
  ```

- Carpeta `config`: Contiene configuraciones globales, como la creación de las variables locales de las Fonts y exportación de variables de entorno como strings.

- Carpeta `styles`: Contiene los estilos globales de la aplicación, así como las variables, mixins y normalizador.

- Carpeta `shared`: Contiene el código transversal a la aplicación, tales como los Guards, React Hooks, Servicios y Mocks de las pruebas unitarias (Con el fin de reducir la carga de los archivos de testing).

- Carpeta `types`: Contiene las interfaces y types de la aplicación, se puede especificar más sus tipos dividiendo la carpeta en **models** (core) e **interfaces** (generales).

- Carpeta `utils`: Contiene las interfaces y types de la aplicación, se puede especificar más sus tipos dividiendo la carpeta en **models** (core) e **interfaces** (generales).

- **Archivos** `env`: NextJs usa un archivo u otro según el ambiente en el que se encuentre corriendo (.env.local con mayor prioridad), adicionalmente, desde un pipeline se puede definir que archivo usar para cada ambiente; se usan los prefijos `NEXT_PUBLIC_` Y `NEXT_`, este último agrega otra capa de seguridad, pues su valor no puede ser accedido desde cliente (navegador).

  El .env.local no se incluye dentro del repo puesto que tiene el valor de las variables quemado, los otros 2 archivos tienen como valor el propio nombre de las variables entre `&`, para luego ser inyectados desde el pipeline, esta estrategia puede cambiarse por la que se considere más adecuada. (Más información [aquí][NextJsDocEnv]).

### Importaciones

Para conservar un proyecto mantenible, las importaciones deben seguir un orden consistente. Se recomienda usar imports absolutos (paths aliases) en lugar de imports relativos y utilizar archivos de barril siempre que sea posible.

Estos elementos se configuran en el linter para ser validados dinámicamente durante el desarrollo.

Ejemplos de importaciones:

```js
import React from React;
import { Button, Image, Input } from '@/components/atoms';
import styles from './Card.module.scss'
```

#### Linter

Se utiliza ESLint para mantener los estándares de código uniformes. Además, se emplean Prettier y EditorConfig.

- Las reglas de Prettier pueden verse en `.prettierrc`
- Las reglas de Eslint pueden verse en `eslint.config.mjs` (`rules:`)
- Las propiedades del EditorConfig pueden verse en `.editorconfig`

#### Estilos

Se usan SCSS modules. Los estilos globales, variables, fuentes y otras configuraciones relacionadas se encuentran en la carpeta `src/styles/`. Además, se usa **BEM** como patrón de nombramiento de clases CSS.

Es fundamental que se asegure de utilizar las variables que se encuentran en el archivo `src/styles/_variables.scss`, ya que esto facilitará mantener el código y realizar modificaciones globales de estilos de manera más sencilla.
También, si tiene fragmentos de estilos que repite constantemente, considere convertirlo en un Mixin dentro de `src/styles/_mixins_.scss`

#### Interfaces / Types

Los nombres de las interfaces y types se escriben en PascalCase.

Las interfaces de las propiedades de los componentes se colocarán dentro del mismo archivo del componente y se nombrarán como `[component]Props`.

Las interfaces o types transversales se ubicarán en `src/types/`.

#### Seo y Accesibilidad

Los datos de SEO se configuran en cada página, se muestran 2 ejemplos de cómo hacerlo hacerlo en Next, pero se recomienda implementar el de `/app/(root)/page.tsx`. No se ha agregado ninguna implementación específica de cómo manejar el SEO más allá de hacerlo en la página y dejar las meta etiquetas generales en el layout (Next genera las más básicas por defecto, como el viewport).

Además, se recomienda validar métricas de SEO, accesibilidad y perfomance web después de cada desarrollo, utilizando herramientas como [pagespeed.dev](https://pagespeed.web.dev/) y [Axe DevTools](https://axe.deque.com/axe-devtools); así como extensiones como `axe Accessibility Linter`.

#### Testing

Las pruebas unitarias se realizan con [Jest](https://jestjs.io/) y [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). Los mocks se encuentran en `src/shared/mocks`, mientras que los tests de cada componente están ubicados en la carpeta correspondiente al componente, por ejemplo, `src/components/atoms/Image/Image.spec.tsx`.

Para ejecutar las pruebas unitarias y obtener el coverage, ejecute:

```sh
npm run test
npm run test:coverage
```

### Guías adicionales

#### Paths Aliases

El proyecto hace uso de la característica de **path aliases** de TypeScript. No hace falta modificar ningún archivo para agregar nuevos paths, puesto que el alias `@` está configurado sobre el **src** e incluye todo su contenido.

#### Iconos

Todos los archivos SVG deben almacenarse como componentes en `components/atoms/Icons`. Dentro de esta carpeta se encuentran los svg individualmente, y estos se puede consumir así: `<Icons.Search />`

Recomendaciones para el Uso de SVGs:

- **Uso de currentColor**: Asegúrese de configurar los SVGs para utilizar currentColor en sus atributos de color. Esto permite que los íconos hereden el color del texto donde se utilicen, haciéndolos más flexibles y reutilizables.

- **Eliminación de width y height**: Elimina los atributos width y height de los SVGs o recíbelos como Props. Esto permite que los íconos se ajusten automáticamente a las dimensiones definidas por los estilos CSS o los valores que pases como propiedades, aumentando su versatilidad en diferentes partes del sitio.

#### Documentación

Recuerde mantener este README actualizado para que sea útil para otros desarrolladores.

En caso de realizar alguna modificación importante, asegúrese de informar a los equipos relacionados para mantenerse sincronizados.

<!-- MARKDOWN LINKS & IMAGES -->

[NextJsDocEnv]: https://nextjs.org/docs/app/api-reference/config/next-config-js/env
[NextJs]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[sass]: https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white
[sass-url]: https://sass-lang.com/
[typescript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/docs/handbook/react.html
[testinglibrary]: https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red
[testinglibrary-url]: https://testing-library.com/
[eslint]: https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white
[eslint-url]: https://eslint.org/
[jest]: https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[jest-url]: https://jestjs.io/
