/**
 * This is an answer to the General Assignment of Cloudflare hiring
 * author: Qiangwen Xu
 * updated: 10/26/2020 Mon
 *  */
const someHTMLURL = 'https://static-links-page.signalnerve.workers.dev'
const myAvatar = 'https://jingtaixiongmeng.com/images/avatar.gif'
const myWeibo = 'https://weibo.com/u/6917182966'
const weiboSVG = '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sina Weibo icon</title><rect width="100%" height="100%" fill="white" /> <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.737 5.439l-.002.004zM9.05 17.219c-.384.616-1.208.884-1.829.602-.612-.279-.793-.991-.406-1.593.379-.595 1.176-.861 1.793-.601.622.263.82.972.442 1.592zm1.27-1.627c-.141.237-.449.353-.689.253-.236-.09-.313-.361-.177-.586.138-.227.436-.346.672-.24.239.09.315.36.18.601l.014-.028zm.176-2.719c-1.893-.493-4.033.45-4.857 2.118-.836 1.704-.026 3.591 1.886 4.21 1.983.64 4.318-.341 5.132-2.179.8-1.793-.201-3.642-2.161-4.149zm7.563-1.224c-.346-.105-.57-.18-.405-.615.375-.977.42-1.804 0-2.404-.781-1.112-2.915-1.053-5.364-.03 0 0-.766.331-.571-.271.376-1.217.315-2.224-.27-2.809-1.338-1.337-4.869.045-7.888 3.08C1.309 10.87 0 13.273 0 15.348c0 3.981 5.099 6.395 10.086 6.395 6.536 0 10.888-3.801 10.888-6.82 0-1.822-1.547-2.854-2.915-3.284v.01zm1.908-5.092c-.766-.856-1.908-1.187-2.96-.962-.436.09-.706.511-.616.932.09.42.511.691.932.602.511-.105 1.067.044 1.442.465.376.421.466.977.316 1.473-.136.406.089.856.51.992.405.119.857-.105.992-.512.33-1.021.12-2.178-.646-3.035l.03.045zm2.418-2.195c-1.576-1.757-3.905-2.419-6.054-1.968-.496.104-.812.587-.706 1.081.104.496.586.813 1.082.707 1.532-.331 3.185.15 4.296 1.383 1.112 1.246 1.429 2.943.947 4.416-.165.48.106 1.007.586 1.157.479.165.991-.104 1.157-.586.675-2.088.241-4.478-1.338-6.235l.03.045z"/></svg>'
const myInstagram = 'https://www.instagram.com/xuqiangwen/'
const instagramSVG = '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram icon</title><rect width="100%" height="100%" fill="white" /> <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>'

const link1 = { 
  name: "LinkedIn", 
  url: "https://www.linkedin.com/in/qiangwenxu", 
}
const link2 = { 
  name: "Github", 
  url: "https://github.com/x13-caesar", 
}
const link3 = { 
  name: "Blog(CN)", 
  url: "https://jingtaixiongmeng.com", 
}
var linktree = new Array(link1, link2, link3)

/**
 * fetchGetHtml sends a GET request expecting html
 * Use await fetchGetHtml(..) in an async function to get the HTML
 * @param {string} url the URL to send the request to
 */
async function fetchGetHtml(url) {
  const init = {
    method: 'Get',
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }

  const response = await fetch(url)
  const respBody = await rewriter.transform(response).text()
  return respBody
}


/**
 * LinksTransformer add link into a DOM element
 * @param {name} the name text you want to show in the section
 * @param {mylink} the link url
 */
class LinksTransformer {
  constructor(name, mylink) {
    this.content = '<a href="'+mylink+'">'+name+'</a>'
  }
  element(e) {
    e.append(this.content, { html: true })
  }
}


/**
 * AttributeRemover removes certain attribute of a DOM element
 * @param {attributeName} name of the attribute you want to remove
 */
class AttributeRemover {
  constructor(attributeName) {
    this.attributeName = attributeName
  }
  element(e) {
    e.removeAttribute(this.attributeName)
  }
}


/**
 * ImageUpdater update the image url of a DOM element
 * @param {imageURL} url of the updated image
 */
class ImageUpdater {
  constructor(imageURL) {
    this.url = imageURL
  }
  element(e) {
    e.setAttribute('src', this.url)
  }
}


/**
 * TextChanger changes text inside the text section of a DOM element 
 * @param {myText} the text content to insert with
 */
class TextChanger {
  constructor(myText) {
    this.myText = myText
  }
  element(e) {
    e.setInnerContent(this.myText)
  }
}

class SocialLinksTransformer {
  constructor(svg, mylink) {
    this.content = '<a href="'+mylink+'">'+svg+'</a>'
  }
  element(e) {
    e.append(this.content, { html: true })
  }
}

class AttributeChanger {
  constructor(attributeName, newValue) {
    this.attributeName = attributeName
    this.newValue = newValue
  }
  element(e) {
    e.setAttribute(this.attributeName, this.newValue)
  }
}

const rewriter = new HTMLRewriter()
  .on('div#links', new LinksTransformer(link1.name, link1.url))
  .on('div#links', new LinksTransformer(link2.name, link2.url))
  .on('div#links', new LinksTransformer(link3.name, link3.url))
  .on('div#profile', new AttributeRemover('style'))
  .on('div#social', new AttributeRemover('style'))
  .on('div#social', new SocialLinksTransformer(instagramSVG, myInstagram))
  .on('div#social', new SocialLinksTransformer(weiboSVG, myWeibo))
  .on('img#avatar', new ImageUpdater(myAvatar))
  .on('h1#name', new TextChanger('xuqiangwen1994@gmail.com'))
  .on('head > title', new TextChanger('Qiangwen Xu'))
  .on('body', new AttributeChanger('class', 'bg-green-800'))


addEventListener('fetch', async event => {
  const { url, method } = event.request

  if (url.endsWith('/links')) {
    init = {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    }
    respBody = JSON.stringify(linktree)
  } else {
    init = {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    }
    respBody = fetchGetHtml(someHTMLURL)
  }

  event.respondWith(
    (async function() {
      const body = await respBody
      return new Response(body, init)
    })()
  )
})