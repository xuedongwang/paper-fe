<template>
  <div
    class="markdown-body markdown-content"
    v-html="html"
  >
  <slot></slot>
  </div>
</template>
<script>
import marked from 'marked';
import Prism from 'prismjs';
const renderer = new marked.Renderer();
renderer.code = function (code, infostring, escaped) {
  var lang = (infostring || '').match(/\S*/)[0];
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return `<pre class="${this.options.langPrefix}"><code>${(escaped ? code : escape(code, true))}</code></pre>`;
  }

  return `<pre class="${this.options.langPrefix} ${escape(lang, true)}"><code class="${this.options.langPrefix} ${escape(lang, true)}">${(escaped ? code : escape(code, true))}</code></pre>\n`;
};
marked.setOptions({
  baseUrl: null,
  breaks: false,
  gfm: true,
  headerIds: true,
  headerPrefix: '',
  highlight: function (code, infostring, escaped) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  },
  langPrefix: 'language-',
  mangle: true,
  pedantic: false,
  renderer,
  sanitize: false,
  sanitizer: null,
  silent: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});
export default {
  name: 'Markdown',
  props: {
    content: {
      type: String,
      default () {
        return '';
      }
    }
  },
  computed: {
    html () {
      return marked(this.content)
    }
  }
};
</script>
<style lang="scss" scoped>
@import '~github-markdown-css';
@import '~prismjs/themes/prism-okaidia.css';
.markdown-content {
  /deep/ {
    blockquote {
      padding: 15px 1rem;
      font-size: 14px;
      padding-right: 15px;
      margin-left: 0;
      margin-right: 0;
      color: #819198;
      border-left: 6px solid #dce6f0;
      background: #f2f7fb;
      line-height: 22px;
    }
    p > code {
      padding: 2px 4px;
      font-size: 90%;
      color: #c7254e;
      background-color: #f9f2f4;
      border-radius: 4px;
    }
    ol > li {
      list-style: decimal;
    }
    ul > li {
      list-style: disc;
    }
  }
}
</style>