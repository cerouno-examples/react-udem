# react-udem
Repositorio con ejemplos del mini taller de react impartido en la UDEM

# Día Uno

## ECMASCRIPT 6
### Block Bindigs
https://jsfiddle.net/chuylerma/4nvz5qot/
### Template Literals
https://jsfiddle.net/chuylerma/42s1katv/
### Functions
https://jsfiddle.net/chuylerma/rt1uwdxn/
### Classes
https://jsfiddle.net/chuylerma/dg59wmkh/
### Promises
https://jsfiddle.net/chuylerma/3c8yp5dz/
### Async/Await
https://jsfiddle.net/chuylerma/0Lvp4suh/
### Modules
Para usar modulos debemos debemos primeros declararlos. Para esto tendremos un archivo llamado `lib.js` 
que contrendrá lo siguiente:
```javascript
export let color = 'red'
export let name = 'Jesus Lerma'

export function appendLi (ulElement, repos) {
  repos.forEach(repo => {
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(repo.name))
    ulElement.appendChild(li)
  })
}

const getRepositories = async () => {
  const url = 'https://api.github.com/users/jesuslerma/repos'
  let repositorios = await axios.get(url)
  console.log(repositorios)
  appendLi(document.getElementById('repoList'), repos.data)
}

export getRepositories
```

Este archivo lo incluiremos dentro de un archivo HTML con nombre `index.html` el cual incluirá lo siguiente:
```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Repositories List</title>
</head>
<body>
  <h1 id='repoList'></h1>
  <script type="module">
    import { color, name, appendLi } from './lib.mjs'
    console.log(color)
    console.log(name)
    console.log(appendLi)

    getRepositories()
  </script>
</body>
</html>
```

```bash
npm install http-server -g
```
