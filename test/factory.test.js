import { BmwFactory } from '../src/creational/factory/factory'
import { BmwFactory as BmwFactory6 } from '../src/creational/factory/factory-es6'

describe('factory Pattern test', () => {
  it('es5 factory pattern test', () => {
    var bmw = BmwFactory('X5')
    expect(bmw.model).toEqual('X5')
    expect(bmw.price).toEqual(108000)
    expect(bmw.maxSpeed).toEqual(300)

    var x6 = BmwFactory('X6')
    expect(x6.model).toEqual('X6')
    expect(x6.price).toEqual(111000)
    expect(x6.maxSpeed).toEqual(320)
  })

  it('es6 factory pattern test', () => {
    const x5 = BmwFactory6.create('X5')
    expect(x5.model).toEqual('X5')
    expect(x5.price).toEqual(108000)
    expect(x5.maxSpeed).toEqual(300)

    const x6 = BmwFactory6.create('X6')
    expect(x6.model).toEqual('X6')
    expect(x6.price).toEqual(111000)
    expect(x6.maxSpeed).toEqual(320)
  })
})
