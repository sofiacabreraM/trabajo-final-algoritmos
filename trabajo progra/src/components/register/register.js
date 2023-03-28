class register extends HTMLElement {
    constructor(){
        super(); 
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = ``
         
        const section = document.createElement('section');
        const title = document.createElement('h2')
        const inicio = document.createElement('app-inicio')
        title.textContent = 'Caffeto'
         section.appendChild(title)
         

         this.shadowRoot.appendChild(section)
        
    }
}
customElements.define('app-register', register)
