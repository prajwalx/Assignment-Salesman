import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Salesman } from '.'

const app = () => express(apiRoot, routes)

let salesman

beforeEach(async () => {
  salesman = await Salesman.create({})
})

test('POST /Salesman 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ Name: 'test', Date: 'test', Sales: 'test', Location: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.Name).toEqual('test')
  expect(body.Date).toEqual('test')
  expect(body.Sales).toEqual('test')
  expect(body.Location).toEqual('test')
})

test('GET /Salesman 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Salesman/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${salesman.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(salesman.id)
})

test('GET /Salesman/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Salesman/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${salesman.id}`)
    .send({ Name: 'test', Date: 'test', Sales: 'test', Location: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(salesman.id)
  expect(body.Name).toEqual('test')
  expect(body.Date).toEqual('test')
  expect(body.Sales).toEqual('test')
  expect(body.Location).toEqual('test')
})

test('PUT /Salesman/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ Name: 'test', Date: 'test', Sales: 'test', Location: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Salesman/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${salesman.id}`)
  expect(status).toBe(204)
})

test('DELETE /Salesman/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
