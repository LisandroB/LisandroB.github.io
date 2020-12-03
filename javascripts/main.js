function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.color = "rgb(153, 153, 153)";
    document.getElementById("pesado").style.transition = "all 0.9s ease .45s"
    document.getElementById("pesado").style.opacity = "1";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.transition = "0.5s"
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("pesado").style.transition = "all 0.2s ease 0.1s";
    document.getElementById("pesado").style.opacity = "0";
    document.body.style.transition = "0.5s"
    document.body.style.backgroundColor = "white";
  }