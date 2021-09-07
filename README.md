## Levantar el proyecto

1. [Node.js](https://nodejs.org/es/ "Node.js").
2. `npm install` Sobre el origen del proyecto.
3. `npm start`

## Creación del proyecto

### Interprete para crear templates

`npm install -g create-react-app`

### Se crea un template con base en java TypeScript

`npx create-react-app NOMBRE-PROYECTO --template typescript`

### Navegación (Route)

`npm install react-router-dom`,

`npm install @types/react-router-dom`

### Redux

`npm install react-redux`
`npm install redux`

### Material UI

`npm install @material-ui/core`

### Icons

`npm install @material-ui/icons`

### Axios

`npm i axios`

## Deploy con GitHub Pages

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

## Prettier

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
