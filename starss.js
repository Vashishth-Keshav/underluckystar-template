if(document.querySelectorAll('.map-see-all a').length){
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
}
function toggleMenu() {
    var menu = document.getElementById("popup-Menu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
      document.querySelector('.hamburger-icon').style.display='block'
      document.querySelector('.hamburger-icon-close').style.display='none';
      if(window.scrollY < 2){
        document.querySelector('.mob-header').classList.remove('background');
      
      }
    } else {
      menu.style.display = "block";
      document.querySelector('.hamburger-icon').style.display='none'
      document.querySelector('.hamburger-icon-close').style.display='block'
      document.querySelector('.mob-header').classList.add('background');

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
  // function toggleMenu() {
  //   document.style.backgroundColor = "red";
  // }
  Array.from(document.getElementsByClassName('faq-open')).forEach(function(ques){
    ques.onclick = function(){
      this.querySelector('.faq-ans').classList.toggle('show')
    }
  })

  if(window.scrollY < 2){
    document.querySelector('.mob-header').classList.remove('background');
  }else{
    document.querySelector('.mob-header').classList.add('background');
  }

  window.addEventListener("scroll", function(event) {
    var top = this.scrollY,
        left =this.scrollX;
   if(top < 2){
      document.querySelector('.mob-header').classList.remove('background');

    
    }else{
      document.querySelector('.mob-header').classList.add('background');
     }
}, false);

window.addEventListener("scroll", function(event) {
  var top = this.scrollY,
      left =this.scrollX;
 if(top < 800){
   document.querySelector('#floater').classList.remove('show');
    
  }else{
    document.querySelector('#floater').classList.add('show')
  }
}, false); 

window.addEventListener("scroll",function(event){
  // console.log(this.scrollY)
 
  if(this.scrollY > 0){
    document.querySelector('.logo-pic-2').classList.remove('display_none')
    document.querySelector('.logo-pic-1').classList.add('display_none')

    document.querySelector('.hamburger-icon-2').classList.remove('display_none')
    document.querySelector('.hamburger-icon-1').classList.add('display_none')

    document.querySelector('.close-icon-2').classList.remove('display_none')
    document.querySelector('.close-icon-1').classList.add('display_none')

  }else{
    document.querySelector('.logo-pic-1').classList.remove('display_none')
    document.querySelector('.logo-pic-2').classList.add('display_none')

    document.querySelector('.hamburger-icon-1').classList.remove('display_none')
    document.querySelector('.hamburger-icon-2').classList.add('display_none')

    document.querySelector('.close-icon-1').classList.remove('display_none')
    document.querySelector('.close-icon-2').classList.add('display_none')

  }
})

// window.addEventListener("scroll", function(event) {
//   var top = this.scrollY,
//       left =this.scrollX;
//  if(top < 250){
//     document.querySelector('.mob-header').classList.remove('background');
//     if(document.querySelector('#floater')){
//       document.querySelector('#floater').classList.remove('show')
//     }
//   }else{
//     document.querySelector('.mob-header').classList.add('background');
//     if(document.querySelector('#floater')){
//       document.querySelector('#floater').classList.add('show')
//     }
//   }
// }, false);


function toggleNextSibling(obj) {
 
  var sibling = obj.nextElementSibling;

  if (sibling) {

      if (sibling.style.display === 'none' || sibling.style.display === '') {
          sibling.style.display = 'block';
      } else {
          sibling.style.display = 'none';
      }
  }
}


// for cart page 
const Checkboxopen = document.getElementById("checkbox-click");
const billingAddressfieldsopen = document.getElementById("billing-address-fields");

Checkboxopen.addEventListener("change", function() {
  if (this.checked) {
      billingAddressfieldsopen.style.display = "block";
  } else {
    billingAddressfieldsopen.style.display = "none";
  }
});
// const clickedEle = document.querySelector('.map-see-all a');
// clickedEle.addEventListener('click', function(e) {
//   document.querySelector('.map').setAttribute('style', 'height:auto; overflow-y:auto');
//   e.target.innerText = 'Show';
// });

