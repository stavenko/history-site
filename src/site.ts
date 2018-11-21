interface SiteMapDescriptor {
  componentName: string;
  description?: string;
  label: string;
}
interface ObjectType{
  [x: string]: SiteMapDescriptor;
}
export const SiteMap: ObjectType ={
  index: {
    componentName: 'MainPage',
    label: "Главная страница"
  },
  example: {
    componentName: 'ExampleArticle',
    label: "Пример того как может выглядеть отдельная статья"
  }
}
