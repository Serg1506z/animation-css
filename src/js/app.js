const btn = document.querySelector('.btn')
const collapsible = document.querySelector('.collapsible')



btn.addEventListener('click', () => {
    collapsible.classList.toggle('collapsible-active')
})

