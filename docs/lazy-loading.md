## Lazy Loading Lemmy Blog Spam

### Overview

Lazy loading defers including lemmy blog spam assets & comments until it's really needed, which will improve page load times and save bandwidth for some users.

There are three strategies, listed as follows in order from easiest to most complex.

In all cases, you would still include the `lbs-container` component in your raw html. Browsers will ignore it until js is loaded.

```
<lbs-container
  params-post-id="1307075"
  url-origin="https://discuss.tchncs.de"
></lbs-container>
```

### Delay Loading by Arbitrary Time

This is the easiest and worst option. It will fool lighthouse and other performance measuring tools which may be beneficial for SEO, but may not provide much benefit for visitors.

To do this you can just include something like this in your page.

```
<script>
delay = 10000 // ms
window.onload(() => {
  setTimeout(() => {
    document.insertAdjacentHTML(
      'beforeend',
      '<script src="./lemmy-blog-spam.js"></script>'
    )
    document.querySelector('head')
  }, delay)
})
</script>
```

### Include Button to Load Comments

A better option is to include a button which will load the js & comments. This gives visitors the option to load everything if they wish, but may cut down on engagement.

Your button might look like this:

```
<button
  onclick="document.insertAdjacentHTML('beforeend', '<script src="./lemmy-blog-spam.js"></script>')"
>Load Comments</button>
```

### Listen to Scroll and Load When Comments Are Visible

```
<script>
  const observer = new IntersectionObserver(
    () => {
      document.insertAdjacentHTML('beforeend', '<script src="./lemmy-blog-spam.js"></script>'
      observer.disconnect()
    }
  )
  observer.observe(document.querySelector('lbs-component'))
</script>
```

