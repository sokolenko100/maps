import type {Action} from 'redux';

export default interface IAction<T, P> extends Action<T> {
  payload: P;
}
