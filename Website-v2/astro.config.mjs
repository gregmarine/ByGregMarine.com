// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import remarkSmartypants from 'remark-smartypants';
import remarkBreaks from 'remark-breaks';
import remarkToc from 'remark-toc';
import rehypeFigure from 'rehype-figure';

/** @param {any} node */
function visitImgNodes(node) {
  if (node.type === 'element' && node.tagName === 'img') {
    const src = node.properties?.src;
    if (typeof src === 'string' && src.includes('res.cloudinary.com')) {
      node.properties.src = src.replace('/upload/', '/upload/f_auto,q_auto/if_ar_lt_1.0/c_scale,w_900/if_else/c_scale,h_900/if_end/');
    }
  }
  if (node.children) {
    for (const child of node.children) visitImgNodes(child);
  }
}

function rehypeCloudinaryAuto() {
  /** @param {any} tree */
  return function (tree) {
    visitImgNodes(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    remarkPlugins: [
      remarkSmartypants,
      remarkBreaks,
      remarkToc,
    ],
    rehypePlugins: [
      rehypeCloudinaryAuto,
      rehypeSlug,
      rehypeFigure,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
    ],
  },
});