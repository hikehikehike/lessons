'use strict';
const box = document.getElementById ('box'),
      btns = document.getElementsByTagName ('button'),
      circle = document.getElementsByClassName ('circle'),
      heart = document.querySelectorAll ('.heart'),
      oneHeart = document.querySelector ('.heart'),
      wrapper = document.querySelector('.wrapper');

// btns[2].style.borderRadius = ('100%');
// btns.style.cssText = ('border-radius: 100%');
// btns.style.cssText = ('border-radius: 100%');
for (let i = 0; i < btns.length; i++){
    btns[i].style.borderRadius = ('100%');
}


// btns.forEach(ite => {
//     btns.style.borderRadius = ('100%');
// });

const div = document.createElement('div');
div.classList.add('black');

wrapper.append(div);
div.innerHTML = "dsf";
