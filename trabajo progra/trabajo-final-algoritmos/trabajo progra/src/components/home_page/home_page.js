class homepage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../dist/../src/components/home_page/homeP.css">

        <section class= "principal-container">
          <nav class= "search-barlogo">
            <div class = "logo"> <img class = "logo2"src = "../../../image/logo.png" alt ="pichsphere logo"> </div>
            <div class = "search-bar"> <input class = "search2" type = "text" placeholder="      Look for it..."> </input> </div>
          </nav>

     <section class= "stories"> 
     
     <div class="story-container">

     <div class="story-circle"></div>
     <h1 class="story-title">miukidi </h1>
      </div>

      <div class="story-container">

     <div class="story-circle2"></div>
     <h2 class="story-title">kunis3.png </h2>
     </div>

      <div class="story-container">

     <div class="story-circle3"></div>
     <h3 class="story-title">Sarah.9</h3>
     </div>


      <div class="story-container">

     <div class="story-circle4"></div>
     <h4 class="story-title">kyle.2</h4>
     </div>
     

     </section>
     
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
    }

}

customElements.define('element-homepage', homepage);