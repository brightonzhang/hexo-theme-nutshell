# Nutshell

> I could be bounded in a nutshell and count myself a king of infinite space.
> --William Shakespeare, Hamlet, Act 2, Scene 2
That's why the theme is called nutshell.

The theme is based on Hexo theme [Landscape](https://github.com/hexojs/hexo-theme-landscape), [Clean Blog](https://github.com/klugjo/hexo-theme-clean-blog) and [BeanTech](https://github.com/YenYuHsuan/hexo-theme-beantech).

## Features

- Disqus comments
- Google Analytics
- Cover image for posts and pages
- Tags and Categories Support
- Responsive Images
- Code syntax highlighting

## External libraries used

- [Bootstrap](http://getbootstrap.com/css/)
- [jQuery](https://jquery.com/)
- [TagCanvas](http://www.goat1000.com/tagcanvas.php)

## Installation

```
$ git clone https://github.com/brightonzhang/hexo-theme-nutshell themes/nutshell
```

Then update your blog's main `_config.yml` to set the theme to `nutshell`:

```
# Extensions
## Plugins: http://hexo.io/plugins/
## Themes: http://hexo.io/themes/
theme: shell
```

## Configuration

### Nav Bar

The nav is configured in the [Data files](https://hexo.io/docs/data-files.html) `source/_data/nav.yml`.

```
title: NUTSHELL
menu:
  Home: /
  Archives: /archives
  Github:
    url: https://github.com/brightonzhang/hexo-theme-nutshell
    icon: github
```

The object key is the label and the value is the path, or you can use a icon (font awesome) like menu item.

The `title` is the top left label. When clicked it will lead to the Home Page.


### Index Cover Image

The cover image is configured in the [Data files](https://hexo.io/docs/data-files.html) `source/_data/cover.yml`.

```
home: /imgs/neptune.png
archive: /imgs/IMG_3963.jpg
tag: /imgs/jelsacroatia.jpg
category: /imgs/hangzhou.jpg
```

### Comments

The comments provider is specified in the theme's `_config.yml`. 
```
# Comments. Choose one by filling up the information
comments:
  # Disqus comments
  disqus_shortname: 
```

You can too hide the comment in the posts front-matter:

```
comment: false
---
```

### Google Analytics

The Google Analytics Tracking ID is configured in the theme's `_config.yml`.

```
# Google Analytics Tracking ID
google_analytics:
```

### Contacts

Setup the links to your social pages in the [Data files](https://hexo.io/docs/data-files.html) `source/_data/contact.yml`. Links are in the footer.

```
twitter:
facebook:
github: https://github.com/brightonzhang/hexo-theme-nutshell
gitlab:
linkedin:
mailto:
```

### Author

The post's author is specified in the posts front-matter:

```
author: Klug Jo
---
```

### Post's Cover Image

By default, posts will use the home page cover image. You can specify a custom cover in the front-matter:

```
title: Excerpts
date: 2013-12-25 00:23:23
tags: ["Excertps"]
cover: /assets/contact-bg.jpg
---
```

### Post's Share Cover Image

You can specify a custom cover to share yours posts in social medias:

```
share_cover: /assets/contact-bg.jpg
---
```


## Tags page.

> Follow these steps to add a `tags` page that contains all the tags in your site.

- Create a page named `tags`

```
$ hexo new page "tags"
```

- Edit the newly created page and set page type to `tags` in the front matter.

```
title: All tags
type: "tags"
```

- Add `tags` to the menu in the [Data files](https://hexo.io/docs/data-files.html) `source/_data/nav.yml`:

```
menu:
  Home: /
  Archives: /archives
  Tags: /tags
```

## Categories page.

> Follow these steps to add a `categories` page that contains all the categories in your site.

- Create a page named `categories`

```
$ hexo new page "categories"
```

- Edit the newly created page and set page type to `categories` in the front matter.

```
title: All categories
type: "categories"
```

- Add `Categories` to the menu in the [Data files](https://hexo.io/docs/data-files.html) `source/_data/nav.yml`:

```
menu:
  Home: /
  Archives: /archives
  Categories: /categories
```

# Refs and Thanks

[Hexo折腾笔记](https://unnamed42.github.io/2016-09-10-Hexo%E6%8A%98%E8%85%BE%E7%AC%94%E8%AE%B0.html)

[从零开始制作 Hexo 主题](https://www.ahonn.me/post/33)