import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import WebPButton from 'post-helpers/webp-button'

const components = { SyntaxHighlighter, WebPButton }

const PostPage = ({ title, date, mdxSource }) => {
  return (
    <div>
      <h1>{title}</h1>
      <MDXRemote {...mdxSource} components={components} />
    </div>
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