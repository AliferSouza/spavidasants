export default function video(tag) {
  let videoVisible = false;

  tag.addEventListener("click", (e) => {
    const videoComp = document.querySelector("#video");
    if (videoVisible) {
      videoComp.innerHTML = "";
    } else {
      const videoHTML = `
        <video autoplay id="videoPalyPause" width="90%" height="210">
          <source src="/video/spa.mp4" type="video/mp4">
        </video>
      `;
      videoComp.innerHTML = videoHTML;
    }

    videoVisible = !videoVisible;
  });

  return `
        <div id="video"></div>  
        <div id="tres-pontos" key="id">                
           <span></span>
           <span></span>
           <span></span>         
        </div>`;
}
