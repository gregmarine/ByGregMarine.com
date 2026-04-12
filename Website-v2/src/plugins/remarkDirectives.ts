import { visit } from 'unist-util-visit';
import type { Root } from 'mdast';

const SUPPORTED_DIRECTIVES = ['details', 'warning', 'pullquote', 'aside', 'reflection'] as const;
type SupportedDirective = (typeof SUPPORTED_DIRECTIVES)[number];

/**
 * Remark plugin that converts container directives (:::name) into HTML elements.
 *
 * Requires remark-directive to run first (parses ::: syntax into containerDirective nodes).
 *
 * Supported containers:
 *   ::: details [title]   — <details class="directive-details"><summary>title</summary>…</details>
 *   ::: warning [title]   — <div class="directive-warning">…</div>
 *   ::: pullquote         — <div class="directive-pullquote">…</div>
 *   ::: aside             — <div class="directive-aside">…</div>
 *   ::: reflection        — <div class="directive-reflection">…</div>
 *
 * Note: The directive label (title) must use bracket syntax: :::name[Title text]
 */
export default function remarkDirectives() {
  return (tree: Root) => {
    visit(tree, 'containerDirective', (node: any) => {
      const name = node.name as string;

      if (!(SUPPORTED_DIRECTIVES as readonly string[]).includes(name)) {
        return;
      }

      node.data = node.data ?? {};
      node.data.hProperties = node.data.hProperties ?? {};

      const directive = name as SupportedDirective;

      if (directive === 'details') {
        node.data.hName = 'details';
        node.data.hProperties.className = 'directive-details';

        // The label paragraph (from :::name[label] syntax) has data.directiveLabel === true.
        // Remap it to a <summary> element so the browser renders it as the toggle header.
        const labelChild = node.children.find((child: any) => child.data?.directiveLabel);
        if (labelChild) {
          labelChild.data = labelChild.data ?? {};
          labelChild.data.hName = 'summary';
        }
      } else {
        node.data.hName = 'div';
        node.data.hProperties.className = `directive-${directive}`;
      }
    });
  };
}
