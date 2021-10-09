import { promises as fs } from 'fs'
import path from 'path'
import Head from 'next/head'
import { useRouter } from 'next/router'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'


export default function App({ readmeContent }) {
const router = useRouter();
const { text } = router.query;

if (text) {
  router.push({
    path: '/api/qrcode.png',
    query: { text }
  })
}

return <>
    <Head>
    <title>Dynamic QR Code to static image URL builder</title>  
    <meta property="og:title" content="Dynamic QR Code to static image URL builder" key="title" />
    </Head>    
    <ReactMarkdown rehypePlugins={[rehypeRaw]} children={readmeContent}></ReactMarkdown>
  </>
}

export async function getStaticProps() {

  const readmeFile = path.join(process.cwd(), 'README.md');
  const readmeContent = await fs.readFile(readmeFile, 'utf-8');

  return {
    props: {
      readmeContent,
    }
  }
}