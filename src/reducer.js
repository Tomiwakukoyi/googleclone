export const initialState = {
  term: null,
};

//whenever we want to change dthe data layer, we dispatch an action
//and SET_SEARCH_TERM is our action type
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

//state is the state of the datalayer and the action is whatevr we're dispatching into the context Api
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      //...state means its returning whatever the state currently looks like and
      //change the term inside of the data layer with whatever action term we dispatch
      return {
        ...state,
        term: action.term,
      };

    //if we dont know what the dispatched action is , it returns the default state
    default:
      return state;
  }
};
export default reducer;
