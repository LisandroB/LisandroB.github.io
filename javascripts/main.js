function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.color = "rgb(153, 153, 153)";
    document.getElementById("pesado").style.transition = "all 0.9s ease .45s"
    document.getElementById("pesado").style.opacity = "1";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.transition = "0.5s"
    document.getElementsByClassName("select")[0].style.filter = "brightness(50%)";
    document.getElementsByClassName("select")[0].style.transition = "0.5s"
    document.getElementsByClassName("select")[1].style.filter = "brightness(50%)";
    document.getElementsByClassName("select")[1].style.transition = "0.5s"
    document.getElementById("main2").style.filter = "brightness(50%)";
    document.getElementById("main2").style.transition = "0.5s"
    document.getElementById("main3").style.filter = "brightness(50%)";
    document.getElementById("main3").style.transition = "0.5s"
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("pesado").style.transition = "all 0.2s ease 0.1s";
    document.getElementById("pesado").style.opacity = "0";
    document.getElementsByClassName("select")[0].style.filter = "brightness(100%)";
    document.getElementsByClassName("select")[1].style.filter = "brightness(100%)";
    document.getElementsByClassName("select")[1].style.transition = "0.5s"
    document.getElementById("main2").style.filter = "brightness(100%)";
    document.getElementById("main2").style.transition = "0.5s";
    document.getElementById("main3").style.filter = "brightness(100%)";
    document.body.style.transition = "0.5s"
    document.body.style.backgroundColor = "white";
  }