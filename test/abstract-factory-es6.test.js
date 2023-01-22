import { droidProducer as droidProducer6 } from '../src/creational/abstract-factory-es6'
import { droidProducer as droidProducer5 } from '../src/creational/abstract-factory'

describe('abstract factory test', () => {
  it('Battle droid', () => {
    const battleDroid = droidProducer5('battle')()
    expect(battleDroid.info()).toEqual('B1, Battery Level: lower level')
  })

  it('pilot droid', () => {
    const pilotDroid = droidProducer5('pilot')()
    expect(pilotDroid.info()).toEqual('Rx 42, Battery Level: higher level')
  })

  it('Battle droid es6', () => {
    const battleDroid = droidProducer6('battle')()
    expect(battleDroid.info()).toEqual('B1, Battery Level: lower level')
  })

  it('pilot droid es6', () => {
    const pilotDroid = droidProducer6('pilot')()
    expect(pilotDroid.info()).toEqual('Rx 42, Battery Level: higher level')
  })
})
