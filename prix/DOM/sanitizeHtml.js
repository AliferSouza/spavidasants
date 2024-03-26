export default function sanitizeHtml(html) {
    // Cria uma lista de tags permitidas
    const allowedTags = ['div', 'span', 'a', 'p', 'br', 'img'];
  
    // Cria uma lista de atributos permitidos
    const allowedAttrs = {
      'a': ['href', 'title'],
      'img': ['src', 'alt'],
    };
  
    // Cria um documento HTML em memória
    const doc = document.implementation.createHTMLDocument('');
  
    // Cria um elemento "div" no documento
    const div = doc.createElement('div');
  
    // Define o conteúdo HTML no elemento "div"
    div.innerHTML = html;
  
    // Percorre todos os elementos filhos do "div"
    for (const element of div.children) {
      // Verifica se a tag do elemento está na lista de tags permitidas
      if (!allowedTags.includes(element.tagName.toLowerCase())) {
        // Remove o elemento do DOM
        element.parentNode.removeChild(element);
      } else {
        // Percorre todos os atributos do elemento
        for (const attr of element.attributes) {
          // Verifica se o atributo está na lista de atributos permitidos para a tag
          if (!allowedAttrs[element.tagName.toLowerCase()].includes(attr.name)) {
            // Remove o atributo do elemento
            element.removeAttribute(attr.name);
          }
        }
      }
    }
  
    // Retorna o HTML sanitizado
    return div.innerHTML;
  }
  
  