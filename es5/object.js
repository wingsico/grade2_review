const book = {}

Object.defineProperties(book, {
  _name: {
    writable: true,
    value: 'hahaha'
  },

  edition: {
    writable: true,
    value: 1
  },

  name: {
    get() {
      return this._name
    },
    set(newValue) {
      this._name = newValue
      this.edition += 1
    }
  }
})

let descriptor = Object.getOwnPropertyDescriptors(book)
descriptor._name = '213123'
console.log(book)