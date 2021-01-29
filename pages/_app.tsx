import "../styles/index.css";


import type {AppProps} from 'next/app'

import {TodoProvider} from "context/useTodoContext"

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
      <TodoProvider>
        <Component {...pageProps} />
      </TodoProvider>
  );
}
