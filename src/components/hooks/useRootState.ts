import { useSelector } from 'react-redux';
import { AppState } from 'src/features/store';

type StateSelector<T> = (state: AppState) => T;
type EqualityFn<T> = (left: T, right: T) => boolean;

export function useRootState<T>(selector: StateSelector<T>, equalityFn?: EqualityFn<T>) {
  return useSelector(selector, equalityFn);
}
