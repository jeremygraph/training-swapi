import axios from 'axios';
import { CHARACTER_SUBMIT, receiveData } from 'src/store/reducer';

const middleware = store => next => (action) => {
  const state = store.getState();
  console.log(state);

  switch (action.type) {
    case CHARACTER_SUBMIT:
      axios({
        method: 'GET',
        url: `https://swapi.co/api/people/${state.inputCharacter}/`,
      })
        .then((result) => {
          console.log('register mid. ', result);
          store.dispatch(receiveData(result.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

      default:
      next(action);
  }
}

export default middleware;
