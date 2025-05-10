import { RootState } from '@store';
import { Selector } from 'react-redux';

export type TTimeout = undefined | ReturnType<typeof setTimeout>;

export type TRecord = {
  position: number;
  time: number;
  diff: number;
};

export type TSelector<T> = Selector<RootState, T>;