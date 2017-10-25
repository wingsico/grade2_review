foo()
function foo() {
  console.log(1)
}

var foo = function bar() {
  console.log(2)
}

function foo() {
  console.log(3)
}

foo()


bar()

var a = true

if (a) {
  function bar() {
    console.log(1)
  }
} else {
  function bar() {
    console.log(2)
  }
} // 错误

