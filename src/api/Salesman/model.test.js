import { Salesman } from '.'

let salesman

beforeEach(async () => {
  salesman = await Salesman.create({ Name: 'test', Date: 'test', Sales: 'test', Location: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = salesman.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(salesman.id)
    expect(view.Name).toBe(salesman.Name)
    expect(view.Date).toBe(salesman.Date)
    expect(view.Sales).toBe(salesman.Sales)
    expect(view.Location).toBe(salesman.Location)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = salesman.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(salesman.id)
    expect(view.Name).toBe(salesman.Name)
    expect(view.Date).toBe(salesman.Date)
    expect(view.Sales).toBe(salesman.Sales)
    expect(view.Location).toBe(salesman.Location)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
