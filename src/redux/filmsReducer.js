const SET_FILMS = "SET_FILMS";
const SET_NEW_FILMS = "SET_NEW_FILMS";
const SET_FILMS_PAGE = "SET_FILMS_PAGE";
const SET_FILTER_GENRES = "SET_FILTER_GENRES"
const initialState = {
    filmsCard: [],
    pageNumber: 1,
    filmsPage: {}
}
const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS:
            return {
                ...state,
                filmsCard: action.payload
            }
        case SET_NEW_FILMS:
            return {
                ...state,
                filmsCard: [...state.filmsCard, ...action.payload],
                pageNumber: state.pageNumber += 1
            }
        case SET_FILMS_PAGE:
            return {
                ...state,
                filmsPage: action.payload
            }
        case SET_FILTER_GENRES:
            return {
                ...state,
                filmsCard: action.payload,
                pageNumber: state.pageNumber += 1
            }
        default:
            return state
    }
}

export const setFilmsCardAction = (filmsData) => ({ type: SET_FILMS, payload: filmsData });
export const setNewFilmsCardAction = (filmsData) => ({ type: SET_NEW_FILMS, payload: filmsData });
export const setFilmsPageAction = (filmsPage) => ({ type: SET_FILMS_PAGE, payload: filmsPage });
export const setFilterGenresAction = (genreData) => ({ type : SET_FILTER_GENRES, payload : genreData});
export default filmsReducer;