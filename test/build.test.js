import { RequestBuilder } from '../src/creational/build/build'
import {
  RequestBuilder as RequestBuilderES6,
} from '../src/creational/build/build-es6'

describe('build pattern test', () => {
  it('es5 build test', () => {
    var requestBuilder = new RequestBuilder()
    var request = requestBuilder.forUrl('http://localhost:8080').
        useMethod('GET').
        payload(null).
        build()
    expect(request.method).toEqual('GET')
  })

  it('es6 build test', () => {
    const requestBuilder = new RequestBuilderES6()
    const request = requestBuilder.forUrl('http://localhost:8080').
        useMethod('GET').
        payload(null).
        build()
    expect(request.method).toEqual('GET')
  })
})
