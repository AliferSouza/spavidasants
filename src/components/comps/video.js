export default function video() {
  return {
    html: () => `<iframe id="videoPalyPause" allow="autoplay" width="250" height="400" src="https://www.youtube.com/embed/6eEhPOCN7iA" title="Florecer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  };
}
