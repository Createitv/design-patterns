function Person() {
  if (typeof Person.instance === 'object') {
    return Person.instance
  }
  Person.instance = this
  return this
}

export { Person }
