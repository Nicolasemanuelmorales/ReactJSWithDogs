- [Levantar el proyecto](#levantar-el-proyecto)
- [Creación del proyecto e instalación de dependencias](#creación-del-proyecto-e-instalación-de-dependencias)
  - [Interprete para crear templates](#interprete-para-crear-templates)
    - [Crear template (typescript)](#crear-template-typescript)
  - [Navigation](#navigation)
  - [Material UI](#material-ui)
  - [Icons](#icons)
  - [Axios](#axios)
  - [Redux](#redux)
- [Deploy con GitHub Pages](#deploy-con-github-pages)
- [Prettier](#prettier)

# Levantar el proyecto

1. [Node.js](https://nodejs.org/es/ "Node.js").
2. `npm install` Sobre el origen del proyecto.
3. `npm start`

# Creación del proyecto e instalación de dependencias

## Interprete para crear templates
https://create-react-app.dev/docs/getting-started
```
npm install -g create-react-app
```

### Crear template (typescript)
```
npx create-react-app NOMBRE-PROYECTO --template typescript --use-npm
```

## Navigation
https://www.npmjs.com/package/react-router-dom
```
npm install react-router-dom
npm install @types/react-router-dom
```
## Material UI
https://mui.com/getting-started/installation/
```
npm install @material-ui/core
```
## Icons
https://mui.com/components/icons/#main-content
```
npm install @material-ui/icons
```
## Axios
https://axios-http.com/docs/intro
```
npm i axios
```
## Redux
https://react-redux.js.org/introduction/getting-started
```
npm install react-redux
npm install redux
```
# Deploy con GitHub Pages

1.  `npm install --save-dev gh-pages`

2.  Se agrega en el **package.json** lo siguiente:

    `"homepage":"https://yourusername.github.io/repository-name"`

3.  En la seccion de **scripts** del archivo **package.json** agregar :
    ```
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
    ```
4.  Parado en la base del proyecto correr:
    `npm run build`,
    `npm run deploy`

5.  Se crea automáticamente el branch **Gh-pages** el cual luego en `Settings -> Pages` se tendra que seleccionar como branch principal

# Prettier

Se configura desde los complementos del Visual Studio Code.

1.  Se tiene que habilitar la opción **Format On Save** en `File -> Preferences -> Settings -> Text editor -> Formatting`.
2.  Presionar `CTRL + SHIFT + P` , escribir **settings.json** y agregar :

```
 "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
```

> Prettier: No es necesario para la creacion ni para la ejecucion, pero si para mantener una convención.
