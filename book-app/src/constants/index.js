export const CATEGORIES = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']
export const SORTINGS = ['relevance', 'newest']
export const BOOKS_API_URL = 'https://www.googleapis.com/books/v1/volumes'
export const DEFAULT_START_INDEX = 0
export const DEFAULT_MAX_RESULTS = 32
export const MAX_WORDS_TITLE = 4
export const NO_RESULT_STRING = 'Something went wrong, no result found. Check your VPN config or change the query.'
export const IPDATA_API_URL = 'https://api.ipdata.co/?api-key='
export const BLOCKED_COUNTRIES = ['Belarus', 'France']
export const State = {
    verify: 0,
    access: 1,
    block: 2,
}
export const SERVICE_BLOCKED_TITLE = 'Not available'
export const SERVICE_BLOCKED_DESCRIPTION = 'maksimbell\'s services are not available in your country.'