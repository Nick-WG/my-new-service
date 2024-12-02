// __tests__/handler.test.js

const { hello } = require('../handler')

describe('hello function', () => {
  it('returns a greeting for the default name', async () => {
    const event = {}
    const result = await hello(event)
    expect(result).toEqual({
      statusCode: 200,
      body: JSON.stringify({
        message: 'Hello, World!',
      }),
    })
  })

  it('returns a greeting when a name is provided', async () => {
    const event = { queryStringParameters: { name: 'AWS' } }
    const result = await hello(event)
    expect(result).toEqual({
      statusCode: 200,
      body: JSON.stringify({
        message: 'Hello, AWS!',
      }),
    })
  })
})
