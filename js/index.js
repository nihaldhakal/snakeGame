setInterval(function(){
    var rectangle = document.getElementById("pixel");
    var  x =  10* Math.random();
    var  y =  10* Math.random();
    rectangle.innerHTML= "<rect parseInt(x)=" +  x  +   "parseInt(y)=" +  y  +  " width=10 height=10 style='stroke:black;stroke-width:'/>";
    console.log(rectangle,parseInt(x),parseInt(y));
},1000);


