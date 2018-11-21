import * as React from 'react';
import { SiteMap } from '../site';
interface LinkToProps {
  page: string;
  label?: string;
}

const Component: React.SFC<LinkToProps> = props => {
  const componentDescr = SiteMap[props.page];
  const isPageExists = Boolean(componentDescr.componentName);
  let label = props.label;
  if (!label) {
    label = componentDescr.label;
  }
  if (isPageExists) {
    return <a href={`${props.page}.html`}>
      {label}
    </a>;
  }

  throw new Error('Page is not exists in the SiteMap. Consider Editing file "site.ts"');
}

export default Component;
