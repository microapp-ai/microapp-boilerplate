import { Loader, LoadingOverlay } from '@mantine/core';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

const UIProvider = dynamic<any>(() => import('microappui/UIProvider'), {
  ssr: false,
});
const LayoutProvider = dynamic<any>(() => import('microappui/LayoutProvider'), {
  ssr: false,
  loading: () => (
    <LoadingOverlay
      loader={<Loader color="dark" size="xl" />}
      visible={true}
      overlayBlur={2}
    />
  ),
});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <UIProvider>
      <LayoutProvider
        withFooter
        // withAppHeader TODO: uncomment this when the app is published
        // slug={process.env.NEXT_PUBLIC_APP_SLUG} TODO: uncomment this when the app is published
      >
        <Component {...pageProps} />
      </LayoutProvider>
    </UIProvider>
  );
}
