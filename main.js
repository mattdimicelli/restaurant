(()=>{"use strict";const n=()=>{document.querySelector("div#content").innerHTML='\n  <div class="background-container">\n  <header>\n          <h1><span style="color: red;">El </span><span style="color: white;">Gri</span><span style="color: blue;">ngo\'s </span><span style="color: green;">MEXI</span><span style="color: white;">CAN </span><span style="color: red;">Tacos</span></h1>\n          <ul class="tabs">\n              <li class="home">Home</li>\n              <li class="menu">Menu</li>\n              <li class="contact">Contact</li>\n          </ul>\n      </header>\n  <div class="foreground-container">\n      <h2>The best tacos north of the border!</h2>\n      <h2>¡Los mejores tacos en el otro lado!</h2>\n      <img src="../images/flags.png" alt="an american flag on the left and a mexican flag on the right" />\n      <p>Visit us all week from 6pm to 2am!</p>\n      <p> ¡Visítanos lunes a domingo de 6pm a 2am! </p>\n  </div>\n  <footer>\n      <span class="copyright">Copyright © 2021 mattdimicelli</span>\n      <a href="https://github.com/mattdimicelli"><img src="../images/GitHub-Mark-32px.png" alt="github logo" /></a>\n  </footer>\n</div>\n',document.querySelector("style").innerHTML="\n  * {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\np {\n  margin-bottom: 1rem;\n  font-size: 2rem;\n}\n\n.foreground-container h2, p {\n  font-size: 1.7rem;\n  margin-bottom: 1rem;\n}\n\n.background-container {\n  background-image: url('../images/taco-plancha.jpg');\n  background-size: cover;\n  height: 100vh;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\nheader{\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  height: 20vh;\n  background-color: rgba(0,0,0,0.85);\n  width: 100%;\n}\n\nheader ul.tabs {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  list-style: none;\n}\n\nheader ul.tabs > li {\n  padding: 2rem;\n  font-size: 2.5rem;\n}\n\nheader ul.tabs > li:hover {\n  text-decoration: underline;\n}\n\nheader h1 {\n  font-size: 4rem;\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.foreground-container {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid red;\n  background-color: rgba(0,0,0,0.60);\n  max-width: 650px;\n  align-items: center;\n  color: white;\n  width: 100vw;\n  text-align: center;\n  padding: 3rem;\n}\n\n.foreground-container img {\n  max-width: 300px;\n  width: 50%;\n  margin-bottom: 2rem;\n  margin-top: 2rem;\n}\n\nfooter {\nfont-size: 1.5rem;\nheight: 5vh;\nflex-direction: row;\ncolor: white;\ndisplay: flex;\njustify-content: center;\nbackground-color: rgba(0,0,0,0.60);\nwidth: 100%;\nalign-items: center;\nfont-size: 1.7rem;\n}\n\n.copyright {\n  margin-right: 1rem;\n}\n\n@media only screen and (min-width: 450px) {\n  .foreground-container h2, p {\n      font-size: 2rem;\n  }\n}\n\n@media only screen and (min-width: 900px) {\n  .foreground-container h2, p {\n      font-size: 2.4rem;\n  }\n}"},e=()=>{document.querySelector("div#content").innerHTML=' <div class="background-container">\n    <header>\n            <h1><span style="color: red;">El </span><span style="color: white;">Gri</span><span style="color: blue;">ngo\'s </span><span style="color: green;">MEXI</span><span style="color: white;">CAN </span><span style="color: red;">Tacos</span></h1>\n            <ul class="tabs">\n                <li class="home">Home</li>\n                <li class="menu">Menu</li>\n                <li class="contact">Contact</li>\n            </ul>\n        </header>\n    <div class="foreground-container">\n        <div class="taco">\n            <img src="../images/carnitas.jpg" alt="carnitas taco"  />\n            <h2>Carnitas</h2>\n        </div>\n        <div class ="taco">\n            <img src="../images/chorizo.jpg" alt="chorizo taco" />\n            <h2>Chorizo</h2>\n        </div>\n        <div class="taco">\n            <img src="../images/suadero.jpg" alt="saudero taco" />\n            <h2>Suadero</h2>\n        </div>\n        <div class="taco">\n            <img src="../images/pollo.jpg" alt="pollo taco" />\n            <h2>Pollo</h2>\n        </div>\n        <div class="taco">\n            <img src="../images/tripa.jpg" alt="tripa taco" />\n            <h2>Tripa</h2>\n        </div>\n        <div class="taco">\n            <img src="../images/al-pastor.jpg" alt="al pastor taco" />\n            <h2>Al Pastor</h2>\n        </div>\n        <div class="taco">\n            <img src="../images/asada.jpg" alt="asada taco" />\n            <h2>Asada</h2>\n        </div>\n        <div class="taco">\n            <img src="../images/buche.png" alt="buche taco" />\n            <h2>Buche</h2>\n        </div>\n    \n    \n\n        \n    </div>\n    <footer>\n        <span class="copyright">Copyright © 2021 mattdimicelli</span>\n        <a href="https://github.com/mattdimicelli"><img src="../images/GitHub-Mark-32px.png" alt="github logo" /></a>\n    </footer>\n</div>',document.querySelector("style").innerHTML="     * {\n        box-sizing: border-box;\n        padding: 0;\n        margin: 0;\n    }\n\n    html {\n        font-size: 62.5%;\n    }\n\n    p {\n        margin-bottom: 1rem;\n        font-size: 2rem;\n    }\n\n    .foreground-container h2, p {\n        font-size: 1.7rem;\n        margin-bottom: 1rem;\n    }\n\n    .background-container {\n        background-image: url('../images/taco-plancha.jpg');\n        background-size:cover;\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        z-index: -1;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-between;\n    }\n\n    header{\n        color: white;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-around;\n        height: 20vh;\n        background-color: rgba(0,0,0,0.85);\n        width: 100%;\n    }\n\n    header ul.tabs {\n        display: flex;\n        justify-content: center;\n        width: 100%;\n        list-style: none;\n    }\n\n    header ul.tabs > li {\n        padding: 2rem;\n        font-size: 2.5rem;\n    }\n\n    header ul.tabs > li:hover {\n        text-decoration: underline;\n    }\n\n    header h1 {\n        font-size: 4rem;\n        text-align: center;\n        margin-top: 2rem;\n    }\n\n    .foreground-container {\n        display: flex;\n        flex-direction: row;\n        border: 1px solid red;\n        background-color: rgba(0,0,0,0.60);\n        max-width: 800px;\n        align-items: space-evenly;\n        color: white;\n        width: 100vw;\n        text-align: center;\n        padding: 2rem;\n        justify-content: space-evenly;\n        flex-wrap: wrap;\n        margin-bottom: 2rem;\n        margin-top: 2rem;\n    }\n\n    .taco {\n        background-color: rgba(0,0,0,0.60);\n        border: 1px solid green;\n        padding-left: 0;\n        padding-right: 0;\n        margin: 2rem;\n        width: 90%;\n        max-width: 300px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        transition: background 0.25s;\n    }\n\n    .foreground-container img {\n\n        max-width: 500;\n        max-height: 500;\n        width: 150px;\n        height: 150px;\n        object-fit: cover;\n        margin: 3rem;\n        margin-bottom: 1rem;\n        border-radius: 20px;\n    }\n\n    footer {\n      font-size: 1.5rem;\n      height: 5vh;\n      flex-direction: row;\n      color: white;\n      display: flex;\n      justify-content: center;\n      background-color: rgba(0,0,0,0.60);\n      width: 100%;\n      align-items: center;\n      font-size: 1.7rem;\n    }\n\n    .copyright {\n        margin-right: 1rem;\n    }\n\n    .white {\n        background-color: rgba(255, 255, 255, 0.10)\n    }\n\n    @media only screen and (min-width: 450px) {\n        .foreground-container h2, p {\n            font-size: 2rem;\n        }\n    }\n\n    @media only screen and (min-width: 900px) {\n        .foreground-container h2, p {\n            font-size: 2.4rem;\n        }\n    }\n    \n   ";const n=document.querySelectorAll("div.taco");for(let o of n)o.addEventListener("mouseover",e),o.addEventListener("mouseout",t);function e(n){this.classList.add("white")}function t(n){this.classList.remove("white")}};n();let t=document.querySelector("ul.tabs");t.addEventListener("click",(function o(i){switch(i.target.className){case"home":n(),t=document.querySelector("ul.tabs"),t.addEventListener("click",o);break;case"menu":e(),t=document.querySelector("ul.tabs"),t.addEventListener("click",o);break;case"contact":document.querySelector("div#content").innerHTML='\n    <div class="background-container">\n    <header>\n            <h1><span style="color: red;">El </span><span style="color: white;">Gri</span><span style="color: blue;">ngo\'s </span><span style="color: green;">MEXI</span><span style="color: white;">CAN </span><span style="color: red;">Tacos</span></h1>\n            <ul class="tabs">\n                <li class="home">Home</li>\n                <li class="menu">Menu</li>\n                <li class="contact">Contact</li>\n            </ul>\n        </header> \n    <div class="foreground-container">\n        <h2><span>Phone:</span> 561-123-3456</h2>\n        <h2><span>Address:</span> On the beach at the end of S 39th St in Mexico Beach, FL, 32456</h2> \n        <img src="../images/mexico-beach.png" />\n    </div>\n    <footer>\n        <span class="copyright">Copyright © 2021 mattdimicelli</span>\n        <a href="https://github.com/mattdimicelli"><img src="../images/GitHub-Mark-32px.png" alt="github logo" /></a>\n    </footer>\n</div>',document.querySelector("style").innerHTML="\n    * {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nhtml {\n    font-size: 62.5%;\n}\n\np {\n    margin-bottom: 1rem;\n    font-size: 2rem;\n}\n\n.foreground-container h2, p {\n    font-size: 1.7rem;\n    margin: 1rem;\n\n}\n\n.foreground-container span {\n    font-size: 2.5rem;\n    margin-right: 1rem;\n}\n\n.background-container {\n    background-image: url('../images/taco-plancha.jpg');\n    background-size: cover;\n    height: 100vh;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    z-index: -1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\nheader{\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    height: 20vh;\n    background-color: rgba(0,0,0,0.85);\n    width: 100%;\n}\n\nheader ul.tabs {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    list-style: none;\n}\n\nheader ul.tabs > li {\n    padding: 2rem;\n    font-size: 2.5rem;\n}\n\nheader ul.tabs > li:hover {\n    text-decoration: underline;\n}\n\nheader h1 {\n    font-size: 4rem;\n    text-align: center;\n    margin-top: 2rem;\n}\n\n.foreground-container {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid red;\n    background-color: rgba(0,0,0,0.60);\n    max-width: 570px;\n    align-items: center;\n    color: white;\n    width: 100vw;\n    text-align: center;\n    padding: 2rem 0;\n    margin-bottom: 2rem;\n    margin-top: 2rem;\n}\n\n.foreground-container img {\n    width: 90%;\n    max-width: 600px;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    border: 1px solid green;\n}\n\nfooter {\n  font-size: 1.5rem;\n  height: 5vh;\n  flex-direction: row;\n  color: white;\n  display: flex;\n  justify-content: center;\n  background-color: rgba(0,0,0,0.60);\n  width: 100%;\n  align-items: center;\n  font-size: 1.7rem;\n}\n\n.copyright {\n    margin-right: 1rem;\n}\n\n\n\n@media only screen and (min-width: 450px) {\n    .foreground-container h2, p {\n        font-size: 2rem;\n    }\n}\n\n@media only screen and (min-width: 900px) {\n    .foreground-container h2, p {\n        font-size: 2.4rem;\n    }\n}\n\n\n",t=document.querySelector("ul.tabs"),t.addEventListener("click",o)}}))})();