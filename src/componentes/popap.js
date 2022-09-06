export default function popap(){

    addEventListener('click', e => {  
        if(e.target.id == "close"){
            const modal = document.querySelector('.modal-content')
            modal.style.display = "none";
        }

    })
  
   

    return`
   
        <div class="modal-content">
            <span class="close" id="close">&times;</span>
            <p>Some text in the Modal..</p>
        </div>
       
    `
}