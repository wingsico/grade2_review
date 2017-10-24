(function move() {
  let blocks = document.getElementsByClassName('block')

  let prc = (index, left) => {
    return new Promise((resolve, reject) => {
      let speed = 10

      var init = () => {
        if (speed < left) {
          setTimeout(() => {
            blocks[index].style.marginLeft = `${speed}px`
            speed += 1
            init()
          }, 10)
        } else {
          resolve()
        }
      }
      init()
    })
  }

  prc(0, 300).then(() => prc(1, 400)).then(() => {
    prc(2, 500)
  })
})()