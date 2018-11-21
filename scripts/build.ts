import * as Pages from '../src/pages';
import * as React from 'react';
import * as ReactDomServer from 'react-dom/server';
import * as fs from 'fs';
import * as path from 'path';
import { SiteMap } from '../src/site';

const BuildRoot = './dist/'
type PageType<P> = React.ReactElement<P>;

function main() {
  for (const pageName of Object.keys(SiteMap)) {
    const pageSettings = {
      pageName
    };
    const name = SiteMap[pageName].componentName;
    const el = Pages[name];
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
