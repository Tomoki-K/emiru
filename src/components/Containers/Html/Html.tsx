import * as React from 'react';

export const Html = (props) => {
  return (
    <html>
      <head>
          <title>App</title>
      </head>
      <body>
          <div id="app">{props.children}</div>
          <script src="/assets/client.js"/>
      </body>
    </html>
  );
};
