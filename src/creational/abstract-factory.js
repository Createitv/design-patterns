function B1() {
  B1.prototype.info = function () {
    return 'B1, Battery Level: lower level'
  }
}

function Rx42() {
  Rx42.prototype.info = function () {
    return 'Rx 42, Battery Level: higher level'
  }
}

function battleDroidFactory() {
  return new B1()
}

function pilotDroidFactory() {
  return new Rx42()
}

function droidProducer(kind) {
  if (kind === 'battle') return battleDroidFactory
  return pilotDroidFactory
}

export { droidProducer }
