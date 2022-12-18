const SET_GENRES = "SET_GENRES"

const initialState = {
    genres: []
}

const genresReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        default:
            return state
    }
}

export const setGenresAction = (genresData) => ({ type: SET_GENRES, payload: genresData });
export default genresReducer;