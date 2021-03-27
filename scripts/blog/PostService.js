import fs from 'fs';
import grayMatter from 'gray-matter';
import remark from 'remark';
import remarkHTML from 'remark-html';

const getPost = (markdownName) => {
  const postFile = fs.readFileSync(`./_posts/${markdownName}.md`,  'utf-8');
  const { content, data: metadata } = grayMatter(postFile);
  const htmlContent = remark()
    .use(remarkHTML)
    .processSync(content)
    .toString()

    return {
      metadata: {
        ...metadata,
        slug: postFile.replace('.md', ''),
      },
      content: htmlContent
    }
}

const getAllPosts = () => {
  const allPostsFileName = fs.readdirSync('./_posts');
  
  const posts = allPostsFileName.map((filename) => {
  const fileContent = fs.readFileSync(`./_posts/${filename}`, 'utf-8');
  const { content, data: metadata } = grayMatter(fileContent);
  const htmlContent = remark()
    .use(remarkHTML)
    .processSync(content)
    .toString()

    return {
      metadata: {
        ...metadata,
        slug: filename.replace('.md', ''),
      },
      content: htmlContent
    }
  })
  return posts;
}

export { getAllPosts, getPost };