import * as constants from '@constants'

export const checkIpData = (ipData) => {
    return !constants.BLOCKED_COUNTRIES.includes(ipData.country_name)
}