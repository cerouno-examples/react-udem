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