import { CATEGORY_ACTION_TYPES } from "./categoryTypes";

const INITIAL_STATE = {
    categories: []
}

export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CATEGORY_ACTION_TYPES.GET_CATEGORIES:
            return { ...state, categories: payload }
        default:
            return state
    }
}