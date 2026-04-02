// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

/** @param {any} node */
function visitImgNodes(node) {
  if (node.type === 'element' && node.tagName === 'img') {
    const src = node.properties?.src;
    if (typeof src === 'string' && src.includes('res.cloudinary.com')) {
      node.properties.src = src.replace('/upload/', '/upload/f_auto,q_auto/');
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
    rehypePlugins: [rehypeCloudinaryAuto],
  },
});