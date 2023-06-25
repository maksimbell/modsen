import * as constants from '@constants'

const queryParams = {}

export function requestVolume(startIndex, params = queryParams) {

    queryParams = {
        ...params
    }

    const {
        text,
        sortingId,
        filterId
    } = queryParams

    return fetch(`${constants.BOOKS_API_URL}` +
        `?q=${text}` +
        `${filterId > 0 ? `+subject:${constants.CATEGORIES[filterId]}` : ``}` +
        `&startIndex=${startIndex}` +
        `&maxResults=${constants.DEFAULT_MAX_RESULTS}` +
        `&orderBy=${constants.SORTINGS[sortingId]}` +
        `&key=${process.env.REACT_APP_API_KEY}`)
}

export function requestBook(id) {
    return fetch(`${constants.BOOKS_API_URL}/${id}`)
}