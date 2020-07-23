# Pasos para crear un proyecto Frontend con React y Webpack

1. crear directorio luego entrar
2. en la consola Iniciar un repositorio en GIT: ``` git init ```
3. Iniciar un proyecto de Node.js: ``` npm init -y ```
4. Crear carpeta src: vivira todo el codigo y el carpeta components dentro de ella.
5. Crear carpeta public: vivira todos los archivos cuando los mandemos a produccion
6. En la consola instalar los paquetes siquientes: ``` npm install --save react react-dom ```
7. Packege-lock.json permite manejar los versionados de los paquetes que manejamos.
8. Crear un archino de prueba en components: Prueba.jsx

Se llama JSX, y es una extensión de la sintaxis de JavaScript. Recomendamos usarlo con React para describir cómo debería ser la interfaz de usuario. JSX puede recordarte a un lenguaje de plantillas, pero viene con todo el poder de JavaScript.

9. Crear contenido en el archivo html en public y en index.js con react DOM.
10.  Babel es una herramienta muy popular para escribir JavaScript moderno y transformarlo en código que pueda entender cualquier navegador.

Instalación de Babel y otras herramientas para que funcione con React: ``` npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader ```

11. crear .babelrc en la raiz de proyecto

12. Webpack: Empaquetando nuestros módulos

"Webpack es una herramienta que nos ayuda a compilar multiples archivos (JavaScript, HTML, CSS, imágenes) en uno solo (o a veces un poco más) que tendrá todo nuestro código listo para producción.

Instalación de Webpack y algunos plugins:

``` npm install webpack webpack-cli html-webpack-plugin html-loader  --save-dev ```

13. Configuración de Webpack (webpack.config.js) en la raiz del proyecto.

14. Ahora en el archivo package.json colocar:
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode production"
  },

Prueba en la consola: ``` npm run build ```


15. Webpack Dev Server: Reporte de errores y Cambios en tiempo real.
Instalación de Webpack Dev Server: ``` npm install --save-dev webpack-dev-server ```

16. Script para ejecutar el servidor de Webpack y visualizar los cambios en tiempo real (package.json):

{
  ""scripts"": {
    ""build"": ""webpack --mode production"",
    ""start"": ""webpack-dev-server --open --mode development""
  },
}

Prueba en la consola: ``` npm run start ```

17. Estilos con SASS

Los preprocesadores como Sass son herramientas que nos permiten escribir CSS con una sintaxis un poco diferente y más amigable que luego se transformará en CSS normal. Gracias a Sass podemos escribir CSS con variables, mixins, bucles, entre otras características.

Instalación de Sass: ``` npm install --save-dev mini-css-extract-plugin css-loader node-sass sass-loader ```

18. Configurar Webpack.config.js

19. Configuración final: ESLint y Git Ignore

El Git Ignore es un archivo que nos permite definir qué archivos NO queremos publicar en nuestros repositorios. Solo debemos crear el archivo .gitignore y escribir los nombres de los archivos y/o carpetas que no queremos publicar.
Los linters como ESLint son herramientas que nos ayudan a seguir buenas prácticas o guías de estilo de nuestro código.
Se encargan de revisar el código que escribimos para indicarnos dónde tenemos errores o posibles errores. En algunos casos también pueden solucionar los errores automáticamente. De esta manera podemos solucionar los errores incluso antes de que sucedan.
Instalación de ESLint:

``` npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y ```

Podemos configurar las reglas de ESLint en el archivo .eslintrc.


# Cuando hagan clone, trabajarle el proyecto en otra rama distinta con:

1. Creamos una nueva rama del proyecto con:
 ``` git checkout -b nombreDeLaRama  ```
2. Verificar las ramas que hay que actualizar: 
 ``` npm outdated  ```
3. Para actualizar la aplicación ingresamos: 
 ``` npm update  ```
4. Para verificar si hubo actualización de paquetes, lo hacemos con: 
``` git status  ```
5. Para verificar las dependencias actualizadas, ingresamos: 
``` git diff  ```
6. Volvemos a verificar las dependencias que tenemos que actualizar con: 
``` git outdated  ```

Hay dependencias que no se pueden actualizar directamente con el comando git update, porque estas dependencias tienen otras dependencias que pueden estar siendo utilizadas por otras dependencias.

Corremos la aplicación ( ``` npm run start ``` ) para verificar que todavia funciona la aplicación y que el proceso de actualización de dependencias se realizó exitosamente.

	