import '../styles/globals.css'
import Layout from '../components/Layout';
import App from 'next/app';
function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp
