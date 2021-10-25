var menu = [
    {
        "id": 01,
        "name":"Margherita",
        "price":"73,000",
        "ingrediants":"tomato sauce, basil, mozarella, vegetable",
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

    if(pizzaId==6) { pizzaId = 1};

    for(let j=1;j <= menu.length ;j++) {
        document.getElementById("star-"+j).style.animation="hidestar 1ms linear forwards";
    }

    if(pizzaId == 1 ) {

        document.getElementById("pizza-" + menu.length).style.animation="turntopast 500ms linear forwards";
        document.getElementById("pizza-" + pizzaId ).style.visibility="visible";
        document.getElementById("pizza-" + pizzaId ).style.animation="turntomain 500ms linear forwards";

        document.getElementById("pizza-" + (menu.length -1)).style.animation="none";
        document.getElementById("pizza-" + (menu.length -1)).style.visibility="hidden";

        document.getElementById("pizza-"+ (pizzaId + 1)).style.animation="showNext 500ms linear forwards";

        document.getElementById("pizza-name").innerHTML= menu[pizzaId-1].name;
        document.getElementById("price").innerHTML= menu[pizzaId-1].price;
        document.getElementById("pizzaIng").innerHTML= menu[pizzaId-1].ingrediants;

        for(let i=1;i <= menu[pizzaId-1].star;i++) {
            document.getElementById("star-"+i).style.animation="showstars 1s linear forwards 500ms";
        }
        
    } else if (pizzaId == 2 ) {

        document.getElementById("pizza-" + (pizzaId - 1)).style.animation="turntopast 500ms linear forwards";
        document.getElementById("pizza-" + pizzaId ).style.visibility="visible";
        document.getElementById("pizza-" + pizzaId ).style.animation="turntomain 500ms linear forwards";

        document.getElementById("pizza-"+ menu.length).style.animation="none";
        document.getElementById("pizza-" + menu.length).style.visibility="hidden";

        document.getElementById("pizza-"+ (pizzaId + 1)).style.animation="showNext 500ms linear forwards";

        document.getElementById("pizza-name").innerHTML= menu[pizzaId-1].name;
        document.getElementById("price").innerHTML= menu[pizzaId-1].price;
        document.getElementById("pizzaIng").innerHTML= menu[pizzaId-1].ingrediants;

        for(let i=1;i <= menu[pizzaId-1].star;i++) {
            document.getElementById("star-"+i).style.animation="showstars 1s linear forwards 500ms";
        }

    } else if (pizzaId > 2 && pizzaId < menu.length ) {

        document.getElementById("pizza-" + (pizzaId - 1)).style.animation="turntopast 500ms linear forwards";
        document.getElementById("pizza-" + pizzaId ).style.visibility="visible";
        document.getElementById("pizza-" + pizzaId ).style.animation="turntomain 500ms linear forwards";

        document.getElementById("pizza-" + (pizzaId - 2)).style.animation="none";
        document.getElementById("pizza-" + (pizzaId - 2)).style.visibility="hidden";

        document.getElementById("pizza-"+ (pizzaId + 1)).style.animation="showNext 500ms linear forwards";

        document.getElementById("pizza-name").innerHTML= menu[pizzaId-1].name;
        document.getElementById("price").innerHTML= menu[pizzaId-1].price;
        document.getElementById("pizzaIng").innerHTML= menu[pizzaId-1].ingrediants;

        for(let i=1;i <= menu[pizzaId-1].star;i++) {
            document.getElementById("star-"+i).style.animation="showstars 1s linear forwards";
        }

    } else {

        document.getElementById("pizza-" + (pizzaId - 1)).style.animation="turntopast 500ms linear forwards";
        document.getElementById("pizza-" + pizzaId ).style.visibility="visible";
        document.getElementById("pizza-" + pizzaId ).style.animation="turntomain 500ms linear forwards";

        document.getElementById("pizza-" + (pizzaId - 2)).style.animation="none";
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
function displayPrevious() {

    pizzaId --;

    for(let j=1;j <= menu.length ;j++) {
        document.getElementById("star-"+j).style.animation="hidestar 1ms linear forwards";
    }
    if(pizzaId <= 0) { pizzaId = 5};
    if(pizzaId == 1 ) {

        document.getElementById("pizza-" + pizzaId).style.animation="turntonextPr 500ms linear forwards";
        document.getElementById("pizza-" + menu.length).style.visibility="visible";
        document.getElementById("pizza-" + menu.length).style.animation="turntomainPr 500ms linear forwards";
        
        document.getElementById("pizza-" + (pizzaId + 1)).style.animation="none";
        document.getElementById("pizza-" + (pizzaId + 1)).style.visibility="hidden";

        document.getElementById("pizza-"+ (menu.length -1) ).style.animation="showPr 500ms linear forwards";

        document.getElementById("pizza-name").innerHTML= menu[menu.length-1].name;
        document.getElementById("price").innerHTML= menu[menu.length-1].price;
        document.getElementById("pizzaIng").innerHTML= menu[menu.length-1].ingrediants;

        for(let i=1;i <= menu[menu.length-1].star;i++) {
            document.getElementById("star-"+i).style.animation="showstars 1s linear forwards";
        }
        
        pizzaId = menu.length +1;
        
    } else if (pizzaId == 2 ) {

        document.getElementById("pizza-" + (pizzaId)).style.animation="turntonextPr 500ms linear forwards";
        document.getElementById("pizza-" + (pizzaId - 1)).style.visibility="visible";
        document.getElementById("pizza-" + (pizzaId - 1)).style.animation="turntomainPr 500ms linear forwards";
        
        document.getElementById("pizza-" + (pizzaId + 1)).style.animation="none";
        document.getElementById("pizza-" + (pizzaId + 1)).style.visibility="hidden";

        document.getElementById("pizza-"+ menu.length).style.animation="showPr 500ms linear forwards";

        document.getElementById("pizza-name").innerHTML= menu[pizzaId-2].name;
        document.getElementById("price").innerHTML= menu[pizzaId-2].price;
        document.getElementById("pizzaIng").innerHTML= menu[pizzaId-2].ingrediants;

        for(let i=1;i <= menu[pizzaId-2].star;i++) {
            document.getElementById("star-"+i).style.animation="showstars 1s linear forwards";
        }

    } else if (pizzaId > 2 && pizzaId < menu.length ) {

        document.getElementById("pizza-" + (pizzaId)).style.animation="turntonextPr 500ms linear forwards";
        document.getElementById("pizza-" + (pizzaId - 1)).style.visibility="visible";
        document.getElementById("pizza-" + (pizzaId - 1)).style.animation="turntomainPr 500ms linear forwards";
        
        document.getElementById("pizza-" + (pizzaId + 1)).style.animation="none";
        document.getElementById("pizza-" + (pizzaId + 1)).style.visibility="hidden";

        document.getElementById("pizza-"+ (pizzaId -2)).style.animation="showPr 500ms linear forwards";

        document.getElementById("pizza-name").innerHTML= menu[pizzaId-2].name;
        document.getElementById("price").innerHTML= menu[pizzaId-2].price;
        document.getElementById("pizzaIng").innerHTML= menu[pizzaId-2].ingrediants;

        for(let i=1;i <= menu[pizzaId-2].star;i++) {
            document.getElementById("star-"+i).style.animation="showstars 1s linear forwards";
        }

    } else {

        document.getElementById("pizza-" + (pizzaId)).style.animation="turntonextPr 500ms linear forwards";
        document.getElementById("pizza-" + (pizzaId - 1)).style.visibility="visible";
        document.getElementById("pizza-" + (pizzaId - 1)).style.animation="turntomainPr 500ms linear forwards";
        
        document.getElementById("pizza-1").style.animation="none";
        document.getElementById("pizza-1").style.visibility="hidden";

        document.getElementById("pizza-"+ (pizzaId -2)).style.animation="showPr 500ms linear forwards";

        document.getElementById("pizza-name").innerHTML= menu[pizzaId-2].name;
        document.getElementById("price").innerHTML= menu[pizzaId-2].price;
        document.getElementById("pizzaIng").innerHTML= menu[pizzaId-2].ingrediants;

        for(let i=1;i <= menu[pizzaId-2].star;i++) {
            document.getElementById("star-"+i).style.animation="showstars 1s linear forwards";
        }

    }
    
}
var counter = 0;
function addToCart() {

    document.getElementById("addbuttonanim").style.animation="none";

    counter += parseInt(document.getElementById("count").value);
    document.getElementById("addbuttonanim").style.animation="addtocart 1s linear";
    document.getElementById("counter").innerHTML = counter;
}


