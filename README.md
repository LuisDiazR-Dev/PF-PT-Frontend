# PF-Frontend

Frontend del proyecto final Henry modalidad PartTime

## Team

- Luis Diaz
- Jesu Guzmán
- Nydia Massiel Sánchez


## Stack

- React + Vite
- Redux Toolkit
  - integra redux-thunk y Dev Tool Extension
- Bootstrap 5.3
- Tailwind

## Sobre comentarios

No comentaras que es sino que hace

## Git

### Manejo de ramas

1. Subiendo la rama development o cualquier otra rama

- git checkout development
- git status
- git push origin development

1. Trayendo la rama development o cualquier otra rama

- git fetch
  - Obtener las actualizaciones del repositorio remoto
- git branch -r
  - Listar todas las ramas remotas
- git checkout -b development origin/development
  - y quedas parado en development. luego crear tu rama de trabajo

3. Creando ramas

- git branch
  - para ver todas las ramas y saber en cual estoy
- git branch "nombre de la rama"
  - sin comillas, crea rama
- git branch -M "newname"
  - renombra la rama en la que se esta actualmente
- git branch -D "nombreDeLaRama"
  - para eliminar rama
- git checkout "nombre de rama"
  - para desplazarse entre ramas
- git checkout -
  - Te devuelve a la rama anterior activa
- git show-branch
  - muestra las ramas que hay y el ultimo commit de cada una
- git show branch --all
  - igual anterior pero con mas detalles
- git merge "nombreDeLaRama"
  - fusiona la mara actual con la rama que definimos en el comando

## GitHub Flow

![alt text](GitFlow.png)

## Sobre Vercel.json

Este archivo es para despliegue de una SPA que maneje react router Don en Vercel y no haya conflicto con redirecciones y rutas hacia el sitio

## Sobre .prettierrc

Este archivo es para que todos los colaboradores guarden con el mismo formato y evitar errores en los merge

```js
{
    "useTabs": true, // uso de Tabs en vez de espacios
    "tabWidth": 2,  // Tads de 2 espacios
    "singleQuote": true, // transforma comillas dobles a sencillas en cadenas de texto
    "semi": false,  // Omite el uso de punto y coma (;) al final de las sentencias.
    "printWidth": 80, // Limita el ancho máximo de una línea de código a 80 caracteres.
    "spaceBeforeFunctionParen": true, // Agrega un espacio antes del paréntesis de apertura en la declaración de funciones. Ejemplo: function example () {}.
    "ignorePatterns": ["node_modules/", "build/"] // directorios ignorados
  }
```

## Sobre extensiones recomendadas para trabajar en equipo

- incluir lista

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
