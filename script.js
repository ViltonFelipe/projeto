function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')


// pegar a tag img
const img = document.querySelector("#profile img") 
// substituir a imagem
if(html.classList.contains('light')){
// se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')

} else {
    img.setAttribute('src', './assets/avatar.png')
}

// se tiver sem light mode, manter a imagem normal
}
// document: Em JavaScript, o objeto document representa o modelo de objeto do documento (DOM - Document Object Model) de uma página da web. 
// querySelector é uma função do document. Significa "pesquisa pelo Seletor"