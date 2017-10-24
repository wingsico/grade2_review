var foo = true

if (foo) {
  {
    let bar = foo * 2
    console.log(bar)
  }
  // console.log(bar)
}

{
  let j
  for (j = 0; j < 10; j++){
    {
      let i = j
      console.log(i)
    }
  }
}