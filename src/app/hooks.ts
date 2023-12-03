import {
  ActionReducerMapBuilder,
  AsyncThunk,
  Draft,
  SliceCaseReducers,
  CreateSliceOptions as _CreateSliceOptions,
  createSlice,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, AppStatus, RootState } from './store';

type AsyncThunkReducerBuilderCaseArguments<
  State extends { status: AppStatus },
  Action,
  RejectedAction,
> = {
  loading?: (state: Draft<State>) => void;
  idle?: (state: Draft<State>, action: Action) => void;
  failed?: (state: Draft<State>, action: RejectedAction) => void;
};

class AsyncThunkReducerBuilder<State extends { status: AppStatus }> {
  constructor(private builder: ActionReducerMapBuilder<State>) {}

  addCase<Returned, ThunkArg>(
    asyncThunk: AsyncThunk<Returned, ThunkArg, any>,
    caseArguments?: AsyncThunkReducerBuilderCaseArguments<
      State,
      ReturnType<typeof asyncThunk.fulfilled>,
      ReturnType<typeof asyncThunk.rejected>
    >,
  ) {
    this.builder
      .addCase(asyncThunk.pending, (state) => {
        state.status = 'loading';
        caseArguments?.loading && caseArguments?.loading(state);
      })
      .addCase(asyncThunk.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log(asyncThunk.typePrefix, state.status, action.payload);
        caseArguments?.idle && caseArguments?.idle(state, action);
      })
      .addCase(asyncThunk.rejected, (state, action) => {
        state.status = 'failed';
        console.log(asyncThunk.typePrefix, state.status, action.error);
        caseArguments?.failed && caseArguments?.failed(state, action);
      });
    return this;
  }
}

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type CreateSliceOptions<
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string,
> = _CreateSliceOptions<State, CaseReducers, Name> &
  (State extends { status: AppStatus }
    ? {
        asyncThunkReducers: (builder: AsyncThunkReducerBuilder<State>) => void;
      }
    : object);

export function createAppSlice<
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string,
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
  return createSlice(
    'asyncThunkReducers' in options
      ? {
          ...options,
          extraReducers: (builder) => {
            if (options.extraReducers) {
              if (typeof options.extraReducers === 'function') {
                options.extraReducers(builder);
              }
            }
            // @ts-expect-error options에 asyncThunkReducers가 있으므로 State는
            // 자료형이 AppStatus인 status 프로퍼티를 가지고 있다.
            options.asyncThunkReducers(new AsyncThunkReducerBuilder(builder));
          },
        }
      : options,
  );
}
