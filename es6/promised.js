'use strict';

(function move() {
  var blocks = document.getElementsByClassName('block');

  var prc = function prc(index, left) {
    return new Promise(function (resolve, reject) {
      var speed = 10;

      var init = function init() {
        if (speed < left) {
          setTimeout(function () {
            blocks[index].style.marginLeft = speed + 'px';
            speed += 1;
            init();
          }, 10);
        } else {
          resolve();
        }
      };
      init();
    });
  };

  prc(0, 300).then(function () {
    return prc(1, 400);
  }).then(function () {
    prc(2, 500);
  });
})();
