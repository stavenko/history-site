import { default as Pages } from '../pages';
import * as ReactDOM from 'react-dom';

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
        const item = Pages[settingsJson.pageName];
        if (item) {
          ReactDOM.hydrate(item, el[0]);
        }
      }
    }
  }
}
