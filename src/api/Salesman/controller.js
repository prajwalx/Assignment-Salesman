import { success, notFound } from '../../services/response/'
import { Salesman } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Salesman.create(body)
    .then((salesman) => salesman.view(true))
    .then((salesman) => salesman ? res.redirect('/Salesman/visualise') : null)
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Salesman.find(query, select, cursor)
    .then((salesmen) => salesmen.map((salesman) => salesman.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Salesman.findById(params.id)
    .then(notFound(res))
    .then((salesman) => salesman ? salesman.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Salesman.findById(params.id)
    .then(notFound(res))
    .then((salesman) => salesman ? Object.assign(salesman, body).save() : null)
    .then((salesman) => salesman ? salesman.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Salesman.findById(params.id)
    .then(notFound(res))
    .then((salesman) => salesman ? salesman.remove() : null)
    .then(success(res, 204))
    .catch(next)

export const visualise = ({ params }, res, next) =>
  Salesman.find()
    .then((salesmen) => salesmen.map((salesman) => salesman.view()))
    .then((salesmen) => res.render('visualise', { title: 'Visualise Salesman', salesmen }))
    .catch(next)
