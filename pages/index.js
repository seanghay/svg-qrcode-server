import { promises as fs } from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export default function App({ readmeContent }) {
  return <ReactMarkdown rehypePlugins={[rehypeRaw]} children={readmeContent}></ReactMarkdown>
}

export async function getServerSideProps() {

  const readmeFile = path.join(process.cwd(), 'README.md');
  const readmeContent = await fs.resolve(readmeFile, 'utf-8');

  return {
    props: {
      readmeContent,
    }
  }
}