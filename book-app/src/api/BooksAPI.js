import * as constants from '@constants'
import * as config from './config'

export function requestVolume(params, startIndex = constants.DEFAULT_START_INDEX) {

    const {
        query,
        filterId,
        sortingId
    } = params

    return fetch(`${config.BOOKS_API_URL}` +
        `?q=${query}` +
        `${filterId > 0 ? `+subject:${constants.CATEGORIES[filterId]}` : ``}` +
        `&startIndex=${startIndex}` +
        `&maxResults=${constants.DEFAULT_MAX_RESULTS}` +
        `&orderBy=${constants.SORTINGS[sortingId]}` +
        `&key=${process.env.REACT_APP_API_KEY}`)
}

export function requestBook(id) {
    return fetch(`${config.BOOKS_API_URL}/${id}`)
}