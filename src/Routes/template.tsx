import config from '../config';

const template = ({ markup, helmet }) => {
  return `<!DOCTYPE html>
<html ${helmet.htmlAttributes.toString()}>
<head>
  ${helmet.title.toString()}
  ${helmet.meta.toString()}
  ${helmet.link.toString()}
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta property="og:url" content="${config.DOMAIN_URL}" />
  <meta property="og:type" content="website">
  <meta property="og:title" content="Emirutter">
  <meta property="og:description" content="愛崎えみるがあなたの心の叫びを代弁してくれます" />
  <meta property="og:image" content="${config.DOMAIN_URL}/og_image.jpg" />
  <meta property="og:site_name" content="Emirutter" />
  <meta property="og:locale" content="jp" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@tomotetra" />
  <meta name="twitter:title" content="Emirutter" />
  <meta name="twitter:description" content="愛崎えみるがあなたの心の叫びを代弁してくれます" />
  <meta name="twitter:image:src" content="${config.DOMAIN_URL}/og_image.jpg" />
  <link rel="stylesheet" href="/assets/style.css">
</head>
<body ${helmet.bodyAttributes.toString()}>
  <div id="app">${markup}</div>
  <script src="/assets/client.js" async></script>
</body>
</html>`;
};

export default template;
