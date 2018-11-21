import * as React from 'react';
import LinkTo from '../../components/LinkTo';

interface MainPageProperties {
  name: string;
  type: string;
}

type MainContext = any;
const Ctx = React.createContext<MainContext>({});

export class MainPage extends React.Component<MainPageProperties> {
  static contextType = Ctx;
  private root: HTMLElement|null;
  constructor(props: MainPageProperties) {
    super(props);
    this.context={};
    this.root = null;
  }

  componentDidMount() {
    if (this.root) {
      this.root.addEventListener('mousedown', evt => {
        console.log(this);
      })
    }
  }

  render() {
    return <div ref={element => this.root = element}>
      This is the main page!
      {this.props.name}
      <LinkTo page="example" />
    </div>
  } }
const t = typeof MainPage;


