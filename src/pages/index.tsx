import * as React from 'react';
import MainPage  from './main';

type PageType<P> = React.ReactElement<P>;
type PagesType<P> = {
  [x: string]: PageType<P>
}

const Pages:PagesType<any> = {
  'main': MainPage,
}

export default Pages;

