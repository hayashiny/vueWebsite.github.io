<template>
    <div id="vueLink">
        <div id="titleClass" class="titleClass">
            <h1 id="title">Order</h1>
            <p id="slogan">Simply easier</p>
            <a id="direction" href="#map">Directions</a>
        </div>
        <div class="bannerIMG"></div>
        <h1 id="name">Hayashi</h1>
        <div class="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/menu">Menu</router-link>
            <router-link to="/order">Order</router-link>
        </div>

        <div class="Container">
            <div class="hl">
                <h1>Hours | Location</h1>
                <p id="location">2901 Ocean Ave, <br>Brooklyn NY, 11235</p>
                <br>
                <div>
                    <h3>6 Days A Week | Closed Monday</h3>
                    <p>Tuesday-Thursday: 11:30AM - 10:30PM</p>
                    <p>Friday: 11:30AM - 11PM</p>
                    <p>Saturday: 12AM - 11PM</p>
                    <p>Sunday: 12AM - 10:30PM</p>
                </div>
                <br>
            </div>
        </div>

        <div class="Container">
            <div class="order">
                <h1>Ordering</h1>
                <p id="orderInfo">Rather stay in the comfort of your home? We understand many of us are busy and simply don't have the time, so we're happy to provide delievery or pickup orders! Simply click on one of the available delivery services! <span style="font-style:italic;font-size:smaller;font-family:Helvetica, sans-serif;">(prices may differ depending on seller)</span></p>
                <a target="_blank" href="https://www.delivery.com/cities/brooklyn/categories/restaurant/hayashi-sushi?address="><span id="deliverycom"><img class="button" src="src/assets/ForWebsite/delivery button.png"></span></a>
                <a target="_blank" href="https://www.grubhub.com/restaurant/hayashi-japanese-fusion-2901-ocean-ave-brooklyn/81593"><span id="grubhub"><img class="button" src="src/assets/ForWebsite/grubhub button.png"></span></a>
                <a target="_blank" href="https://www.doordash.com/business/hayashi-sushi-250726/menu/"><span id="doordash"><img class="button" src="src/assets/ForWebsite/doordash button.png"></span></a>
                <a target="_blank" href="https://www.ubereats.com/new-york/food-delivery/hayashi/zFVOTplQRP-M6Y7zut4y2g?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkhheWFzaGklMjBTdXNoaSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUo0WGVCNldKRXdva1IyYVIyZk1ScDhwQSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0E0MC41OTA2NSUyQyUyMmxvbmdpdHVkZSUyMiUzQS03My45NDk1MjY3JTdE"><span id="ubereats"><img class="button" src="src/assets/ForWebsite/ubereats button.png"></span></a>
                <p style="margin-bottom:25px;line-height:20px;">Or if online ordering isn't your thing, feel free to call us at:</p>
                <a id="telephone" href="tel:718-368-3668">718-368-3668</a>
                <br>
                <a id="telephone" style="line-height:100px;" href="tel:718-368-3667">718-368-3667</a>
            </div>
        </div>

        <div class="Container">
            <div id="map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12119.145929800734!2d-73.9495447!3d40.5904682!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x90f269c47c76a4d9!2sHayashi%20Sushi!5e0!3m2!1sen!2sus!4v1607046726158!5m2!1sen!2sus" width="100%" height="800px" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>
        </div>
    </div>
</template>

<script>
export default({
    created: function(){
        window.addEventListener('scroll', this.scrollTitle);
    },
    methods: {
        scrollTitle(){
            var titleClass = document.getElementById('titleClass');        
            if(window.screen.width >= 320 && window.screen.width <= 812){
                if(window.scrollY > 100){
                    titleClass.style.opacity = "0";
                    titleClass.style.transform = "translate(-50%,200%)";
                }else{
                    titleClass.style.transform = "translate(-50%,-50%)";
                titleClass.style.opacity = "1";
                }
            }else if(window.scrollY > 500){
                titleClass.style.opacity = "0";
                titleClass.style.transform = "translate(-50%,200%)";
            }else{
                titleClass.style.transform = "translate(-50%,-50%)";
                titleClass.style.opacity = "1";
            }

            console.log(window.scrollY);
        }
    }
});
</script>

<style scoped>
html {
    overflow-y:scroll;
    scroll-behavior:smooth;
    margin-bottom:50px;
}

body{
    background: url("/src/assets/ForWebsite/background.png");
    margin:0px;
    overflow:hidden;
}

.bannerIMG{
    background-image:url("/src/assets/ForWebsite/carrot bird.png");
    background-size:100% 100%;
    background-repeat:no-repeat;
    width:100%;
    height:1200px;
    filter:blur(6px);
    overflow:hidden;
    margin:-6px -12px -10px -3px;
    z-index:-99;
    transform:scale(1.03);
}

#name{
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color:rgb(255, 255, 255);
    position:absolute;
    top:0%;
    left:1%;
}

.titleClass{
    display:block;
    top:500px;
    left:50%;
    position:absolute;;
    overflow:hidden;
    z-index:10;
    transform: translate(-50%, -50%);
}

#titleClass{
    position:fixed;
    opacity:1;
    transition:all 200ms ease-in-out;
}


#title{
    font-family:AvantGarde;
    color:rgb(255, 255, 255);
    margin:auto;
    z-index:10;
    font-size:80px;
    text-align:center;
    opacity:1;
    transition:all 200ms ease-in-out;
}

#slogan{
    font-family:AvantGarde;
    color:white;
    margin:auto;
    z-index:10;
    text-align:center;
    font-size:30px;
    transition:all 200ms ease-in-out;
}

.titleClass a{
    font-size:20px;
    color:white;
    text-decoration:none;
    border-bottom:1px solid currentColor;
    padding:5px;
    font-family:AvantGarde;
    line-height:50px;
    margin-left:60px;
    transition:all 200ms ease-in-out;
}

.titleClass a:hover{
    background-color:rgba(124, 124, 124, 0.541);
    border-bottom:none;
}

.nav{
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color:black;
    font-size:20px;
    position: absolute;
    top:2%;
    right:1%;
    word-spacing:20px;
    transition:all 200ms ease-in-out;
}

.nav a{
    text-decoration:none;
    padding:10px;
}

.nav a:link{
    color:white;
}

.nav a:visited{
    color:white;
}

.nav a:hover{
    background-color:rgba(146, 146, 146, 0.432);
}

#location{
    line-height:20px;
}

.Container{
    width:1200px;
    padding-top:100px;
    margin:auto;
}

.hl{
    color:black;
    font-family:AvantGarde;
    height:400px;
    width:500px;
    padding:20px;
    line-height:5px;
    float:left;
    font-weight:bold;
    background-color:#f0f4e38f;
    transform:translate(0%,10%);
}

.order{
    color:black;
    font-family:AvantGarde;
    height:403px;
    width:500px;
    padding:20px;
    line-height:5px;
    float:right;
    font-weight:bold;
    background-color:#f0f4e38f;
    transform:translate(0%,-13%);
}

#telephone{
    font-size:25px;
    text-decoration:none;
    border-bottom:2px solid currentcolor;
    color:black;
    transition:all 200ms ease-in-out;
    padding:3px;
}

#telephone:hover{
    background-color:#8d8d8d86;
    color:white;
}

#orderInfo{
    line-height:20px;
}

.button{
    width:110px;
    height:55px;
    padding:5px;
}

#deliverycom img{
    opacity:0.5;
    transition:all 200ms ease-in-out;
}

#deliverycom:hover img{
    opacity:1;
    transform:scale(1.2);
}

#grubhub img{
    opacity:0.5;
    transition:all 200ms ease-in-out;
}

#grubhub:hover img{
    opacity:1;
    transform:scale(1.2);
}

#doordash img{
    opacity:0.5;
    transition:all 200ms ease-in-out;
}

#doordash:hover img{
    opacity:1;
    transform:scale(1.2);
}

#ubereats img{
    opacity:0.5;
    transition:all 200ms ease-in-out;
}

#ubereats:hover img{
    opacity:1;
    transform:scale(1.2);
}

#note{
    font-family:Helvetica, sans-serif;
    font-style:italic;
}

#map{
    margin-top:400px;
    height:800px;
    border:30px solid #d2dfb4;
}

@font-face{
    font-family:AvantGarde;
    src:url('/src/assets/ForWebsite/AvantGardeGothicLight.woff');
}

@media screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 2){
    .titleClass{
        top:200px;
    }

    .bannerIMG{
        height:500px;
        margin-bottom:-80px;
        background-position:center;
        background-size: cover;
    }

    .nav{
        word-spacing:5px;
    }

    #title{
        font-size:40px;
    }

    #slogan{
        font-size:15px;
    }

    #direction{
        font-size:15px;
        margin-left:17px;
    }

    .Container{
        display:block;
    }

    .hl{
        max-width:340px;
        height:500px;
    }

    .order{
        float:none;
        margin-top:500px;
        max-width:340px;
        height:500px;
    }

    #map{
        margin-top:0px;
        width:320px;
        height:800px;
    }

    #map iframe{
        width:320px;
        height:800px;
    }
  }

@media screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px) 
  and (-webkit-device-pixel-ratio: 2){
    .titleClass{
        top:200px;
    }

    .bannerIMG{
        height:500px;
        margin-bottom:-80px;
    }

    .nav{
        word-spacing:5px;
    }

    #title{
        font-size:40px;
    }

    #slogan{
        font-size:15px;
    }

    #direction{
        font-size:15px;
        margin-left:17px;
    }

    .Container{
        display:block;
    }

    .hl{
        max-width:320px;
        height:500px;
    }

    .order{
        float:none;
        margin-top:500px;
        max-width:300px;
        height:500px;
    }

    #map{
        margin-top:0px;
        width:255px;
        height:600px;
    }

    #map iframe{
        width:255px;
        height:600px;
    }
  }
  
  @media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 3){
      .bannerIMG{
          height:500px;
          margin-bottom:-80px;
          background-position:center;
          background-size: cover;
      }
  
      .nav{
          word-spacing:5px;
      }
  
      #navigation{
          margin-top:200px;
          transform:translateY(110px);
      }
  
      #title{
          font-size:40px;
      }
  
      #slogan{
          font-size:10px;
      }
  
      .titleClass{
          top:200px;
      }
  
      #titleS1{
          font-size:30px;
      }
  
      #titleS2{
          font-size:30px;
      }
  }
  
@media screen 
and (min-width: 1300px) 
and (max-width: 1600px) 
and (-webkit-min-device-pixel-ratio: 2)  {
    .titleClass{
        top:480px;
    }
}

@media screen 
and (min-device-width:1200px)
and (max-device-width:1300px)
and (-webkit-min-device-pixel-ratio:1){
    .titleClass{
        top:480px;
    }
}

</style>