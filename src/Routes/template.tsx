const template = ({ markup, helmet }) => {
  return `<!DOCTYPE html>
<html ${helmet.htmlAttributes.toString()}>
<head>
  ${helmet.title.toString()}
  ${helmet.meta.toString()}
  ${helmet.link.toString()}
  <link rel="stylesheet" href="/assets/style.css">
</head>
<body ${helmet.bodyAttributes.toString()}>
  <div id="app">${markup}</div>
  <script src="/assets/client.js" async></script>
</body>
</html>`;
};

export default template;
