import * as Pages from '../src/pages';
import * as React from 'react';
import * as ReactDomServer from 'react-dom/server';
import * as fs from 'fs';
import * as path from 'path';
import { SiteMap } from '../src/site';

const BuildRoot = './dist/'
type PageType<P> = React.ReactElement<P>;

async function mkdir(dir: string): Promise<void> {
  return new Promise<void>((res) => {
    fs.mkdir(dir, () => res());
  }); 
}
async function writeFile(f:string, c: string): Promise<void> {
  return new Promise<void>(res => {
    fs.writeFile(f, c , ()=>{
      res();
    });
  })
}

async function main(): Promise<void>{
  for (const pageName of Object.keys(SiteMap)) {
    const pageSettings = {
      pageName
    };
    const name = SiteMap[pageName].componentName;
    // @ts-ignore
    const el = Pages[name];
    if (!el) {
      const pages = Object.keys(Pages);
      const available = pages.filter(p => !/_/.test(p)).join(', ');
      throw new Error(`Page with name ${name} is not found within pages.\nTry use some of ${available} `);
    }
    const page = `<html>
    <head>
      <script id='config' type='application/json'>${JSON.stringify(pageSettings)}</script>
      <script src="./bundle.js" defer> </script>
    </head> 
    <body>
      <div id="react-root">${ReactDomServer.renderToString(el)}</div>
    </body>
  </html>`;
    await mkdir(BuildRoot);

    await writeFile(path.join(BuildRoot,`${pageName}.html`), page)
  }
}


main();
