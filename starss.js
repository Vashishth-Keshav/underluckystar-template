const clicked_ele = document.querySelector('.map-see-all a')
clicked_ele.addEventListener('click',(e)=>{
   const check_att =  document.querySelector('.map').hasAttribute('style')
   console.log(e)
    if(check_att){
        document.querySelector('.map').removeAttribute('style')
        e.target.innerText = 'See More'

    }else{
        document.querySelector('.map').setAttribute('style','height:auto; overflow-y:auto')
        e.target.innerText = 'See Less'
    }
}) 
function toggleMenu() {
    var menu = document.getElementById("popup-Menu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
      document.querySelector('.hamburger-icon').style.display='block'
      document.querySelector('.hamburger-icon-close').style.display='none'
    } else {
      menu.style.display = "block";
      document.querySelector('.hamburger-icon').style.display='none'
      document.querySelector('.hamburger-icon-close').style.display='block'

    }
  }
  function toggleNavbar() {
    const navLinks = document.getElementById("navLinks");
    if (navLinks.style.display === "block") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "block";
    }
  }

// const clickedEle = document.querySelector('.map-see-all a');
// clickedEle.addEventListener('click', function(e) {
//   document.querySelector('.map').setAttribute('style', 'height:auto; overflow-y:auto');
//   e.target.innerText = 'Show';
// });


