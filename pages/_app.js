import GlobalStyles from '@/components/GlobalStyles/GlobalStyles'

function App ({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default App