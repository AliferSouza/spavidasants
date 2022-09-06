
    function navigateTo(url) {
        history.pushState(null, null, url)
        Router()
    }


    function Router(Commonroutes) {
        const pageNormal = Commonroutes || {}

        const pegarPaginaInicial = Object.keys(pageNormal)

        const pathname = location.pathname    

        pageNormal[pathname] ? Render(pageNormal[pathname]) : Render(pageNormal[pegarPaginaInicial[0]])


        
        window.addEventListener('popstate', Router)

        document.addEventListener('DOMContentLoaded', () => {
            document.body.addEventListener("click", e => {
                if (e.target.matches("[data-link]")) {
                    e.preventDefault()
                    navigateTo(e.target.href)
                }
            })

        })



    }


    function Render(rendeComponente) {
        const render = rendeComponente()
        const root = document.querySelector("#root")
        root.innerHTML = render
    }




    

export {
    Router,
    Render
}