import * as constants from '../constants'

let prevQuery

export function requestVolume(filterId, sortingId, startIndex = constants.DEFAULT_START_INDEX,
    maxResults = constants.DEFAULT_MAX_RESULTS, query = prevQuery) {
    prevQuery = query

    return fetch(`${constants.API_URL}` +
        `?q=${query}` +
        `${filterId && `+subject:${constants.CATEGORIES[filterId]}`}` +
        `&startIndex=${startIndex}` +
        `&maxResults=${maxResults}` +
        `&orderBy=${constants.SORTINGS[sortingId]}` +
        `&key=${process.env.REACT_APP_API_KEY}`)
}

export function requestBook(id) {
    return fetch(`${constants.API_URL}/${id}`)
}