setInterval(function(){
    var rectangle = document.getElementById("pixel");
    var  x =  540* Math.random();
    var  y =  340* Math.random();
    rectangle.innerHTML= "<rect x=" +  parseInt(x)  +   " y=" +  parseInt(y)  +  " width=10 height=10 style='stroke:black;stroke-width:'/>";
    console.log(rectangle,parseInt(x),parseInt(y));
},1000);


