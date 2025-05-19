import nextra from 'nextra'
import remarkGfm from 'remark-gfm'

/**
 * @type {import('nextra').NextraConfig}
 */
const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false
  },
  contentDirBasePath: '/docs',
  mdxOptions:{
    // remarkPlugins:[remarkGfm]
  }
})

/**
 * @type {import('next').NextConfig}
 */
export default withNextra({
  reactStrictMode: true,
})
