import { createSlice } from '../create-slice';

describe('createSlice', () => {
  type TestState = { count: number };
  type TestReducers = {
    increment: (state: TestState, amount: number) => TestState;
    decrement: (state: TestState, amount: number) => TestState;
  };

  const testReducers: TestReducers = {
    increment: (state, amount) => ({ ...state, count: state.count + amount }),
    decrement: (state, amount) => ({ ...state, count: state.count - amount }),
  };

  const initialState: TestState = { count: 0 };

  it('should create slice with reducer', () => {
    const { initialState: init, reducer } = createSlice({
      initialState,
      reducers: testReducers,
    });

    expect(init).toEqual({ count: 0 });

    let state = reducer(init, { type: 'increment', payload: 1 });
    expect(state).toEqual({ count: 1 });

    state = reducer(state, { type: 'decrement', payload: 2 });
    expect(state).toEqual({ count: -1 });
  });
});
