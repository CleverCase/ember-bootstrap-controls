/**
 * The PropTypes.date validator
 */

import Ember from 'ember'
const {typeOf} = Ember

import logger from '../logger'

export default function (ctx, name, value, def, logErrors, throwErrors) {
  const valid = typeOf(value) === 'date'

  if (!valid && logErrors) {
    logger.warn(ctx, `Expected property ${name} to be a date but instead got: ${typeOf(value)}`, throwErrors)
  }

  return valid
}
