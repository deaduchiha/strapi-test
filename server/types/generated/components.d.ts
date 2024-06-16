import type { Schema, Attribute } from '@strapi/strapi';

export interface ContainerLayout extends Schema.Component {
  collectionName: 'components_container_layouts';
  info: {
    displayName: 'layout';
    icon: 'alien';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'container.layout': ContainerLayout;
    }
  }
}
