class Logger {
  constructor () {
    this.printName = this.printName.bind(this) // bind绑定this之后，其this指向不会再发生改变
  }

  printName(name = 'three') {
    this.print(`Hello ${name}`)
  }
  
  print(msg) {
    console.log(msg)
  }
}

const logger = new Logger()

const { printName } = logger

printName()


// 方案二


class Mongo {
  constructor() {
    this.printOtherName = (name = 'mongo') => {
      this.print(`hello ${name}`)
    }
  }
  

  print(msg) {
    console.log(msg)
  }
}

const mongo = new Mongo()

const { printOtherName } = mongo

printOtherName()


class MyClass {
  constructor() {

  }

  get prop() {
    return console.log('getter')
  }

  set prop(val) {
    console.log(`setter: ${val}`)
  }
}

const aClass = new MyClass()

aClass.prop = 666

aClass.prop

// 描述其

class MyDes {
  construct(element) {
    this.element = element
  }

  get content() {
    return console.log(this.element.innerHTML)
  }

  set content(element) {
    this.element.innerHTML = element
  }
}

var description = Object.getOwnPropertyDescriptor(
  MyDes.prototype, "content"
)

console.log("get" in description, "set" in description)


class g {
  constructor(...args) {
    this.args = args
  }

  *[Symbol.iterator]() {
    for (let arg of this.args) {
      yield arg
    }
  }
}

const test = new g()

for (let x of new g('hello', 'world')) {
  console.log(x)
}