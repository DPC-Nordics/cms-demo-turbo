export enum StoryblokStoryName {
  HOME = 'home',
  STORYBLOK = 'storyblok',
  CONTENTFUL = 'contentful',
  CONTENTSTACK = 'contentstack',
}

export namespace Storyblok {
  export type ComponentTypes = 'hero' | 'page' | 'card'

  export interface Stories {
    stories: Array<{
      name: string
      content: {
        _uid: string
        body: Array<Record<string, any>>
        component: ComponentTypes
      }
      slug: string
    }>
  }
  export interface Story {
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
    interface BaseProperties {
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

    export interface ITechBox extends BaseProperties {
      imgSrc: {
        url: string
      }
      navigateTo: {
        target: string
        url: string
      }
    }

    export interface ICard extends BaseProperties {
      title: string
      description: string
    }
  }
}
