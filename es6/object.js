const foo = 'bar'

const baz = {
  foo
}

console.log(baz)

const o = {
  method(ming) {
    console.log(ming)
  }
}

o.method('zqqq')

function f(name, tel) {
  console.log({
    name, tel
  })
}
f('zwj', '132323')

let birth = '1998/9/1'

const Person = {
  name: '✅',
  birth,
  hello() {
    console.log('hello!' + this.name)
  }
}

Person.hello()

function getPoint() {
  const x = 1
  const y = 2
  return {x, y}
}

console.log(getPoint())

// commonJS 模块输出一组变量 

let ms = {}

function getItem(key) {
  return key in ms ? ms[key] : null
}

function setItem(key, value) {
  ms[key] = value
}

function clear() {
  ms = {}
}

module.exports = { getItem, setItem, clear }

// getter and setter

const cart = {
  _wheels: 4,
  edition: 1,

  get wheels() {
    return this._wheels
  },
  set wheels(newValue) {
    if (newValue < this._wheels) {
      throw new Error('too small')
    }
    this._wheels = newValue * 2
    this.edition += newValue - 4
  }
}

Object.defineProperty(cart, "wheels", {
  
})

console.log(cart.wheels)
cart.wheels = 6
console.log(cart.wheels, cart.edition)

// ????
const obj = {
  * m() {
    yield 'hello world!'
    yield 'hello again!'
  }
}

console.log(obj.m(), obj.m())


// 属性名

let prop = 'foo'
let newObj = {
  [prop]: true,
  ['a' + 'bc']: 123,
  ['he' + 'llo']() {
    console.log('hello!')
  }
}

console.log(newObj[prop])
newObj.hello()

// 返回函数名

const toy = {
  name: 'tady',
  sayName() {
    console.log(this.name)
  }
}

console.log(toy.sayName.name)

// 若使用了getter和setter，函数名则在该方法属性的描述对象get和set上

const test = {
  get foo() { },
  set foo(x) { }
}

const descriptor_ = Object.getOwnPropertyDescriptor(test, 'foo')

console.log(descriptor_.get.name, descriptor_.set.name)

// bind / 构造函数

console.log((new Function()).name)
var doSomething = () => {
  console.log(this)
}

doSomething.call(toy)