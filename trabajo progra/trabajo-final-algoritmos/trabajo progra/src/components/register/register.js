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
         
        
        
    }
}
customElements.define('app-register', register)
