import * as Pages from '../pages';
import * as ReactDOM from 'react-dom';
import { SiteMap } from '../site';

interface SettingsJson {
  pageName?: string
}

export function hydrate() {
  const el = document.querySelectorAll('div#react-root');
  const pageInput = document.querySelectorAll('script#config');
  if (pageInput.length > 0 && el.length > 0) {
    const jsonString = pageInput[0].textContent;
    if (jsonString) {
      const settingsJson = JSON.parse(jsonString) as SettingsJson;
      if (settingsJson.pageName) {
        const name = SiteMap[settingsJson.pageName].componentName;
        // @ts-ignore
        const item = Pages[name];
        if (item) {
          ReactDOM.hydrate(item, el[0]);
        } else {
          const pages = Object.keys(Pages);
          const available = pages.filter(p => !/_/.test(p)).join(', ');
          throw new Error(`Page with name ${name} is not found within pages.\nTry use some of ${available} `);
        }
      }
    }
  }
}
