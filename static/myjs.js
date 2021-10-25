var menu = [
    {
        "id": 01,
        "name":"Margherita",
        "price":"73,000",
        "ingrediants":"tomato sauce, basil, mozarella",
        "star": 2,
        "imageAddress":"./static/img/pizza/margarita.png"
    },
    {
        "id": 02,
        "name":"Del Capo",
        "price":"121,000",
        "ingrediants":"tomato sauce, bakon, mozarella, calf steak",
        "star": 5,
        "imageAddress":"./static/img/pizza/delcapo.png"
    },
    {
        "id": 03,
        "name":"Miracle",
        "price":"118,000",
        "ingrediants":"tomato sauce, mushroom, peperoni, potato",
        "star": 4,
        "imageAddress":"./static/img/pizza/miracle.png"
    },
    {
        "id": 04,
        "name":"Indiana",
        "price":"98,000",
        "ingrediants":"tomato sauce, chiken breast, mozarella, chili bellpaper",
        "star": 4,
        "imageAddress":"./static/img/pizza/indiana.png"
    },
    {
        "id": 05,
        "name":"Royal",
        "price":"116,000",
        "ingrediants":"tomato sauce, mushroom, mozarella, bakon, salami",
        "star": 5,
        "imageAddress":"./static/img/pizza/royal.png"
    }
]; 
var pizzaId=1;

function displayNext() {
    pizzaId += 1;


    if(pizzaId == 1 ) {
        document.getElementById("pizza-"+pizzaId).style.animation="turnm 500ms linear forwards";
        document.getElementById("pizza-"+ (pizzaId + 1)).style.animation="turnp 500ms linear forwards";
        document.getElementById("pizza-"+ (pizzaId - 1)).style.visibility="hidden";
        document.getElementById("pizza-"+ menu.length).style.visibility="visible";
        

        document.getElementById("pizza-name").innerHTML= menu[pizzaId].name;
        document.getElementById("price").innerHTML= menu[pizzaId].price;
        document.getElementById("pizzaIng").innerHTML= menu[pizzaId].ingrediants;
    } else if (pizzaId >= 2 && pizzaId < menu.length ) {

        document.getElementById("pizza-"+pizzaId).style.animation="turnm 500ms linear forwards";
        document.getElementById("pizza-"+ (pizzaId + 1)).style.animation="turnp 500ms linear forwards";
        document.getElementById("pizza-"+ (pizzaId - 1)).style.visibility="hidden";

        document.getElementById("pizza-"+ (pizzaId +2)).style.animation="showNext 500ms linear forwards";


        document.getElementById("pizza-name").innerHTML= menu[pizzaId].name;
        document.getElementById("price").innerHTML= menu[pizzaId].price;
        document.getElementById("pizzaIng").innerHTML= menu[pizzaId].ingrediants;

    } else {}

    
    // for(let i=1;i <= menu[pizzaId].star;i++) {
    //     document.getElementsByClassName("stars")[i].style.animation="showstars 500ms linear forwards";
    // }


}