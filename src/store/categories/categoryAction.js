import { CATEGORY_ACTION_TYPES } from "./categoryTypes";
import { createAction } from "../../utils/reducer/reducer";

export const setCategories = (categoriesArray) => createAction(CATEGORY_ACTION_TYPES.GET_CATEGORIES, categoriesArray)