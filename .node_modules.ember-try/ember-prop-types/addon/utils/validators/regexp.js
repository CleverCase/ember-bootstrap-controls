/**
 * The PropTypes.regexp validator
 */

import Ember from 'ember'
import logger from '../logger'

const {typeOf} = Ember

export default function (ctx, name, value, def, logErrors, throwErrors) {
  const valid = typeOf(value) === 'regexp'

  if (!valid && logErrors) {
    logger.warn(
      ctx,
      `Expected property ${name} to be a regular expression but instead got: ${typeOf(value)}`,
      throwErrors
    )
  }

  return valid
}
