import { Person } from '../src/creational/singleton/singleton'
import { Person as PersonEs6 } from '../src/creational/singleton/singleton-es6'

describe('Singleton Pattern test', () => {
  it('es5 singleton pattern test', () => {
    var p1 = new Person()
    var p2 = new Person()
    expect(p1).toEqual(p2)
  })

  it('es6 singleton pattern test', () => {
    const p1 = new PersonEs6()
    const p2 = new PersonEs6()
    expect(p1).toEqual(p2)
  })
})
