import Pages from '../src/pages';
import * as React from 'react';
import * as ReactDomServer from 'react-dom/server';
import * as fs from 'fs';
import * as path from 'path';

const BuildRoot = './dist/'

function main() {
  for (const pageName of Object.keys(Pages)) {
    const pageSettings = {
      pageName
    };
    const el = Pages[pageName];
    const page = `<html>
    <head>
      <script id='config' type='application/json'>${JSON.stringify(pageSettings)}</script>
      <script src="./bundle.js" defer> </script>
    </head> 
    <body>
      <div id="react-root">${ReactDomServer.renderToString(el)}</div>
    </body>
  </html>`;
    fs.writeFile(path.join(BuildRoot, `${pageName}.html`), page , (err)=>{
      console.log('it done, ', pageName, err);
    });
  }
}


main();
