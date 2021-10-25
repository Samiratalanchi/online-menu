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
var pizzaId=3;

function displayNext() {

    for(let i=1;i<=menu.length;i++) {
        document.getElementById("pizza-"+i).style.animation="none";
    }
    

    

    if(pizzaId == 1 ) {

        for(let i=1;i <= menu.length ;i++) {
            document.getElementById("star-"+i).style.fill="white";
        }

        document.getElementById("pizza-" + menu.length).style.animation="turntopast 500ms linear forwards";
        document.getElementById("pizza-" + pizzaId ).style.visibility="visible";
        document.getElementById("pizza-" + pizzaId ).style.animation="turntomain 500ms linear forwards";
        document.getElementById("pizza-" + (menu.length -1)).style.visibility="hidden";

        document.getElementById("pizza-"+ (pizzaId + 1)).style.animation="showNext 500ms linear forwards";

        document.getElementById("pizza-name").innerHTML= menu[pizzaId-1].name;
        document.getElementById("price").innerHTML= menu[pizzaId-1].price;
        document.getElementById("pizzaIng").innerHTML= menu[pizzaId-1].ingrediants;

        for(let i=1;i <= menu[pizzaId-1].star;i++) {
            document.getElementById("star-"+i).style.animation="showstars 1s linear forwards 500ms";
        }
        
    } else if (pizzaId ==2 ) {

        for(let i=1;i <= menu.length ;i++) {
            document.getElementById("star-"+i).style.fill="white";
        }

        document.getElementById("pizza-" + (pizzaId - 1)).style.animation="turntopast 500ms linear forwards";
        document.getElementById("pizza-" + pizzaId ).style.visibility="visible";
        document.getElementById("pizza-" + pizzaId ).style.animation="turntomain 500ms linear forwards";
        document.getElementById("pizza-" + menu.length).style.visibility="hidden";

        document.getElementById("pizza-"+ (pizzaId + 1)).style.animation="showNext 500ms linear forwards";

        document.getElementById("pizza-name").innerHTML= menu[pizzaId-1].name;
        document.getElementById("price").innerHTML= menu[pizzaId-1].price;
        document.getElementById("pizzaIng").innerHTML= menu[pizzaId-1].ingrediants;

        for(let i=1;i <= menu[pizzaId-1].star;i++) {
            document.getElementById("star-"+i).style.animation="showstars 1s linear forwards 500ms";
        }

    }else if (pizzaId > 2 && pizzaId < menu.length ) {

        for(let i=1;i <= menu.length ;i++) {
            document.getElementById("star-"+i).style.fill="white";
        }

        document.getElementById("pizza-" + (pizzaId - 1)).style.animation="turntopast 500ms linear forwards";
        document.getElementById("pizza-" + pizzaId ).style.visibility="visible";
        document.getElementById("pizza-" + pizzaId ).style.animation="turntomain 500ms linear forwards";
        document.getElementById("pizza-" + (pizzaId - 2)).style.visibility="hidden";

        document.getElementById("pizza-"+ (pizzaId + 1)).style.animation="showNext 500ms linear forwards";

        document.getElementById("pizza-name").innerHTML= menu[pizzaId-1].name;
        document.getElementById("price").innerHTML= menu[pizzaId-1].price;
        document.getElementById("pizzaIng").innerHTML= menu[pizzaId-1].ingrediants;

        for(let i=1;i <= menu[pizzaId-1].star;i++) {
            document.getElementById("star-"+i).style.animation="showstars 1s linear forwards 500ms";
        }

    } else {

        for(let i=1;i <= menu.length ;i++) {
            document.getElementById("star-"+i).style.fill="white";
        }

        document.getElementById("pizza-" + (pizzaId - 1)).style.animation="turntopast 500ms linear forwards";
        document.getElementById("pizza-" + pizzaId ).style.visibility="visible";
        document.getElementById("pizza-" + pizzaId ).style.animation="turntomain 500ms linear forwards";
        document.getElementById("pizza-" + (pizzaId - 2)).style.visibility="hidden";

        document.getElementById("pizza-1").style.animation="showNext 500ms linear forwards";

        document.getElementById("pizza-name").innerHTML= menu[pizzaId-1].name;
        document.getElementById("price").innerHTML= menu[pizzaId-1].price;
        document.getElementById("pizzaIng").innerHTML= menu[pizzaId-1].ingrediants;

        for(let i=1;i <= menu[pizzaId-1].star;i++) {
            document.getElementById("star-"+i).style.animation="showstars 1s linear forwards 500ms";
        }

        pizzaId=0;
    }


    

    pizzaId += 1;
    
    
}