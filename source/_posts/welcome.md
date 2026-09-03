---
title: 博客搭建完成，第一篇笔记
date: 2026-09-03 00:00:00
tags: [博客, Hexo]
categories: [随笔]
---

这个博客基于 GitHub Pages + Hexo + NexT 搭建，现在正式开张。

以后我会在这里沉淀学习笔记、项目总结和踩坑记录。Markdown 写好文章后放进 `source/_posts/`，推送到 GitHub 的 `main` 分支就会自动构建并发布到 https://ei-ayw.github.io/。

## 常用操作

```bash
# 本地预览（http://localhost:4000）
npm run server

# 新建一篇文章
npx hexo new "文章标题"

# 手动生成静态文件
npm run build
```

写文章只需在 `source/_posts/` 里新建 Markdown 文件，并在开头写上 Front-Matter：

```markdown
---
title: 文章标题
date: 2026-09-03
tags: [标签1, 标签2]
categories: [分类名]
---
```

期待第一篇有营养的笔记。
