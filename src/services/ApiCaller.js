import { call } from 'redux-saga/effects'
import * as _ from 'lodash'


const isConnected = true

function * callServer (apiFunction, reqData, showError = false, id = null) {
  if (isConnected) {
    const response = yield call(apiFunction, reqData, reqData.id || id)

    const { status = '' } = response || {}
    let resData = _.get(response, 'data', {})
    resData = resData || {}
    if (!_.isEmpty(resData.error_message)) {
      throw resData
    } else {
        return resData
     } 
  } else {
    if (showError) {
     // showToast(ERRORS.NETWORK_ERROR)
    }
    // eslint-disable-next-line no-throw-literal
    throw { error: true,  statusCode: 503 }
  }
}

export default {
  callServer
}
