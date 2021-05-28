<template>
    <div id="vueLink">
        <div id="titleClass" class="titleClass">
            <h1 id="title">Menu</h1>
            <p id="slogan">Explore Happiness</p>
        </div>
        <div class="bannerIMG"></div>
        <h1 id="name">Hayashi</h1>
        <div class="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/menu">Menu</router-link>
            <router-link to="/order">Order</router-link>
        </div>
        <div id="navigation">
            <div id="navigationHeader">
                <div id="textIMG">
                    <img v-on:click="navOpen()" id="navigationIcon" src="/src/assests/ForWebsite/nav bars menu.png">
                </div>
            </div>
            <div id="buttons">
                    <button id="butStyle" v-on:click="setMenu('appetizer')">Appetizer</button>
                    <button id="butStyle" v-on:click="setMenu('asian_fusion')">Asian Fusion</button>
                    <button id="butStyle" v-on:click="setMenu('a_la_carte')">A La Carte</button>
                    <button id="butStyle" v-on:click="setMenu('entree')">Entrée</button>
                <br>
                    <button id="butStyle" v-on:click="setMenu('fried_rice')">Fried Rice</button>
                    <button id="butStyle" v-on:click="setMenu('noodles')">Noodles</button>
                    <button id="butStyle" v-on:click="setMenu('don_buri')">Don Buri</button>
                    <button id="butStyle" v-on:click="setMenu('hibachi')">Hibachi</button>
                    <button id="butStyle" v-on:click="setMenu('tempura')">Tempura</button>
                <br>
                    <button id="butStyle" v-on:click="setMenu('dinner_bento_box')">Dinner Bento Box</button>
                    <button id="butStyle" v-on:click="setMenu('hayashi_lunch')">Hayashi Lunch</button>
                    <button id="butStyle" v-on:click="setMenu('party_platter')">Party Platter</button>
                    <button id="butStyle" v-on:click="setMenu('special_rolls')">Special Rolls</button>
                    <button id="butStyle" v-on:click="setMenu('regular_rolls')">Regular Rolls</button>
                <br>
                    <button id="butStyle" v-on:click="setMenu('soup')">Soup</button>
                    <button id="butStyle" v-on:click="setMenu('salad')">Salad</button>
                    <button id="butStyle" v-on:click="setMenu('dessert')">Dessert</button>
                    <button id="butStyle" v-on:click="setMenu('beverages')">Beverages</button>
            </div>
        </div>
        <h2 id="disclaimer" style="margin-top:100px;">Prices are <span style="color:rgb(104, 104, 104);">NOT</span> updated in real time!<br/> Pease speak with an employee to ensure the correct price</h2>
        <div id="menus">
            <div class="container" id="a_la_carte">
                <div class="table">
                    <h1>A La Carte</h1>
                    <h2>Sushi & Sashimi</h2>
                    <h2>Special Price $2.25</h2>
                    <div class = "section1">
                        <div class="sec1" >
                            <p class = "choice">
                                Salmon<span class="extraR">Sake</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Fluke<span class="extraR">Hirame</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Shrimp<span class="extraR">Ebi</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Mackerel<span class="extraR">Saba</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Sea Bass<span class="extraR">Suzuki</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Crab Stick<span class="extraR">Kani</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Egg<span class="extraR">Tamago</span>
                                <br>
                            </p>
                        </div>
                        <div class="sec2">
                            <p class = "choice">
                                Inari<span class="extraR">Tofu Skin</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Red Snapper
                                <br>
                            </p>
                            <p class = "choice">
                                White Tuna
                                <br>
                            </p>
                            <p class = "choice">
                                Yellowtail<span class="extraR">Harmachi</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Squid<span class="extraR">Ika</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Hokki Gai<span class="extraR">Surf Clam</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Tuna<span class="extraR">Maguro</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Octopus<span class="extraR">Tako</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Smoked Salmon
                                <br>
                            </p>
                            <p class = "choice">
                                Eel<span class="extraR">Unagi</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Flying Fish Roe<span class="extraR">Masago</span>
                                <br>
                            </p>
                        </div>
                    </div>
    
                    <div class="section2">
                        <hr>
                        <div class="sec1" >
                            <p class = "choice">
                                Spicy Salmon<span class="priceShift">3</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Spicy Tuna<span class="priceShift">3</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Black Tobiko<span class="priceShift">3</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Wasabi Tobiko<span class="priceShift">3</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Sweet Shrimp<span class="extra" style="float:none;"> Amaebi</span><span class="priceShift">3</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Black Pepper Tuna<span class="priceShift">3</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Spicy White Tuna<span class="priceShift">3</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Spicy Shrimp<span class="priceShift">3</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Salmon Roe<span class="extra" style="float:none;"> Ikura</span><span class="priceShift">3.5</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Lobster<span class="priceShift">4</span>
                                <br>
                            </p>
                        </div>
        
                        <div class="sec2">
                            <p class = "choice">
                                Fresh Scallop<span class="priceShift">6</span>
                                <br>
                            </p>
                            <p class = "choice">
                                King Salmon<span class="priceShift">5</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Fatty Yellowtail<span class="priceShift">5</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Jumbo Amaebi<span class="priceShift">6</span>
                                <br>
                            </p>
                            <p class = "choice">
                                King Crab<span class="priceShift">6</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Sea Urchin <span class="extra" style="float:none;"> Uni</span><span class="priceShift">S.P.</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Spicy Scallop<span class="priceShift">5</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Fatty Tuna<span class="extra" style="float:none;"> Toro</span> <span class="priceShift">S.P.</span>
                                <br>
                            </p>
                            <p class = "choice">
                                Fresh Oyster<span class="extra" style="float:none;"> Kumamoto</span><span class="priceShift">S.P.</span>
                                <br>
                            </p>
                        </div>  
                    </div>
                </div>
            </div>
            <div class = "container" id="appetizer">
                <div class = "table">
                    <h1>Appetizer</h1>
                    <h2>Sushi-Bar Appetizers</h2>
                    <div class = "section1">
                            <div class = "sec1" >
                                <div class="dish">  
                                    <p class = "choice">
                                        Baby Tako<span class="priceShift">9</span>
                                        <br>
                                        <strong class="detail">Baby Octopus</strong>
                                    </p>
                                    <p class = "choice">
                                        Kani or Tako Su<span class="priceShift">9</span>
                                        <br>
                                        <strong class="detail">Crabstick or octopus in ponzu sauce</strong>
                                    </p>
                                    <p class = "choice">
                                        Sunomono Combination<span class="priceShift">9</span>
                                        <br>
                                        <strong class="detail">Surf clam, shrimp, egg, octopus, crabstick, salmon in ponzu sauce</strong>
                                    </p>
                                    <p class = "choice">
                                        Tuna or Beef Tataki<span class="priceShift">10</span>
                                        <br>
                                        <strong class="detail">Sliced tuna or beef, masago w. chefs sauce</strong>
                                    </p>
                                    <p class = "choice">
                                        Black Pepper Tuna Sashimi<span class="priceShift">10</span>
                                        <br>
                                    </p>
                                    <p class = "choice">
                                        Carpaccio<span class="priceShift">12</span>
                                        <br>
                                        <strong class="detail">Salmon, tuna, yellowtail, avocado, spicy sauce and caviar</strong>
                                    </p>
                                    <p class = "choice">
                                        Spicy Salmon or Spicy Tuna Tartar<span class="priceShift">11</span>
                                        <br>
                                        <strong class="detail">Chopped tuna or salmon w. quail egg & caviar</strong>
                                    </p>
                                    <p class = "choice">
                                        Yellowtail Jalapeno<span class="priceShift">12</span>
                                        <br>
                                        <strong class="detail">Sliced yellowtail, jalapeno, massago w. chefs sauce</strong>
                                    </p>
                                    <p class = "choice">
                                        Fantastic Island<span class="priceShift">14</span>
                                        <br>
                                        <strong class="detail">Tuna, salmon, yellowtail & masago on avocado w. wasabi yuzu sauce</strong>
                                    </p>
                                    <p class = "choice">
                                        Wasabi Cracker<span class="priceShift">11</span>
                                        <br>
                                        <strong class="detail">Spicy Tuna or spicy salmon</strong>
                                    </p>
                                    <p class = "choice">
                                        Tri Color Tartar<span class="priceShift">14</span>
                                        <br>
                                        <strong class="detail">Chopped tuna, salmon, yellowtail in chefs sauce</strong>
                                    </p>
                                </div>
                            </div>
                            <div class = "sec2">
                                <div class = "dish">
                                    <p class = "choice">
                                        Kyoto Sea Breeze<span class="priceShift">13</span>
                                        <br>
                                        <strong class="detail">Spicy kani, shrimp & crunch wrapped in avocado bowl</strong>
                                    </p>
                                    <p class = "choice">
                                        Sushi Pizza<span class="priceShift">14</span>
                                        <br>
                                        <strong class="detail">Choice of tuna, salmon or eel with avocado, masago, crispy pancake, cheese & chefs special</strong>
                                    </p>
                                    <p class = "choice">
                                        Summer Appetizer<span class="priceShift">13</span>
                                        <br>
                                        <strong class="detail">Tuna, salmon, white tuna, avocado, w. rice paper & sweet chili sauce</strong>
                                    </p>
                                    <p class = "choice">
                                        Hawaiian Poke Bowl<span class="priceShift">13</span>
                                        <br>
                                        <strong class="detail">Tuna, salmon, white tuna, avocado, seaweed w. poke sauce</strong>
                                    </p>
                                    <p class = "choice">
                                        Sushi Cake<span class="priceShift">14</span>
                                        <br>
                                        <strong class="detail">Deep fried potato top with spicy tuna guacamole & sweet chili sauce</strong>
                                    </p>
                                    <p class = "choice">
                                        Duck Crepe<span class="priceShift">14</span>
                                        <br>
                                        <strong class="detail">Grill duck, mix green and cucumber wrap with pancake, spicy mayo and eel sauce</strong>
                                    </p>
                                    <p class = "choice">
                                        Black Ninja<span class="priceShift">14</span>
                                        <br>
                                        <strong class="detail">Spicy salmon, eel, mix green avocado & crunch werapped in rice paper w. spicy eel sauce</strong>
                                    </p>
                                    <p class = "choice">
                                        Tuna Dumpling<span class="priceShift">16</span>
                                        <br>
                                        <strong class="detail">Spicy tuna, avocado wrapped with tuna served yuzu sauce</strong>
                                    </p>
                                    <p class = "choice">
                                        Oyster Shot<span class="priceShift">17</span>
                                        <br>
                                        <strong class="detail">w. quail egg, caviar & chefs special sauce</strong>
                                    </p>
                                </div>
                        </div> 
                    </div>
        
                    <div class = "section2">
                        <hr/>
                        <br>
                        <h2 id="marginPush" style = "margin-bottom:0px;margin-top:0px;">Kitchen Appetizers</h2>
                        <div class = "sec1" >
                            <div class = "dish">
                                <p class = "choice">
                                    Agedashi Tofu<span class="priceShift">6</span>
                                    <br>
                                    <strong class="detail">Deep fried tofu</strong>
                                </p>
                                <p class = "choice">
                                    Cheese Cracker<span class="priceShift">7</span>
                                    <br>
                                </p>
                                <p class = "choice">
                                    Haru Maki<span class="extra">(3)</span><span class="priceShift">6</span>
                                    <br>
                                    <strong class="detail">Veg. spring roll</strong>
                                </p>
                                <p class = "choice">
                                    Edamame<span class="priceShift">5</span>
                                    <br>
                                </p>
                                <p class = "choice">
                                    Gyoza<span class="priceShift">6</span>
                                    <br>
                                    <strong class="detail">Pork or vegetable pan fried dumplings</strong>
                                </p>
                                <p class = "choice">
                                    Shumai<span class="priceShift">6</span>
                                    <br>
                                    <strong class="detail">Japanese shrimp dumpling, steamed or fried</strong>
                                </p>
                                <p class = "choice">
                                    Wasabi Shumai<span class="priceShift">6</span>
                                    <br>
                                </p>
                                <p class = "choice">
                                    French Fries<span class="priceShift">6</span>
                                    <br>
                                </p>
                                <p class = "choice">
                                    Miso Eggplant<span class="priceShift">8</span>
                                    <br>
                                </p>
                                <p class = "choice">
                                    Takoyaki<span class="extra">(6)</span><span class="priceShift">6</span>
                                    <br>
                                    <strong class="detail">Deep-fried tako ball</strong>
                                </p>
                                <p class = "choice">
                                    Age Chicken<span class="priceShift">7</span>
                                    <br>
                                    <strong class="detail">Deeo fried chicken</strong>
                                </p>
                                <p class = "choice">
                                    Fried Chicken Wings<span class="priceShift">9</span>
                                    <br>
                                    <strong class="detail">Marinated and served with sweet and spicy sauce</strong>
                                </p>
                                <p class = "choice">
                                    Tempura Appetizer<span class="priceShift">7</span>
                                    <br>
                                    <strong class="detail">Fried shrimp & veg. w. tempura sauce</strong>
                                </p>
                                <p class = "choice">
                                    Yakitori<span class="extra">(2)</span><span class="priceShift">8</span>
                                    <br>
                                    <strong class="detail">Beef, salmon or chicken on skewer</strong>
                                </p>
                                <p class = "choice">
                                    Garlic Broccoli<span class="priceShift">9</span>
                                    <br>
                                    <strong class="detail">Saufeed broccoli w. garlic & butter</strong>
                                </p>
                                <p class = "choice">
                                    Beef Short Ribs<span class="priceShift">14</span>
                                    <br>
                                    <strong class="detail">House korean marinated short ribs</strong>
                                </p>
                            </div>
                        </div>
        
                        <div class = "sec2">
                            <div class = "dish">
                                <p class = "choice">
                                    Beef and Chicken Negimaki<span class="priceShift">10</span>
                                    <br>
                                    <strong class="detail">Sliced beef or chicken rolled w. scallion & teriyaki sauce</strong>
                                </p>
                                <p class = "choice">
                                    Fried Calamari<span class="priceShift">10</span>
                                    <br>
                                </p>
                                <p class = "choice">
                                    Grilled Mussel<span class="priceShift">10</span>
                                    <br>
                                    <strong class="detail">Mussel w. Japanese mayo & caviar</strong>
                                </p>
                                <p class = "choice">
                                    Fried Soft Shell Crab<span class="priceShift">10</span>
                                    <br>
                                </p>
                                <p class = "choice">
                                    Kaki Fry<span class="priceShift">9</span>
                                    <br>
                                    <strong class="detail">Deep fried oyster</strong>
                                </p>
                                <p class = "choice">
                                    Bar-B-Q Squid<span class="priceShift">13</span>
                                    <br>
                                </p>
                                <p class = "choice">
                                    Seafood Dynamite<span class="priceShift">12</span>
                                    <br>
                                    <strong class="detail">Broiled scallop, mushroom, kani, shrimp, fish w. mayonnasie, cheese & caviar</strong>
                                </p>
                                <p class = "choice">
                                    Rock Shrimp<span class="priceShift">12</span>
                                    <br>
                                </p>
                                <p class = "choice">
                                    Spicy Tuna Gyoza<span class="priceShift">11</span>
                                    <br>
                                    <strong class="detail">Lightly fried crispy gyoza served w. guacamole, sweet chili sauce</strong>
                                </p>
                                <p class = "choice">
                                    Hamachi Kama<span class="priceShift">11</span>
                                    <br>
                                    <strong class="detail">Broiled yellowtail</strong>
                                </p>
                                <p class = "choice">
                                    Duck Roll<span class="priceShift">13</span>
                                    <br>
                                    <strong class="detail">Grill duck with mix green mango wrapped with soft rice paper & chefs special sauce</strong>
                                </p>
                                <p class = "choice">
                                    Combination<span class="priceShift">17</span>
                                    <br>
                                    <strong class="detail">Vegetable spring roll, rock shrimp, fried chicken wings</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
var curMenu = 'appetizer';

export default({
    created: function(){
        window.addEventListener('scroll', this.scrollFunc);
        window.addEventListener('scroll', this.scrollTitle);
        window.addEventListener('load', this.navOpen);
        window.addEventListener('resize', this.disWidth);
    },
    mounted: function(){
        var childNodes = document.getElementById("menus").childNodes;
        var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);  
        var dis = document.getElementById("disclaimer");
        for (var x = 0; x < childNodes.length; x++){
            if (x != 1){
                childNodes[x].style.display = "none";
            }
        }

        dis.style.width = vw/1.5 + "px";
    },
    methods: {
        setMenu(menu){
            if (menu != curMenu){
                document.getElementById(menu).style.display = "flex";
                document.getElementById(curMenu).style.display = "none";
                curMenu = menu;
            }
        },
        navOpen(){
            var elemt = document.getElementById("navigation");
            var elemtIcon = document.getElementById("navigationIcon");

            if(parseInt(elemt.style.height) != document.getElementById("navigation").offsetHeight){
                elemt.style.height = document.getElementById("navigation").offsetHeight + "px";
                elemt.style.width = document.getElementById("navigation").offsetWidth + "px";
                elemtIcon.style.transform = "rotate(90deg)";
            }else{
                elemt.style.height = "70px";    
                elemt.style.width = "60px";
                elemtIcon.style.transform = "rotate(0deg)";    
            }
        },
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
        },
        disWidth(){
            var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);  
            var dis = document.getElementById("disclaimer");

            dis.style.width = vw/2 + "px";
        }
    }
})
</script>

<style scoped>
    html {
    overflow-y:scroll;
    scroll-behavior:smooth;
    margin-bottom:30px;
    max-width:100%;
}

body{
    background: url("/src/assets/ForWebsite/background.png");
    margin:0px;
    overflow:hidden;
    height:100%;
    padding-bottom:100px;
}

.bannerIMG{
    background-image:url("/src/assets/ForWebsite/menu.png");
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
    overflow:hidden;
    z-index:10;
    transform: translate(-50%, -50%);
    transition:all 200ms ease-in-out;
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

#navigation{
    font-family:AvantGarde;
    background-image:linear-gradient(to right, #b7ca88e8,#85b142ee);
    color:white;
    z-index:99;
    padding:5px;
    margin-top:-80px;
    transform: translateY(185px);
    float:left;
    overflow:hidden;
    height:700px;
    width:310px;
    box-sizing:border-box;
    position:absolute;
    transition:all 200ms ease-in-out;
}

#textIMG:hover{
    cursor:pointer;
}

#navigationHeader{
    overflow:hidden;
    margin-top:-10px;
    transition:all 200ms ease-in-out;
}

#navigationIcon{
    height:50px;
    width:50px;
    transition:all 100ms ease-in-out;
}

#textIMG{
    width:220px;
}


#textIMG img{
    margin-top:16px;
}

#buttons{
    position:relative;
    margin:auto;
    width:300px;
    text-align:center;
}

#butStyle{
    border:2px solid #85B142;
    background:none;
    padding:10px;
    color:white;
    font-size:20px;
    transition:all 200ms ease-in-out;
    margin:5px;
}

#butStyle:hover{
    background-color:#D2DFB4;
    color:rgb(139, 139, 139);
    border:2px solid #85B142;
}

#disclaimer{
    margin-top:100px;
    background-color:#85b1428e;
    padding:10px;
    font-family: Arial, Helvetica, sans-serif;
    width:700px;
    color:rgb(255, 255, 255);
    margin:0 auto;
}


@font-face{
    font-family:AvantGarde;
    src:url('/src/assets/ForWebsite/AvantGardeGothicLight.woff');
}

/*phones*/
@media screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
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
and (min-device-width: 320px) 
and (max-device-width: 568px) 
and (-webkit-device-pixel-ratio: 2){ 
    .bannerIMG{
        height:500px;
        margin-bottom:-80px;
    }

    .nav{
        word-spacing:5px;
    }

    #navigation{
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

    #iframe{
        margin-left:-30px;
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

/*Laptops*/
@media screen   
and (min-device-width: 1300px) 
and (max-device-width: 1600px) 
and (-webkit-min-device-pixel-ratio: 1) { 
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

    .section1{
        margin-left:-90px;
    }

    .section2{
        margin-left:-100px;
    }
    
    

}
</style>