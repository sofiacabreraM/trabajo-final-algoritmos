import"../export.js"
import  dataimage from "../home_page/data.js"

class homepage extends HTMLElement {

    static get observedattributes(){
       return("user_mame", "publication", "likes", "description")
    }
    
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){    console.log(dataimage)
        this.render();
    }

    attributesChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }

    render(){
<<<<<<< HEAD
      const datimg = dataimage.map(({user,thumbnail}) => `<app-stories user="${user}" thumbnail="${thumbnail}"></app-stories>`)

        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../dist/../src/components/home_page/homeP.css">

        <section class= "principal-container">
          <nav class= "search-barlogo">
            <div class = "logo"> <img class = "logo2"src = "../../../image/logo.png" alt ="pichsphere logo"> </div>
            <div class = "search-bar"> <input class = "search2" type = "text" placeholder="      Look for it..."> </input> </div>
          </nav>

         <section class = "Stories2"> ${datimg.join ("")} </section>
     
     <section class="post">

  <div class="post-header">
    <img src="../../../image/miukidip1.png" alt="profile photo">
    <h2>Miukidu</h2>
  </div>

  <div class="post-content">
    <img src="../../../image/post1.png" alt="image post">
  </div>



  <div class="post-buttons">

    <div class="buttons">
    <img class ="like" src="../../../image/like.png" alt="like">
    <img class ="coment" src="../../../image/coments.png" alt="Coment">
    <img class ="Share" src="../../../image/share.png" alt="Share">
    <img class ="keep" src="../../../image/guardar.png" alt="keep">
    </div>

  <div class="post-footer">
    <div class="likes">
      <p> 590 likes</p>
    </div>

    </div>

    <div class="comments">
       <p class = "M"> Maria_camila</p> <p class = "B"> beautiful sun</p>
    </div>

</section>



<section class="post2">

  <div class="post-header">
    <img src="../../../image/josefp.png" alt="profile photo">
    <h2>Josefp.s</h2>
  </div>

  <div class="post-content">
    <img src="../../../image/post2.png" alt="image post">
  </div>



  <div class="post-buttons">

    <div class="buttons">
    <img class ="like" src="../../../image/like.png" alt="like">
    <img class ="coment" src="../../../image/coments.png" alt="Coment">
    <img class ="Share" src="../../../image/share.png" alt="Share">
    <img class ="keep" src="../../../image/guardar.png" alt="keep">
    </div>

  <div class="post-footer">
    <div class="likes">
      <p> 1,022 likes</p>
    </div>

    </div>

    <div class="comments">
       <p class = "M"> Maria_camila</p> <p class = "B"> Nice sun</p>
    </div>

</section>


      <section>
              </section>`;
=======
        this.shadowRoot.innerHTML = `<link rel="stylesheet" href="../src/components/home_page/homeP.css">
        <section class="containgeneral">
        <section class="containerLeft">
        <img id="img_profile" alt="imagen chica" src="${"https://i.pinimg.com/564x/90/1d/88/901d884af8a56eed59d4578291a70aaf.jpg"}"></img>
        <h5 id="user_name">@laitana</h5>
        <div class="profile">
        <nav class="post">
        <h4>9</h4>
        <h5>post</h5>
        </nav>
        <nav class="followers">
        <h4>15k</h4>
        <h5>followers</h5>
        </nav>
        <nav class="following">
        <h4>55</h4>
        <h5>following</h5>
        </nav>
        </div>
        <div class="interactions">
       <div class=menu_interactions> <img class ="intercation_img" src="../imagenes/home2.png" alt="me gusta"></img>
       <h4 id="color">home</h4></div>
        <h4>notifications</h4>
        <h4>explore</h4>
        <h4>messages</h4>
        <h4>profile</h4>
        </div>
     
        </section>
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
        
        </section>
       
        </section>
        `
>>>>>>> 30ae6dd21bc00df81c4acf678bf8b672dc01897a
    }

}



customElements.define('element-homepage', homepage); 