import "@/public/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/src/Core/index";
import { Provider } from 'react-redux';
import store from '@/src/Redux/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
