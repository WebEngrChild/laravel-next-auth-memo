import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      // 全コンポーネントでRecoilを適用
      <RecoilRoot>
        <Component {...pageProps} />;
      </RecoilRoot>
        )
}

export default MyApp;
