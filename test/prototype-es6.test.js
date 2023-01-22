import { Sheep } from '../src/creational/prototype/prototype'
import { Sheep as Sheep6 } from '../src/creational/prototype/prototype-es6'

describe('prototype pattern test', () => {
  it('es5 prototype pattern test', () => {
    var sheep = new Sheep('dolly', 0.03)
    var dolly = sheep.clone()
    expect(dolly.name).toEqual('dolly')
  })

  it('es6 prototype pattern test', () => {
    const sheep = new Sheep6('dolly', 0.03)
    const dolly = sheep.clone()
    expect(dolly.name).toEqual('dolly')
  })
})
