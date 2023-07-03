import * as constants from '@constants'

export function requestIpData() {
    return fetch(`${constants.IPDATA_API_URL}${process.env.REACT_APP_IPDATA_API_KEY}`)
}