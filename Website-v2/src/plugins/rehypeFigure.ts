import { visit } from 'unist-util-visit';
import { h } from 'hastscript';
import type { Root, Element } from 'hast';

/**
 * Drop-in replacement for the `rehype-figure` npm package.
 *
 * The published package has a bug: it replaces nodes using `tree.children[index]`
 * where `index` is the position within the *parent*, not within the root. When a
 * lone-image `<p>` is nested inside a `<details>` (or any non-root element), the
 * wrong root-level node gets overwritten and the image appears hoisted out of its
 * container.
 *
 * This version uses the three-argument visitor form `(node, index, parent)` and
 * always mutates `parent.children[index]`, which is correct regardless of nesting
 * depth.
 */
export default function rehypeFigure(option?: { className?: string }) {
  const className = option?.className ?? 'rehype-figure';

  return (tree: Root) => {
    visit(tree, 'element', (node: Element, index, parent) => {
      if (node.tagName !== 'p' || index == null || parent == null) return;

      const images = node.children.filter(
        (n): n is Element => (n as Element).tagName === 'img'
      );

      if (images.length === 0) return;

      const figures = images.map((img) => {
        const alt = (img.properties?.alt as string | undefined) ?? '';
        return h(`figure.${className}`, [
          h('img', { ...img.properties }),
          alt.trim().length > 0 ? h('figcaption', alt) : '',
        ]) as Element;
      });

      (parent.children as Element[])[index] =
        figures.length === 1
          ? figures[0]
          : (h(`div.${className}-container`, figures) as Element);
    });
  };
}
