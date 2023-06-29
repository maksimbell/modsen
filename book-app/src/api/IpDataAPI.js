import * as config from './config'

export function requestIpData() {
    return fetch(`${config.IPDATA_API_URL}${process.env.REACT_APP_IPDATA_API_KEY}`)
}