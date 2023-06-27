import * as constants from '../components/Header/node_modules/@constants'

export function requestVolume(params, startIndex = constants.DEFAULT_START_INDEX) {

    const {
        query,
        filterId,
        sortingId
    } = params

    return fetch(`${constants.BOOKS_API_URL}` +
        `?q=${query}` +
        `${filterId > 0 ? `+subject:${constants.CATEGORIES[filterId]}` : ``}` +
        `&startIndex=${startIndex}` +
        `&maxResults=${constants.DEFAULT_MAX_RESULTS}` +
        `&orderBy=${constants.SORTINGS[sortingId]}` +
        `&key=${process.env.REACT_APP_API_KEY}`)
}

export function requestBook(id) {
    return fetch(`${constants.BOOKS_API_URL}/${id}`)
}