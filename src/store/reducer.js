/**
 * Initial State
 */
const initialState = {
  inputCharacter: null,
  name: '',
  darkTheme: false,
};

/**
 * Types
 */
const CHARACTER_CHANGE = 'CHARACTER_CHANGE';
export const CHARACTER_SUBMIT = 'CHARACTER_SUBMIT';
export const CHARACTER_RECEIVE = 'CHARACTER_RECEIVE';
const DARK_MODE = 'DARK_MODE';
const LIGHT_MODE = 'LIGHT_MODE';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHARACTER_CHANGE:
    console.log('handleChange');
      return {
        ...state,
        ...action.modif,
      };
      case CHARACTER_SUBMIT:
      console.log('handlesubmit');
        return {
          ...state,
        };
        case CHARACTER_RECEIVE:
         console.log('receive data');
         return {
           ...state,
           ...action.data,
           inputCharacter: '',
         };
         case DARK_MODE:
         console.log('darkmode');
           return {
             ...state,
             darkTheme: true,
           };
           case LIGHT_MODE:
           console.log('darkmode');
             return {
               ...state,
               darkTheme: false,
             };
    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const characterInputChange = modif => ({
  type: CHARACTER_CHANGE,
  modif,
});
export const characterFormSubmit = () => ({
  type: CHARACTER_SUBMIT,
});

export const receiveData = data => ({
  type: CHARACTER_RECEIVE,
  data,
});
export const darkMode = () => ({
  type: DARK_MODE,
});
export const lightMode = () => ({
  type: LIGHT_MODE,
});
/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
