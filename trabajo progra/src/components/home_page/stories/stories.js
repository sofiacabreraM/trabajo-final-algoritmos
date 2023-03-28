class Stories extends HTMLElement {

    user = ""
    thumbnail = ""

    static get observedAttributes(){
        return["user","thumbnail"]
    }

    constructor(){
        super(); 
        this.attachShadow({mode: 'open'})

    }

    connectedCallback(){
        this.render();
      
    } 
    attributeChangedCallback(propName,_,newValue){
        this[propName] = newValue; this.render()
    }

    render(){
        this.shadowRoot.innerHTML = `

        <link rel="stylesheet" href="../dist/../src/components/home_page/stories/stories.css">

        
        <section class= "stories"> 
     
        <div class="story-container">
   
        <div class="story-circle">
            <img src="${this.thumbnail}" alt="miukidi.png">
        </div>
        <h1 class="story-title">${this.user} </h1>
         </div>
   
        </section>`
         
        
        
    }
}
customElements.define('app-stories', Stories)
