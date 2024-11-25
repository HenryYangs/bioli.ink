'use client'

import { Provider } from 'react-redux';

import { store } from '@/app/my/redux';

import Playground from '../..';

export default function PlaygroundWrapper() {
  return (
    <Provider store={store}>
      <Playground></Playground>
    </Provider>
  );
}
