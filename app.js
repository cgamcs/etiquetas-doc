document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelectorAll('#menu-button')

    button.forEach(btn => {
        console.log()
        const menu = btn.parentElement.querySelector('#dropdown-menu')
        const container = btn.parentElement.parentElement.querySelector('#menu-container')

        btn.addEventListener('click', () => {
            menu.classList.remove('hidden')
        })

        document.addEventListener('click', (e) => {
            if (!container.contains(e.target)) {
                menu.classList.add('hidden')
            }
        })
    })
})