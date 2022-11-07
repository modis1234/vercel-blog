import { getSortedPostsData } from '../../lib/posts'

export default function handler(req, res) {
  const allPostsData = getSortedPostsData()
  res.status(200).json({ allPostsData })
}

export async function createPost({ id, title, date, content }) {
  const fullPath = path.join(postsDirectory, `${id}.md`)

  const data = `---
  title: '${title}'
  date: '${date}'
    
  ${content}`
  fs.writeFileSync(fullPath, data)
}
