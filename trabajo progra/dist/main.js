(()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="\n        <element-message></element-message>\n        <element-notification></element-notification> \n        <element-search></element-searh>\n        <element-profile></element-profile> \n        <element-message></element-message>\n        <element-homepage></element-homepage>"}}customElements.define("App-container",e)})();