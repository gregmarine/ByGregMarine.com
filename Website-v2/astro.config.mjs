// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import { directive as micromarkDirective } from 'micromark-extension-directive';
import { directiveFromMarkdown, directiveToMarkdown } from 'mdast-util-directive';
import remarkSmartypants from 'remark-smartypants';
import remarkBreaks from 'remark-breaks';
import remarkToc from 'remark-toc';
import remarkDirectives from './src/plugins/remarkDirectives.ts';
import rehypeFigure from './src/plugins/rehypeFigure.ts';

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

/**
 * Drop-in replacement for remark-directive that only registers container and
 * leaf directives (:::name / ::name).  Text directives (:name) are omitted so
 * that colons inside directive labels — e.g. scripture references like
 * "Mark 12:28-31 AMP" — are never mistaken for inline directives.
 */
function remarkBlockDirectivesOnly() {
  const data = this.data();
  const ext = micromarkDirective();
  delete ext.text; // remove the :name text-directive handler (keycode 58)
  const add = (field, value) => {
    if (data[field]) data[field].push(value);
    else data[field] = [value];
  };
  add('micromarkExtensions', ext);
  add('fromMarkdownExtensions', directiveFromMarkdown());
  add('toMarkdownExtensions', directiveToMarkdown());
}

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    remarkPlugins: [
      remarkBlockDirectivesOnly,
      remarkDirectives,
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