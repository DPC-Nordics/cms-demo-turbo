export namespace Storyblok {
  export type ComponentTypes = 'hero' | 'page'

  export interface Response {
    story: {
      name: string
      content: {
        _uid: string
        body: Array<Record<string, any>>
        component: ComponentTypes
      }
    }
  }

  export namespace Blok {
    export type Components = Blok.IHero | Blok.IHeader

    export interface BaseProperties {
      _uid: string
    }

    export interface IHero extends BaseProperties {
      title: string
      subTitle: string
      image: {
        id: number
        alt: string
        title: string
        copyright: string
        fieldtype: string
        filename: string
      }
    }

    export interface IHeader extends BaseProperties {
      title: string
    }
  }
}
