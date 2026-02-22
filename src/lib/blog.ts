import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content", "blog");

export interface BlogPostMeta {
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
  readTime?: string;
}

export interface BlogPost {
  slug: string;
  meta: BlogPostMeta;
  content: string;
}

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.mdx?$/, "");
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir).filter((f) => /\.mdx?$/.test(f));
  const posts: BlogPost[] = files.map((filename) => {
    const fullPath = path.join(contentDir, filename);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(raw);
    return {
      slug: getSlugFromFilename(filename),
      meta: data as BlogPostMeta,
      content,
    };
  });
  posts.sort((a, b) => (b.meta.date > a.meta.date ? 1 : -1));
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPathMdx = path.join(contentDir, `${slug}.mdx`);
  const fullPathMd = path.join(contentDir, `${slug}.md`);
  let fullPath: string;
  if (fs.existsSync(fullPathMdx)) fullPath = fullPathMdx;
  else if (fs.existsSync(fullPathMd)) fullPath = fullPathMd;
  else return null;
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    meta: data as BlogPostMeta,
    content,
  };
}
