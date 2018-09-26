const btn = document.getElementById('btn')
btn.onclick = () => {
  alert('click al btn')
}

const url = 'https://api.github.com/users/jesuslerma/repos'

const getRepositories = async () => {
  const repos = await axios.get(url)
  const ulElement = document.getElementById('repoList')
  repos.data.forEach(repo => {
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(repo.name))
    ulElement.appendChild(li)
  })
}
getRepositories()
