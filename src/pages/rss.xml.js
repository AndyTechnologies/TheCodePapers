import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: 'TheCodePapers',
    description: 'Blog personal minimalista sobre desarrollo, programación y tecnología.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/blog/${post.id}/`,
      pubDate: post.data.pubDate,
      categories: post.data.tags,
      author: post.data.author,
    })),
    customData: `<language>es-ES</language>`,
  });
}