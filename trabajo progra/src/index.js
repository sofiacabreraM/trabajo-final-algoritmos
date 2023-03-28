<<<<<<< HEAD
import "./components/export.js"
=======

import  "../data.js"
import "./components/home_page/home_page.js"
>>>>>>> 30ae6dd21bc00df81c4acf678bf8b672dc01897a

class AppContainer extends HTMLElement{


    constructor(){
    super();
    this.attachShadow({mode: 'open'})

    }
    connectedCallback(){
        this.render();

    }
    
<<<<<<< HEAD
    
    render() {
        this.shadowRoot.innerHTML = `<element-homepage></element-homepage>`;
    }
}
=======
    render(){
        
        const homepage = document.createElement('element-homepage');
this.shadowRoot.appendChild(homepage)
        // data.forEach((element) => {
          // this.shadowRoot.innerHTML += `<element-homepage>
          // username="${element.user_name}" publication="${element.publication}" likes="${element.likes}" description="${element.description}"
           // </element-homepage>`
      // });
      section.appendChild(homepage)
      this.shadowRoot.appendChild(homepage)
    }
}

 
>>>>>>> 30ae6dd21bc00df81c4acf678bf8b672dc01897a

customElements.define('app-container', AppContainer);