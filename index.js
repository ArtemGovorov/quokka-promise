import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeStringify from 'rehype-stringify'
import rehypeSanitize from 'rehype-sanitize'

export const processor = unified()
  .use(rehypeParse)
  .use(rehypeSanitize)
  .use(rehypeStringify)

export default async function sanitize(string) {
  return await processor.process(string)
}

const doc = '<html-blob><u></u><u></u><b>Test</b>.<u></u><u></u></html-blob>'

const result = await sanitize(doc)

console.log(result.value)