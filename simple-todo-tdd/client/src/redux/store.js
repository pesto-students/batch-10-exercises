import { createStore } from 'redux';
import todoFn from './reducer';

const store = createStore(todoFn);
