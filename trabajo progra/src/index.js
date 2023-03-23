import "./components/export.js"

class AppContainer extends HTMLElement{
    constructor(){
    super();
    this.attachShadow({mode: 'open'})

    }
    connectedCallback(){
        this.render();

    }
    
    
    render() {
        this.shadowRoot.innerHTML = `<element-homepage></element-homepage>`;
    }
}

customElements.define('app-container', AppContainer);