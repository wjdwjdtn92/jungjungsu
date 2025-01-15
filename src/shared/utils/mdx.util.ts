import type { Metadata } from '../types/mdx.type';

import path from 'path';
import fs from 'fs';

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, '').trim();
  const frontMatterLines = frontMatterBlock.trim().split('\n');
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1');
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string): string[] {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let mdxFiles: string[] = [];

  files.forEach((file) => {
    const fullPath = path.join(dir, file.name);

    if (file.isDirectory()) {
      mdxFiles = mdxFiles.concat(getMDXFiles(fullPath));
    } else if (path.extname(file.name) === '.mdx') {
      mdxFiles.push(fullPath);
    }
  });

  return mdxFiles;
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

function getMDXDataFromDir(dir: string) {
  const mdxFiles = getMDXFiles(dir);

  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(file);
    const relativePath = path.relative(dir, file);
    const slug = relativePath.replace(/\\/g, '/').replace(/\.mdx$/, '');

    return {
      metadata,
      slug,
      content
    };
  });
}

function getMDXDataFromFilePath(filePath: string) {
  try {
    const { metadata, content } = readMDXFile(filePath);
    const relativePath = path.relative(process.cwd(), filePath);
    const slug = relativePath.replace(/\\/g, '/').replace(/\.mdx$/, '');

    return {
      metadata,
      slug,
      content
    };
  } catch {
    return null;
  }
}

export {
  getMDXFiles,
  readMDXFile,
  parseFrontmatter,
  getMDXDataFromDir,
  getMDXDataFromFilePath
};
