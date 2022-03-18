import React from 'react'
import Head from 'next/head'

const SEO = ({
  title
}) => {
  return (
    <Head>
      <title>{ title || 'Ceben' }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css" />
    </Head>
  )
}

export default SEO