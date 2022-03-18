import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter'
import WebPButton from 'post-helpers/webp-button'
import SEO from '@/components/SEO/SEO'
import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'

const components = { SyntaxHighlighter }

const PostPage = ({
  title,
  date,
  mdxSource
}) => {
  return (
    <>
      <SEO title={title}></SEO>
      <Header></Header>
      <Main>
        <h2>{title}</h2>
        <MDXRemote {...mdxSource} components={components} />
      </Main>
    </>
  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8')

  const { data, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      ...data,
      slug,
      mdxSource
    }
  }
}

export default PostPage