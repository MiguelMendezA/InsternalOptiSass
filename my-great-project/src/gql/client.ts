import type * as Schema from "./graphql";
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const MyStandardPageDataFragmentDoc = gql`
    fragment MyStandardPageData on MyStandardPage {
  Header
  Burlp {
    json
    html
  }
}
    `;
export const LinkDataFragmentDoc = gql`
    fragment LinkData on ContentUrl {
  base
  default
}
    `;
export const ReferenceDataFragmentDoc = gql`
    fragment ReferenceData on ContentReference {
  key
  url {
    ...LinkData
  }
}
    `;
export const PageSeoSettingsPropertyDataFragmentDoc = gql`
    fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {
  MetaTitle
  MetaDescription
  SharingImage {
    ...ReferenceData
  }
  GraphType
}
    `;
export const CompositionNodeDataFragmentDoc = gql`
    fragment CompositionNodeData on ICompositionNode {
  name: displayName
  layoutType: nodeType
  type
  key
  template: displayTemplateKey
  settings: displaySettings {
    key
    value
  }
}
    `;
export const IContentInfoFragmentDoc = gql`
    fragment IContentInfo on IContentMetadata {
  key
  locale
  types
  displayName
  version
  url {
    ...LinkData
  }
}
    `;
export const IContentDataFragmentDoc = gql`
    fragment IContentData on _IContent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const BlockDataFragmentDoc = gql`
    fragment BlockData on _IComponent {
  ...IContentData
}
    `;
export const IElementDataFragmentDoc = gql`
    fragment IElementData on _IComponent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const ElementDataFragmentDoc = gql`
    fragment ElementData on _IComponent {
  ...IElementData
}
    `;
export const ButtonBlockDataFragmentDoc = gql`
    fragment ButtonBlockData on ButtonBlock {
  text
  link {
    ...LinkData
  }
  ButtonText
  ButtonUrl {
    ...LinkData
  }
  ButtonClass
  ButtonType
  ButtonVariant
  className
  variant
}
    `;
export const ButtonBlockPropertyDataFragmentDoc = gql`
    fragment ButtonBlockPropertyData on ButtonBlockProperty {
  text
  link {
    ...LinkData
  }
  ButtonText
  ButtonUrl {
    ...LinkData
  }
  ButtonClass
  ButtonType
  ButtonVariant
  className
  variant
}
    `;
export const CardBlockDataFragmentDoc = gql`
    fragment CardBlockData on CardBlock {
  CardHeading
  CardSubHeading
  CardDescription {
    json
    html
  }
  CardColor
  CardButton {
    ...ButtonBlockPropertyData
  }
  CardImageLayout
  CardIcon {
    ...ReferenceData
  }
  ImageLayout
  CardImage {
    ...ReferenceData
  }
}
    `;
export const DictionaryDataFragmentDoc = gql`
    fragment DictionaryData on Dictionary {
  empty: _metadata {
    key
  }
}
    `;
export const DictionaryItemDataFragmentDoc = gql`
    fragment DictionaryItemData on DictionaryItem {
  DictionaryItemKey
  DictionaryItemValue
}
    `;
export const HeaderBlockDataFragmentDoc = gql`
    fragment HeaderBlockData on HeaderBlock {
  empty: _metadata {
    key
  }
}
    `;
export const IContentListItemFragmentDoc = gql`
    fragment IContentListItem on _IContent {
  ...IContentData
}
    `;
export const LayoutContainerBlockDataFragmentDoc = gql`
    fragment LayoutContainerBlockData on LayoutContainerBlock {
  ColumnsCount
  GapSize
  LayoutContentArea {
    ...IContentListItem
  }
  ContainerBackgroundColor
  ContainerBackgroundImage {
    ...ReferenceData
  }
  ContainerMarginTop
  ContainerMarginBottom
  ContainerPaddingBottom
  ContainerPaddingTop
}
    `;
export const MegaMenuGroupBlockDataFragmentDoc = gql`
    fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {
  MenuMenuHeading
  MegaMenuUrl {
    ...LinkData
  }
  MegaMenuContentArea {
    ...IContentListItem
  }
}
    `;
export const LinkItemDataFragmentDoc = gql`
    fragment LinkItemData on Link {
  title
  text
  target
  url {
    ...LinkData
  }
}
    `;
export const NavigationMenuBlockDataFragmentDoc = gql`
    fragment NavigationMenuBlockData on NavigationMenuBlock {
  MenuNavigationHeading
  NavigationLinks {
    ...LinkItemData
  }
}
    `;
export const OfficeLocationDataFragmentDoc = gql`
    fragment OfficeLocationData on OfficeLocation {
  OfficeTitle
  OfficeAddressStreet1
  OfficeAddressStreet2
  OfficeAddressCity
  OfficeAddressPostalCode
  OfficeAddressCountry
  OfficePhone
  OfficeEmail
}
    `;
export const PageSeoSettingsDataFragmentDoc = gql`
    fragment PageSeoSettingsData on PageSeoSettings {
  MetaTitle
  MetaDescription
  SharingImage {
    ...ReferenceData
  }
  GraphType
}
    `;
export const NavigationMenuBlockPropertyDataFragmentDoc = gql`
    fragment NavigationMenuBlockPropertyData on NavigationMenuBlockProperty {
  MenuNavigationHeading
  NavigationLinks {
    ...LinkItemData
  }
}
    `;
export const WebsiteFooterDataFragmentDoc = gql`
    fragment WebsiteFooterData on WebsiteFooter {
  FooterMainOfficeLocation {
    ...IContentListItem
  }
  FooterFirstLinkList {
    ...NavigationMenuBlockPropertyData
  }
  FooterSecondLinkList {
    ...NavigationMenuBlockPropertyData
  }
  FooterThirdLinkList {
    ...NavigationMenuBlockPropertyData
  }
  FooterLogo {
    ...ReferenceData
  }
  FooterLogoAltText
  FooterLegalLinks {
    ...LinkItemData
  }
}
    `;
export const CompositionComponentNodeDataFragmentDoc = gql`
    fragment CompositionComponentNodeData on ICompositionComponentNode {
  component {
    ...BlockData
    ...ElementData
    ...ButtonBlockData
    ...CardBlockData
    ...DictionaryData
    ...DictionaryItemData
    ...HeaderBlockData
    ...LayoutContainerBlockData
    ...MegaMenuGroupBlockData
    ...NavigationMenuBlockData
    ...OfficeLocationData
    ...PageSeoSettingsData
    ...WebsiteFooterData
  }
}
    `;
export const ExperienceDataFragmentDoc = gql`
    fragment ExperienceData on _IExperience {
  composition {
    ...CompositionNodeData
    nodes {
      ...CompositionNodeData
      ... on ICompositionStructureNode {
        nodes {
          ...CompositionNodeData
          ... on ICompositionStructureNode {
            nodes {
              ...CompositionNodeData
              ... on ICompositionStructureNode {
                nodes {
                  ...CompositionNodeData
                  ...CompositionComponentNodeData
                }
              }
            }
          }
        }
      }
      ...CompositionComponentNodeData
    }
  }
}
    `;
export const BlankExperienceDataFragmentDoc = gql`
    fragment BlankExperienceData on BlankExperience {
  SeoSettings {
    ...PageSeoSettingsPropertyData
  }
  BlankExperienceSeoSettings {
    ...PageSeoSettingsPropertyData
  }
  ...ExperienceData
}
    `;
export const PageDataFragmentDoc = gql`
    fragment PageData on _IContent {
  ...IContentData
}
    `;
export const getContentByIdDocument = gql`
    query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
  content: _Content(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items: item {
      ...BlockData
      ...PageData
      ...ButtonBlockData
      ...CardBlockData
      ...DictionaryData
      ...DictionaryItemData
      ...HeaderBlockData
      ...LayoutContainerBlockData
      ...MegaMenuGroupBlockData
      ...NavigationMenuBlockData
      ...OfficeLocationData
      ...PageSeoSettingsData
      ...WebsiteFooterData
      ...MyStandardPageData
      ...BlankExperienceData
    }
  }
}
    ${BlockDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${PageDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CardBlockDataFragmentDoc}
${ButtonBlockPropertyDataFragmentDoc}
${ReferenceDataFragmentDoc}
${DictionaryDataFragmentDoc}
${DictionaryItemDataFragmentDoc}
${HeaderBlockDataFragmentDoc}
${LayoutContainerBlockDataFragmentDoc}
${IContentListItemFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${NavigationMenuBlockDataFragmentDoc}
${LinkItemDataFragmentDoc}
${OfficeLocationDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${WebsiteFooterDataFragmentDoc}
${NavigationMenuBlockPropertyDataFragmentDoc}
${MyStandardPageDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionNodeDataFragmentDoc}
${CompositionComponentNodeDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}`;
export const getContentByPathDocument = gql`
    query getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String) {
  content: _Content(
    where: {_metadata: {url: {default: {in: $path}, base: {eq: $siteId}}}}
    locale: $locale
  ) {
    total
    items: item {
      ...IContentData
      ...PageData
      ...MyStandardPageData
      ...BlankExperienceData
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${PageDataFragmentDoc}
${MyStandardPageDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}
${ReferenceDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionNodeDataFragmentDoc}
${CompositionComponentNodeDataFragmentDoc}
${BlockDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CardBlockDataFragmentDoc}
${ButtonBlockPropertyDataFragmentDoc}
${DictionaryDataFragmentDoc}
${DictionaryItemDataFragmentDoc}
${HeaderBlockDataFragmentDoc}
${LayoutContainerBlockDataFragmentDoc}
${IContentListItemFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${NavigationMenuBlockDataFragmentDoc}
${LinkItemDataFragmentDoc}
${OfficeLocationDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${WebsiteFooterDataFragmentDoc}
${NavigationMenuBlockPropertyDataFragmentDoc}`;
export const getContentTypeDocument = gql`
    query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
  content: _Content(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items: item {
      _metadata {
        types
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getContentById(variables: Schema.getContentByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByIdQuery>(getContentByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentById', 'query', variables);
    },
    getContentByPath(variables: Schema.getContentByPathQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByPathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByPathQuery>(getContentByPathDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentByPath', 'query', variables);
    },
    getContentType(variables: Schema.getContentTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentTypeQuery>(getContentTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentType', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;