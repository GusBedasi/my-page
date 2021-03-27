import fs from 'fs';
import grayMatter from 'gray-matter';
import remark from 'remark';
import remarkHTML from 'remark-html';

const getPost = async(markdownName) => {
  const postFile = fs.readFileSync(`./_posts/${markdownName}.md`,  'utf-8');
  const { content, data: metadata } = grayMatter(postFile);
  const htmlContent = await remark()
    .use(remarkHTML)
    .process(content)

    return {
      metadata: {
        ...metadata,
        slug: postFile.replace('.md', ''),
      },
      content: htmlContent.toString()
    }
}

const getAllPosts = async () => {
  const allPostsFileName = fs.readdirSync('./_posts');
  
  const posts = allPostsFileName.map((filename) => {
  const fileContent = fs.readFileSync(`./_posts/${filename}`, 'utf-8');
  const { content, data: metadata } = grayMatter(fileContent);
  const htmlContent = await remark()
    .use(remarkHTML)
    .process(content)

    return {
      metadata: {
        ...metadata,
        slug: filename.replace('.md', ''),
      },
      content: htmlContent.toString()
    }
  })
  return posts;
}

export { getAllPosts, getPost };