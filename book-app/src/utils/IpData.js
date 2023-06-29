import * as constants from './config'

export const checkIpData = (ipData) => {
    // console.log(constants.BLOCKED_COUNTRIES)
    // console.log(ipData)
    // console.log(!constants.BLOCKED_COUNTRIES.includes(ipData.country_name))

    return !constants.BLOCKED_COUNTRIES.includes(ipData.country_name)
}