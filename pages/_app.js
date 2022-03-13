import GlobalStyles from '@/components/GlobalStyles/GlobalStyles'

function App ({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App