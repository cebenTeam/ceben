import GlobalStyles from '@/components/GlobalStyles/GlobalStyles'
import StandardLayout from '@/components/StandardLayout/StandardLayout'

function App ({ Component, pageProps }) {
  return (
    <StandardLayout>
      <GlobalStyles />
      <Component {...pageProps} />
    </StandardLayout>
  )
}

export default App