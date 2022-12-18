import { createStore, combineReducers } from "redux";
import filmsReducer from "./filmsReducer";
import genresReducer from "./genreReducer";
import favoritsReducer from "./favoritsReducer"

const reducer = combineReducers({
    genresPage: genresReducer,
    films: filmsReducer,
    favoritsPage : favoritsReducer
})

const store = createStore(reducer)
window.store = store
export default store