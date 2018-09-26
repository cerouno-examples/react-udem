 react-udem
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

# Día Dos

Para hoy veremos como hacer un clon de github utilizando como base el proyecto
[https://gitlab.com/nick70/github-imitation](https://gitlab.com/nick70/github-imitation) de 
[Nicholas Farshidmehr](https://gitlab.com/nick70)


```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title id='title'> / Repositories · GitHub</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Primer/6.0.0/build.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/font/octicons.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="icon" href="favicon.ico">
  </head>
  <body id="fakehub">
    <header>
      <div class="header-box">
        <a href="https://github.com/" class="octicon octicon-mark-github"></a>
        <nav>
          <ul>
            <li><a href="https://github.com/features">Features</a></li>
            <li><a href="https://github.com/business">Business</a></li>
            <li><a href="https://github.com/explore">Explore</a></li>
            <li><a href="https://github.com/marketplace">Marketplace</a></li>
            <li><a href="https://github.com/pricing">Pricing</a></li>
          </ul>
        </nav>
        <form class="search-form" action="https://github.com/search" method="get">
          <input type="text" name="q" value="" placeholder="Search GitHub">
        </form>
        <aside>
          <span><a href="https://github.com/login">Sign in</a></span>
          <span>or</span>
          <span><a href="https://github.com/join?source=fakehub">Sign up</a></span>
        </aside>
      </div>
    </header>
    <main>
      <div id="user-box">
        <div id="avatar-img-box">
          <a href="http://www.example.com/" id="avatar-a">
            <img id="avatar" src="https://avatars0.githubusercontent.com/u/5227365?s=400&u=aee51ec8886a1b8bec49b804d6341133dcf553bc&v=4" alt="">
          </a>
          <div id="name">Jesus Lerma</div>
          <div id="username">jesuslerma</div>
          <div id="bio">github.com/jesuslerma</div>
          <div><a id="report" href="https://lmgtfy.com/?q=insert+extremely+good+joke+here">Block or report user</a></div>
          <div id="user-details">
            <div>
              <span class="octicon octicon-organization"></span>
              <a id="org" href=""></a>
            </div>
            <div>
              <span class="octicon octicon-location"></span>
              <span id="location">america</span>
            </div>
            <div>
              <span class="octicon octicon-link"></span>
              <a id="website" href="https://github.com/jesuslerma">https://github.com/jesuslerma</a>
            </div>
            <div>
              <span class="octicon octicon-clock"></span>
              <span id="joined">Join a year ago</span>
            </div>
          </div>
          <div id="org-box">
            <span>Organizations</span>
            <div id="org-img-box"></div>
          </div>
        </div>
      </div>
      <div id="repo-box">
        <ul id="user-profile-nav">
          <ul id="user-profile-nav">
          <li><a class="incomplete-url" href="">Overview</a></li>
          <li class="active">
            <a class="incomplete-url"  href="">Repositories</a><span id="repo-count" class="number-bubble">55</span>
          </li>
          <li>
            <a class="incomplete-url" href="">Stars<span id="stars-count" class="number-bubble">30</span></a>
          </li>
          <li>
            <a class="incomplete-url" href="">Followers<span id="followers-count" class="number-bubble">7</span></a>
          </li>
          <li>
            <a class="incomplete-url"  href="">Following<span id="following-count" class="number-bubble">0</span></a>
          </li>
        </ul>
        </ul>
        <div class="repo"><div class="repo-name">angular-customer-directory</div><div class="repo-details"><div class="repo-bubble" style="background-color: rgb(43, 116, 137);"></div><div style="">TypeScript</div><div class="last-updated">4 months ago</div></div></div>
      </div>
    </main>
  </body>
</html>

```
```css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --hrCol: #e0e0e0;
}

img {
  max-width: 100%;
  max-height: 100%;
}

#fakehub {
  display: flex;
  flex-direction: column;
  font-family: Helvetica, sans-serif;
}

#fakehub header {
  width: 100%;
  height: 70px;
  border-width: 1px;
  border-bottom-width: 1px;
  border-bottom-color: var(--hrCol);
  border-bottom-style: solid;
  margin-bottom: 24px;
}

#fakehub header .header-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  width: 980px;
}

/* github does magic here to make the font sharper */
/* i'm not going to do that */
#fakehub header .octicon-mark-github {
  display: flex;
  align-items: center;
  position: relative;
  font-size: 32px;
  color: #24292E;
  margin-right: 10px;
}

#fakehub header nav {
  width: 1024px;
  height: 70px;
}

#fakehub header ul {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  align-items: center;
  height: 65px;
}

#fakehub header li {
  height: 20px;
}

#fakehub header nav a {
  font-size: 16px;
  text-decoration: none;
  color: #242934;
  margin: 10px;
}

#fakehub header nav a:hover {
  color: #586069;
}

#fakehub header .search-form {
  display: flex;
  align-items: center;
  height: 71px;
  margin-right: 10px;
}

#fakehub header form input {
  width: 200px;
  height: 34px;
  padding-left: 10px;
  padding-right: 10px;
  line-height: 20px;
  font-size: 14px;
  color: #24292e;
  background-color: #FAFAFA;
  font-family: inherit;
  box-shadow: inset 2px 2px 2px -1px rgba(27, 31, 35, 0.05);
  border: 1px solid #d7d7d7;
  border-radius: 3px;
}

#fakehub header form input:focus
{
  outline: none;
  box-shadow: 0 0 0 3px #94c1f2;
  background-color: #fff;
  border: 1px solid #2188FF;
}

#fakehub header aside {
  display: flex;
  justify-content: center;
  white-space: nowrap;
  font-size: 16px;
  line-height: 38px;
  color: #586069;
}

/* in this order so we override the font-weight */
#fakehub header aside a {
  font-weight: 600;
  text-decoration: none;
  color: #0366d6;
}

#fakehub header aside a:hover {
  text-decoration: underline;
}

#fakehub header aside span {
  padding-left: 5px;
}

#fakehub main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

#fakehub #user-box {
  display: flex;
  justify-content: center;
  min-height: 500px;
  padding-right: 16px;
}

#fakehub #user-box #avatar-a {
}

#fakehub #user-box #name {
  font-size: 26px;
  font-weight: 600;
  line-height: 30px;
  color: #24292e;
}

#fakehub #user-box #username {
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  color: #666666;
}

#fakehub #user-box #user-details {
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 20px;
  border-bottom-width: 1px;
  border-width: 1px;
  border-bottom-color: var(--hrCol);
  border-bottom-style: solid;
  border-top-width: 1px;
  border-top-color: var(--hrCol);
  border-top-style: solid;
}

#fakehub #user-box #bio {
  color: #6f7780;
  margin-top: 16px;
  line-height: 21px;
  font-size: 14px;
}

#fakehub #user-box .octocon {
  color: #363839;
}

#fakehub #user-box {
  color: #6A737D;
}

#fakehub #user-box #report {
  display: flex;
  text-decoration: none;
  margin-top: 15px;
  color: #51575e;
  font-size: 12px;
}

#fakehub #user-box #org {
  line-height: 21px;
  font-size: 14px;
  font-weight: 600;
  color: #24292e;
}

/*#fakehub #user-box #location {
}*/

/*#fakehub #user-box #website {
}*/

/*#fakehub #user-box #joined {
}*/

/*#fakehub #org-box {
}*/

#fakehub #org-box>span {
  color: #24292e;
  font-size: 16px;
  font-weight: 600;
}

#fakehub #org-img-box {
}

#fakehub #user-box .org-thumb {
  display: inline-block;
  width: 29px;
  height: 30px;
  margin: 2px;
}

#fakehub #avatar-img-box {
  width: 235px;
  height: 230px;
  border: 10px;
}

#fakehub #avatar-img-box>a>img {
  width: 229px;
  height: 230px;
  border-radius: 6px;
  margin-bottom: 10px;
}

#fakehub #repo-box {
  width: 729px;
}

#fakehub #repo-box .repo {
  margin-top: 25px;
  padding-bottom: 25px;
  border-width: 1px;
  border-bottom-width: 1px;
  border-bottom-color: var(--hrCol);
  border-bottom-style: solid;
}

#fakehub #repo-box .repo-name {
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  color: #0366d6;
  margin-bottom: 10px;
}

#fakehub #repo-box .repo-details {
  display: flex;
  flex-direction: row;
  color: #586069;
  font-size: 12px;
}

#fakehub #repo-box .repo-bubble {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 12px;
  margin-right: 2px;
}

#fakehub #repo-box .repo-details .last-updated {
  margin-left: 15px;
}

#fakehub #user-profile-nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  list-style-type: none;
  border-width: 1px;
  border-bottom-width: 1px;
  border-bottom-color: var(--hrCol);
  border-bottom-style: solid;
}

#fakehub #user-profile-nav li {
  padding: 20px;
  padding-bottom: 19px;
}

#fakehub #user-profile-nav a {
  display: inline-block;
  text-decoration: none;
  color: #586069;
}

#fakehub #user-profile-nav a:hover {
  color: #242934;
}

#fakehub .number-bubble {
  display: inline-block;
  font-weight: bold;
  font-size: 12px;
  color: #586069;
  background-color: #EDEDEE;
  border-radius: 20px;
  padding-left: 5px;
  padding-right: 5px;
  margin-left: 5px;
}

#fakehub #user-profile-nav .active>a {
  color: #24292e;
}

#fakehub #user-profile-nav .active {
  border-bottom: 2px solid #E36209;
}

#fakehub footer {
  margin: 20px;
  text-align: center;
}
.repo-bubble {
  background-color: rgb(43, 116, 137);
}
```
Aquí podrás encontrar funcionando el ejemplo
https://jsfiddle.net/chuylerma/hvbje649/


## React 101

https://jsfiddle.net/chuylerma/g8p6r2ek/

React con JSX


```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title id='title'> / Repositories · GitHub</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Primer/6.0.0/build.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/font/octicons.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="icon" href="favicon.ico">
  </head>
  <body id="fakehub">
    <header>
      <div class="header-box">
        <a href="https://github.com/" class="octicon octicon-mark-github"></a>
        <nav>
          <ul>
            <li><a href="https://github.com/features">Features</a></li>
            <li><a href="https://github.com/business">Business</a></li>
            <li><a href="https://github.com/explore">Explore</a></li>
            <li><a href="https://github.com/marketplace">Marketplace</a></li>
            <li><a href="https://github.com/pricing">Pricing</a></li>
          </ul>
        </nav>
        <form class="search-form" action="https://github.com/search" method="get">
          <input type="text" name="q" value="" placeholder="Search GitHub">
        </form>
        <aside>
          <span><a href="https://github.com/login">Sign in</a></span>
          <span>or</span>
          <span><a href="https://github.com/join?source=fakehub">Sign up</a></span>
        </aside>
      </div>
    </header>
    <main>
      <div id="app"></div>
    </main>
    <script src="https://unpkg.com/react@16/umd/react.development.js" charset="utf-8"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" charset="utf-8"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>

    <script type="text/babel" >
      class DefaultHelloWorld extends React.Component {
        render () {
          return <h1>Hello World!</h1>
        }
      }

      ReactDOM.render(<DefaultHelloWorld />, document.getElementById('app'))
    </script>
  </body>
</html>

```
https://jsfiddle.net/chuylerma/b0nmdf2k/


## Create React App

```bash
npx create-react-app github-clone
cd github-clone
npm start
```

Si llegamos a tener errores de memoria en sistemas `unix-like` debemos de correr el siguiente comando:
```bash
# to prevent errors
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

### Create nav bar
Agregamos los css necesarios en `public/index.html`
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Primer/6.0.0/build.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/font/octicons.css">
```

Copiamos los estilos que teníamos anteriormente en `src/App.css`, remplazando
el contenido que existía antes.

Empezamos a crear los componentes:
`src/Logo.js`

```JSX
import React, {Component} from 'react'
import './App.css'

class Logo extends Component {
  render () {
    return (
      <a href='https://github.com/' className='octicon octicon-mark-github' />
    )
  }
}

export default Logo
```

`src/SignInLink.js`
```JSX
import React, {Component} from 'react'
import './App.css'

class SignInLink extends Component {
  render () {
    return (
      <span><a href='https://github.com/login'>Sign in</a></span>
    )
  }
}

export default SignInLink
```

`src/SignUpLink.js`

```JSX
import React, {Component} from 'react'
import './App.css'

class SignUpLink extends Component {
  render () {
    return (
      <span><a href='https://github.com/join?source=fakehub'>Sign up</a></span>
    )
  }
}

export default SignUpLink

```

`src/Search.js`

```JSX
import React, {Component} from 'react'
import './App.css'

class Search extends Component {
  render () {
    return (
      <form className='search-form' action='https://github.com/search' method='get'>
        <input type='text' name='q' value='' placeholder='Search GitHub' />
      </form>
    )
  }
}

export default Search
```

`src/MenuItem.js`
```JSX
import React, {Component} from 'react'
import './App.css'

class MenuItem extends Component {
  render () {
    const {menuTitle, menuUrl} = this.props
    return (
      <li><a href={menuUrl}>{menuTitle}</a></li>
    )
  }
}

export default MenuItem
```

`src/Menu.js`
```JSX
import React, {Component} from 'react'
import './App.css'
import MenuItem from './MenuItem'

class Menu extends Component {
  render () {
    return (
      <nav>
        <ul>
          <MenuItem menuUrl='https://github.com/features' menuTitle='Features' />
          <MenuItem menuUrl='https://github.com/business' menuTitle='Business' />
          <MenuItem menuUrl='https://github.com/explore' menuTitle='Explore' />
          <MenuItem menuUrl='https://github.com/marketplace' menuTitle='Marketplace' />
          <MenuItem menuUrl='https://github.com/pricing' menuTitle='Pricing' />
        </ul>
      </nav>
    )
  }
}

export default Menu

```

`src/Header.js`
```JSX
import React, { Component } from 'react'
import './App.css'
import Menu from './Menu'
import Search from './Search'
import SignInLink from './SignInLink'
import SignUpLink from './SignUpLink'
import Logo from './Logo'

class Header extends Component {
  render () {
    return (
      <header>
        <div className='header-box'>
          <Logo />
          <Menu />
          <Search />
          <aside>
            <SignInLink />
            <span>or</span>
            <SignUpLink />
          </aside>
        </div>
      </header>
    )
  }
}
export default Header
```

`src/App.js`
```JSX
import React, { Component } from 'react'
import './App.css'
import Header from './Header'

class App extends Component {
  render () {
    return (
      <div id='fakehub'>
        <Header />
      </div>
    )
  }
}

export default App

```

### Create User Box
`src/Avatar.js`
```JSX
import React, {Component} from 'react'
import './App.css'

class Avatar extends Component {
  render () {
    return (
      <a href='http://www.example.com/' id='avatar-a'>
        <img id='avatar' src='https://avatars0.githubusercontent.com/u/5227365?s=400&u=aee51ec8886a1b8bec49b804d6341133dcf553bc&v=4' alt='' />
      </a>)
  }
}

export default Avatar

```

`src/UserDetails.js`

```JSX
import React, {Component} from 'react'
import './App.css'

class UserDetails extends Component {
  render () {
    return (
      <div>
        <div>
          <span class='octicon octicon-organization' />
          <a id='org' href='' >' '</a>
        </div>
        <div>
          <span class='octicon octicon-location' />
          <span id='location'>america</span>
        </div>
        <div>
          <span class='octicon octicon-link' />
          <a id='website' href='https://github.com/jesuslerma'>https://github.com/jesuslerma</a>
        </div>
        <div>
          <span class='octicon octicon-clock' />
          <span id='joined'>Join a year ago</span>
        </div>
      </div>)
  }
}

export default UserDetails
```

`src/UserDetails.js`

```JSX
import React, {Component} from 'react'
import './App.css'
import Avatar from './Avatar'
import UserDetails from './UserDetails'

class UserBox extends Component {
  render () {
    return (
      <div id='user-box'>
        <div id='avatar-img-box'>
          <Avatar />
          <div id='name'>Jesus Lerma</div>
          <div id='username'>jesuslerma</div>
          <div id='bio'>github.com/jesuslerma</div>
          <div>
            <a id='report'
              href='https://lmgtfy.com/?q=insert+extremely+good+joke+here'>
                Block or report user
            </a>
          </div>
          <UserDetails />
        </div>
      </div>
    )
  }
}

export default UserBox

```

### Create Repo Box
`src/RepoBox.js`

```JSX
import React, {Component} from 'react'
import './App.css'
import Repo from './Repo'

class RepoBox extends Component {
  render () {
    return (
      <div id='repo-box'>
        <ul id='user-profile-nav'>
          <ul id='user-profile-nav'>
            <li><a className='incomplete-url' href=''>Overview</a></li>
            <li className='active'>
              <a className='incomplete-url' href=''>Repositories</a><span id='repo-count' className='number-bubble'>55</span>
            </li>
            <li>
              <a className='incomplete-url' href=''>Stars<span id='stars-count' className='number-bubble'>30</span></a>
            </li>
            <li>
              <a className='incomplete-url' href=''>Followers<span id='followers-count' className='number-bubble'>7</span></a>
            </li>
            <li>
              <a className='incomplete-url' href=''>Following<span id='following-count' className='number-bubble'>0</span></a>
            </li>
          </ul>
        </ul>
        <Repo />
      </div>)
  }
}

export default RepoBox
```

`src/Repo.js`
```JSX
import React, {Component} from 'react'
import './App.css'

class Repo extends Component {
  render () {
    return (
      <div className='repo'>
        <div className='repo-name'>angular-customer-directory</div>
        <div className='repo-details'>
          <div className='repo-bubble' />
          <div>TypeScript</div>
          <div className='last-updated'>4 months ago</div>
        </div>
      </div>)
  }
}

export default Repo

```
# Resources
https://www.taniarascia.com/getting-started-with-react/