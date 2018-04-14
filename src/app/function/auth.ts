import {
  Context,
  Handler,
  Callback,
  CustomAuthorizerEvent,
} from 'aws-lambda';
import * as sourceMapSupport from 'source-map-support';

sourceMapSupport.install();

/**
 * 認可を行う
 *
 * @param {CustomAuthorizerEvent} event
 * @param {Context} context
 * @param {Callback} callback
 * @returns {Promise<void>}
 */
export const authorization: Handler = async (
  event: CustomAuthorizerEvent,
  context: Context,
  callback: Callback,
) => {
  // TODO 仮実装なので後で本格的に実装する
  console.log(event);
  console.log(context);
  callback();
};
