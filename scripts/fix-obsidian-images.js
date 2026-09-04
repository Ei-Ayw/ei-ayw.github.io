// 让 Obsidian 风格的图片引用在博客上也能正常显示
// 1. ![[xxx.png]]  ->  ![](/images/xxx.png)
// 2. ../images/xxx.png（Obsidian 生成的相对路径）-> /images/xxx.png

const IMAGE_EXT = /\.(png|jpe?g|gif|webp|svg|bmp|avif)$/i;

hexo.extend.filter.register('before_post_render', function (data) {
  if (!data.content) return data;
  data.content = data.content.replace(
    /!\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|([^\]]+))?\]\]/g,
    (match, file, alt) => {
      const name = file.trim();
      if (!IMAGE_EXT.test(name)) return match;
      const caption = (alt || '').trim();
      const url = '/images/' + name.split('/').map(encodeURIComponent).join('/');
      return `![${caption}](${url})`;
    }
  );
  return data;
});

hexo.extend.filter.register('after_render:html', function (str) {
  return str.replace(/(src|href)="\.\.\/images\//g, '$1="/images/');
});
