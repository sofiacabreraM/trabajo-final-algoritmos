class containerRight extends HTMLElement {

    static get observedattributes(){
        return("user_mame", "publication", "likes", "description")
    }
    
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    attributesChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `<link rel="stylesheet" href="../src/components/containerRight/ContainerRight.css">
        <section class="containerRight">
        <div class="contenido1">
        <div class="search">
        <h5 id="h5search">Search</h5>
        </div>
        <button>add photo</button>
        </div>
        <div class="histories">
        <img id="img_histories" alt="imagen chica" src="${"https://i.pinimg.com/564x/99/87/11/998711ad0d1feb2e201f3690edf2ae41.jpg"}"></img>
        <img id="img_histories" alt="imagen chica" src="${"https://i.pinimg.com/564x/af/43/59/af4359d825a64070df92961c14e83d37.jpg"}"></img>
        <img id="img_histories" alt="imagen chica" src="${"https://i.pinimg.com/564x/d6/00/49/d600490f20fd8ef23c3bcea1f4f158d8.jpg"}"></img>
        <img id="img_histories" alt="imagen chica" src="${"https://i.pinimg.com/564x/a3/13/82/a31382c7a9334a7b9ee1c2754608f5d1.jpg"}"></img>
        <img id="img_histories" alt="imagen chica" src="${"https://i.pinimg.com/564x/fa/03/99/fa03996787453f56c7215c6fd916877f.jpg"}"></img>
        <img id="img_histories" alt="imagen chica" src="${"https://i.pinimg.com/564x/7c/45/ba/7c45ba5ca65584ba6f410ad8e4008e28.jpg"}"></img>
        <img id="img_histories" alt="imagen chica" src="${"https://i.pinimg.com/564x/f9/06/6c/f9066c6f1d9dda177587c759a240cb96.jpg"}"></img>
        <img id="img_histories" alt="imagen chica" src="${"https://i.pinimg.com/564x/af/43/59/af4359d825a64070df92961c14e83d37.jpg"}"></img>
        <img id="img_histories" alt="imagen chica" src="${"https://i.pinimg.com/564x/d6/00/49/d600490f20fd8ef23c3bcea1f4f158d8.jpg"}"></img>
        </div>
        <section class="publication">
        <div class="publication_top">
        <img id="img_histories" alt="imagen chica" src="${"https://i.pinimg.com/564x/7c/45/ba/7c45ba5ca65584ba6f410ad8e4008e28.jpg"}"></img>
        <h5 id="user_name1">@Maria_camila</h5>
        <h5 id="time">6min</h5>
        <h5 id="menu">...</h5>
        </div>
        <img id="img_publication" alt="imagen chica" src="${"https://i.pinimg.com/564x/96/69/67/966967b8a715f50a892c238e464a4fd6.jpg"}"></img>
        <div clase="botones">
    <img class ="me gusta" src="../imagenes/heart.png" alt="me gusta">
    <img class ="comentario" src="../imagenes/send2.png" alt="Comentario">
    <img class ="Compartir" src="../imagenes/Vector.png" alt="Compartir">
    <img class ="guardar" src="../imagenes/archive.png" alt="guardar">
    </div>
        <h5 id="likes">309likes</h5
        <div class="publication_inf">
        <p id="description">Maria_Camila:beautiful sun</p>
        </div>
        
        </section>
        

       
    `
}

}

customElements.define('element-containerRight', containerRight); 