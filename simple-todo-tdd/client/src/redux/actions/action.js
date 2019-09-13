import { ADD } from './actionTypes';

export const addAction = (task) => {
  return {
    type: ADD,
    task,
  };
};

