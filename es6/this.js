// 先来看一个很简单的例子
// 暂时先不讨论严格模式
var a = 'hello'

// this.a // 'hello'
// this === window // true
// window.a // 'hello'

// 这里的this 指向了全局作用域，在浏览器中为Window
// 但这种情况很少使用

// 再来一个简单例子

function fn() {
  return this
}

fn() // 这里的this指向window














let obj = {
  name: '123',
  sayname() {
    setTimeout(() => {
      console.log(this.name)
    },200)
  }
}

let name = 'abc'

obj.sayname()
let test = obj.sayname

test()
