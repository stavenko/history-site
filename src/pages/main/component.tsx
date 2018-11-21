import * as React from 'react';

interface MainPageProperties {
  name: string;
  type: string;
}

type MainContext = any;
const Ctx = React.createContext<MainContext>({});

export class MainPage extends React.Component<MainPageProperties> {
  static contextType = Ctx;
  private root: HTMLElement|null;
  context!: React.ContextType<typeof Ctx>
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

  bindMe(el: any) {
    console.log(el);
  }
  render() {
    return <div ref={element => this.root = element}>
      This is the main page!
      {this.props.name}
    </div>
  } }
const t = typeof MainPage;


