import { ADD } from './actions/actionTypes';

export const todoFn = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.task,
      ];
    default:
      return state;
  }
};

