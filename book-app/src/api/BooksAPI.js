import * as constants from '../constants'

let prevQuery

const request = (filterId, sortingId, query = prevQuery, maxResults = 30) => {
    prevQuery = query

    return fetch(`${constants.API_URL}` +
        `?q=${query}` +
        `${filterId && `+subject:${constants.CATEGORIES[filterId]}`}` +
        `&maxResults=${maxResults}` +
        `&orderBy=${constants.SORTINGS[sortingId]}` +
        `&key=${process.env.REACT_APP_API_KEY}`)
}

export default request