
import  "../data.js"
import "./components/home_page/home_page.js"

class AppContainer extends HTMLElement{


    constructor(){
    super();
    this.attachShadow({mode: 'open'})

    }
    connectedCallback(){
        this.render();

    }
    
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

 

customElements.define('app-container', AppContainer);