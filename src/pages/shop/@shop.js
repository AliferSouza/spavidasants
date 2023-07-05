export default async function shop() {  

    return {
     html: () => `       
        <comp-menu></comp-menu>
        <div class="perfumaria-container">       
        <comp-perfoleos data-a="/#/shop/perfumaria/#oleos" data-use-width="80px"  data-use-height="80px"  data-id="oleos">Oleos</comp-perfoleos>
       </div>
        
    `
}
}
    



 