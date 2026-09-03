# Ei-Ayw 的博客

基于 GitHub Pages + [Hexo](https://hexo.io) + [NexT](https://theme-next.js.org) 的个人博客。

线上地址：https://ei-ayw.github.io/

## 写一篇新笔记

```bash
# 新建文章（会生成到 source/_posts/）
npx hexo new "我的笔记标题"
```

也可以用编辑器直接在 `source/_posts/` 下新建 Markdown 文件，并在开头写入 Front-Matter：

```markdown
---
title:  我的笔记标题
date: 2026-09-03
tags: [标签]
categories: [分类]
---
```

## 本地预览

```bash
npm install
npm run server
```

浏览器打开 http://localhost:4000 即可预览。

## 发布

把改动推送到 `main` 分支即可，GitHub Actions 会自动构建并部署：

```bash
git add .
git commit -m "add: 新笔记"
git push origin main
```

几分钟后在 https://ei-ayw.github.io/ 查看效果。
