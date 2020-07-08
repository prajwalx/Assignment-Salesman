import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy, visualise } from './controller'
import { schema } from './model'
export Salesman, { schema } from './model'

const router = new Router()
const { Name, Date, Sales, Location } = schema.tree

/**
 * @api {post} /Salesman Create salesman
 * @apiName CreateSalesman
 * @apiGroup Salesman
 * @apiParam Name Salesman's Name.
 * @apiParam Date Salesman's Date.
 * @apiParam Sales Salesman's Sales.
 * @apiParam Location Salesman's Location.
 * @apiSuccess {Object} salesman Salesman's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Salesman not found.
 */
router.post('/',
  body({ Name, Date, Sales, Location }),
  create)

router.get('/visualise',
  visualise)
/**
 * @api {get} /Salesman Retrieve salesmen
 * @apiName RetrieveSalesmen
 * @apiGroup Salesman
 * @apiUse listParams
 * @apiSuccess {Object[]} salesmen List of salesmen.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Salesman/:id Retrieve salesman
 * @apiName RetrieveSalesman
 * @apiGroup Salesman
 * @apiSuccess {Object} salesman Salesman's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Salesman not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Salesman/:id Update salesman
 * @apiName UpdateSalesman
 * @apiGroup Salesman
 * @apiParam Name Salesman's Name.
 * @apiParam Date Salesman's Date.
 * @apiParam Sales Salesman's Sales.
 * @apiParam Location Salesman's Location.
 * @apiSuccess {Object} salesman Salesman's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Salesman not found.
 */
router.put('/:id',
  body({ Name, Date, Sales, Location }),
  update)

/**
 * @api {delete} /Salesman/:id Delete salesman
 * @apiName DeleteSalesman
 * @apiGroup Salesman
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Salesman not found.
 */
router.delete('/:id',
  destroy)

export default router
