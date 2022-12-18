const SET_FAVORITES = "SET_FAVORITES"
const DELETE_FAVORITE = "DELETE_FAVORITE"

const initialState = {
    favorites: []
}

const favoritsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVORITES:
            let isInArray = false;
            state.favorites.forEach(el => {
                if (el.id === action.payload.id)
                    isInArray = true
            })
            if (!isInArray)
                return {
                    ...state,
                    favorites: [...state.favorites, action.payload]
                }
            case DELETE_FAVORITE : 
                return {
                    ...state,
                    favorites : state.favorites.filter(favorti => favorti.id !== action.id)
                }
        default:
            return state
    }
}

export const setFavoritsAction = (favoritesData) => ({ type: SET_FAVORITES, payload: favoritesData })
export const deleteFavoritsAction = (id) => ({type : DELETE_FAVORITE, id})
export default favoritsReducer

