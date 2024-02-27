
// ----------------------------------------------WHAT TO DO & WHERE TO GO IN ALULA PAGE---------------------------------------------------

function changeText1(){ //THIS FUNCTION IS GOING TO CHANGE THE TEXT IN THE FIRST PARAGRAPH (LEOPARD)
    document.getElementById("text1-1").innerHTML="The first-ever marquee fashion event in Saudi Arabia will be presented at the AlUla Arabian Leopard Week. With music and art inspired by the plight of the critically endangered Arabian Leopard, the AlUla Arabian Leopard Week is designed to raise awareness for this majestic animal. <br><br>Arabian Leopard Week is inspired by the world's smallest big cat, indigenous to AlUla and critically endangered. Of the world's leopard subspecies, the Arabian Leopard is among the rarest, with fewer than 200 adults living in the wild. A large part of imagining the future is protecting what is valuable and vulnerable in the present. By raising awareness, Arabian Leopard Week brings people together to work toward a more positive future for these majestic animals.";
    var text = document.getElementById("text1-1");
    text.style.textAlign = "left";
}


function changeText2(){ //THIS FUNCTION IS GOING TO CHANGE THE TEXT IN THE SECOND PARAGRAPH (ARTS)
    document.getElementById("text2-1").innerHTML="<br><br>Celebrating all forms of art, this unique festival brings together curated contemporary art, large-scale installations throughout the landscape, community murals, workshops, talks and more. As this edition’s flagship exhibition, FAME: Andy Warhol in AlUla is the first collaboration with the Andy Warhol Museum in the region and will be displayed at the award-winning Maraya. <br><br><br><br><br>";
    var text = document.getElementById("text2-1");
    text.style.textAlign = "left";
}
//----------------------------------------------------------------------------------------------------------------------------------------------------







//---------------------------------------------------WHERE & WHAT TO EAT IN ALULA PAGE-------------------------------------------------------


//our idea here it's to make it like we are moving with the buttons but what we are really doing is that we changing the texts and images
//the source:
//https://stackoverflow.com/questions/28814377/how-to-make-a-button-visible-by-clicking-another-button


// here we're going to make the left button in resturant page appear after we click the right button and then the replacing texts and images are back
right.onclick = function() {
    var right = document.getElementById("right");
    var left = document.getElementById("left");
//  the first replacing texts and image
    document.getElementById("acme-img").src="AWNARestaurantFineDiningOutdoorHegraPromo781x441.jpg";
    document.getElementById("acme-h").innerHTML="AWNA";
    document.getElementById("acme-p").innerHTML="An immersive experience, Awna is a journey of wonder <br>and delight amidst the dramatic sandstone outcrops and <br>intricate ancient tombs of Hegra, Saudi Arabia’s first <br>UNESCO World Heritage Site. Awna represents human connection, <br>the joy of togetherness and a celebration of the ancient <br>traditions of the spice route.<br><br><br><br><br><br><br><br><br>";
// the second replacing texts and image
    document.getElementById("alfa-img").src="BeitWafaRestaurantOutdoorTableDiningPromo781x441.jpg";
    document.getElementById("alfa-h").innerHTML="BEIT WAFA";
    document.getElementById("alfa-p").innerHTML="Nestled among the mountains at 26 North, a glamorous <br>camping retreat and hidden sanctuary in AlUla, Beit Wafa <br>features a fresh, farm-to-table menu sourced from the <br>surrounding estate and views you have to see to believe.<br><br><br>";
//  the third replacing texts and image 
    document.getElementById("nakheel-img").src="circola_large_781x441.jpg";
    document.getElementById("nakheel-h").innerHTML="CIRCOLO";
    document.getElementById("nakheel-p").innerHTML="With a casual, rustic setting, Circolo's authentic <br>Italian dishes use only premium ingredients to create the <br>flavours that will have you coming back time and again. <br>Don't miss the artisanal pizzas fresh <br>from the wood-fired oven.<br>";
    left.style.visibility = "visible"; //here we make the visibility visible so the button appear when we click the right button and the right button will disappear
    right.style.visibility = "hidden";
}




// here we're going to make the right button in resturant page appear after we click the left button and then the original texts and images are back
left.onclick = function() {
    var right = document.getElementById("right");
    var left = document.getElementById("left");

    document.getElementById("acme-img").src="ACME_promo.jpg";
    document.getElementById("acme-h").innerHTML="ACME";
    document.getElementById("acme-p").innerHTML="ACME’s unique burgers and delicious bites bring fun new <br>flavours to AlUla’s Old Town. From refreshing drinks to <br>savoury snacks, an exciting menu awaits kids and adults alike.<br><br><br><br><br><br><br><br><br><br>";
    
    document.getElementById("alfa-img").src="AlfasLoungePromo781x441.jpg";
    document.getElementById("alfa-h").innerHTML="ALFA'S LOUNGE";
    document.getElementById("alfa-p").innerHTML="Tucked away in a beautiful canyon is a new hip <br> hangout - Alfa’s Lounge. At this must-visit spot, <br>you can enjoy a coffee or have dinner under the stars, <br>surrounded by some of the most breathtaking scenery <br>AlUla has to offer.<br>";

    document.getElementById("nakheel-img").src="AlNakheel-(1).jpg";
    document.getElementById("nakheel-h").innerHTML="ALNAKHEEL CAFÉ";
    document.getElementById("nakheel-p").innerHTML="A relaxed and casual dining venue, Palm Garden is open for <br>breakfast, lunch and dinner.<br><br><br>";
    
    right.style.visibility = "visible"; //here we make the visibility visible so the button appear when we click the left button and the left button will disappear
    left.style.visibility = "hidden";
}
//----------------------------------------------------------------------------------------------------------------------------------------------------

