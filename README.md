# Lemmy Blog Spam

A simple lemmy comment loader, perfect for static sites.

# Usage

Presently lemmy-blog-spam is an alpha "proof of concept" release and is not published on npm or any CDN. 

_webpack_

If you're using webpack or similar then you could install the package from github and include / require the js in your build.

Install package:
```
npm i --save https://github.com/leviwheatcroft/lemmy-blog-spam.git
```

Require / include:
```
include `lemmy-blog-spam`
```

_download js_

If you're not using a build tool then you could just download the built package here and place it in your web root.

Then load the javascript in your page.

```
<script src="./lemmyBlogSpam.js" async></script>
```

_include post on page_

Be sure you have the viewport meta tag in your html `<head>` tag:

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Create the component

```
<lbs-container
  params-post-id="1307075"
  url-origin="https://discuss.tchncs.de"
></lbs-container>
```

# Package Size

Lemmy Blog Spam is presently 82kb minified (27kb gzipped), so not great not terrible. Additionally, the API calls to pull down the actual comments will be significant.

This includes `marked` (50kb) for rendering markdown, `lit` (5kb) for templates, and `dayjs` (5kb) for dates, with the remainder being templates, logic, and styles.

_lazy loading_

Implementing a lazy loader is easy enough, there's a guide [in the docs](https://github.com/leviwheatcroft/lemmy-blog-spam/blob/master/docs/lazy-loading.md).

# Demo

Take a look at the [demo](https://leviwheatcroft.github.io/lemmy-blog-spam).

# Options

Pass options as attributes to the `lbs-container` element.

_params-post-id_
*required*
the id of the post, as in `1307075`

_url-origin_
*required*
lemmy instance containing the post, as in `https://lemmy.ml`

_url-base_
*optional* default: `/api/v3`
the url base for the api request

_params-max-depth_
*optional* default: `false`
not implemented in lemmy-blog-spam see issues: 

 - https://github.com/LemmyNet/lemmy/issues/3065
 - https://github.com/LemmyNet/lemmy/issues/3585

_params-limit_
*optional* default: `64`
Number of comments requested from lemmy API.
has issues. Where any value for limit is passed, all comments are returned. Passing `false` for this option returns the default of 10 comments per request.

_hide-depth_
*optional* default: `4`
Any comments at a multiple of this depth will be collapsed initially.

_params-sort_
*optional* default: `false`
Not implemented in lemmy-blog-spam. Comments are always sorted by "hot".


