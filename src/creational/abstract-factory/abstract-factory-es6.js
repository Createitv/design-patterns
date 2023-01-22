function droidProducer(kind) {
  if (kind === 'battle') return battleDroidFactory
  return pilotDroidFactory
}

function battleDroidFactory() {
  return new B1()
}

function pilotDroidFactory() {
  return new Rx42()
}

class B1 {
  info() {
    return 'B1, Battery Level: lower level'
  }
}

class Rx42 {
  info() {
    return 'Rx 42, Battery Level: higher level'
  }
}

export { droidProducer }
