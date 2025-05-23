/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Bool: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](https://ecma-international.org/publications-and-standards/standards/ecma-404/). */
  JSON: { input: any; output: any; }
};

export type ArticleGroupPage = IData & _IContent & _IPage & {
  __typename?: 'ArticleGroupPage';
  LandingPageSeoSettings?: Maybe<PageSeoSettingsProperty>;
  MainContent?: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  articleGroupIntro?: Maybe<RichText>;
  articleGroupTitle?: Maybe<Scalars['String']['output']>;
};


export type ArticleGroupPage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ArticleGroupPage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ArticleGroupPageAutocomplete = {
  __typename?: 'ArticleGroupPageAutocomplete';
  LandingPageSeoSettings?: Maybe<PageSeoSettingsPropertyAutocomplete>;
  MainContent?: Maybe<_IContentAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  articleGroupIntro?: Maybe<RichTextAutocomplete>;
  articleGroupTitle?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ArticleGroupPageAutocompletearticleGroupTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ArticleGroupPageFacet = {
  __typename?: 'ArticleGroupPageFacet';
  LandingPageSeoSettings?: Maybe<PageSeoSettingsPropertyFacet>;
  MainContent?: Maybe<_IContentFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  articleGroupIntro?: Maybe<RichTextFacet>;
  articleGroupTitle?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ArticleGroupPageFacetarticleGroupTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ArticleGroupPageOrderByInput = {
  LandingPageSeoSettings?: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  MainContent?: InputMaybe<_IContentOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  articleGroupIntro?: InputMaybe<RichTextOrderByInput>;
  articleGroupTitle?: InputMaybe<OrderBy>;
};

export type ArticleGroupPageOutput = {
  __typename?: 'ArticleGroupPageOutput';
  autocomplete?: Maybe<ArticleGroupPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ArticleGroupPageFacet>;
  item?: Maybe<ArticleGroupPage>;
  items?: Maybe<Array<Maybe<ArticleGroupPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ArticleGroupPageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleGroupPageWhereInput = {
  LandingPageSeoSettings?: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  MainContent?: InputMaybe<_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ArticleGroupPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ArticleGroupPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ArticleGroupPageWhereInput>>>;
  articleGroupIntro?: InputMaybe<RichTextWhereInput>;
  articleGroupTitle?: InputMaybe<StringFilterInput>;
};

export type ArticleListElement = IData & _IComponent & _IContent & {
  __typename?: 'ArticleListElement';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  articleListCount?: Maybe<Scalars['Int']['output']>;
};


export type ArticleListElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ArticleListElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ArticleListElementAutocomplete = {
  __typename?: 'ArticleListElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ArticleListElementFacet = {
  __typename?: 'ArticleListElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ArticleListElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ArticleListElementOutput = {
  __typename?: 'ArticleListElementOutput';
  autocomplete?: Maybe<ArticleListElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ArticleListElementFacet>;
  item?: Maybe<ArticleListElement>;
  items?: Maybe<Array<Maybe<ArticleListElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ArticleListElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleListElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
};

export type ArticlePage = IData & _IContent & _IPage & {
  __typename?: 'ArticlePage';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  articleAuthors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  articleBody?: Maybe<RichText>;
  articleHeroImage?: Maybe<ContentReference>;
  articleSeoSettings?: Maybe<PageSeoSettingsProperty>;
  articleSummary?: Maybe<RichText>;
  articleTitle?: Maybe<Scalars['String']['output']>;
};


export type ArticlePage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ArticlePage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ArticlePageAutocomplete = {
  __typename?: 'ArticlePageAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  articleBody?: Maybe<RichTextAutocomplete>;
  articleHeroImage?: Maybe<ContentReferenceAutocomplete>;
  articleSeoSettings?: Maybe<PageSeoSettingsPropertyAutocomplete>;
  articleSummary?: Maybe<RichTextAutocomplete>;
};

export type ArticlePageFacet = {
  __typename?: 'ArticlePageFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  articleBody?: Maybe<RichTextFacet>;
  articleHeroImage?: Maybe<ContentReferenceFacet>;
  articleSeoSettings?: Maybe<PageSeoSettingsPropertyFacet>;
  articleSummary?: Maybe<RichTextFacet>;
};

export type ArticlePageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  articleBody?: InputMaybe<RichTextOrderByInput>;
  articleHeroImage?: InputMaybe<ContentReferenceOrderByInput>;
  articleSeoSettings?: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  articleSummary?: InputMaybe<RichTextOrderByInput>;
};

export type ArticlePageOutput = {
  __typename?: 'ArticlePageOutput';
  autocomplete?: Maybe<ArticlePageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ArticlePageFacet>;
  item?: Maybe<ArticlePage>;
  items?: Maybe<Array<Maybe<ArticlePage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ArticlePageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticlePageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  articleBody?: InputMaybe<RichTextWhereInput>;
  articleHeroImage?: InputMaybe<ContentReferenceWhereInput>;
  articleSeoSettings?: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  articleSummary?: InputMaybe<RichTextWhereInput>;
};

export type BlankExperience = IData & _IContent & _IExperience & _IPage & {
  __typename?: 'BlankExperience';
  BlankExperienceSeoSettings?: Maybe<PageSeoSettingsProperty>;
  SeoSettings?: Maybe<PageSeoSettingsProperty>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type BlankExperience_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlankExperience_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlankExperienceAutocomplete = {
  __typename?: 'BlankExperienceAutocomplete';
  BlankExperienceSeoSettings?: Maybe<PageSeoSettingsPropertyAutocomplete>;
  SeoSettings?: Maybe<PageSeoSettingsPropertyAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankExperienceFacet = {
  __typename?: 'BlankExperienceFacet';
  BlankExperienceSeoSettings?: Maybe<PageSeoSettingsPropertyFacet>;
  SeoSettings?: Maybe<PageSeoSettingsPropertyFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type BlankExperienceOrderByInput = {
  BlankExperienceSeoSettings?: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankExperienceOutput = {
  __typename?: 'BlankExperienceOutput';
  autocomplete?: Maybe<BlankExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlankExperienceFacet>;
  item?: Maybe<BlankExperience>;
  items?: Maybe<Array<Maybe<BlankExperience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlankExperienceOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankExperienceWhereInput = {
  BlankExperienceSeoSettings?: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlankSection = IData & _IComponent & _IContent & _ISection & {
  __typename?: 'BlankSection';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type BlankSection_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlankSection_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlankSectionAutocomplete = {
  __typename?: 'BlankSectionAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankSectionFacet = {
  __typename?: 'BlankSectionFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type BlankSectionOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankSectionOutput = {
  __typename?: 'BlankSectionOutput';
  autocomplete?: Maybe<BlankSectionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlankSectionFacet>;
  item?: Maybe<BlankSection>;
  items?: Maybe<Array<Maybe<BlankSection>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlankSectionOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankSectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlogListingBlock = IData & _IComponent & _IContent & {
  __typename?: 'BlogListingBlock';
  BlogListingItemCount?: Maybe<Scalars['Int']['output']>;
  BlogListingShowFilters?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type BlogListingBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlogListingBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlogListingBlockAutocomplete = {
  __typename?: 'BlogListingBlockAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type BlogListingBlockFacet = {
  __typename?: 'BlogListingBlockFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type BlogListingBlockOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type BlogListingBlockOutput = {
  __typename?: 'BlogListingBlockOutput';
  autocomplete?: Maybe<BlogListingBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlogListingBlockFacet>;
  item?: Maybe<BlogListingBlock>;
  items?: Maybe<Array<Maybe<BlogListingBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlogListingBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogListingBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<BlogListingBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlogListingBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlogListingBlockWhereInput>>>;
};

export type BlogPostPage = IData & _IContent & _IPage & {
  __typename?: 'BlogPostPage';
  ArticleAuthor?: Maybe<Scalars['String']['output']>;
  ArticleSubHeading?: Maybe<Scalars['String']['output']>;
  BlogPostBody?: Maybe<RichText>;
  BlogPostPromoImage?: Maybe<ContentReference>;
  Heading?: Maybe<Scalars['String']['output']>;
  SeoSettings?: Maybe<PageSeoSettingsProperty>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type BlogPostPageArticleAuthorArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlogPostPage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlogPostPage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlogPostPageAutocomplete = {
  __typename?: 'BlogPostPageAutocomplete';
  BlogPostBody?: Maybe<RichTextAutocomplete>;
  BlogPostPromoImage?: Maybe<ContentReferenceAutocomplete>;
  SeoSettings?: Maybe<PageSeoSettingsPropertyAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type BlogPostPageFacet = {
  __typename?: 'BlogPostPageFacet';
  ArticleAuthor?: Maybe<Array<Maybe<StringFacet>>>;
  BlogPostBody?: Maybe<RichTextFacet>;
  BlogPostPromoImage?: Maybe<ContentReferenceFacet>;
  SeoSettings?: Maybe<PageSeoSettingsPropertyFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type BlogPostPageFacetArticleAuthorArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type BlogPostPageOrderByInput = {
  ArticleAuthor?: InputMaybe<OrderBy>;
  BlogPostBody?: InputMaybe<RichTextOrderByInput>;
  BlogPostPromoImage?: InputMaybe<ContentReferenceOrderByInput>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type BlogPostPageOutput = {
  __typename?: 'BlogPostPageOutput';
  autocomplete?: Maybe<BlogPostPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlogPostPageFacet>;
  item?: Maybe<BlogPostPage>;
  items?: Maybe<Array<Maybe<BlogPostPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlogPostPageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogPostPageWhereInput = {
  ArticleAuthor?: InputMaybe<SearchableStringFilterInput>;
  BlogPostBody?: InputMaybe<RichTextWhereInput>;
  BlogPostPromoImage?: InputMaybe<ContentReferenceWhereInput>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<BlogPostPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlogPostPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlogPostPageWhereInput>>>;
};

export type ButtonBlock = IData & _IComponent & _IContent & {
  __typename?: 'ButtonBlock';
  ButtonClass?: Maybe<Scalars['String']['output']>;
  ButtonText?: Maybe<Scalars['String']['output']>;
  ButtonType?: Maybe<Scalars['String']['output']>;
  ButtonUrl?: Maybe<ContentUrl>;
  ButtonVariant?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  className?: Maybe<Scalars['String']['output']>;
  link?: Maybe<ContentUrl>;
  text?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};


export type ButtonBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ButtonBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ButtonBlockAutocomplete = {
  __typename?: 'ButtonBlockAutocomplete';
  ButtonUrl?: Maybe<ContentUrlAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  link?: Maybe<ContentUrlAutocomplete>;
};

export type ButtonBlockFacet = {
  __typename?: 'ButtonBlockFacet';
  ButtonUrl?: Maybe<ContentUrlFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  link?: Maybe<ContentUrlFacet>;
};

export type ButtonBlockOrderByInput = {
  ButtonUrl?: InputMaybe<ContentUrlOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  link?: InputMaybe<ContentUrlOrderByInput>;
};

export type ButtonBlockOutput = {
  __typename?: 'ButtonBlockOutput';
  autocomplete?: Maybe<ButtonBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ButtonBlockFacet>;
  item?: Maybe<ButtonBlock>;
  items?: Maybe<Array<Maybe<ButtonBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ButtonBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ButtonBlockProperty = {
  __typename?: 'ButtonBlockProperty';
  ButtonClass?: Maybe<Scalars['String']['output']>;
  ButtonText?: Maybe<Scalars['String']['output']>;
  ButtonType?: Maybe<Scalars['String']['output']>;
  ButtonUrl?: Maybe<ContentUrl>;
  ButtonVariant?: Maybe<Scalars['String']['output']>;
  className?: Maybe<Scalars['String']['output']>;
  link?: Maybe<ContentUrl>;
  text?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};

export type ButtonBlockPropertyAutocomplete = {
  __typename?: 'ButtonBlockPropertyAutocomplete';
  ButtonUrl?: Maybe<ContentUrlAutocomplete>;
  link?: Maybe<ContentUrlAutocomplete>;
};

export type ButtonBlockPropertyFacet = {
  __typename?: 'ButtonBlockPropertyFacet';
  ButtonUrl?: Maybe<ContentUrlFacet>;
  link?: Maybe<ContentUrlFacet>;
};

export type ButtonBlockPropertyOrderByInput = {
  ButtonUrl?: InputMaybe<ContentUrlOrderByInput>;
  link?: InputMaybe<ContentUrlOrderByInput>;
};

export type ButtonBlockPropertyWhereInput = {
  ButtonUrl?: InputMaybe<ContentUrlWhereInput>;
  link?: InputMaybe<ContentUrlWhereInput>;
};

export type ButtonBlockWhereInput = {
  ButtonUrl?: InputMaybe<ContentUrlWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  link?: InputMaybe<ContentUrlWhereInput>;
};

export type CTAElement = IData & _IComponent & _IContent & {
  __typename?: 'CTAElement';
  Link?: Maybe<ContentUrl>;
  Text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type CTAElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type CTAElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type CTAElementAutocomplete = {
  __typename?: 'CTAElementAutocomplete';
  Link?: Maybe<ContentUrlAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type CTAElementFacet = {
  __typename?: 'CTAElementFacet';
  Link?: Maybe<ContentUrlFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type CTAElementOrderByInput = {
  Link?: InputMaybe<ContentUrlOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type CTAElementOutput = {
  __typename?: 'CTAElementOutput';
  autocomplete?: Maybe<CTAElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<CTAElementFacet>;
  item?: Maybe<CTAElement>;
  items?: Maybe<Array<Maybe<CTAElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type CTAElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CTAElementWhereInput = {
  Link?: InputMaybe<ContentUrlWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<CTAElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CTAElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CTAElementWhereInput>>>;
};

export type CardBlock = IData & _IComponent & _IContent & {
  __typename?: 'CardBlock';
  CardButton?: Maybe<ButtonBlockProperty>;
  CardColor?: Maybe<Scalars['String']['output']>;
  CardDescription?: Maybe<RichText>;
  CardHeading?: Maybe<Scalars['String']['output']>;
  CardIcon?: Maybe<ContentReference>;
  CardImage?: Maybe<ContentReference>;
  CardImageLayout?: Maybe<Scalars['String']['output']>;
  CardSubHeading?: Maybe<Scalars['String']['output']>;
  ImageLayout?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type CardBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type CardBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type CardBlockAutocomplete = {
  __typename?: 'CardBlockAutocomplete';
  CardButton?: Maybe<ButtonBlockPropertyAutocomplete>;
  CardDescription?: Maybe<RichTextAutocomplete>;
  CardIcon?: Maybe<ContentReferenceAutocomplete>;
  CardImage?: Maybe<ContentReferenceAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type CardBlockFacet = {
  __typename?: 'CardBlockFacet';
  CardButton?: Maybe<ButtonBlockPropertyFacet>;
  CardDescription?: Maybe<RichTextFacet>;
  CardIcon?: Maybe<ContentReferenceFacet>;
  CardImage?: Maybe<ContentReferenceFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type CardBlockOrderByInput = {
  CardButton?: InputMaybe<ButtonBlockPropertyOrderByInput>;
  CardDescription?: InputMaybe<RichTextOrderByInput>;
  CardIcon?: InputMaybe<ContentReferenceOrderByInput>;
  CardImage?: InputMaybe<ContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type CardBlockOutput = {
  __typename?: 'CardBlockOutput';
  autocomplete?: Maybe<CardBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<CardBlockFacet>;
  item?: Maybe<CardBlock>;
  items?: Maybe<Array<Maybe<CardBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type CardBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CardBlockWhereInput = {
  CardButton?: InputMaybe<ButtonBlockPropertyWhereInput>;
  CardDescription?: InputMaybe<RichTextWhereInput>;
  CardIcon?: InputMaybe<ContentReferenceWhereInput>;
  CardImage?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<CardBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CardBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CardBlockWhereInput>>>;
};

export type CarouselBlock = IData & _IComponent & _IContent & {
  __typename?: 'CarouselBlock';
  CarouselItemsContentArea?: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type CarouselBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type CarouselBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type CarouselBlockAutocomplete = {
  __typename?: 'CarouselBlockAutocomplete';
  CarouselItemsContentArea?: Maybe<_IContentAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type CarouselBlockFacet = {
  __typename?: 'CarouselBlockFacet';
  CarouselItemsContentArea?: Maybe<_IContentFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type CarouselBlockOrderByInput = {
  CarouselItemsContentArea?: InputMaybe<_IContentOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type CarouselBlockOutput = {
  __typename?: 'CarouselBlockOutput';
  autocomplete?: Maybe<CarouselBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<CarouselBlockFacet>;
  item?: Maybe<CarouselBlock>;
  items?: Maybe<Array<Maybe<CarouselBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type CarouselBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CarouselBlockWhereInput = {
  CarouselItemsContentArea?: InputMaybe<_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<CarouselBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CarouselBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CarouselBlockWhereInput>>>;
};

export type CompositionComponentNode = ICompositionComponentNode & ICompositionNode & {
  __typename?: 'CompositionComponentNode';
  component?: Maybe<_IComponent>;
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySetting = {
  __typename?: 'CompositionDisplaySetting';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySettingAutocomplete = {
  __typename?: 'CompositionDisplaySettingAutocomplete';
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  value?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionDisplaySettingAutocompletekeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionDisplaySettingAutocompletevalueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionDisplaySettingFacet = {
  __typename?: 'CompositionDisplaySettingFacet';
  key?: Maybe<Array<Maybe<StringFacet>>>;
  value?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionDisplaySettingFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionDisplaySettingFacetvalueArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionDisplaySettingOrderByInput = {
  key?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

export type CompositionDisplaySettingWhereInput = {
  key?: InputMaybe<StringFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type CompositionNode = ICompositionNode & {
  __typename?: 'CompositionNode';
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNode = ICompositionNode & ICompositionStructureNode & {
  __typename?: 'CompositionStructureNode';
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  nodes?: Maybe<Array<Maybe<ICompositionNode>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNodeAutocomplete = {
  __typename?: 'CompositionStructureNodeAutocomplete';
  displayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings?: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodes?: Maybe<ICompositionNodeAutocomplete>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionStructureNodeAutocompletedisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompletedisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompletekeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompletenodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompletetypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionStructureNodeFacet = {
  __typename?: 'CompositionStructureNodeFacet';
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings?: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  nodeType?: Maybe<Array<Maybe<StringFacet>>>;
  nodes?: Maybe<ICompositionNodeFacet>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionStructureNodeFacetdisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetdisplayTemplateKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetnodeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacettypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionStructureNodeOrderByInput = {
  displayName?: InputMaybe<OrderBy>;
  displaySettings?: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  nodeType?: InputMaybe<OrderBy>;
  nodes?: InputMaybe<ICompositionNodeOrderByInput>;
  type?: InputMaybe<OrderBy>;
};

export type CompositionStructureNodeWhereInput = {
  displayName?: InputMaybe<StringFilterInput>;
  displaySettings?: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  nodeType?: InputMaybe<StringFilterInput>;
  nodes?: InputMaybe<ICompositionNodeWhereInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ContentMetadata = IContentMetadata & {
  __typename?: 'ContentMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type ContentMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ContentRecsBlock = IData & _IComponent & _IContent & {
  __typename?: 'ContentRecsBlock';
  BlockDeliveryApiKey?: Maybe<Scalars['String']['output']>;
  BlockRecommendationCount?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ContentRecsBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ContentRecsBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ContentRecsBlockAutocomplete = {
  __typename?: 'ContentRecsBlockAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ContentRecsBlockFacet = {
  __typename?: 'ContentRecsBlockFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ContentRecsBlockOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ContentRecsBlockOutput = {
  __typename?: 'ContentRecsBlockOutput';
  autocomplete?: Maybe<ContentRecsBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ContentRecsBlockFacet>;
  item?: Maybe<ContentRecsBlock>;
  items?: Maybe<Array<Maybe<ContentRecsBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ContentRecsBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentRecsBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ContentRecsBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ContentRecsBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ContentRecsBlockWhereInput>>>;
};

export type ContentRecsElement = IData & _IComponent & _IContent & {
  __typename?: 'ContentRecsElement';
  ElementDeliveryApiKey?: Maybe<Scalars['String']['output']>;
  ElementRecommendationCount?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ContentRecsElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ContentRecsElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ContentRecsElementAutocomplete = {
  __typename?: 'ContentRecsElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ContentRecsElementFacet = {
  __typename?: 'ContentRecsElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ContentRecsElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ContentRecsElementOutput = {
  __typename?: 'ContentRecsElementOutput';
  autocomplete?: Maybe<ContentRecsElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ContentRecsElementFacet>;
  item?: Maybe<ContentRecsElement>;
  items?: Maybe<Array<Maybe<ContentRecsElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ContentRecsElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentRecsElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ContentRecsElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ContentRecsElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ContentRecsElementWhereInput>>>;
};

export type ContentReference = {
  __typename?: 'ContentReference';
  key?: Maybe<Scalars['String']['output']>;
  url?: Maybe<ContentUrl>;
};

export type ContentReferenceAutocomplete = {
  __typename?: 'ContentReferenceAutocomplete';
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrlAutocomplete>;
};


export type ContentReferenceAutocompletekeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentReferenceFacet = {
  __typename?: 'ContentReferenceFacet';
  key?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<ContentUrlFacet>;
};


export type ContentReferenceFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentReferenceOrderByInput = {
  key?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
};

export type ContentReferenceWhereInput = {
  key?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
};

export type ContentUrl = {
  __typename?: 'ContentUrl';
  base?: Maybe<Scalars['String']['output']>;
  default?: Maybe<Scalars['String']['output']>;
  graph?: Maybe<Scalars['String']['output']>;
  hierarchical?: Maybe<Scalars['String']['output']>;
  internal?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentUrlAutocomplete = {
  __typename?: 'ContentUrlAutocomplete';
  base?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  default?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  graph?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  hierarchical?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  internal?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentUrlAutocompletebaseArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompletedefaultArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompletegraphArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompletehierarchicalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteinternalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompletetypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentUrlFacet = {
  __typename?: 'ContentUrlFacet';
  base?: Maybe<Array<Maybe<StringFacet>>>;
  default?: Maybe<Array<Maybe<StringFacet>>>;
  graph?: Maybe<Array<Maybe<StringFacet>>>;
  hierarchical?: Maybe<Array<Maybe<StringFacet>>>;
  internal?: Maybe<Array<Maybe<StringFacet>>>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentUrlFacetbaseArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetdefaultArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetgraphArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacethierarchicalArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetinternalArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacettypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentUrlOrderByInput = {
  base?: InputMaybe<OrderBy>;
  default?: InputMaybe<OrderBy>;
  graph?: InputMaybe<OrderBy>;
  hierarchical?: InputMaybe<OrderBy>;
  internal?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type ContentUrlWhereInput = {
  base?: InputMaybe<StringFilterInput>;
  default?: InputMaybe<StringFilterInput>;
  graph?: InputMaybe<StringFilterInput>;
  hierarchical?: InputMaybe<StringFilterInput>;
  internal?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type Data = IData & {
  __typename?: 'Data';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Data_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Data_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DataOrderByInput = {
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type DataOutput = {
  __typename?: 'DataOutput';
  cursor?: Maybe<Scalars['String']['output']>;
  item?: Maybe<IData>;
  items?: Maybe<Array<Maybe<IData>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DataOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DataWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
};

export type DateFacet = {
  __typename?: 'DateFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum DateFacetUnit {
  /** Defined as 24 hours (86,400,000 milliseconds). All days begin at the earliest possible time, which is usually 00:00:00 (midnight). */
  DAY = 'DAY',
  /** Defined as 60 minutes each (3,600,000 milliseconds). All hours begin at 00 minutes and 00 seconds. */
  HOUR = 'HOUR',
  /** Defined as 1000 milliseconds each. */
  MINUTE = 'MINUTE'
}

export type DateFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `decay` influences the weight of the score with a decay function. For example, results that have a more recent datetime will be ranked higher. The `origin` will be `now()` in case not specified. The `scale` is by default 10. The `rate` must be in the range `[0..1]`. */
  decay?: InputMaybe<Decay>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Date']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Date']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Date']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Date']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Date']['input']>;
};

/** Decay influences the weight of the score based on field values with a decay function */
export type Decay = {
  origin?: InputMaybe<Scalars['Date']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  scale?: InputMaybe<Scalars['Int']['input']>;
};

export type DefaultImage = IData & _IContent & _IImage & _IMedia & {
  __typename?: 'DefaultImage';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type DefaultImage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type DefaultImage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DefaultImageAutocomplete = {
  __typename?: 'DefaultImageAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type DefaultImageFacet = {
  __typename?: 'DefaultImageFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type DefaultImageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type DefaultImageOutput = {
  __typename?: 'DefaultImageOutput';
  autocomplete?: Maybe<DefaultImageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<DefaultImageFacet>;
  item?: Maybe<DefaultImage>;
  items?: Maybe<Array<Maybe<DefaultImage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DefaultImageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DefaultImageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DefaultImageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DefaultImageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DefaultImageWhereInput>>>;
};

export type Dictionary = IData & _IComponent & _IContent & {
  __typename?: 'Dictionary';
  DictionaryItems?: Maybe<Array<Maybe<DictionaryItemProperty>>>;
  DictionaryKey?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type DictionaryDictionaryKeyArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Dictionary_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Dictionary_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DictionaryAutocomplete = {
  __typename?: 'DictionaryAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type DictionaryFacet = {
  __typename?: 'DictionaryFacet';
  DictionaryItems?: Maybe<Array<Maybe<StringFacet>>>;
  DictionaryKey?: Maybe<Array<Maybe<StringFacet>>>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type DictionaryFacetDictionaryItemsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DictionaryFacetDictionaryKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type DictionaryItem = IData & _IComponent & _IContent & {
  __typename?: 'DictionaryItem';
  DictionaryItemKey?: Maybe<Scalars['String']['output']>;
  DictionaryItemValue?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type DictionaryItem_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type DictionaryItem_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DictionaryItemAutocomplete = {
  __typename?: 'DictionaryItemAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type DictionaryItemFacet = {
  __typename?: 'DictionaryItemFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type DictionaryItemOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type DictionaryItemOutput = {
  __typename?: 'DictionaryItemOutput';
  autocomplete?: Maybe<DictionaryItemAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<DictionaryItemFacet>;
  item?: Maybe<DictionaryItem>;
  items?: Maybe<Array<Maybe<DictionaryItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DictionaryItemOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DictionaryItemProperty = {
  __typename?: 'DictionaryItemProperty';
  DictionaryItemKey?: Maybe<Scalars['String']['output']>;
  DictionaryItemValue?: Maybe<Scalars['String']['output']>;
};

export type DictionaryItemWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DictionaryItemWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DictionaryItemWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DictionaryItemWhereInput>>>;
};

export type DictionaryOrderByInput = {
  DictionaryItems?: InputMaybe<OrderBy>;
  DictionaryKey?: InputMaybe<OrderBy>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type DictionaryOutput = {
  __typename?: 'DictionaryOutput';
  autocomplete?: Maybe<DictionaryAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<DictionaryFacet>;
  item?: Maybe<Dictionary>;
  items?: Maybe<Array<Maybe<Dictionary>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DictionaryOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DictionaryWhereInput = {
  DictionaryItems?: InputMaybe<StringFilterInput>;
  DictionaryKey?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<DictionaryWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DictionaryWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DictionaryWhereInput>>>;
};

export enum FactorModifier {
  /** Add 1 to the field value and take the natural logarithm */
  LOG = 'LOG',
  /** Do not apply any multiplier to the field value */
  NONE = 'NONE',
  /** Reciprocate the field value, same as 1/x where x is the field's value */
  RECIPROCAL = 'RECIPROCAL',
  /** Take the square root of the field value */
  SQRT = 'SQRT',
  /** Square the field value (multiply it by itself) */
  SQUARE = 'SQUARE'
}

export type GenericMedia = IData & _IContent & _IMedia & {
  __typename?: 'GenericMedia';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type GenericMedia_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericMedia_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type GenericMediaAutocomplete = {
  __typename?: 'GenericMediaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type GenericMediaFacet = {
  __typename?: 'GenericMediaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type GenericMediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMediaOutput = {
  __typename?: 'GenericMediaOutput';
  autocomplete?: Maybe<GenericMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<GenericMediaFacet>;
  item?: Maybe<GenericMedia>;
  items?: Maybe<Array<Maybe<GenericMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type GenericMediaOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenericMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
};

export type HeaderBlock = IData & _IComponent & _IContent & {
  __typename?: 'HeaderBlock';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  site_logo?: Maybe<ContentReference>;
  site_logo_dark?: Maybe<ContentReference>;
  site_main_navigation?: Maybe<Array<Maybe<_IContent>>>;
  site_utility_navigation?: Maybe<Array<Maybe<_IContent>>>;
};


export type HeaderBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type HeaderBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HeaderBlockAutocomplete = {
  __typename?: 'HeaderBlockAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  site_logo?: Maybe<ContentReferenceAutocomplete>;
  site_logo_dark?: Maybe<ContentReferenceAutocomplete>;
  site_main_navigation?: Maybe<_IContentAutocomplete>;
  site_utility_navigation?: Maybe<_IContentAutocomplete>;
};

export type HeaderBlockFacet = {
  __typename?: 'HeaderBlockFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  site_logo?: Maybe<ContentReferenceFacet>;
  site_logo_dark?: Maybe<ContentReferenceFacet>;
  site_main_navigation?: Maybe<_IContentFacet>;
  site_utility_navigation?: Maybe<_IContentFacet>;
};

export type HeaderBlockOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  site_logo?: InputMaybe<ContentReferenceOrderByInput>;
  site_logo_dark?: InputMaybe<ContentReferenceOrderByInput>;
  site_main_navigation?: InputMaybe<_IContentOrderByInput>;
  site_utility_navigation?: InputMaybe<_IContentOrderByInput>;
};

export type HeaderBlockOutput = {
  __typename?: 'HeaderBlockOutput';
  autocomplete?: Maybe<HeaderBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<HeaderBlockFacet>;
  item?: Maybe<HeaderBlock>;
  items?: Maybe<Array<Maybe<HeaderBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type HeaderBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeaderBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<HeaderBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HeaderBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HeaderBlockWhereInput>>>;
  site_logo?: InputMaybe<ContentReferenceWhereInput>;
  site_logo_dark?: InputMaybe<ContentReferenceWhereInput>;
  site_main_navigation?: InputMaybe<_IContentWhereInput>;
  site_utility_navigation?: InputMaybe<_IContentWhereInput>;
};

export type HeadingElement = IData & _IComponent & _IContent & {
  __typename?: 'HeadingElement';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  headingText?: Maybe<Scalars['String']['output']>;
};


export type HeadingElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type HeadingElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HeadingElementAutocomplete = {
  __typename?: 'HeadingElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type HeadingElementFacet = {
  __typename?: 'HeadingElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type HeadingElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type HeadingElementOutput = {
  __typename?: 'HeadingElementOutput';
  autocomplete?: Maybe<HeadingElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<HeadingElementFacet>;
  item?: Maybe<HeadingElement>;
  items?: Maybe<Array<Maybe<HeadingElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type HeadingElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeadingElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
};

export type HeroBlock = IData & _IComponent & _IContent & {
  __typename?: 'HeroBlock';
  Description?: Maybe<RichText>;
  Eyebrow?: Maybe<Scalars['String']['output']>;
  Heading?: Maybe<Scalars['String']['output']>;
  HeroButton?: Maybe<ButtonBlockProperty>;
  HeroColor?: Maybe<Scalars['String']['output']>;
  HeroImage?: Maybe<ContentReference>;
  Icon?: Maybe<Scalars['String']['output']>;
  SubHeading?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type HeroBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type HeroBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HeroBlockAutocomplete = {
  __typename?: 'HeroBlockAutocomplete';
  Description?: Maybe<RichTextAutocomplete>;
  HeroButton?: Maybe<ButtonBlockPropertyAutocomplete>;
  HeroImage?: Maybe<ContentReferenceAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type HeroBlockFacet = {
  __typename?: 'HeroBlockFacet';
  Description?: Maybe<RichTextFacet>;
  HeroButton?: Maybe<ButtonBlockPropertyFacet>;
  HeroImage?: Maybe<ContentReferenceFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type HeroBlockOrderByInput = {
  Description?: InputMaybe<RichTextOrderByInput>;
  HeroButton?: InputMaybe<ButtonBlockPropertyOrderByInput>;
  HeroImage?: InputMaybe<ContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type HeroBlockOutput = {
  __typename?: 'HeroBlockOutput';
  autocomplete?: Maybe<HeroBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<HeroBlockFacet>;
  item?: Maybe<HeroBlock>;
  items?: Maybe<Array<Maybe<HeroBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type HeroBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeroBlockWhereInput = {
  Description?: InputMaybe<RichTextWhereInput>;
  HeroButton?: InputMaybe<ButtonBlockPropertyWhereInput>;
  HeroImage?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
};

/** Options for highlighting */
export type HighlightOptions = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  endToken?: InputMaybe<Scalars['String']['input']>;
  startToken?: InputMaybe<Scalars['String']['input']>;
};

export type Home = IData & _IContent & _IPage & {
  __typename?: 'Home';
  HomePageHeroContentArea?: Maybe<Array<Maybe<_IContent>>>;
  HomePageMainContentArea?: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Home_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Home_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HomeAutocomplete = {
  __typename?: 'HomeAutocomplete';
  HomePageHeroContentArea?: Maybe<_IContentAutocomplete>;
  HomePageMainContentArea?: Maybe<_IContentAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type HomeFacet = {
  __typename?: 'HomeFacet';
  HomePageHeroContentArea?: Maybe<_IContentFacet>;
  HomePageMainContentArea?: Maybe<_IContentFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type HomeOrderByInput = {
  HomePageHeroContentArea?: InputMaybe<_IContentOrderByInput>;
  HomePageMainContentArea?: InputMaybe<_IContentOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type HomeOutput = {
  __typename?: 'HomeOutput';
  autocomplete?: Maybe<HomeAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<HomeFacet>;
  item?: Maybe<Home>;
  items?: Maybe<Array<Maybe<Home>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type HomeOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomePageHeroBlock = IData & _IComponent & _IContent & {
  __typename?: 'HomePageHeroBlock';
  HomeHeroBlockHeading?: Maybe<Scalars['String']['output']>;
  HomeHeroBlockSubHeading?: Maybe<Scalars['String']['output']>;
  HomeHeroButtonBlock?: Maybe<ButtonBlockProperty>;
  HomeHeroLeftImage?: Maybe<ContentReference>;
  HomeHeroRightImage?: Maybe<ContentReference>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type HomePageHeroBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type HomePageHeroBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HomePageHeroBlockAutocomplete = {
  __typename?: 'HomePageHeroBlockAutocomplete';
  HomeHeroButtonBlock?: Maybe<ButtonBlockPropertyAutocomplete>;
  HomeHeroLeftImage?: Maybe<ContentReferenceAutocomplete>;
  HomeHeroRightImage?: Maybe<ContentReferenceAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type HomePageHeroBlockFacet = {
  __typename?: 'HomePageHeroBlockFacet';
  HomeHeroButtonBlock?: Maybe<ButtonBlockPropertyFacet>;
  HomeHeroLeftImage?: Maybe<ContentReferenceFacet>;
  HomeHeroRightImage?: Maybe<ContentReferenceFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type HomePageHeroBlockOrderByInput = {
  HomeHeroButtonBlock?: InputMaybe<ButtonBlockPropertyOrderByInput>;
  HomeHeroLeftImage?: InputMaybe<ContentReferenceOrderByInput>;
  HomeHeroRightImage?: InputMaybe<ContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type HomePageHeroBlockOutput = {
  __typename?: 'HomePageHeroBlockOutput';
  autocomplete?: Maybe<HomePageHeroBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<HomePageHeroBlockFacet>;
  item?: Maybe<HomePageHeroBlock>;
  items?: Maybe<Array<Maybe<HomePageHeroBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type HomePageHeroBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomePageHeroBlockWhereInput = {
  HomeHeroButtonBlock?: InputMaybe<ButtonBlockPropertyWhereInput>;
  HomeHeroLeftImage?: InputMaybe<ContentReferenceWhereInput>;
  HomeHeroRightImage?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<HomePageHeroBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HomePageHeroBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HomePageHeroBlockWhereInput>>>;
};

export type HomeWhereInput = {
  HomePageHeroContentArea?: InputMaybe<_IContentWhereInput>;
  HomePageMainContentArea?: InputMaybe<_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<HomeWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HomeWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HomeWhereInput>>>;
};

export type HtmlBlock = IData & _IComponent & _IContent & {
  __typename?: 'HtmlBlock';
  HtmlBlockHeading?: Maybe<Scalars['String']['output']>;
  HtmlContent?: Maybe<RichText>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type HtmlBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type HtmlBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HtmlBlockAutocomplete = {
  __typename?: 'HtmlBlockAutocomplete';
  HtmlContent?: Maybe<RichTextAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type HtmlBlockFacet = {
  __typename?: 'HtmlBlockFacet';
  HtmlContent?: Maybe<RichTextFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type HtmlBlockOrderByInput = {
  HtmlContent?: InputMaybe<RichTextOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type HtmlBlockOutput = {
  __typename?: 'HtmlBlockOutput';
  autocomplete?: Maybe<HtmlBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<HtmlBlockFacet>;
  item?: Maybe<HtmlBlock>;
  items?: Maybe<Array<Maybe<HtmlBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type HtmlBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HtmlBlockWhereInput = {
  HtmlContent?: InputMaybe<RichTextWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<HtmlBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HtmlBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HtmlBlockWhereInput>>>;
};

export type ICompositionComponentNode = {
  component?: Maybe<_IComponent>;
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ICompositionNode = {
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ICompositionNodeAutocomplete = {
  __typename?: 'ICompositionNodeAutocomplete';
  displayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings?: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ICompositionNodeAutocompletedisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompletedisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompletekeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompletenodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompletetypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ICompositionNodeFacet = {
  __typename?: 'ICompositionNodeFacet';
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings?: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  nodeType?: Maybe<Array<Maybe<StringFacet>>>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ICompositionNodeFacetdisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetdisplayTemplateKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetnodeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacettypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ICompositionNodeOrderByInput = {
  displayName?: InputMaybe<OrderBy>;
  displaySettings?: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  nodeType?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type ICompositionNodeWhereInput = {
  displayName?: InputMaybe<StringFilterInput>;
  displaySettings?: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  nodeType?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ICompositionStructureNode = {
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  nodes?: Maybe<Array<Maybe<ICompositionNode>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IContentMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IContentMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IContentMetadataAutocomplete = {
  __typename?: 'IContentMetadataAutocomplete';
  changeset?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fallbackForLocale?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  locale?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrlAutocomplete>;
  version?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type IContentMetadataAutocompletechangesetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompletefallbackForLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompletekeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompletelocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompletestatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompletetypesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteversionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type IContentMetadataFacet = {
  __typename?: 'IContentMetadataFacet';
  changeset?: Maybe<Array<Maybe<StringFacet>>>;
  created?: Maybe<Array<Maybe<DateFacet>>>;
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  fallbackForLocale?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  lastModified?: Maybe<Array<Maybe<DateFacet>>>;
  locale?: Maybe<Array<Maybe<StringFacet>>>;
  published?: Maybe<Array<Maybe<DateFacet>>>;
  sortOrder?: Maybe<Array<Maybe<NumberFacet>>>;
  status?: Maybe<Array<Maybe<StringFacet>>>;
  types?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<ContentUrlFacet>;
  version?: Maybe<Array<Maybe<StringFacet>>>;
};


export type IContentMetadataFacetchangesetArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetcreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetdisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetfallbackForLocaleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetlastModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetlocaleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetpublishedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetsortOrderArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type IContentMetadataFacetstatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacettypesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetversionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataOrderByInput = {
  changeset?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  fallbackForLocale?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  lastModified?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  published?: InputMaybe<OrderBy>;
  sortOrder?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  types?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
  version?: InputMaybe<OrderBy>;
};

export type IContentMetadataWhereInput = {
  changeset?: InputMaybe<StringFilterInput>;
  created?: InputMaybe<DateFilterInput>;
  displayName?: InputMaybe<SearchableStringFilterInput>;
  fallbackForLocale?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  lastModified?: InputMaybe<DateFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  published?: InputMaybe<DateFilterInput>;
  sortOrder?: InputMaybe<IntFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  types?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
  version?: InputMaybe<StringFilterInput>;
};

export type IData = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IData_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IData_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type IInstanceMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IInstanceMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IItemMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  displayOption?: Maybe<Scalars['String']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IItemMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IMediaMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IMediaMetadatacontentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IMediaMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ImageElement = IData & _IComponent & _IContent & {
  __typename?: 'ImageElement';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  altText?: Maybe<Scalars['String']['output']>;
  imageLink?: Maybe<ContentReference>;
};


export type ImageElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ImageElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ImageElementAutocomplete = {
  __typename?: 'ImageElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  imageLink?: Maybe<ContentReferenceAutocomplete>;
};

export type ImageElementFacet = {
  __typename?: 'ImageElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  imageLink?: Maybe<ContentReferenceFacet>;
};

export type ImageElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  imageLink?: InputMaybe<ContentReferenceOrderByInput>;
};

export type ImageElementOutput = {
  __typename?: 'ImageElementOutput';
  autocomplete?: Maybe<ImageElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ImageElementFacet>;
  item?: Maybe<ImageElement>;
  items?: Maybe<Array<Maybe<ImageElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ImageElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  imageLink?: InputMaybe<ContentReferenceWhereInput>;
};

export type ImageMedia = IData & _IContent & _IImage & _IMedia & {
  __typename?: 'ImageMedia';
  AltText?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ImageMedia_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ImageMedia_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ImageMediaAutocomplete = {
  __typename?: 'ImageMediaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ImageMediaFacet = {
  __typename?: 'ImageMediaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ImageMediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ImageMediaOutput = {
  __typename?: 'ImageMediaOutput';
  autocomplete?: Maybe<ImageMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ImageMediaFacet>;
  item?: Maybe<ImageMedia>;
  items?: Maybe<Array<Maybe<ImageMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ImageMediaOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
};

export type InstanceMetadata = IContentMetadata & IInstanceMetadata & {
  __typename?: 'InstanceMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type InstanceMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IntFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Int']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `Factor` allows you to use a number value in a field to influence the `_score` directly. If used on a multi-valued field, then only the lowest value of the field is used in calculations. Default for `value` is `1`. Default for `modifier` is `NONE`. */
  factor?: InputMaybe<NumberFactor>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Int']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Int']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type ItemMetadata = IContentMetadata & IItemMetadata & {
  __typename?: 'ItemMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  displayOption?: Maybe<Scalars['String']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type ItemMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type JustForTestingBlock = IData & _IComponent & _IContent & {
  __typename?: 'JustForTestingBlock';
  Blurp?: Maybe<RichText>;
  MyTest?: Maybe<RichText>;
  CTA?: Maybe<ContentUrl>;
  Description?: Maybe<RichText>;
  Name?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type JustForTestingBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type JustForTestingBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type JustForTestingBlockAutocomplete = {
  __typename?: 'JustForTestingBlockAutocomplete';
  Blurp?: Maybe<RichTextAutocomplete>;
  MyTest?: Maybe<RichTextAutocomplete>;
  CTA?: Maybe<ContentUrlAutocomplete>;
  Description?: Maybe<RichTextAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type JustForTestingBlockFacet = {
  __typename?: 'JustForTestingBlockFacet';
  Blurp?: Maybe<RichTextFacet>;
  MyTest?: Maybe<RichTextFacet>;
  CTA?: Maybe<ContentUrlFacet>;
  Description?: Maybe<RichTextFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type JustForTestingBlockOrderByInput = {
  Blurp?: InputMaybe<RichTextOrderByInput>;
  MyTest?: InputMaybe<RichTextOrderByInput>;
  CTA?: InputMaybe<ContentUrlOrderByInput>;
  Description?: InputMaybe<RichTextOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type JustForTestingBlockOutput = {
  __typename?: 'JustForTestingBlockOutput';
  autocomplete?: Maybe<JustForTestingBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<JustForTestingBlockFacet>;
  item?: Maybe<JustForTestingBlock>;
  items?: Maybe<Array<Maybe<JustForTestingBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type JustForTestingBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JustForTestingBlockWhereInput = {
  Blurp?: InputMaybe<RichTextWhereInput>;
  MyTest?: InputMaybe<RichTextWhereInput>;
  CTA?: InputMaybe<ContentUrlWhereInput>;
  Description?: InputMaybe<RichTextWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<JustForTestingBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<JustForTestingBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<JustForTestingBlockWhereInput>>>;
};

export type LandingPage = IData & _IContent & _IPage & {
  __typename?: 'LandingPage';
  MainContentArea?: Maybe<Array<Maybe<_IContent>>>;
  SeoSettings?: Maybe<PageSeoSettingsProperty>;
  TopContentArea?: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type LandingPage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type LandingPage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type LandingPageAutocomplete = {
  __typename?: 'LandingPageAutocomplete';
  MainContentArea?: Maybe<_IContentAutocomplete>;
  SeoSettings?: Maybe<PageSeoSettingsPropertyAutocomplete>;
  TopContentArea?: Maybe<_IContentAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type LandingPageFacet = {
  __typename?: 'LandingPageFacet';
  MainContentArea?: Maybe<_IContentFacet>;
  SeoSettings?: Maybe<PageSeoSettingsPropertyFacet>;
  TopContentArea?: Maybe<_IContentFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type LandingPageOrderByInput = {
  MainContentArea?: InputMaybe<_IContentOrderByInput>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  TopContentArea?: InputMaybe<_IContentOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type LandingPageOutput = {
  __typename?: 'LandingPageOutput';
  autocomplete?: Maybe<LandingPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<LandingPageFacet>;
  item?: Maybe<LandingPage>;
  items?: Maybe<Array<Maybe<LandingPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type LandingPageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LandingPageWhereInput = {
  MainContentArea?: InputMaybe<_IContentWhereInput>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  TopContentArea?: InputMaybe<_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
};

export type LayoutContainerBlock = IData & _IComponent & _IContent & {
  __typename?: 'LayoutContainerBlock';
  ColumnsCount?: Maybe<Scalars['Int']['output']>;
  ContainerBackgroundColor?: Maybe<Scalars['String']['output']>;
  ContainerBackgroundImage?: Maybe<ContentReference>;
  ContainerMarginBottom?: Maybe<Scalars['String']['output']>;
  ContainerMarginTop?: Maybe<Scalars['String']['output']>;
  ContainerPaddingBottom?: Maybe<Scalars['String']['output']>;
  ContainerPaddingTop?: Maybe<Scalars['String']['output']>;
  GapSize?: Maybe<Scalars['String']['output']>;
  LayoutContentArea?: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type LayoutContainerBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type LayoutContainerBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type LayoutContainerBlockAutocomplete = {
  __typename?: 'LayoutContainerBlockAutocomplete';
  ContainerBackgroundImage?: Maybe<ContentReferenceAutocomplete>;
  LayoutContentArea?: Maybe<_IContentAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type LayoutContainerBlockFacet = {
  __typename?: 'LayoutContainerBlockFacet';
  ContainerBackgroundImage?: Maybe<ContentReferenceFacet>;
  LayoutContentArea?: Maybe<_IContentFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type LayoutContainerBlockOrderByInput = {
  ContainerBackgroundImage?: InputMaybe<ContentReferenceOrderByInput>;
  LayoutContentArea?: InputMaybe<_IContentOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type LayoutContainerBlockOutput = {
  __typename?: 'LayoutContainerBlockOutput';
  autocomplete?: Maybe<LayoutContainerBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<LayoutContainerBlockFacet>;
  item?: Maybe<LayoutContainerBlock>;
  items?: Maybe<Array<Maybe<LayoutContainerBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type LayoutContainerBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LayoutContainerBlockWhereInput = {
  ContainerBackgroundImage?: InputMaybe<ContentReferenceWhereInput>;
  LayoutContentArea?: InputMaybe<_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<LayoutContainerBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<LayoutContainerBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<LayoutContainerBlockWhereInput>>>;
};

export type Link = {
  __typename?: 'Link';
  target?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<ContentUrl>;
};


export type LinktextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type LinkAutocomplete = {
  __typename?: 'LinkAutocomplete';
  target?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrlAutocomplete>;
};


export type LinkAutocompletetargetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LinkAutocompletetitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LinkConfig = {
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type LinkFacet = {
  __typename?: 'LinkFacet';
  target?: Maybe<Array<Maybe<StringFacet>>>;
  text?: Maybe<Array<Maybe<StringFacet>>>;
  title?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<ContentUrlFacet>;
};


export type LinkFacettargetArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkFacettextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkFacettitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LinkOrderByInput = {
  target?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
};

export enum LinkTypes {
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.owner`   |
   */
  ASSETS = 'ASSETS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  DEFAULT = 'DEFAULT',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  ITEMS = 'ITEMS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.path` |
   * | *to*        |        | `_metadata.key`   |
   */
  PATH = 'PATH'
}

export type LinkWhereInput = {
  target?: InputMaybe<StringFilterInput>;
  text?: InputMaybe<SearchableStringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
};

export enum Locales {
  ALL = 'ALL',
  NEUTRAL = 'NEUTRAL',
  en = 'en',
  nl = 'nl'
}

export type MediaMetadata = IContentMetadata & IInstanceMetadata & IMediaMetadata & {
  __typename?: 'MediaMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type MediaMetadatacontentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type MediaMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type MegaMenuGroupBlock = IData & _IComponent & _IContent & {
  __typename?: 'MegaMenuGroupBlock';
  MegaMenuContentArea?: Maybe<Array<Maybe<_IContent>>>;
  MegaMenuUrl?: Maybe<ContentUrl>;
  MenuMenuHeading?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type MegaMenuGroupBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type MegaMenuGroupBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type MegaMenuGroupBlockAutocomplete = {
  __typename?: 'MegaMenuGroupBlockAutocomplete';
  MegaMenuContentArea?: Maybe<_IContentAutocomplete>;
  MegaMenuUrl?: Maybe<ContentUrlAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type MegaMenuGroupBlockFacet = {
  __typename?: 'MegaMenuGroupBlockFacet';
  MegaMenuContentArea?: Maybe<_IContentFacet>;
  MegaMenuUrl?: Maybe<ContentUrlFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type MegaMenuGroupBlockOrderByInput = {
  MegaMenuContentArea?: InputMaybe<_IContentOrderByInput>;
  MegaMenuUrl?: InputMaybe<ContentUrlOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type MegaMenuGroupBlockOutput = {
  __typename?: 'MegaMenuGroupBlockOutput';
  autocomplete?: Maybe<MegaMenuGroupBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<MegaMenuGroupBlockFacet>;
  item?: Maybe<MegaMenuGroupBlock>;
  items?: Maybe<Array<Maybe<MegaMenuGroupBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type MegaMenuGroupBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MegaMenuGroupBlockWhereInput = {
  MegaMenuContentArea?: InputMaybe<_IContentWhereInput>;
  MegaMenuUrl?: InputMaybe<ContentUrlWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
};

export type MenuNavigationBlock = IData & _IComponent & _IContent & {
  __typename?: 'MenuNavigationBlock';
  MenuNavigationHeading?: Maybe<Scalars['String']['output']>;
  NavigationLinks?: Maybe<Array<Maybe<Link>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type MenuNavigationBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type MenuNavigationBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type MenuNavigationBlockAutocomplete = {
  __typename?: 'MenuNavigationBlockAutocomplete';
  NavigationLinks?: Maybe<LinkAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type MenuNavigationBlockFacet = {
  __typename?: 'MenuNavigationBlockFacet';
  NavigationLinks?: Maybe<LinkFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type MenuNavigationBlockOrderByInput = {
  NavigationLinks?: InputMaybe<LinkOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type MenuNavigationBlockOutput = {
  __typename?: 'MenuNavigationBlockOutput';
  autocomplete?: Maybe<MenuNavigationBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<MenuNavigationBlockFacet>;
  item?: Maybe<MenuNavigationBlock>;
  items?: Maybe<Array<Maybe<MenuNavigationBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type MenuNavigationBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MenuNavigationBlockWhereInput = {
  NavigationLinks?: InputMaybe<LinkWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<MenuNavigationBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<MenuNavigationBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<MenuNavigationBlockWhereInput>>>;
};

export type NavigationMenuBlock = IData & _IComponent & _IContent & {
  __typename?: 'NavigationMenuBlock';
  MenuNavigationHeading?: Maybe<Scalars['String']['output']>;
  NavigationLinks?: Maybe<Array<Maybe<Link>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type NavigationMenuBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type NavigationMenuBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type NavigationMenuBlockAutocomplete = {
  __typename?: 'NavigationMenuBlockAutocomplete';
  NavigationLinks?: Maybe<LinkAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type NavigationMenuBlockFacet = {
  __typename?: 'NavigationMenuBlockFacet';
  NavigationLinks?: Maybe<LinkFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type NavigationMenuBlockOrderByInput = {
  NavigationLinks?: InputMaybe<LinkOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type NavigationMenuBlockOutput = {
  __typename?: 'NavigationMenuBlockOutput';
  autocomplete?: Maybe<NavigationMenuBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<NavigationMenuBlockFacet>;
  item?: Maybe<NavigationMenuBlock>;
  items?: Maybe<Array<Maybe<NavigationMenuBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type NavigationMenuBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NavigationMenuBlockProperty = {
  __typename?: 'NavigationMenuBlockProperty';
  MenuNavigationHeading?: Maybe<Scalars['String']['output']>;
  NavigationLinks?: Maybe<Array<Maybe<Link>>>;
};

export type NavigationMenuBlockPropertyFacet = {
  __typename?: 'NavigationMenuBlockPropertyFacet';
  NavigationLinks?: Maybe<LinkFacet>;
};

export type NavigationMenuBlockPropertyOrderByInput = {
  NavigationLinks?: InputMaybe<LinkOrderByInput>;
};

export type NavigationMenuBlockPropertyWhereInput = {
  NavigationLinks?: InputMaybe<LinkWhereInput>;
};

export type NavigationMenuBlockWhereInput = {
  NavigationLinks?: InputMaybe<LinkWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<NavigationMenuBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<NavigationMenuBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<NavigationMenuBlockWhereInput>>>;
};

export type NumberFacet = {
  __typename?: 'NumberFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Factor influences the score based of number values with a factor function */
export type NumberFactor = {
  modifier?: InputMaybe<FactorModifier>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type OdpEmbedBlock = IData & _IComponent & _IContent & {
  __typename?: 'OdpEmbedBlock';
  ContentId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type OdpEmbedBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OdpEmbedBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OdpEmbedBlockAutocomplete = {
  __typename?: 'OdpEmbedBlockAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OdpEmbedBlockFacet = {
  __typename?: 'OdpEmbedBlockFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OdpEmbedBlockOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OdpEmbedBlockOutput = {
  __typename?: 'OdpEmbedBlockOutput';
  autocomplete?: Maybe<OdpEmbedBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OdpEmbedBlockFacet>;
  item?: Maybe<OdpEmbedBlock>;
  items?: Maybe<Array<Maybe<OdpEmbedBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OdpEmbedBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OdpEmbedBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OdpEmbedBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OdpEmbedBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OdpEmbedBlockWhereInput>>>;
};

export type OfficeLocation = IData & _IComponent & _IContent & {
  __typename?: 'OfficeLocation';
  OfficeAddressCity?: Maybe<Scalars['String']['output']>;
  OfficeAddressCountry?: Maybe<Scalars['String']['output']>;
  OfficeAddressPostalCode?: Maybe<Scalars['String']['output']>;
  OfficeAddressStreet1?: Maybe<Scalars['String']['output']>;
  OfficeAddressStreet2?: Maybe<Scalars['String']['output']>;
  OfficeEmail?: Maybe<Scalars['String']['output']>;
  OfficePhone?: Maybe<Scalars['String']['output']>;
  OfficeTitle?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type OfficeLocation_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OfficeLocation_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OfficeLocationAutocomplete = {
  __typename?: 'OfficeLocationAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OfficeLocationFacet = {
  __typename?: 'OfficeLocationFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OfficeLocationOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OfficeLocationOutput = {
  __typename?: 'OfficeLocationOutput';
  autocomplete?: Maybe<OfficeLocationAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OfficeLocationFacet>;
  item?: Maybe<OfficeLocation>;
  items?: Maybe<Array<Maybe<OfficeLocation>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OfficeLocationOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OfficeLocationWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OfficeLocationWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OfficeLocationWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OfficeLocationWhereInput>>>;
};

export enum OrderBy {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum OrderByFacetType {
  COUNT = 'COUNT',
  VALUE = 'VALUE'
}

export type PageSeoSettings = IData & _IComponent & _IContent & {
  __typename?: 'PageSeoSettings';
  GraphType?: Maybe<Scalars['String']['output']>;
  MetaDescription?: Maybe<Scalars['String']['output']>;
  MetaTitle?: Maybe<Scalars['String']['output']>;
  SharingImage?: Maybe<ContentReference>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type PageSeoSettings_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PageSeoSettings_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type PageSeoSettingsAutocomplete = {
  __typename?: 'PageSeoSettingsAutocomplete';
  SharingImage?: Maybe<ContentReferenceAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type PageSeoSettingsFacet = {
  __typename?: 'PageSeoSettingsFacet';
  SharingImage?: Maybe<ContentReferenceFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type PageSeoSettingsOrderByInput = {
  SharingImage?: InputMaybe<ContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type PageSeoSettingsOutput = {
  __typename?: 'PageSeoSettingsOutput';
  autocomplete?: Maybe<PageSeoSettingsAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<PageSeoSettingsFacet>;
  item?: Maybe<PageSeoSettings>;
  items?: Maybe<Array<Maybe<PageSeoSettings>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type PageSeoSettingsOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageSeoSettingsProperty = {
  __typename?: 'PageSeoSettingsProperty';
  GraphType?: Maybe<Scalars['String']['output']>;
  MetaDescription?: Maybe<Scalars['String']['output']>;
  MetaTitle?: Maybe<Scalars['String']['output']>;
  SharingImage?: Maybe<ContentReference>;
};

export type PageSeoSettingsPropertyAutocomplete = {
  __typename?: 'PageSeoSettingsPropertyAutocomplete';
  SharingImage?: Maybe<ContentReferenceAutocomplete>;
};

export type PageSeoSettingsPropertyFacet = {
  __typename?: 'PageSeoSettingsPropertyFacet';
  SharingImage?: Maybe<ContentReferenceFacet>;
};

export type PageSeoSettingsPropertyOrderByInput = {
  SharingImage?: InputMaybe<ContentReferenceOrderByInput>;
};

export type PageSeoSettingsPropertyWhereInput = {
  SharingImage?: InputMaybe<ContentReferenceWhereInput>;
};

export type PageSeoSettingsWhereInput = {
  SharingImage?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
};

export type ParagraphElement = IData & _IComponent & _IContent & {
  __typename?: 'ParagraphElement';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  text?: Maybe<RichText>;
};


export type ParagraphElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ParagraphElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ParagraphElementAutocomplete = {
  __typename?: 'ParagraphElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  text?: Maybe<RichTextAutocomplete>;
};

export type ParagraphElementFacet = {
  __typename?: 'ParagraphElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  text?: Maybe<RichTextFacet>;
};

export type ParagraphElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  text?: InputMaybe<RichTextOrderByInput>;
};

export type ParagraphElementOutput = {
  __typename?: 'ParagraphElementOutput';
  autocomplete?: Maybe<ParagraphElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ParagraphElementFacet>;
  item?: Maybe<ParagraphElement>;
  items?: Maybe<Array<Maybe<ParagraphElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ParagraphElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ParagraphElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  text?: InputMaybe<RichTextWhereInput>;
};

export type Query = {
  __typename?: 'Query';
  ArticleGroupPage?: Maybe<ArticleGroupPageOutput>;
  ArticleListElement?: Maybe<ArticleListElementOutput>;
  ArticlePage?: Maybe<ArticlePageOutput>;
  BlankExperience?: Maybe<BlankExperienceOutput>;
  BlankSection?: Maybe<BlankSectionOutput>;
  BlogListingBlock?: Maybe<BlogListingBlockOutput>;
  BlogPostPage?: Maybe<BlogPostPageOutput>;
  ButtonBlock?: Maybe<ButtonBlockOutput>;
  CTAElement?: Maybe<CTAElementOutput>;
  CardBlock?: Maybe<CardBlockOutput>;
  CarouselBlock?: Maybe<CarouselBlockOutput>;
  ContentRecsBlock?: Maybe<ContentRecsBlockOutput>;
  ContentRecsElement?: Maybe<ContentRecsElementOutput>;
  Data?: Maybe<DataOutput>;
  DefaultImage?: Maybe<DefaultImageOutput>;
  Dictionary?: Maybe<DictionaryOutput>;
  DictionaryItem?: Maybe<DictionaryItemOutput>;
  GenericMedia?: Maybe<GenericMediaOutput>;
  HeaderBlock?: Maybe<HeaderBlockOutput>;
  HeadingElement?: Maybe<HeadingElementOutput>;
  HeroBlock?: Maybe<HeroBlockOutput>;
  Home?: Maybe<HomeOutput>;
  HomePageHeroBlock?: Maybe<HomePageHeroBlockOutput>;
  HtmlBlock?: Maybe<HtmlBlockOutput>;
  ImageElement?: Maybe<ImageElementOutput>;
  ImageMedia?: Maybe<ImageMediaOutput>;
  JustForTestingBlock?: Maybe<JustForTestingBlockOutput>;
  LandingPage?: Maybe<LandingPageOutput>;
  LayoutContainerBlock?: Maybe<LayoutContainerBlockOutput>;
  MegaMenuGroupBlock?: Maybe<MegaMenuGroupBlockOutput>;
  MenuNavigationBlock?: Maybe<MenuNavigationBlockOutput>;
  NavigationMenuBlock?: Maybe<NavigationMenuBlockOutput>;
  OdpEmbedBlock?: Maybe<OdpEmbedBlockOutput>;
  OfficeLocation?: Maybe<OfficeLocationOutput>;
  PageSeoSettings?: Maybe<PageSeoSettingsOutput>;
  ParagraphElement?: Maybe<ParagraphElementOutput>;
  QuoteBlock?: Maybe<QuoteBlockOutput>;
  StandardPage?: Maybe<StandardPageOutput>;
  StartPage?: Maybe<StartPageOutput>;
  SysContentFolder?: Maybe<SysContentFolderOutput>;
  TestimonialElement?: Maybe<TestimonialElementOutput>;
  TextBlock?: Maybe<TextBlockOutput>;
  Video?: Maybe<VideoOutput>;
  VideoElement?: Maybe<VideoElementOutput>;
  VideoMedia?: Maybe<VideoMediaOutput>;
  WebsiteFooter?: Maybe<WebsiteFooterOutput>;
  _Component?: Maybe<_ComponentOutput>;
  _Content?: Maybe<_ContentOutput>;
  _Experience?: Maybe<_ExperienceOutput>;
  _Folder?: Maybe<_FolderOutput>;
  _Image?: Maybe<_ImageOutput>;
  _Media?: Maybe<_MediaOutput>;
  _Page?: Maybe<_PageOutput>;
  _Section?: Maybe<_SectionOutput>;
  _Video?: Maybe<_VideoOutput>;
};


export type QueryArticleGroupPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticleGroupPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ArticleGroupPageWhereInput>;
};


export type QueryArticleListElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticleListElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ArticleListElementWhereInput>;
};


export type QueryArticlePageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticlePageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ArticlePageWhereInput>;
};


export type QueryBlankExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryBlankSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankSectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlankSectionWhereInput>;
};


export type QueryBlogListingBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlogListingBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlogListingBlockWhereInput>;
};


export type QueryBlogPostPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlogPostPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlogPostPageWhereInput>;
};


export type QueryButtonBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ButtonBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ButtonBlockWhereInput>;
};


export type QueryCTAElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CTAElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CTAElementWhereInput>;
};


export type QueryCardBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CardBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CardBlockWhereInput>;
};


export type QueryCarouselBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CarouselBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CarouselBlockWhereInput>;
};


export type QueryContentRecsBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContentRecsBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ContentRecsBlockWhereInput>;
};


export type QueryContentRecsElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContentRecsElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ContentRecsElementWhereInput>;
};


export type QueryDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<system_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DataWhereInput>;
};


export type QueryDefaultImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DefaultImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DefaultImageWhereInput>;
};


export type QueryDictionaryArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DictionaryOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DictionaryWhereInput>;
};


export type QueryDictionaryItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DictionaryItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DictionaryItemWhereInput>;
};


export type QueryGenericMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GenericMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<GenericMediaWhereInput>;
};


export type QueryHeaderBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeaderBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HeaderBlockWhereInput>;
};


export type QueryHeadingElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeadingElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HeadingElementWhereInput>;
};


export type QueryHeroBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeroBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HeroBlockWhereInput>;
};


export type QueryHomeArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HomeOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HomeWhereInput>;
};


export type QueryHomePageHeroBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HomePageHeroBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HomePageHeroBlockWhereInput>;
};


export type QueryHtmlBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HtmlBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HtmlBlockWhereInput>;
};


export type QueryImageElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageElementWhereInput>;
};


export type QueryImageMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageMediaWhereInput>;
};


export type QueryJustForTestingBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<JustForTestingBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<JustForTestingBlockWhereInput>;
};


export type QueryLandingPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LandingPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<LandingPageWhereInput>;
};


export type QueryLayoutContainerBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LayoutContainerBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<LayoutContainerBlockWhereInput>;
};


export type QueryMegaMenuGroupBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MegaMenuGroupBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<MegaMenuGroupBlockWhereInput>;
};


export type QueryMenuNavigationBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MenuNavigationBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<MenuNavigationBlockWhereInput>;
};


export type QueryNavigationMenuBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<NavigationMenuBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<NavigationMenuBlockWhereInput>;
};


export type QueryOdpEmbedBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OdpEmbedBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<OdpEmbedBlockWhereInput>;
};


export type QueryOfficeLocationArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OfficeLocationOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<OfficeLocationWhereInput>;
};


export type QueryPageSeoSettingsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PageSeoSettingsOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<PageSeoSettingsWhereInput>;
};


export type QueryParagraphElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ParagraphElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ParagraphElementWhereInput>;
};


export type QueryQuoteBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<QuoteBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<QuoteBlockWhereInput>;
};


export type QueryStandardPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<StandardPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<StandardPageWhereInput>;
};


export type QueryStartPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<StartPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<StartPageWhereInput>;
};


export type QuerySysContentFolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SysContentFolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryTestimonialElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TestimonialElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<TestimonialElementWhereInput>;
};


export type QueryTextBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TextBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<TextBlockWhereInput>;
};


export type QueryVideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<VideoWhereInput>;
};


export type QueryVideoElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<VideoElementWhereInput>;
};


export type QueryVideoMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<VideoMediaWhereInput>;
};


export type QueryWebsiteFooterArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<WebsiteFooterOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<WebsiteFooterWhereInput>;
};


export type Query_ComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ComponentWhereInput>;
};


export type Query_ContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ContentWhereInput>;
};


export type Query_ExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ExperienceWhereInput>;
};


export type Query_FolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_FolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_FolderWhereInput>;
};


export type Query_ImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ImageWhereInput>;
};


export type Query_MediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_MediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_MediaWhereInput>;
};


export type Query_PageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_PageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_PageWhereInput>;
};


export type Query_SectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_SectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_SectionWhereInput>;
};


export type Query_VideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_VideoWhereInput>;
};

export type QueryRef = {
  __typename?: 'QueryRef';
  ArticleGroupPage?: Maybe<ArticleGroupPageOutput>;
  ArticleListElement?: Maybe<ArticleListElementOutput>;
  ArticlePage?: Maybe<ArticlePageOutput>;
  BlankExperience?: Maybe<BlankExperienceOutput>;
  BlankSection?: Maybe<BlankSectionOutput>;
  BlogListingBlock?: Maybe<BlogListingBlockOutput>;
  BlogPostPage?: Maybe<BlogPostPageOutput>;
  ButtonBlock?: Maybe<ButtonBlockOutput>;
  CTAElement?: Maybe<CTAElementOutput>;
  CardBlock?: Maybe<CardBlockOutput>;
  CarouselBlock?: Maybe<CarouselBlockOutput>;
  ContentRecsBlock?: Maybe<ContentRecsBlockOutput>;
  ContentRecsElement?: Maybe<ContentRecsElementOutput>;
  Data?: Maybe<DataOutput>;
  DefaultImage?: Maybe<DefaultImageOutput>;
  Dictionary?: Maybe<DictionaryOutput>;
  DictionaryItem?: Maybe<DictionaryItemOutput>;
  GenericMedia?: Maybe<GenericMediaOutput>;
  HeaderBlock?: Maybe<HeaderBlockOutput>;
  HeadingElement?: Maybe<HeadingElementOutput>;
  HeroBlock?: Maybe<HeroBlockOutput>;
  Home?: Maybe<HomeOutput>;
  HomePageHeroBlock?: Maybe<HomePageHeroBlockOutput>;
  HtmlBlock?: Maybe<HtmlBlockOutput>;
  ImageElement?: Maybe<ImageElementOutput>;
  ImageMedia?: Maybe<ImageMediaOutput>;
  JustForTestingBlock?: Maybe<JustForTestingBlockOutput>;
  LandingPage?: Maybe<LandingPageOutput>;
  LayoutContainerBlock?: Maybe<LayoutContainerBlockOutput>;
  MegaMenuGroupBlock?: Maybe<MegaMenuGroupBlockOutput>;
  MenuNavigationBlock?: Maybe<MenuNavigationBlockOutput>;
  NavigationMenuBlock?: Maybe<NavigationMenuBlockOutput>;
  OdpEmbedBlock?: Maybe<OdpEmbedBlockOutput>;
  OfficeLocation?: Maybe<OfficeLocationOutput>;
  PageSeoSettings?: Maybe<PageSeoSettingsOutput>;
  ParagraphElement?: Maybe<ParagraphElementOutput>;
  QuoteBlock?: Maybe<QuoteBlockOutput>;
  StandardPage?: Maybe<StandardPageOutput>;
  StartPage?: Maybe<StartPageOutput>;
  SysContentFolder?: Maybe<SysContentFolderOutput>;
  TestimonialElement?: Maybe<TestimonialElementOutput>;
  TextBlock?: Maybe<TextBlockOutput>;
  Video?: Maybe<VideoOutput>;
  VideoElement?: Maybe<VideoElementOutput>;
  VideoMedia?: Maybe<VideoMediaOutput>;
  WebsiteFooter?: Maybe<WebsiteFooterOutput>;
  _Component?: Maybe<_ComponentOutput>;
  _Content?: Maybe<_ContentOutput>;
  _Experience?: Maybe<_ExperienceOutput>;
  _Folder?: Maybe<_FolderOutput>;
  _Image?: Maybe<_ImageOutput>;
  _Media?: Maybe<_MediaOutput>;
  _Page?: Maybe<_PageOutput>;
  _Section?: Maybe<_SectionOutput>;
  _Video?: Maybe<_VideoOutput>;
};


export type QueryRefArticleGroupPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticleGroupPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ArticleGroupPageWhereInput>;
};


export type QueryRefArticleListElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticleListElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ArticleListElementWhereInput>;
};


export type QueryRefArticlePageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticlePageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ArticlePageWhereInput>;
};


export type QueryRefBlankExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryRefBlankSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankSectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlankSectionWhereInput>;
};


export type QueryRefBlogListingBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlogListingBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlogListingBlockWhereInput>;
};


export type QueryRefBlogPostPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlogPostPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlogPostPageWhereInput>;
};


export type QueryRefButtonBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ButtonBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ButtonBlockWhereInput>;
};


export type QueryRefCTAElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CTAElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CTAElementWhereInput>;
};


export type QueryRefCardBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CardBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CardBlockWhereInput>;
};


export type QueryRefCarouselBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CarouselBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CarouselBlockWhereInput>;
};


export type QueryRefContentRecsBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContentRecsBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ContentRecsBlockWhereInput>;
};


export type QueryRefContentRecsElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContentRecsElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ContentRecsElementWhereInput>;
};


export type QueryRefDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<system_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DataWhereInput>;
};


export type QueryRefDefaultImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DefaultImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DefaultImageWhereInput>;
};


export type QueryRefDictionaryArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DictionaryOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DictionaryWhereInput>;
};


export type QueryRefDictionaryItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DictionaryItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DictionaryItemWhereInput>;
};


export type QueryRefGenericMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GenericMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<GenericMediaWhereInput>;
};


export type QueryRefHeaderBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeaderBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HeaderBlockWhereInput>;
};


export type QueryRefHeadingElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeadingElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HeadingElementWhereInput>;
};


export type QueryRefHeroBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeroBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HeroBlockWhereInput>;
};


export type QueryRefHomeArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HomeOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HomeWhereInput>;
};


export type QueryRefHomePageHeroBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HomePageHeroBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HomePageHeroBlockWhereInput>;
};


export type QueryRefHtmlBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HtmlBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HtmlBlockWhereInput>;
};


export type QueryRefImageElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageElementWhereInput>;
};


export type QueryRefImageMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageMediaWhereInput>;
};


export type QueryRefJustForTestingBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<JustForTestingBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<JustForTestingBlockWhereInput>;
};


export type QueryRefLandingPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LandingPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<LandingPageWhereInput>;
};


export type QueryRefLayoutContainerBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LayoutContainerBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<LayoutContainerBlockWhereInput>;
};


export type QueryRefMegaMenuGroupBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MegaMenuGroupBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<MegaMenuGroupBlockWhereInput>;
};


export type QueryRefMenuNavigationBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MenuNavigationBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<MenuNavigationBlockWhereInput>;
};


export type QueryRefNavigationMenuBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<NavigationMenuBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<NavigationMenuBlockWhereInput>;
};


export type QueryRefOdpEmbedBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OdpEmbedBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<OdpEmbedBlockWhereInput>;
};


export type QueryRefOfficeLocationArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OfficeLocationOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<OfficeLocationWhereInput>;
};


export type QueryRefPageSeoSettingsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PageSeoSettingsOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<PageSeoSettingsWhereInput>;
};


export type QueryRefParagraphElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ParagraphElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ParagraphElementWhereInput>;
};


export type QueryRefQuoteBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<QuoteBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<QuoteBlockWhereInput>;
};


export type QueryRefStandardPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<StandardPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<StandardPageWhereInput>;
};


export type QueryRefStartPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<StartPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<StartPageWhereInput>;
};


export type QueryRefSysContentFolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SysContentFolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryRefTestimonialElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TestimonialElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<TestimonialElementWhereInput>;
};


export type QueryRefTextBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TextBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<TextBlockWhereInput>;
};


export type QueryRefVideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<VideoWhereInput>;
};


export type QueryRefVideoElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<VideoElementWhereInput>;
};


export type QueryRefVideoMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<VideoMediaWhereInput>;
};


export type QueryRefWebsiteFooterArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<WebsiteFooterOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<WebsiteFooterWhereInput>;
};


export type QueryRef_ComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ComponentWhereInput>;
};


export type QueryRef_ContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ContentWhereInput>;
};


export type QueryRef_ExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ExperienceWhereInput>;
};


export type QueryRef_FolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_FolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_FolderWhereInput>;
};


export type QueryRef_ImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ImageWhereInput>;
};


export type QueryRef_MediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_MediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_MediaWhereInput>;
};


export type QueryRef_PageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_PageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_PageWhereInput>;
};


export type QueryRef_SectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_SectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_SectionWhereInput>;
};


export type QueryRef_VideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_VideoWhereInput>;
};

export type QuoteBlock = IData & _IComponent & _IContent & {
  __typename?: 'QuoteBlock';
  QuoteActive?: Maybe<Scalars['Boolean']['output']>;
  QuoteColor?: Maybe<Scalars['String']['output']>;
  QuoteProfileLocation?: Maybe<Scalars['String']['output']>;
  QuoteProfileName?: Maybe<Scalars['String']['output']>;
  QuoteProfilePicture?: Maybe<ContentReference>;
  QuoteText?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type QuoteBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type QuoteBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type QuoteBlockAutocomplete = {
  __typename?: 'QuoteBlockAutocomplete';
  QuoteProfilePicture?: Maybe<ContentReferenceAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type QuoteBlockFacet = {
  __typename?: 'QuoteBlockFacet';
  QuoteProfilePicture?: Maybe<ContentReferenceFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type QuoteBlockOrderByInput = {
  QuoteProfilePicture?: InputMaybe<ContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type QuoteBlockOutput = {
  __typename?: 'QuoteBlockOutput';
  autocomplete?: Maybe<QuoteBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<QuoteBlockFacet>;
  item?: Maybe<QuoteBlock>;
  items?: Maybe<Array<Maybe<QuoteBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type QuoteBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuoteBlockWhereInput = {
  QuoteProfilePicture?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<QuoteBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<QuoteBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<QuoteBlockWhereInput>>>;
};

export type RangeFacetsInput = {
  from?: InputMaybe<Scalars['Int']['input']>;
  to?: InputMaybe<Scalars['Int']['input']>;
};

export enum Ranking {
  BOOST_ONLY = 'BOOST_ONLY',
  DOC = 'DOC',
  RELEVANCE = 'RELEVANCE',
  SEMANTIC = 'SEMANTIC'
}

export type RichText = {
  __typename?: 'RichText';
  html?: Maybe<Scalars['String']['output']>;
  json?: Maybe<Scalars['JSON']['output']>;
};

export type RichTextAutocomplete = {
  __typename?: 'RichTextAutocomplete';
  html?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type RichTextAutocompletehtmlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type RichTextFacet = {
  __typename?: 'RichTextFacet';
  html?: Maybe<Array<Maybe<StringFacet>>>;
};


export type RichTextFacethtmlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type RichTextOrderByInput = {
  html?: InputMaybe<OrderBy>;
};

export type RichTextWhereInput = {
  html?: InputMaybe<StringFilterInput>;
};

export type SearchableStringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `contains` performs full-text search on a word or phrase. */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `match` performs full-text search on a word or phrase where less relevant items are also returned. The `match` operator is only supported for `searchable` fields. It will improve fulltext search by making it easier to match on words. More exact matches will be ranked higher, less exact matches will be ranked lower. The `match` operator is supported with synonyms and fuzzy search. */
  match?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type StandardPage = IData & _IContent & _IPage & {
  __typename?: 'StandardPage';
  MainBody?: Maybe<RichText>;
  SeoSettings?: Maybe<PageSeoSettingsProperty>;
  StandardPageHeading?: Maybe<Scalars['String']['output']>;
  StandardPromoImage?: Maybe<ContentReference>;
  StandardSubHeading?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type StandardPage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type StandardPage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type StandardPageAutocomplete = {
  __typename?: 'StandardPageAutocomplete';
  MainBody?: Maybe<RichTextAutocomplete>;
  SeoSettings?: Maybe<PageSeoSettingsPropertyAutocomplete>;
  StandardPromoImage?: Maybe<ContentReferenceAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type StandardPageFacet = {
  __typename?: 'StandardPageFacet';
  MainBody?: Maybe<RichTextFacet>;
  SeoSettings?: Maybe<PageSeoSettingsPropertyFacet>;
  StandardPromoImage?: Maybe<ContentReferenceFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type StandardPageOrderByInput = {
  MainBody?: InputMaybe<RichTextOrderByInput>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  StandardPromoImage?: InputMaybe<ContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type StandardPageOutput = {
  __typename?: 'StandardPageOutput';
  autocomplete?: Maybe<StandardPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<StandardPageFacet>;
  item?: Maybe<StandardPage>;
  items?: Maybe<Array<Maybe<StandardPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type StandardPageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StandardPageWhereInput = {
  MainBody?: InputMaybe<RichTextWhereInput>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  StandardPromoImage?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<StandardPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<StandardPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<StandardPageWhereInput>>>;
};

export type StartPage = IData & _IContent & _IPage & {
  __typename?: 'StartPage';
  FooterNavigationContentArea?: Maybe<Array<Maybe<_IContent>>>;
  FooterNavigationCopyrightText?: Maybe<Scalars['String']['output']>;
  FooterNavigationSubLinks?: Maybe<Array<Maybe<Link>>>;
  HomePageHeroContentArea?: Maybe<Array<Maybe<_IContent>>>;
  HomePageMainContentArea?: Maybe<Array<Maybe<_IContent>>>;
  MainNavigationContentArea?: Maybe<Array<Maybe<_IContent>>>;
  SeoSettings?: Maybe<PageSeoSettingsProperty>;
  SiteImageLogo?: Maybe<ContentReference>;
  UtilityNavigationContentArea?: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type StartPage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type StartPage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type StartPageAutocomplete = {
  __typename?: 'StartPageAutocomplete';
  FooterNavigationContentArea?: Maybe<_IContentAutocomplete>;
  FooterNavigationSubLinks?: Maybe<LinkAutocomplete>;
  HomePageHeroContentArea?: Maybe<_IContentAutocomplete>;
  HomePageMainContentArea?: Maybe<_IContentAutocomplete>;
  MainNavigationContentArea?: Maybe<_IContentAutocomplete>;
  SeoSettings?: Maybe<PageSeoSettingsPropertyAutocomplete>;
  SiteImageLogo?: Maybe<ContentReferenceAutocomplete>;
  UtilityNavigationContentArea?: Maybe<_IContentAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type StartPageFacet = {
  __typename?: 'StartPageFacet';
  FooterNavigationContentArea?: Maybe<_IContentFacet>;
  FooterNavigationSubLinks?: Maybe<LinkFacet>;
  HomePageHeroContentArea?: Maybe<_IContentFacet>;
  HomePageMainContentArea?: Maybe<_IContentFacet>;
  MainNavigationContentArea?: Maybe<_IContentFacet>;
  SeoSettings?: Maybe<PageSeoSettingsPropertyFacet>;
  SiteImageLogo?: Maybe<ContentReferenceFacet>;
  UtilityNavigationContentArea?: Maybe<_IContentFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type StartPageOrderByInput = {
  FooterNavigationContentArea?: InputMaybe<_IContentOrderByInput>;
  FooterNavigationSubLinks?: InputMaybe<LinkOrderByInput>;
  HomePageHeroContentArea?: InputMaybe<_IContentOrderByInput>;
  HomePageMainContentArea?: InputMaybe<_IContentOrderByInput>;
  MainNavigationContentArea?: InputMaybe<_IContentOrderByInput>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  SiteImageLogo?: InputMaybe<ContentReferenceOrderByInput>;
  UtilityNavigationContentArea?: InputMaybe<_IContentOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type StartPageOutput = {
  __typename?: 'StartPageOutput';
  autocomplete?: Maybe<StartPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<StartPageFacet>;
  item?: Maybe<StartPage>;
  items?: Maybe<Array<Maybe<StartPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type StartPageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StartPageWhereInput = {
  FooterNavigationContentArea?: InputMaybe<_IContentWhereInput>;
  FooterNavigationSubLinks?: InputMaybe<LinkWhereInput>;
  HomePageHeroContentArea?: InputMaybe<_IContentWhereInput>;
  HomePageMainContentArea?: InputMaybe<_IContentWhereInput>;
  MainNavigationContentArea?: InputMaybe<_IContentWhereInput>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  SiteImageLogo?: InputMaybe<ContentReferenceWhereInput>;
  UtilityNavigationContentArea?: InputMaybe<_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
};

export type StringFacet = {
  __typename?: 'StringFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type StringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `ends_with` retrieves matches that end with a certain value (suffix). */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export enum SynonymSlot {
  /** synonym slot 1 */
  ONE = 'ONE',
  /** synonym slot 2 */
  TWO = 'TWO'
}

export type SysContentFolder = IData & _IContent & _IFolder & {
  __typename?: 'SysContentFolder';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type SysContentFolder_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SysContentFolder_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type SysContentFolderAutocomplete = {
  __typename?: 'SysContentFolderAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type SysContentFolderFacet = {
  __typename?: 'SysContentFolderFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type SysContentFolderOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type SysContentFolderOutput = {
  __typename?: 'SysContentFolderOutput';
  autocomplete?: Maybe<SysContentFolderAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<SysContentFolderFacet>;
  item?: Maybe<SysContentFolder>;
  items?: Maybe<Array<Maybe<SysContentFolder>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type SysContentFolderOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SysContentFolderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
};

export type TestimonialElement = IData & _IComponent & _IContent & {
  __typename?: 'TestimonialElement';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  customerImage?: Maybe<ContentReference>;
  customerLocation?: Maybe<Scalars['String']['output']>;
  customerName?: Maybe<Scalars['String']['output']>;
  referenceText?: Maybe<RichText>;
  referenceTitle?: Maybe<Scalars['String']['output']>;
};


export type TestimonialElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type TestimonialElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type TestimonialElementAutocomplete = {
  __typename?: 'TestimonialElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  customerImage?: Maybe<ContentReferenceAutocomplete>;
  referenceText?: Maybe<RichTextAutocomplete>;
};

export type TestimonialElementFacet = {
  __typename?: 'TestimonialElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  customerImage?: Maybe<ContentReferenceFacet>;
  referenceText?: Maybe<RichTextFacet>;
};

export type TestimonialElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  customerImage?: InputMaybe<ContentReferenceOrderByInput>;
  referenceText?: InputMaybe<RichTextOrderByInput>;
};

export type TestimonialElementOutput = {
  __typename?: 'TestimonialElementOutput';
  autocomplete?: Maybe<TestimonialElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<TestimonialElementFacet>;
  item?: Maybe<TestimonialElement>;
  items?: Maybe<Array<Maybe<TestimonialElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type TestimonialElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  customerImage?: InputMaybe<ContentReferenceWhereInput>;
  referenceText?: InputMaybe<RichTextWhereInput>;
};

export type TextBlock = IData & _IComponent & _IContent & {
  __typename?: 'TextBlock';
  TextBlockDescription?: Maybe<RichText>;
  TextBlockHeading?: Maybe<Scalars['String']['output']>;
  TextBlockHeadingSize?: Maybe<Scalars['String']['output']>;
  TextBlockOverline?: Maybe<Scalars['String']['output']>;
  TextBlockWidth?: Maybe<Scalars['String']['output']>;
  TextCenter?: Maybe<Scalars['Boolean']['output']>;
  TextClassName?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type TextBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type TextBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type TextBlockAutocomplete = {
  __typename?: 'TextBlockAutocomplete';
  TextBlockDescription?: Maybe<RichTextAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type TextBlockFacet = {
  __typename?: 'TextBlockFacet';
  TextBlockDescription?: Maybe<RichTextFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type TextBlockOrderByInput = {
  TextBlockDescription?: InputMaybe<RichTextOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type TextBlockOutput = {
  __typename?: 'TextBlockOutput';
  autocomplete?: Maybe<TextBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<TextBlockFacet>;
  item?: Maybe<TextBlock>;
  items?: Maybe<Array<Maybe<TextBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type TextBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TextBlockWhereInput = {
  TextBlockDescription?: InputMaybe<RichTextWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
};

export type Video = IData & _IContent & _IMedia & _IVideo & {
  __typename?: 'Video';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Video_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Video_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type VideoAutocomplete = {
  __typename?: 'VideoAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type VideoElement = IData & _IComponent & _IContent & {
  __typename?: 'VideoElement';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  placeholder?: Maybe<ContentReference>;
  title?: Maybe<Scalars['String']['output']>;
  video?: Maybe<ContentReference>;
};


export type VideoElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type VideoElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type VideoElementAutocomplete = {
  __typename?: 'VideoElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  placeholder?: Maybe<ContentReferenceAutocomplete>;
  video?: Maybe<ContentReferenceAutocomplete>;
};

export type VideoElementFacet = {
  __typename?: 'VideoElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  placeholder?: Maybe<ContentReferenceFacet>;
  video?: Maybe<ContentReferenceFacet>;
};

export type VideoElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  placeholder?: InputMaybe<ContentReferenceOrderByInput>;
  video?: InputMaybe<ContentReferenceOrderByInput>;
};

export type VideoElementOutput = {
  __typename?: 'VideoElementOutput';
  autocomplete?: Maybe<VideoElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<VideoElementFacet>;
  item?: Maybe<VideoElement>;
  items?: Maybe<Array<Maybe<VideoElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type VideoElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<VideoElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<VideoElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<VideoElementWhereInput>>>;
  placeholder?: InputMaybe<ContentReferenceWhereInput>;
  video?: InputMaybe<ContentReferenceWhereInput>;
};

export type VideoFacet = {
  __typename?: 'VideoFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type VideoMedia = IData & _IContent & _IMedia & _IVideo & {
  __typename?: 'VideoMedia';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type VideoMedia_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type VideoMedia_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type VideoMediaAutocomplete = {
  __typename?: 'VideoMediaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type VideoMediaFacet = {
  __typename?: 'VideoMediaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type VideoMediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type VideoMediaOutput = {
  __typename?: 'VideoMediaOutput';
  autocomplete?: Maybe<VideoMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<VideoMediaFacet>;
  item?: Maybe<VideoMedia>;
  items?: Maybe<Array<Maybe<VideoMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type VideoMediaOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
};

export type VideoOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type VideoOutput = {
  __typename?: 'VideoOutput';
  autocomplete?: Maybe<VideoAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<VideoFacet>;
  item?: Maybe<Video>;
  items?: Maybe<Array<Maybe<Video>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type VideoOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<VideoWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<VideoWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<VideoWhereInput>>>;
};

export type WebsiteFooter = IData & _IComponent & _IContent & {
  __typename?: 'WebsiteFooter';
  FooterFirstLinkList?: Maybe<NavigationMenuBlockProperty>;
  FooterLegalLinks?: Maybe<Array<Maybe<Link>>>;
  FooterLogo?: Maybe<ContentReference>;
  FooterLogoAltText?: Maybe<Scalars['String']['output']>;
  FooterMainOfficeLocation?: Maybe<Array<Maybe<_IContent>>>;
  FooterSecondLinkList?: Maybe<NavigationMenuBlockProperty>;
  FooterThirdLinkList?: Maybe<NavigationMenuBlockProperty>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type WebsiteFooter_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type WebsiteFooter_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type WebsiteFooterAutocomplete = {
  __typename?: 'WebsiteFooterAutocomplete';
  FooterLegalLinks?: Maybe<LinkAutocomplete>;
  FooterLogo?: Maybe<ContentReferenceAutocomplete>;
  FooterMainOfficeLocation?: Maybe<_IContentAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type WebsiteFooterFacet = {
  __typename?: 'WebsiteFooterFacet';
  FooterFirstLinkList?: Maybe<NavigationMenuBlockPropertyFacet>;
  FooterLegalLinks?: Maybe<LinkFacet>;
  FooterLogo?: Maybe<ContentReferenceFacet>;
  FooterMainOfficeLocation?: Maybe<_IContentFacet>;
  FooterSecondLinkList?: Maybe<NavigationMenuBlockPropertyFacet>;
  FooterThirdLinkList?: Maybe<NavigationMenuBlockPropertyFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type WebsiteFooterOrderByInput = {
  FooterFirstLinkList?: InputMaybe<NavigationMenuBlockPropertyOrderByInput>;
  FooterLegalLinks?: InputMaybe<LinkOrderByInput>;
  FooterLogo?: InputMaybe<ContentReferenceOrderByInput>;
  FooterMainOfficeLocation?: InputMaybe<_IContentOrderByInput>;
  FooterSecondLinkList?: InputMaybe<NavigationMenuBlockPropertyOrderByInput>;
  FooterThirdLinkList?: InputMaybe<NavigationMenuBlockPropertyOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type WebsiteFooterOutput = {
  __typename?: 'WebsiteFooterOutput';
  autocomplete?: Maybe<WebsiteFooterAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<WebsiteFooterFacet>;
  item?: Maybe<WebsiteFooter>;
  items?: Maybe<Array<Maybe<WebsiteFooter>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type WebsiteFooterOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WebsiteFooterWhereInput = {
  FooterFirstLinkList?: InputMaybe<NavigationMenuBlockPropertyWhereInput>;
  FooterLegalLinks?: InputMaybe<LinkWhereInput>;
  FooterLogo?: InputMaybe<ContentReferenceWhereInput>;
  FooterMainOfficeLocation?: InputMaybe<_IContentWhereInput>;
  FooterSecondLinkList?: InputMaybe<NavigationMenuBlockPropertyWhereInput>;
  FooterThirdLinkList?: InputMaybe<NavigationMenuBlockPropertyWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<WebsiteFooterWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<WebsiteFooterWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<WebsiteFooterWhereInput>>>;
};

export type _Component = IData & _IComponent & _IContent & {
  __typename?: '_Component';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Component_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Component_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ComponentAutocomplete = {
  __typename?: '_ComponentAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ComponentFacet = {
  __typename?: '_ComponentFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ComponentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ComponentOutput = {
  __typename?: '_ComponentOutput';
  autocomplete?: Maybe<_ComponentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ComponentFacet>;
  item?: Maybe<_IComponent>;
  items?: Maybe<Array<Maybe<_IComponent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ComponentOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ComponentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
};

export type _Content = IData & _IContent & {
  __typename?: '_Content';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Content_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Content_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ContentAutocomplete = {
  __typename?: '_ContentAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ContentFacet = {
  __typename?: '_ContentFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ContentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ContentOutput = {
  __typename?: '_ContentOutput';
  autocomplete?: Maybe<_ContentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ContentFacet>;
  item?: Maybe<_IContent>;
  items?: Maybe<Array<Maybe<_IContent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ContentOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ContentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
};

export type _Experience = IData & _IContent & _IExperience & _IPage & {
  __typename?: '_Experience';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _Experience_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Experience_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ExperienceAutocomplete = {
  __typename?: '_ExperienceAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _ExperienceFacet = {
  __typename?: '_ExperienceFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type _ExperienceOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _ExperienceOutput = {
  __typename?: '_ExperienceOutput';
  autocomplete?: Maybe<_ExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ExperienceFacet>;
  item?: Maybe<_IExperience>;
  items?: Maybe<Array<Maybe<_IExperience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ExperienceOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ExperienceWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Folder = IData & _IContent & _IFolder & {
  __typename?: '_Folder';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Folder_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Folder_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _FolderAutocomplete = {
  __typename?: '_FolderAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _FolderFacet = {
  __typename?: '_FolderFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _FolderOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _FolderOutput = {
  __typename?: '_FolderOutput';
  autocomplete?: Maybe<_FolderAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_FolderFacet>;
  item?: Maybe<_IFolder>;
  items?: Maybe<Array<Maybe<_IFolder>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _FolderOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _FolderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
};

export type _IComponent = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IComponent_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IComponent_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IContent = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IContent_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IContent_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IContentAutocomplete = {
  __typename?: '_IContentAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _IContentFacet = {
  __typename?: '_IContentFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _IContentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _IContentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
};

export type _IExperience = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _IExperience_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IExperience_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IFolder = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IFolder_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IFolder_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IImage = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IImage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IImage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IMedia = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IMedia_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IMedia_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IPage = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IPage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IPage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ISection = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _ISection_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _ISection_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IVideo = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IVideo_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IVideo_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _Image = IData & _IContent & _IImage & _IMedia & {
  __typename?: '_Image';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Image_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Image_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ImageAutocomplete = {
  __typename?: '_ImageAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ImageFacet = {
  __typename?: '_ImageFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ImageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ImageOutput = {
  __typename?: '_ImageOutput';
  autocomplete?: Maybe<_ImageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ImageFacet>;
  item?: Maybe<_IImage>;
  items?: Maybe<Array<Maybe<_IImage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ImageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ImageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
};

export type _Media = IData & _IContent & _IMedia & {
  __typename?: '_Media';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Media_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Media_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _MediaAutocomplete = {
  __typename?: '_MediaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _MediaFacet = {
  __typename?: '_MediaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _MediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _MediaOutput = {
  __typename?: '_MediaOutput';
  autocomplete?: Maybe<_MediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_MediaFacet>;
  item?: Maybe<_IMedia>;
  items?: Maybe<Array<Maybe<_IMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _MediaOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _MediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
};

export type _Page = IData & _IContent & _IPage & {
  __typename?: '_Page';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Page_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Page_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _PageAutocomplete = {
  __typename?: '_PageAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _PageFacet = {
  __typename?: '_PageFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _PageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _PageOutput = {
  __typename?: '_PageOutput';
  autocomplete?: Maybe<_PageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_PageFacet>;
  item?: Maybe<_IPage>;
  items?: Maybe<Array<Maybe<_IPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _PageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _PageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
};

export type _Section = IData & _IComponent & _IContent & _ISection & {
  __typename?: '_Section';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _Section_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Section_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _SectionAutocomplete = {
  __typename?: '_SectionAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _SectionFacet = {
  __typename?: '_SectionFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type _SectionOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _SectionOutput = {
  __typename?: '_SectionOutput';
  autocomplete?: Maybe<_SectionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_SectionFacet>;
  item?: Maybe<_ISection>;
  items?: Maybe<Array<Maybe<_ISection>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _SectionOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _SectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Video = IData & _IContent & _IMedia & _IVideo & {
  __typename?: '_Video';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Video_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Video_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _VideoAutocomplete = {
  __typename?: '_VideoAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _VideoFacet = {
  __typename?: '_VideoFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _VideoOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _VideoOutput = {
  __typename?: '_VideoOutput';
  autocomplete?: Maybe<_VideoAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_VideoFacet>;
  item?: Maybe<_IVideo>;
  items?: Maybe<Array<Maybe<_IVideo>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _VideoOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _VideoWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
};

export enum system_Locales {
  ALL = 'ALL',
  NEUTRAL = 'NEUTRAL'
}

type IContentData_ArticleGroupPage_Fragment = { __typename?: 'ArticleGroupPage', _type: 'ArticleGroupPage', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ArticleGroupPage_Fragment' };

type IContentData_ArticleListElement_Fragment = { __typename?: 'ArticleListElement', _type: 'ArticleListElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ArticleListElement_Fragment' };

type IContentData_ArticlePage_Fragment = { __typename?: 'ArticlePage', _type: 'ArticlePage', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ArticlePage_Fragment' };

type IContentData_BlankExperience_Fragment = { __typename?: 'BlankExperience', _type: 'BlankExperience', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_BlankExperience_Fragment' };

type IContentData_BlankSection_Fragment = { __typename?: 'BlankSection', _type: 'BlankSection', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_BlankSection_Fragment' };

type IContentData_BlogListingBlock_Fragment = { __typename?: 'BlogListingBlock', _type: 'BlogListingBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_BlogListingBlock_Fragment' };

type IContentData_BlogPostPage_Fragment = { __typename?: 'BlogPostPage', _type: 'BlogPostPage', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_BlogPostPage_Fragment' };

type IContentData_ButtonBlock_Fragment = { __typename?: 'ButtonBlock', _type: 'ButtonBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ButtonBlock_Fragment' };

type IContentData_CTAElement_Fragment = { __typename?: 'CTAElement', _type: 'CTAElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_CTAElement_Fragment' };

type IContentData_CardBlock_Fragment = { __typename?: 'CardBlock', _type: 'CardBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_CardBlock_Fragment' };

type IContentData_CarouselBlock_Fragment = { __typename?: 'CarouselBlock', _type: 'CarouselBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_CarouselBlock_Fragment' };

type IContentData_ContentRecsBlock_Fragment = { __typename?: 'ContentRecsBlock', _type: 'ContentRecsBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ContentRecsBlock_Fragment' };

type IContentData_ContentRecsElement_Fragment = { __typename?: 'ContentRecsElement', _type: 'ContentRecsElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ContentRecsElement_Fragment' };

type IContentData_DefaultImage_Fragment = { __typename?: 'DefaultImage', _type: 'DefaultImage', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_DefaultImage_Fragment' };

type IContentData_Dictionary_Fragment = { __typename?: 'Dictionary', _type: 'Dictionary', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_Dictionary_Fragment' };

type IContentData_DictionaryItem_Fragment = { __typename?: 'DictionaryItem', _type: 'DictionaryItem', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_DictionaryItem_Fragment' };

type IContentData_GenericMedia_Fragment = { __typename?: 'GenericMedia', _type: 'GenericMedia', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_GenericMedia_Fragment' };

type IContentData_HeaderBlock_Fragment = { __typename?: 'HeaderBlock', _type: 'HeaderBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_HeaderBlock_Fragment' };

type IContentData_HeadingElement_Fragment = { __typename?: 'HeadingElement', _type: 'HeadingElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_HeadingElement_Fragment' };

type IContentData_HeroBlock_Fragment = { __typename?: 'HeroBlock', _type: 'HeroBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_HeroBlock_Fragment' };

type IContentData_Home_Fragment = { __typename?: 'Home', _type: 'Home', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_Home_Fragment' };

type IContentData_HomePageHeroBlock_Fragment = { __typename?: 'HomePageHeroBlock', _type: 'HomePageHeroBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_HomePageHeroBlock_Fragment' };

type IContentData_HtmlBlock_Fragment = { __typename?: 'HtmlBlock', _type: 'HtmlBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_HtmlBlock_Fragment' };

type IContentData_ImageElement_Fragment = { __typename?: 'ImageElement', _type: 'ImageElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ImageElement_Fragment' };

type IContentData_ImageMedia_Fragment = { __typename?: 'ImageMedia', _type: 'ImageMedia', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ImageMedia_Fragment' };

type IContentData_JustForTestingBlock_Fragment = { __typename?: 'JustForTestingBlock', _type: 'JustForTestingBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_JustForTestingBlock_Fragment' };

type IContentData_LandingPage_Fragment = { __typename?: 'LandingPage', _type: 'LandingPage', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_LandingPage_Fragment' };

type IContentData_LayoutContainerBlock_Fragment = { __typename?: 'LayoutContainerBlock', _type: 'LayoutContainerBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_LayoutContainerBlock_Fragment' };

type IContentData_MegaMenuGroupBlock_Fragment = { __typename?: 'MegaMenuGroupBlock', _type: 'MegaMenuGroupBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_MegaMenuGroupBlock_Fragment' };

type IContentData_MenuNavigationBlock_Fragment = { __typename?: 'MenuNavigationBlock', _type: 'MenuNavigationBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_MenuNavigationBlock_Fragment' };

type IContentData_NavigationMenuBlock_Fragment = { __typename?: 'NavigationMenuBlock', _type: 'NavigationMenuBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_NavigationMenuBlock_Fragment' };

type IContentData_OdpEmbedBlock_Fragment = { __typename?: 'OdpEmbedBlock', _type: 'OdpEmbedBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_OdpEmbedBlock_Fragment' };

type IContentData_OfficeLocation_Fragment = { __typename?: 'OfficeLocation', _type: 'OfficeLocation', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_OfficeLocation_Fragment' };

type IContentData_PageSeoSettings_Fragment = { __typename?: 'PageSeoSettings', _type: 'PageSeoSettings', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_PageSeoSettings_Fragment' };

type IContentData_ParagraphElement_Fragment = { __typename?: 'ParagraphElement', _type: 'ParagraphElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ParagraphElement_Fragment' };

type IContentData_QuoteBlock_Fragment = { __typename?: 'QuoteBlock', _type: 'QuoteBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_QuoteBlock_Fragment' };

type IContentData_StandardPage_Fragment = { __typename?: 'StandardPage', _type: 'StandardPage', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_StandardPage_Fragment' };

type IContentData_StartPage_Fragment = { __typename?: 'StartPage', _type: 'StartPage', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_StartPage_Fragment' };

type IContentData_SysContentFolder_Fragment = { __typename?: 'SysContentFolder', _type: 'SysContentFolder', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_SysContentFolder_Fragment' };

type IContentData_TestimonialElement_Fragment = { __typename?: 'TestimonialElement', _type: 'TestimonialElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_TestimonialElement_Fragment' };

type IContentData_TextBlock_Fragment = { __typename?: 'TextBlock', _type: 'TextBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_TextBlock_Fragment' };

type IContentData_Video_Fragment = { __typename?: 'Video', _type: 'Video', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_Video_Fragment' };

type IContentData_VideoElement_Fragment = { __typename?: 'VideoElement', _type: 'VideoElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_VideoElement_Fragment' };

type IContentData_VideoMedia_Fragment = { __typename?: 'VideoMedia', _type: 'VideoMedia', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_VideoMedia_Fragment' };

type IContentData_WebsiteFooter_Fragment = { __typename?: 'WebsiteFooter', _type: 'WebsiteFooter', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_WebsiteFooter_Fragment' };

type IContentData__Component_Fragment = { __typename?: '_Component', _type: '_Component', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Component_Fragment' };

type IContentData__Content_Fragment = { __typename?: '_Content', _type: '_Content', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Content_Fragment' };

type IContentData__Experience_Fragment = { __typename?: '_Experience', _type: '_Experience', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Experience_Fragment' };

type IContentData__Folder_Fragment = { __typename?: '_Folder', _type: '_Folder', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Folder_Fragment' };

type IContentData__Image_Fragment = { __typename?: '_Image', _type: '_Image', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Image_Fragment' };

type IContentData__Media_Fragment = { __typename?: '_Media', _type: '_Media', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Media_Fragment' };

type IContentData__Page_Fragment = { __typename?: '_Page', _type: '_Page', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Page_Fragment' };

type IContentData__Section_Fragment = { __typename?: '_Section', _type: '_Section', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Section_Fragment' };

type IContentData__Video_Fragment = { __typename?: '_Video', _type: '_Video', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Video_Fragment' };

export type IContentDataFragment = IContentData_ArticleGroupPage_Fragment | IContentData_ArticleListElement_Fragment | IContentData_ArticlePage_Fragment | IContentData_BlankExperience_Fragment | IContentData_BlankSection_Fragment | IContentData_BlogListingBlock_Fragment | IContentData_BlogPostPage_Fragment | IContentData_ButtonBlock_Fragment | IContentData_CTAElement_Fragment | IContentData_CardBlock_Fragment | IContentData_CarouselBlock_Fragment | IContentData_ContentRecsBlock_Fragment | IContentData_ContentRecsElement_Fragment | IContentData_DefaultImage_Fragment | IContentData_Dictionary_Fragment | IContentData_DictionaryItem_Fragment | IContentData_GenericMedia_Fragment | IContentData_HeaderBlock_Fragment | IContentData_HeadingElement_Fragment | IContentData_HeroBlock_Fragment | IContentData_Home_Fragment | IContentData_HomePageHeroBlock_Fragment | IContentData_HtmlBlock_Fragment | IContentData_ImageElement_Fragment | IContentData_ImageMedia_Fragment | IContentData_JustForTestingBlock_Fragment | IContentData_LandingPage_Fragment | IContentData_LayoutContainerBlock_Fragment | IContentData_MegaMenuGroupBlock_Fragment | IContentData_MenuNavigationBlock_Fragment | IContentData_NavigationMenuBlock_Fragment | IContentData_OdpEmbedBlock_Fragment | IContentData_OfficeLocation_Fragment | IContentData_PageSeoSettings_Fragment | IContentData_ParagraphElement_Fragment | IContentData_QuoteBlock_Fragment | IContentData_StandardPage_Fragment | IContentData_StartPage_Fragment | IContentData_SysContentFolder_Fragment | IContentData_TestimonialElement_Fragment | IContentData_TextBlock_Fragment | IContentData_Video_Fragment | IContentData_VideoElement_Fragment | IContentData_VideoMedia_Fragment | IContentData_WebsiteFooter_Fragment | IContentData__Component_Fragment | IContentData__Content_Fragment | IContentData__Experience_Fragment | IContentData__Folder_Fragment | IContentData__Image_Fragment | IContentData__Media_Fragment | IContentData__Page_Fragment | IContentData__Section_Fragment | IContentData__Video_Fragment;

type IElementData_ArticleListElement_Fragment = { __typename?: 'ArticleListElement', _type: 'ArticleListElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ArticleListElement_Fragment' };

type IElementData_BlankSection_Fragment = { __typename?: 'BlankSection', _type: 'BlankSection', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_BlankSection_Fragment' };

type IElementData_BlogListingBlock_Fragment = { __typename?: 'BlogListingBlock', _type: 'BlogListingBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_BlogListingBlock_Fragment' };

type IElementData_ButtonBlock_Fragment = { __typename?: 'ButtonBlock', _type: 'ButtonBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ButtonBlock_Fragment' };

type IElementData_CTAElement_Fragment = { __typename?: 'CTAElement', _type: 'CTAElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_CTAElement_Fragment' };

type IElementData_CardBlock_Fragment = { __typename?: 'CardBlock', _type: 'CardBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_CardBlock_Fragment' };

type IElementData_CarouselBlock_Fragment = { __typename?: 'CarouselBlock', _type: 'CarouselBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_CarouselBlock_Fragment' };

type IElementData_ContentRecsBlock_Fragment = { __typename?: 'ContentRecsBlock', _type: 'ContentRecsBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ContentRecsBlock_Fragment' };

type IElementData_ContentRecsElement_Fragment = { __typename?: 'ContentRecsElement', _type: 'ContentRecsElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ContentRecsElement_Fragment' };

type IElementData_Dictionary_Fragment = { __typename?: 'Dictionary', _type: 'Dictionary', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_Dictionary_Fragment' };

type IElementData_DictionaryItem_Fragment = { __typename?: 'DictionaryItem', _type: 'DictionaryItem', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_DictionaryItem_Fragment' };

type IElementData_HeaderBlock_Fragment = { __typename?: 'HeaderBlock', _type: 'HeaderBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_HeaderBlock_Fragment' };

type IElementData_HeadingElement_Fragment = { __typename?: 'HeadingElement', _type: 'HeadingElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_HeadingElement_Fragment' };

type IElementData_HeroBlock_Fragment = { __typename?: 'HeroBlock', _type: 'HeroBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_HeroBlock_Fragment' };

type IElementData_HomePageHeroBlock_Fragment = { __typename?: 'HomePageHeroBlock', _type: 'HomePageHeroBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_HomePageHeroBlock_Fragment' };

type IElementData_HtmlBlock_Fragment = { __typename?: 'HtmlBlock', _type: 'HtmlBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_HtmlBlock_Fragment' };

type IElementData_ImageElement_Fragment = { __typename?: 'ImageElement', _type: 'ImageElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ImageElement_Fragment' };

type IElementData_JustForTestingBlock_Fragment = { __typename?: 'JustForTestingBlock', _type: 'JustForTestingBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_JustForTestingBlock_Fragment' };

type IElementData_LayoutContainerBlock_Fragment = { __typename?: 'LayoutContainerBlock', _type: 'LayoutContainerBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_LayoutContainerBlock_Fragment' };

type IElementData_MegaMenuGroupBlock_Fragment = { __typename?: 'MegaMenuGroupBlock', _type: 'MegaMenuGroupBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_MegaMenuGroupBlock_Fragment' };

type IElementData_MenuNavigationBlock_Fragment = { __typename?: 'MenuNavigationBlock', _type: 'MenuNavigationBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_MenuNavigationBlock_Fragment' };

type IElementData_NavigationMenuBlock_Fragment = { __typename?: 'NavigationMenuBlock', _type: 'NavigationMenuBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_NavigationMenuBlock_Fragment' };

type IElementData_OdpEmbedBlock_Fragment = { __typename?: 'OdpEmbedBlock', _type: 'OdpEmbedBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_OdpEmbedBlock_Fragment' };

type IElementData_OfficeLocation_Fragment = { __typename?: 'OfficeLocation', _type: 'OfficeLocation', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_OfficeLocation_Fragment' };

type IElementData_PageSeoSettings_Fragment = { __typename?: 'PageSeoSettings', _type: 'PageSeoSettings', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_PageSeoSettings_Fragment' };

type IElementData_ParagraphElement_Fragment = { __typename?: 'ParagraphElement', _type: 'ParagraphElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ParagraphElement_Fragment' };

type IElementData_QuoteBlock_Fragment = { __typename?: 'QuoteBlock', _type: 'QuoteBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_QuoteBlock_Fragment' };

type IElementData_TestimonialElement_Fragment = { __typename?: 'TestimonialElement', _type: 'TestimonialElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_TestimonialElement_Fragment' };

type IElementData_TextBlock_Fragment = { __typename?: 'TextBlock', _type: 'TextBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_TextBlock_Fragment' };

type IElementData_VideoElement_Fragment = { __typename?: 'VideoElement', _type: 'VideoElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_VideoElement_Fragment' };

type IElementData_WebsiteFooter_Fragment = { __typename?: 'WebsiteFooter', _type: 'WebsiteFooter', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_WebsiteFooter_Fragment' };

type IElementData__Component_Fragment = { __typename?: '_Component', _type: '_Component', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData__Component_Fragment' };

type IElementData__Section_Fragment = { __typename?: '_Section', _type: '_Section', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData__Section_Fragment' };

export type IElementDataFragment = IElementData_ArticleListElement_Fragment | IElementData_BlankSection_Fragment | IElementData_BlogListingBlock_Fragment | IElementData_ButtonBlock_Fragment | IElementData_CTAElement_Fragment | IElementData_CardBlock_Fragment | IElementData_CarouselBlock_Fragment | IElementData_ContentRecsBlock_Fragment | IElementData_ContentRecsElement_Fragment | IElementData_Dictionary_Fragment | IElementData_DictionaryItem_Fragment | IElementData_HeaderBlock_Fragment | IElementData_HeadingElement_Fragment | IElementData_HeroBlock_Fragment | IElementData_HomePageHeroBlock_Fragment | IElementData_HtmlBlock_Fragment | IElementData_ImageElement_Fragment | IElementData_JustForTestingBlock_Fragment | IElementData_LayoutContainerBlock_Fragment | IElementData_MegaMenuGroupBlock_Fragment | IElementData_MenuNavigationBlock_Fragment | IElementData_NavigationMenuBlock_Fragment | IElementData_OdpEmbedBlock_Fragment | IElementData_OfficeLocation_Fragment | IElementData_PageSeoSettings_Fragment | IElementData_ParagraphElement_Fragment | IElementData_QuoteBlock_Fragment | IElementData_TestimonialElement_Fragment | IElementData_TextBlock_Fragment | IElementData_VideoElement_Fragment | IElementData_WebsiteFooter_Fragment | IElementData__Component_Fragment | IElementData__Section_Fragment;

type ElementData_ArticleListElement_Fragment = (
  { __typename?: 'ArticleListElement' }
  & { ' $fragmentRefs'?: { 'IElementData_ArticleListElement_Fragment': IElementData_ArticleListElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_ArticleListElement_Fragment' };

type ElementData_BlankSection_Fragment = (
  { __typename?: 'BlankSection' }
  & { ' $fragmentRefs'?: { 'IElementData_BlankSection_Fragment': IElementData_BlankSection_Fragment } }
) & { ' $fragmentName'?: 'ElementData_BlankSection_Fragment' };

type ElementData_BlogListingBlock_Fragment = (
  { __typename?: 'BlogListingBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_BlogListingBlock_Fragment': IElementData_BlogListingBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_BlogListingBlock_Fragment' };

type ElementData_ButtonBlock_Fragment = (
  { __typename?: 'ButtonBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_ButtonBlock_Fragment': IElementData_ButtonBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_ButtonBlock_Fragment' };

type ElementData_CTAElement_Fragment = (
  { __typename?: 'CTAElement' }
  & { ' $fragmentRefs'?: { 'IElementData_CTAElement_Fragment': IElementData_CTAElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_CTAElement_Fragment' };

type ElementData_CardBlock_Fragment = (
  { __typename?: 'CardBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_CardBlock_Fragment': IElementData_CardBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_CardBlock_Fragment' };

type ElementData_CarouselBlock_Fragment = (
  { __typename?: 'CarouselBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_CarouselBlock_Fragment': IElementData_CarouselBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_CarouselBlock_Fragment' };

type ElementData_ContentRecsBlock_Fragment = (
  { __typename?: 'ContentRecsBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_ContentRecsBlock_Fragment': IElementData_ContentRecsBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_ContentRecsBlock_Fragment' };

type ElementData_ContentRecsElement_Fragment = (
  { __typename?: 'ContentRecsElement' }
  & { ' $fragmentRefs'?: { 'IElementData_ContentRecsElement_Fragment': IElementData_ContentRecsElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_ContentRecsElement_Fragment' };

type ElementData_Dictionary_Fragment = (
  { __typename?: 'Dictionary' }
  & { ' $fragmentRefs'?: { 'IElementData_Dictionary_Fragment': IElementData_Dictionary_Fragment } }
) & { ' $fragmentName'?: 'ElementData_Dictionary_Fragment' };

type ElementData_DictionaryItem_Fragment = (
  { __typename?: 'DictionaryItem' }
  & { ' $fragmentRefs'?: { 'IElementData_DictionaryItem_Fragment': IElementData_DictionaryItem_Fragment } }
) & { ' $fragmentName'?: 'ElementData_DictionaryItem_Fragment' };

type ElementData_HeaderBlock_Fragment = (
  { __typename?: 'HeaderBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_HeaderBlock_Fragment': IElementData_HeaderBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_HeaderBlock_Fragment' };

type ElementData_HeadingElement_Fragment = (
  { __typename?: 'HeadingElement' }
  & { ' $fragmentRefs'?: { 'IElementData_HeadingElement_Fragment': IElementData_HeadingElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_HeadingElement_Fragment' };

type ElementData_HeroBlock_Fragment = (
  { __typename?: 'HeroBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_HeroBlock_Fragment': IElementData_HeroBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_HeroBlock_Fragment' };

type ElementData_HomePageHeroBlock_Fragment = (
  { __typename?: 'HomePageHeroBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_HomePageHeroBlock_Fragment': IElementData_HomePageHeroBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_HomePageHeroBlock_Fragment' };

type ElementData_HtmlBlock_Fragment = (
  { __typename?: 'HtmlBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_HtmlBlock_Fragment': IElementData_HtmlBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_HtmlBlock_Fragment' };

type ElementData_ImageElement_Fragment = (
  { __typename?: 'ImageElement' }
  & { ' $fragmentRefs'?: { 'IElementData_ImageElement_Fragment': IElementData_ImageElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_ImageElement_Fragment' };

type ElementData_JustForTestingBlock_Fragment = (
  { __typename?: 'JustForTestingBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_JustForTestingBlock_Fragment': IElementData_JustForTestingBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_JustForTestingBlock_Fragment' };

type ElementData_LayoutContainerBlock_Fragment = (
  { __typename?: 'LayoutContainerBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_LayoutContainerBlock_Fragment': IElementData_LayoutContainerBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_LayoutContainerBlock_Fragment' };

type ElementData_MegaMenuGroupBlock_Fragment = (
  { __typename?: 'MegaMenuGroupBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_MegaMenuGroupBlock_Fragment': IElementData_MegaMenuGroupBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_MegaMenuGroupBlock_Fragment' };

type ElementData_MenuNavigationBlock_Fragment = (
  { __typename?: 'MenuNavigationBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_MenuNavigationBlock_Fragment': IElementData_MenuNavigationBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_MenuNavigationBlock_Fragment' };

type ElementData_NavigationMenuBlock_Fragment = (
  { __typename?: 'NavigationMenuBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_NavigationMenuBlock_Fragment': IElementData_NavigationMenuBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_NavigationMenuBlock_Fragment' };

type ElementData_OdpEmbedBlock_Fragment = (
  { __typename?: 'OdpEmbedBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_OdpEmbedBlock_Fragment': IElementData_OdpEmbedBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_OdpEmbedBlock_Fragment' };

type ElementData_OfficeLocation_Fragment = (
  { __typename?: 'OfficeLocation' }
  & { ' $fragmentRefs'?: { 'IElementData_OfficeLocation_Fragment': IElementData_OfficeLocation_Fragment } }
) & { ' $fragmentName'?: 'ElementData_OfficeLocation_Fragment' };

type ElementData_PageSeoSettings_Fragment = (
  { __typename?: 'PageSeoSettings' }
  & { ' $fragmentRefs'?: { 'IElementData_PageSeoSettings_Fragment': IElementData_PageSeoSettings_Fragment } }
) & { ' $fragmentName'?: 'ElementData_PageSeoSettings_Fragment' };

type ElementData_ParagraphElement_Fragment = (
  { __typename?: 'ParagraphElement' }
  & { ' $fragmentRefs'?: { 'IElementData_ParagraphElement_Fragment': IElementData_ParagraphElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_ParagraphElement_Fragment' };

type ElementData_QuoteBlock_Fragment = (
  { __typename?: 'QuoteBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_QuoteBlock_Fragment': IElementData_QuoteBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_QuoteBlock_Fragment' };

type ElementData_TestimonialElement_Fragment = (
  { __typename?: 'TestimonialElement' }
  & { ' $fragmentRefs'?: { 'IElementData_TestimonialElement_Fragment': IElementData_TestimonialElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_TestimonialElement_Fragment' };

type ElementData_TextBlock_Fragment = (
  { __typename?: 'TextBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_TextBlock_Fragment': IElementData_TextBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_TextBlock_Fragment' };

type ElementData_VideoElement_Fragment = (
  { __typename?: 'VideoElement' }
  & { ' $fragmentRefs'?: { 'IElementData_VideoElement_Fragment': IElementData_VideoElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_VideoElement_Fragment' };

type ElementData_WebsiteFooter_Fragment = (
  { __typename?: 'WebsiteFooter' }
  & { ' $fragmentRefs'?: { 'IElementData_WebsiteFooter_Fragment': IElementData_WebsiteFooter_Fragment } }
) & { ' $fragmentName'?: 'ElementData_WebsiteFooter_Fragment' };

type ElementData__Component_Fragment = (
  { __typename?: '_Component' }
  & { ' $fragmentRefs'?: { 'IElementData__Component_Fragment': IElementData__Component_Fragment } }
) & { ' $fragmentName'?: 'ElementData__Component_Fragment' };

type ElementData__Section_Fragment = (
  { __typename?: '_Section' }
  & { ' $fragmentRefs'?: { 'IElementData__Section_Fragment': IElementData__Section_Fragment } }
) & { ' $fragmentName'?: 'ElementData__Section_Fragment' };

export type ElementDataFragment = ElementData_ArticleListElement_Fragment | ElementData_BlankSection_Fragment | ElementData_BlogListingBlock_Fragment | ElementData_ButtonBlock_Fragment | ElementData_CTAElement_Fragment | ElementData_CardBlock_Fragment | ElementData_CarouselBlock_Fragment | ElementData_ContentRecsBlock_Fragment | ElementData_ContentRecsElement_Fragment | ElementData_Dictionary_Fragment | ElementData_DictionaryItem_Fragment | ElementData_HeaderBlock_Fragment | ElementData_HeadingElement_Fragment | ElementData_HeroBlock_Fragment | ElementData_HomePageHeroBlock_Fragment | ElementData_HtmlBlock_Fragment | ElementData_ImageElement_Fragment | ElementData_JustForTestingBlock_Fragment | ElementData_LayoutContainerBlock_Fragment | ElementData_MegaMenuGroupBlock_Fragment | ElementData_MenuNavigationBlock_Fragment | ElementData_NavigationMenuBlock_Fragment | ElementData_OdpEmbedBlock_Fragment | ElementData_OfficeLocation_Fragment | ElementData_PageSeoSettings_Fragment | ElementData_ParagraphElement_Fragment | ElementData_QuoteBlock_Fragment | ElementData_TestimonialElement_Fragment | ElementData_TextBlock_Fragment | ElementData_VideoElement_Fragment | ElementData_WebsiteFooter_Fragment | ElementData__Component_Fragment | ElementData__Section_Fragment;

type BlockData_ArticleListElement_Fragment = (
  { __typename?: 'ArticleListElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticleListElement_Fragment': IContentData_ArticleListElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ArticleListElement_Fragment' };

type BlockData_BlankSection_Fragment = (
  { __typename?: 'BlankSection' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
) & { ' $fragmentName'?: 'BlockData_BlankSection_Fragment' };

type BlockData_BlogListingBlock_Fragment = (
  { __typename?: 'BlogListingBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_BlogListingBlock_Fragment': IContentData_BlogListingBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_BlogListingBlock_Fragment' };

type BlockData_ButtonBlock_Fragment = (
  { __typename?: 'ButtonBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ButtonBlock_Fragment' };

type BlockData_CTAElement_Fragment = (
  { __typename?: 'CTAElement' }
  & { ' $fragmentRefs'?: { 'IContentData_CTAElement_Fragment': IContentData_CTAElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_CTAElement_Fragment' };

type BlockData_CardBlock_Fragment = (
  { __typename?: 'CardBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_CardBlock_Fragment' };

type BlockData_CarouselBlock_Fragment = (
  { __typename?: 'CarouselBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CarouselBlock_Fragment': IContentData_CarouselBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_CarouselBlock_Fragment' };

type BlockData_ContentRecsBlock_Fragment = (
  { __typename?: 'ContentRecsBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ContentRecsBlock_Fragment': IContentData_ContentRecsBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ContentRecsBlock_Fragment' };

type BlockData_ContentRecsElement_Fragment = (
  { __typename?: 'ContentRecsElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ContentRecsElement_Fragment': IContentData_ContentRecsElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ContentRecsElement_Fragment' };

type BlockData_Dictionary_Fragment = (
  { __typename?: 'Dictionary' }
  & { ' $fragmentRefs'?: { 'IContentData_Dictionary_Fragment': IContentData_Dictionary_Fragment } }
) & { ' $fragmentName'?: 'BlockData_Dictionary_Fragment' };

type BlockData_DictionaryItem_Fragment = (
  { __typename?: 'DictionaryItem' }
  & { ' $fragmentRefs'?: { 'IContentData_DictionaryItem_Fragment': IContentData_DictionaryItem_Fragment } }
) & { ' $fragmentName'?: 'BlockData_DictionaryItem_Fragment' };

type BlockData_HeaderBlock_Fragment = (
  { __typename?: 'HeaderBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeaderBlock_Fragment': IContentData_HeaderBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_HeaderBlock_Fragment' };

type BlockData_HeadingElement_Fragment = (
  { __typename?: 'HeadingElement' }
  & { ' $fragmentRefs'?: { 'IContentData_HeadingElement_Fragment': IContentData_HeadingElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_HeadingElement_Fragment' };

type BlockData_HeroBlock_Fragment = (
  { __typename?: 'HeroBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_HeroBlock_Fragment' };

type BlockData_HomePageHeroBlock_Fragment = (
  { __typename?: 'HomePageHeroBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HomePageHeroBlock_Fragment': IContentData_HomePageHeroBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_HomePageHeroBlock_Fragment' };

type BlockData_HtmlBlock_Fragment = (
  { __typename?: 'HtmlBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HtmlBlock_Fragment': IContentData_HtmlBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_HtmlBlock_Fragment' };

type BlockData_ImageElement_Fragment = (
  { __typename?: 'ImageElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageElement_Fragment': IContentData_ImageElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ImageElement_Fragment' };

type BlockData_JustForTestingBlock_Fragment = (
  { __typename?: 'JustForTestingBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_JustForTestingBlock_Fragment': IContentData_JustForTestingBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_JustForTestingBlock_Fragment' };

type BlockData_LayoutContainerBlock_Fragment = (
  { __typename?: 'LayoutContainerBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_LayoutContainerBlock_Fragment': IContentData_LayoutContainerBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_LayoutContainerBlock_Fragment' };

type BlockData_MegaMenuGroupBlock_Fragment = (
  { __typename?: 'MegaMenuGroupBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_MegaMenuGroupBlock_Fragment' };

type BlockData_MenuNavigationBlock_Fragment = (
  { __typename?: 'MenuNavigationBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MenuNavigationBlock_Fragment': IContentData_MenuNavigationBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_MenuNavigationBlock_Fragment' };

type BlockData_NavigationMenuBlock_Fragment = (
  { __typename?: 'NavigationMenuBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_NavigationMenuBlock_Fragment': IContentData_NavigationMenuBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_NavigationMenuBlock_Fragment' };

type BlockData_OdpEmbedBlock_Fragment = (
  { __typename?: 'OdpEmbedBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_OdpEmbedBlock_Fragment': IContentData_OdpEmbedBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_OdpEmbedBlock_Fragment' };

type BlockData_OfficeLocation_Fragment = (
  { __typename?: 'OfficeLocation' }
  & { ' $fragmentRefs'?: { 'IContentData_OfficeLocation_Fragment': IContentData_OfficeLocation_Fragment } }
) & { ' $fragmentName'?: 'BlockData_OfficeLocation_Fragment' };

type BlockData_PageSeoSettings_Fragment = (
  { __typename?: 'PageSeoSettings' }
  & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
) & { ' $fragmentName'?: 'BlockData_PageSeoSettings_Fragment' };

type BlockData_ParagraphElement_Fragment = (
  { __typename?: 'ParagraphElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ParagraphElement_Fragment': IContentData_ParagraphElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ParagraphElement_Fragment' };

type BlockData_QuoteBlock_Fragment = (
  { __typename?: 'QuoteBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_QuoteBlock_Fragment': IContentData_QuoteBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_QuoteBlock_Fragment' };

type BlockData_TestimonialElement_Fragment = (
  { __typename?: 'TestimonialElement' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialElement_Fragment': IContentData_TestimonialElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_TestimonialElement_Fragment' };

type BlockData_TextBlock_Fragment = (
  { __typename?: 'TextBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_TextBlock_Fragment' };

type BlockData_VideoElement_Fragment = (
  { __typename?: 'VideoElement' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoElement_Fragment': IContentData_VideoElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_VideoElement_Fragment' };

type BlockData_WebsiteFooter_Fragment = (
  { __typename?: 'WebsiteFooter' }
  & { ' $fragmentRefs'?: { 'IContentData_WebsiteFooter_Fragment': IContentData_WebsiteFooter_Fragment } }
) & { ' $fragmentName'?: 'BlockData_WebsiteFooter_Fragment' };

type BlockData__Component_Fragment = (
  { __typename?: '_Component' }
  & { ' $fragmentRefs'?: { 'IContentData__Component_Fragment': IContentData__Component_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Component_Fragment' };

type BlockData__Section_Fragment = (
  { __typename?: '_Section' }
  & { ' $fragmentRefs'?: { 'IContentData__Section_Fragment': IContentData__Section_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Section_Fragment' };

export type BlockDataFragment = BlockData_ArticleListElement_Fragment | BlockData_BlankSection_Fragment | BlockData_BlogListingBlock_Fragment | BlockData_ButtonBlock_Fragment | BlockData_CTAElement_Fragment | BlockData_CardBlock_Fragment | BlockData_CarouselBlock_Fragment | BlockData_ContentRecsBlock_Fragment | BlockData_ContentRecsElement_Fragment | BlockData_Dictionary_Fragment | BlockData_DictionaryItem_Fragment | BlockData_HeaderBlock_Fragment | BlockData_HeadingElement_Fragment | BlockData_HeroBlock_Fragment | BlockData_HomePageHeroBlock_Fragment | BlockData_HtmlBlock_Fragment | BlockData_ImageElement_Fragment | BlockData_JustForTestingBlock_Fragment | BlockData_LayoutContainerBlock_Fragment | BlockData_MegaMenuGroupBlock_Fragment | BlockData_MenuNavigationBlock_Fragment | BlockData_NavigationMenuBlock_Fragment | BlockData_OdpEmbedBlock_Fragment | BlockData_OfficeLocation_Fragment | BlockData_PageSeoSettings_Fragment | BlockData_ParagraphElement_Fragment | BlockData_QuoteBlock_Fragment | BlockData_TestimonialElement_Fragment | BlockData_TextBlock_Fragment | BlockData_VideoElement_Fragment | BlockData_WebsiteFooter_Fragment | BlockData__Component_Fragment | BlockData__Section_Fragment;

type PageData_ArticleGroupPage_Fragment = (
  { __typename?: 'ArticleGroupPage' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticleGroupPage_Fragment': IContentData_ArticleGroupPage_Fragment } }
) & { ' $fragmentName'?: 'PageData_ArticleGroupPage_Fragment' };

type PageData_ArticleListElement_Fragment = (
  { __typename?: 'ArticleListElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticleListElement_Fragment': IContentData_ArticleListElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_ArticleListElement_Fragment' };

type PageData_ArticlePage_Fragment = (
  { __typename?: 'ArticlePage' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticlePage_Fragment': IContentData_ArticlePage_Fragment } }
) & { ' $fragmentName'?: 'PageData_ArticlePage_Fragment' };

type PageData_BlankExperience_Fragment = (
  { __typename?: 'BlankExperience' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment } }
) & { ' $fragmentName'?: 'PageData_BlankExperience_Fragment' };

type PageData_BlankSection_Fragment = (
  { __typename?: 'BlankSection' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
) & { ' $fragmentName'?: 'PageData_BlankSection_Fragment' };

type PageData_BlogListingBlock_Fragment = (
  { __typename?: 'BlogListingBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_BlogListingBlock_Fragment': IContentData_BlogListingBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_BlogListingBlock_Fragment' };

type PageData_BlogPostPage_Fragment = (
  { __typename?: 'BlogPostPage' }
  & { ' $fragmentRefs'?: { 'IContentData_BlogPostPage_Fragment': IContentData_BlogPostPage_Fragment } }
) & { ' $fragmentName'?: 'PageData_BlogPostPage_Fragment' };

type PageData_ButtonBlock_Fragment = (
  { __typename?: 'ButtonBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_ButtonBlock_Fragment' };

type PageData_CTAElement_Fragment = (
  { __typename?: 'CTAElement' }
  & { ' $fragmentRefs'?: { 'IContentData_CTAElement_Fragment': IContentData_CTAElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_CTAElement_Fragment' };

type PageData_CardBlock_Fragment = (
  { __typename?: 'CardBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_CardBlock_Fragment' };

type PageData_CarouselBlock_Fragment = (
  { __typename?: 'CarouselBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CarouselBlock_Fragment': IContentData_CarouselBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_CarouselBlock_Fragment' };

type PageData_ContentRecsBlock_Fragment = (
  { __typename?: 'ContentRecsBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ContentRecsBlock_Fragment': IContentData_ContentRecsBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_ContentRecsBlock_Fragment' };

type PageData_ContentRecsElement_Fragment = (
  { __typename?: 'ContentRecsElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ContentRecsElement_Fragment': IContentData_ContentRecsElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_ContentRecsElement_Fragment' };

type PageData_DefaultImage_Fragment = (
  { __typename?: 'DefaultImage' }
  & { ' $fragmentRefs'?: { 'IContentData_DefaultImage_Fragment': IContentData_DefaultImage_Fragment } }
) & { ' $fragmentName'?: 'PageData_DefaultImage_Fragment' };

type PageData_Dictionary_Fragment = (
  { __typename?: 'Dictionary' }
  & { ' $fragmentRefs'?: { 'IContentData_Dictionary_Fragment': IContentData_Dictionary_Fragment } }
) & { ' $fragmentName'?: 'PageData_Dictionary_Fragment' };

type PageData_DictionaryItem_Fragment = (
  { __typename?: 'DictionaryItem' }
  & { ' $fragmentRefs'?: { 'IContentData_DictionaryItem_Fragment': IContentData_DictionaryItem_Fragment } }
) & { ' $fragmentName'?: 'PageData_DictionaryItem_Fragment' };

type PageData_GenericMedia_Fragment = (
  { __typename?: 'GenericMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_GenericMedia_Fragment': IContentData_GenericMedia_Fragment } }
) & { ' $fragmentName'?: 'PageData_GenericMedia_Fragment' };

type PageData_HeaderBlock_Fragment = (
  { __typename?: 'HeaderBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeaderBlock_Fragment': IContentData_HeaderBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_HeaderBlock_Fragment' };

type PageData_HeadingElement_Fragment = (
  { __typename?: 'HeadingElement' }
  & { ' $fragmentRefs'?: { 'IContentData_HeadingElement_Fragment': IContentData_HeadingElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_HeadingElement_Fragment' };

type PageData_HeroBlock_Fragment = (
  { __typename?: 'HeroBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_HeroBlock_Fragment' };

type PageData_Home_Fragment = (
  { __typename?: 'Home' }
  & { ' $fragmentRefs'?: { 'IContentData_Home_Fragment': IContentData_Home_Fragment } }
) & { ' $fragmentName'?: 'PageData_Home_Fragment' };

type PageData_HomePageHeroBlock_Fragment = (
  { __typename?: 'HomePageHeroBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HomePageHeroBlock_Fragment': IContentData_HomePageHeroBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_HomePageHeroBlock_Fragment' };

type PageData_HtmlBlock_Fragment = (
  { __typename?: 'HtmlBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HtmlBlock_Fragment': IContentData_HtmlBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_HtmlBlock_Fragment' };

type PageData_ImageElement_Fragment = (
  { __typename?: 'ImageElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageElement_Fragment': IContentData_ImageElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_ImageElement_Fragment' };

type PageData_ImageMedia_Fragment = (
  { __typename?: 'ImageMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment } }
) & { ' $fragmentName'?: 'PageData_ImageMedia_Fragment' };

type PageData_JustForTestingBlock_Fragment = (
  { __typename?: 'JustForTestingBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_JustForTestingBlock_Fragment': IContentData_JustForTestingBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_JustForTestingBlock_Fragment' };

type PageData_LandingPage_Fragment = (
  { __typename?: 'LandingPage' }
  & { ' $fragmentRefs'?: { 'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment } }
) & { ' $fragmentName'?: 'PageData_LandingPage_Fragment' };

type PageData_LayoutContainerBlock_Fragment = (
  { __typename?: 'LayoutContainerBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_LayoutContainerBlock_Fragment': IContentData_LayoutContainerBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_LayoutContainerBlock_Fragment' };

type PageData_MegaMenuGroupBlock_Fragment = (
  { __typename?: 'MegaMenuGroupBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_MegaMenuGroupBlock_Fragment' };

type PageData_MenuNavigationBlock_Fragment = (
  { __typename?: 'MenuNavigationBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MenuNavigationBlock_Fragment': IContentData_MenuNavigationBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_MenuNavigationBlock_Fragment' };

type PageData_NavigationMenuBlock_Fragment = (
  { __typename?: 'NavigationMenuBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_NavigationMenuBlock_Fragment': IContentData_NavigationMenuBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_NavigationMenuBlock_Fragment' };

type PageData_OdpEmbedBlock_Fragment = (
  { __typename?: 'OdpEmbedBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_OdpEmbedBlock_Fragment': IContentData_OdpEmbedBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_OdpEmbedBlock_Fragment' };

type PageData_OfficeLocation_Fragment = (
  { __typename?: 'OfficeLocation' }
  & { ' $fragmentRefs'?: { 'IContentData_OfficeLocation_Fragment': IContentData_OfficeLocation_Fragment } }
) & { ' $fragmentName'?: 'PageData_OfficeLocation_Fragment' };

type PageData_PageSeoSettings_Fragment = (
  { __typename?: 'PageSeoSettings' }
  & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
) & { ' $fragmentName'?: 'PageData_PageSeoSettings_Fragment' };

type PageData_ParagraphElement_Fragment = (
  { __typename?: 'ParagraphElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ParagraphElement_Fragment': IContentData_ParagraphElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_ParagraphElement_Fragment' };

type PageData_QuoteBlock_Fragment = (
  { __typename?: 'QuoteBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_QuoteBlock_Fragment': IContentData_QuoteBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_QuoteBlock_Fragment' };

type PageData_StandardPage_Fragment = (
  { __typename?: 'StandardPage' }
  & { ' $fragmentRefs'?: { 'IContentData_StandardPage_Fragment': IContentData_StandardPage_Fragment } }
) & { ' $fragmentName'?: 'PageData_StandardPage_Fragment' };

type PageData_StartPage_Fragment = (
  { __typename?: 'StartPage' }
  & { ' $fragmentRefs'?: { 'IContentData_StartPage_Fragment': IContentData_StartPage_Fragment } }
) & { ' $fragmentName'?: 'PageData_StartPage_Fragment' };

type PageData_SysContentFolder_Fragment = (
  { __typename?: 'SysContentFolder' }
  & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment } }
) & { ' $fragmentName'?: 'PageData_SysContentFolder_Fragment' };

type PageData_TestimonialElement_Fragment = (
  { __typename?: 'TestimonialElement' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialElement_Fragment': IContentData_TestimonialElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_TestimonialElement_Fragment' };

type PageData_TextBlock_Fragment = (
  { __typename?: 'TextBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_TextBlock_Fragment' };

type PageData_Video_Fragment = (
  { __typename?: 'Video' }
  & { ' $fragmentRefs'?: { 'IContentData_Video_Fragment': IContentData_Video_Fragment } }
) & { ' $fragmentName'?: 'PageData_Video_Fragment' };

type PageData_VideoElement_Fragment = (
  { __typename?: 'VideoElement' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoElement_Fragment': IContentData_VideoElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_VideoElement_Fragment' };

type PageData_VideoMedia_Fragment = (
  { __typename?: 'VideoMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment } }
) & { ' $fragmentName'?: 'PageData_VideoMedia_Fragment' };

type PageData_WebsiteFooter_Fragment = (
  { __typename?: 'WebsiteFooter' }
  & { ' $fragmentRefs'?: { 'IContentData_WebsiteFooter_Fragment': IContentData_WebsiteFooter_Fragment } }
) & { ' $fragmentName'?: 'PageData_WebsiteFooter_Fragment' };

type PageData__Component_Fragment = (
  { __typename?: '_Component' }
  & { ' $fragmentRefs'?: { 'IContentData__Component_Fragment': IContentData__Component_Fragment } }
) & { ' $fragmentName'?: 'PageData__Component_Fragment' };

type PageData__Content_Fragment = (
  { __typename?: '_Content' }
  & { ' $fragmentRefs'?: { 'IContentData__Content_Fragment': IContentData__Content_Fragment } }
) & { ' $fragmentName'?: 'PageData__Content_Fragment' };

type PageData__Experience_Fragment = (
  { __typename?: '_Experience' }
  & { ' $fragmentRefs'?: { 'IContentData__Experience_Fragment': IContentData__Experience_Fragment } }
) & { ' $fragmentName'?: 'PageData__Experience_Fragment' };

type PageData__Folder_Fragment = (
  { __typename?: '_Folder' }
  & { ' $fragmentRefs'?: { 'IContentData__Folder_Fragment': IContentData__Folder_Fragment } }
) & { ' $fragmentName'?: 'PageData__Folder_Fragment' };

type PageData__Image_Fragment = (
  { __typename?: '_Image' }
  & { ' $fragmentRefs'?: { 'IContentData__Image_Fragment': IContentData__Image_Fragment } }
) & { ' $fragmentName'?: 'PageData__Image_Fragment' };

type PageData__Media_Fragment = (
  { __typename?: '_Media' }
  & { ' $fragmentRefs'?: { 'IContentData__Media_Fragment': IContentData__Media_Fragment } }
) & { ' $fragmentName'?: 'PageData__Media_Fragment' };

type PageData__Page_Fragment = (
  { __typename?: '_Page' }
  & { ' $fragmentRefs'?: { 'IContentData__Page_Fragment': IContentData__Page_Fragment } }
) & { ' $fragmentName'?: 'PageData__Page_Fragment' };

type PageData__Section_Fragment = (
  { __typename?: '_Section' }
  & { ' $fragmentRefs'?: { 'IContentData__Section_Fragment': IContentData__Section_Fragment } }
) & { ' $fragmentName'?: 'PageData__Section_Fragment' };

type PageData__Video_Fragment = (
  { __typename?: '_Video' }
  & { ' $fragmentRefs'?: { 'IContentData__Video_Fragment': IContentData__Video_Fragment } }
) & { ' $fragmentName'?: 'PageData__Video_Fragment' };

export type PageDataFragment = PageData_ArticleGroupPage_Fragment | PageData_ArticleListElement_Fragment | PageData_ArticlePage_Fragment | PageData_BlankExperience_Fragment | PageData_BlankSection_Fragment | PageData_BlogListingBlock_Fragment | PageData_BlogPostPage_Fragment | PageData_ButtonBlock_Fragment | PageData_CTAElement_Fragment | PageData_CardBlock_Fragment | PageData_CarouselBlock_Fragment | PageData_ContentRecsBlock_Fragment | PageData_ContentRecsElement_Fragment | PageData_DefaultImage_Fragment | PageData_Dictionary_Fragment | PageData_DictionaryItem_Fragment | PageData_GenericMedia_Fragment | PageData_HeaderBlock_Fragment | PageData_HeadingElement_Fragment | PageData_HeroBlock_Fragment | PageData_Home_Fragment | PageData_HomePageHeroBlock_Fragment | PageData_HtmlBlock_Fragment | PageData_ImageElement_Fragment | PageData_ImageMedia_Fragment | PageData_JustForTestingBlock_Fragment | PageData_LandingPage_Fragment | PageData_LayoutContainerBlock_Fragment | PageData_MegaMenuGroupBlock_Fragment | PageData_MenuNavigationBlock_Fragment | PageData_NavigationMenuBlock_Fragment | PageData_OdpEmbedBlock_Fragment | PageData_OfficeLocation_Fragment | PageData_PageSeoSettings_Fragment | PageData_ParagraphElement_Fragment | PageData_QuoteBlock_Fragment | PageData_StandardPage_Fragment | PageData_StartPage_Fragment | PageData_SysContentFolder_Fragment | PageData_TestimonialElement_Fragment | PageData_TextBlock_Fragment | PageData_Video_Fragment | PageData_VideoElement_Fragment | PageData_VideoMedia_Fragment | PageData_WebsiteFooter_Fragment | PageData__Component_Fragment | PageData__Content_Fragment | PageData__Experience_Fragment | PageData__Folder_Fragment | PageData__Image_Fragment | PageData__Media_Fragment | PageData__Page_Fragment | PageData__Section_Fragment | PageData__Video_Fragment;

export type LinkDataFragment = { __typename?: 'ContentUrl', base?: string | null, default?: string | null } & { ' $fragmentName'?: 'LinkDataFragment' };

export type ReferenceDataFragment = { __typename?: 'ContentReference', key?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'ReferenceDataFragment' };

type IContentInfo_ContentMetadata_Fragment = { __typename?: 'ContentMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_ContentMetadata_Fragment' };

type IContentInfo_InstanceMetadata_Fragment = { __typename?: 'InstanceMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_InstanceMetadata_Fragment' };

type IContentInfo_ItemMetadata_Fragment = { __typename?: 'ItemMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_ItemMetadata_Fragment' };

type IContentInfo_MediaMetadata_Fragment = { __typename?: 'MediaMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_MediaMetadata_Fragment' };

export type IContentInfoFragment = IContentInfo_ContentMetadata_Fragment | IContentInfo_InstanceMetadata_Fragment | IContentInfo_ItemMetadata_Fragment | IContentInfo_MediaMetadata_Fragment;

type IContentListItem_ArticleGroupPage_Fragment = (
  { __typename?: 'ArticleGroupPage' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticleGroupPage_Fragment': IContentData_ArticleGroupPage_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ArticleGroupPage_Fragment' };

type IContentListItem_ArticleListElement_Fragment = (
  { __typename?: 'ArticleListElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticleListElement_Fragment': IContentData_ArticleListElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ArticleListElement_Fragment' };

type IContentListItem_ArticlePage_Fragment = (
  { __typename?: 'ArticlePage' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticlePage_Fragment': IContentData_ArticlePage_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ArticlePage_Fragment' };

type IContentListItem_BlankExperience_Fragment = (
  { __typename?: 'BlankExperience' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_BlankExperience_Fragment' };

type IContentListItem_BlankSection_Fragment = (
  { __typename?: 'BlankSection' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_BlankSection_Fragment' };

type IContentListItem_BlogListingBlock_Fragment = (
  { __typename?: 'BlogListingBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_BlogListingBlock_Fragment': IContentData_BlogListingBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_BlogListingBlock_Fragment' };

type IContentListItem_BlogPostPage_Fragment = (
  { __typename?: 'BlogPostPage' }
  & { ' $fragmentRefs'?: { 'IContentData_BlogPostPage_Fragment': IContentData_BlogPostPage_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_BlogPostPage_Fragment' };

type IContentListItem_ButtonBlock_Fragment = (
  { __typename?: 'ButtonBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ButtonBlock_Fragment' };

type IContentListItem_CTAElement_Fragment = (
  { __typename?: 'CTAElement' }
  & { ' $fragmentRefs'?: { 'IContentData_CTAElement_Fragment': IContentData_CTAElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_CTAElement_Fragment' };

type IContentListItem_CardBlock_Fragment = (
  { __typename?: 'CardBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_CardBlock_Fragment' };

type IContentListItem_CarouselBlock_Fragment = (
  { __typename?: 'CarouselBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CarouselBlock_Fragment': IContentData_CarouselBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_CarouselBlock_Fragment' };

type IContentListItem_ContentRecsBlock_Fragment = (
  { __typename?: 'ContentRecsBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ContentRecsBlock_Fragment': IContentData_ContentRecsBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ContentRecsBlock_Fragment' };

type IContentListItem_ContentRecsElement_Fragment = (
  { __typename?: 'ContentRecsElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ContentRecsElement_Fragment': IContentData_ContentRecsElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ContentRecsElement_Fragment' };

type IContentListItem_DefaultImage_Fragment = (
  { __typename?: 'DefaultImage' }
  & { ' $fragmentRefs'?: { 'IContentData_DefaultImage_Fragment': IContentData_DefaultImage_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_DefaultImage_Fragment' };

type IContentListItem_Dictionary_Fragment = (
  { __typename?: 'Dictionary' }
  & { ' $fragmentRefs'?: { 'IContentData_Dictionary_Fragment': IContentData_Dictionary_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_Dictionary_Fragment' };

type IContentListItem_DictionaryItem_Fragment = (
  { __typename?: 'DictionaryItem' }
  & { ' $fragmentRefs'?: { 'IContentData_DictionaryItem_Fragment': IContentData_DictionaryItem_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_DictionaryItem_Fragment' };

type IContentListItem_GenericMedia_Fragment = (
  { __typename?: 'GenericMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_GenericMedia_Fragment': IContentData_GenericMedia_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_GenericMedia_Fragment' };

type IContentListItem_HeaderBlock_Fragment = (
  { __typename?: 'HeaderBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeaderBlock_Fragment': IContentData_HeaderBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_HeaderBlock_Fragment' };

type IContentListItem_HeadingElement_Fragment = (
  { __typename?: 'HeadingElement' }
  & { ' $fragmentRefs'?: { 'IContentData_HeadingElement_Fragment': IContentData_HeadingElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_HeadingElement_Fragment' };

type IContentListItem_HeroBlock_Fragment = (
  { __typename?: 'HeroBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_HeroBlock_Fragment' };

type IContentListItem_Home_Fragment = (
  { __typename?: 'Home' }
  & { ' $fragmentRefs'?: { 'IContentData_Home_Fragment': IContentData_Home_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_Home_Fragment' };

type IContentListItem_HomePageHeroBlock_Fragment = (
  { __typename?: 'HomePageHeroBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HomePageHeroBlock_Fragment': IContentData_HomePageHeroBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_HomePageHeroBlock_Fragment' };

type IContentListItem_HtmlBlock_Fragment = (
  { __typename?: 'HtmlBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HtmlBlock_Fragment': IContentData_HtmlBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_HtmlBlock_Fragment' };

type IContentListItem_ImageElement_Fragment = (
  { __typename?: 'ImageElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageElement_Fragment': IContentData_ImageElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ImageElement_Fragment' };

type IContentListItem_ImageMedia_Fragment = (
  { __typename?: 'ImageMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ImageMedia_Fragment' };

type IContentListItem_JustForTestingBlock_Fragment = (
  { __typename?: 'JustForTestingBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_JustForTestingBlock_Fragment': IContentData_JustForTestingBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_JustForTestingBlock_Fragment' };

type IContentListItem_LandingPage_Fragment = (
  { __typename?: 'LandingPage' }
  & { ' $fragmentRefs'?: { 'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_LandingPage_Fragment' };

type IContentListItem_LayoutContainerBlock_Fragment = (
  { __typename?: 'LayoutContainerBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_LayoutContainerBlock_Fragment': IContentData_LayoutContainerBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_LayoutContainerBlock_Fragment' };

type IContentListItem_MegaMenuGroupBlock_Fragment = (
  { __typename?: 'MegaMenuGroupBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_MegaMenuGroupBlock_Fragment' };

type IContentListItem_MenuNavigationBlock_Fragment = (
  { __typename?: 'MenuNavigationBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MenuNavigationBlock_Fragment': IContentData_MenuNavigationBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_MenuNavigationBlock_Fragment' };

type IContentListItem_NavigationMenuBlock_Fragment = (
  { __typename?: 'NavigationMenuBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_NavigationMenuBlock_Fragment': IContentData_NavigationMenuBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_NavigationMenuBlock_Fragment' };

type IContentListItem_OdpEmbedBlock_Fragment = (
  { __typename?: 'OdpEmbedBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_OdpEmbedBlock_Fragment': IContentData_OdpEmbedBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_OdpEmbedBlock_Fragment' };

type IContentListItem_OfficeLocation_Fragment = (
  { __typename?: 'OfficeLocation' }
  & { ' $fragmentRefs'?: { 'IContentData_OfficeLocation_Fragment': IContentData_OfficeLocation_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_OfficeLocation_Fragment' };

type IContentListItem_PageSeoSettings_Fragment = (
  { __typename?: 'PageSeoSettings' }
  & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_PageSeoSettings_Fragment' };

type IContentListItem_ParagraphElement_Fragment = (
  { __typename?: 'ParagraphElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ParagraphElement_Fragment': IContentData_ParagraphElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ParagraphElement_Fragment' };

type IContentListItem_QuoteBlock_Fragment = (
  { __typename?: 'QuoteBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_QuoteBlock_Fragment': IContentData_QuoteBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_QuoteBlock_Fragment' };

type IContentListItem_StandardPage_Fragment = (
  { __typename?: 'StandardPage' }
  & { ' $fragmentRefs'?: { 'IContentData_StandardPage_Fragment': IContentData_StandardPage_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_StandardPage_Fragment' };

type IContentListItem_StartPage_Fragment = (
  { __typename?: 'StartPage' }
  & { ' $fragmentRefs'?: { 'IContentData_StartPage_Fragment': IContentData_StartPage_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_StartPage_Fragment' };

type IContentListItem_SysContentFolder_Fragment = (
  { __typename?: 'SysContentFolder' }
  & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_SysContentFolder_Fragment' };

type IContentListItem_TestimonialElement_Fragment = (
  { __typename?: 'TestimonialElement' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialElement_Fragment': IContentData_TestimonialElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_TestimonialElement_Fragment' };

type IContentListItem_TextBlock_Fragment = (
  { __typename?: 'TextBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_TextBlock_Fragment' };

type IContentListItem_Video_Fragment = (
  { __typename?: 'Video' }
  & { ' $fragmentRefs'?: { 'IContentData_Video_Fragment': IContentData_Video_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_Video_Fragment' };

type IContentListItem_VideoElement_Fragment = (
  { __typename?: 'VideoElement' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoElement_Fragment': IContentData_VideoElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_VideoElement_Fragment' };

type IContentListItem_VideoMedia_Fragment = (
  { __typename?: 'VideoMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_VideoMedia_Fragment' };

type IContentListItem_WebsiteFooter_Fragment = (
  { __typename?: 'WebsiteFooter' }
  & { ' $fragmentRefs'?: { 'IContentData_WebsiteFooter_Fragment': IContentData_WebsiteFooter_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_WebsiteFooter_Fragment' };

type IContentListItem__Component_Fragment = (
  { __typename?: '_Component' }
  & { ' $fragmentRefs'?: { 'IContentData__Component_Fragment': IContentData__Component_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Component_Fragment' };

type IContentListItem__Content_Fragment = (
  { __typename?: '_Content' }
  & { ' $fragmentRefs'?: { 'IContentData__Content_Fragment': IContentData__Content_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Content_Fragment' };

type IContentListItem__Experience_Fragment = (
  { __typename?: '_Experience' }
  & { ' $fragmentRefs'?: { 'IContentData__Experience_Fragment': IContentData__Experience_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Experience_Fragment' };

type IContentListItem__Folder_Fragment = (
  { __typename?: '_Folder' }
  & { ' $fragmentRefs'?: { 'IContentData__Folder_Fragment': IContentData__Folder_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Folder_Fragment' };

type IContentListItem__Image_Fragment = (
  { __typename?: '_Image' }
  & { ' $fragmentRefs'?: { 'IContentData__Image_Fragment': IContentData__Image_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Image_Fragment' };

type IContentListItem__Media_Fragment = (
  { __typename?: '_Media' }
  & { ' $fragmentRefs'?: { 'IContentData__Media_Fragment': IContentData__Media_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Media_Fragment' };

type IContentListItem__Page_Fragment = (
  { __typename?: '_Page' }
  & { ' $fragmentRefs'?: { 'IContentData__Page_Fragment': IContentData__Page_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Page_Fragment' };

type IContentListItem__Section_Fragment = (
  { __typename?: '_Section' }
  & { ' $fragmentRefs'?: { 'IContentData__Section_Fragment': IContentData__Section_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Section_Fragment' };

type IContentListItem__Video_Fragment = (
  { __typename?: '_Video' }
  & { ' $fragmentRefs'?: { 'IContentData__Video_Fragment': IContentData__Video_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Video_Fragment' };

export type IContentListItemFragment = IContentListItem_ArticleGroupPage_Fragment | IContentListItem_ArticleListElement_Fragment | IContentListItem_ArticlePage_Fragment | IContentListItem_BlankExperience_Fragment | IContentListItem_BlankSection_Fragment | IContentListItem_BlogListingBlock_Fragment | IContentListItem_BlogPostPage_Fragment | IContentListItem_ButtonBlock_Fragment | IContentListItem_CTAElement_Fragment | IContentListItem_CardBlock_Fragment | IContentListItem_CarouselBlock_Fragment | IContentListItem_ContentRecsBlock_Fragment | IContentListItem_ContentRecsElement_Fragment | IContentListItem_DefaultImage_Fragment | IContentListItem_Dictionary_Fragment | IContentListItem_DictionaryItem_Fragment | IContentListItem_GenericMedia_Fragment | IContentListItem_HeaderBlock_Fragment | IContentListItem_HeadingElement_Fragment | IContentListItem_HeroBlock_Fragment | IContentListItem_Home_Fragment | IContentListItem_HomePageHeroBlock_Fragment | IContentListItem_HtmlBlock_Fragment | IContentListItem_ImageElement_Fragment | IContentListItem_ImageMedia_Fragment | IContentListItem_JustForTestingBlock_Fragment | IContentListItem_LandingPage_Fragment | IContentListItem_LayoutContainerBlock_Fragment | IContentListItem_MegaMenuGroupBlock_Fragment | IContentListItem_MenuNavigationBlock_Fragment | IContentListItem_NavigationMenuBlock_Fragment | IContentListItem_OdpEmbedBlock_Fragment | IContentListItem_OfficeLocation_Fragment | IContentListItem_PageSeoSettings_Fragment | IContentListItem_ParagraphElement_Fragment | IContentListItem_QuoteBlock_Fragment | IContentListItem_StandardPage_Fragment | IContentListItem_StartPage_Fragment | IContentListItem_SysContentFolder_Fragment | IContentListItem_TestimonialElement_Fragment | IContentListItem_TextBlock_Fragment | IContentListItem_Video_Fragment | IContentListItem_VideoElement_Fragment | IContentListItem_VideoMedia_Fragment | IContentListItem_WebsiteFooter_Fragment | IContentListItem__Component_Fragment | IContentListItem__Content_Fragment | IContentListItem__Experience_Fragment | IContentListItem__Folder_Fragment | IContentListItem__Image_Fragment | IContentListItem__Media_Fragment | IContentListItem__Page_Fragment | IContentListItem__Section_Fragment | IContentListItem__Video_Fragment;

type ExperienceData_BlankExperience_Fragment = { __typename?: 'BlankExperience', composition?: (
    { __typename?: 'CompositionStructureNode', nodes?: Array<(
      { __typename?: 'CompositionComponentNode' }
      & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment;'CompositionComponentNodeDataFragment': CompositionComponentNodeDataFragment } }
    ) | (
      { __typename?: 'CompositionNode' }
      & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
    ) | (
      { __typename?: 'CompositionStructureNode', nodes?: Array<(
        { __typename?: 'CompositionComponentNode' }
        & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment } }
      ) | (
        { __typename?: 'CompositionNode' }
        & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
      ) | (
        { __typename?: 'CompositionStructureNode', nodes?: Array<(
          { __typename?: 'CompositionComponentNode' }
          & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment } }
        ) | (
          { __typename?: 'CompositionNode' }
          & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
        ) | (
          { __typename?: 'CompositionStructureNode', nodes?: Array<(
            { __typename?: 'CompositionComponentNode' }
            & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment;'CompositionComponentNodeDataFragment': CompositionComponentNodeDataFragment } }
          ) | (
            { __typename?: 'CompositionNode' }
            & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
          ) | (
            { __typename?: 'CompositionStructureNode' }
            & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
          ) | null> | null }
          & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
        ) | null> | null }
        & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
      ) | null> | null }
      & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
    ) | null> | null }
    & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
  ) | null } & { ' $fragmentName'?: 'ExperienceData_BlankExperience_Fragment' };

type ExperienceData__Experience_Fragment = { __typename?: '_Experience', composition?: (
    { __typename?: 'CompositionStructureNode', nodes?: Array<(
      { __typename?: 'CompositionComponentNode' }
      & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment;'CompositionComponentNodeDataFragment': CompositionComponentNodeDataFragment } }
    ) | (
      { __typename?: 'CompositionNode' }
      & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
    ) | (
      { __typename?: 'CompositionStructureNode', nodes?: Array<(
        { __typename?: 'CompositionComponentNode' }
        & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment } }
      ) | (
        { __typename?: 'CompositionNode' }
        & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
      ) | (
        { __typename?: 'CompositionStructureNode', nodes?: Array<(
          { __typename?: 'CompositionComponentNode' }
          & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment } }
        ) | (
          { __typename?: 'CompositionNode' }
          & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
        ) | (
          { __typename?: 'CompositionStructureNode', nodes?: Array<(
            { __typename?: 'CompositionComponentNode' }
            & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment;'CompositionComponentNodeDataFragment': CompositionComponentNodeDataFragment } }
          ) | (
            { __typename?: 'CompositionNode' }
            & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
          ) | (
            { __typename?: 'CompositionStructureNode' }
            & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
          ) | null> | null }
          & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
        ) | null> | null }
        & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
      ) | null> | null }
      & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
    ) | null> | null }
    & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
  ) | null } & { ' $fragmentName'?: 'ExperienceData__Experience_Fragment' };

export type ExperienceDataFragment = ExperienceData_BlankExperience_Fragment | ExperienceData__Experience_Fragment;

type CompositionNodeData_CompositionComponentNode_Fragment = { __typename?: 'CompositionComponentNode', type?: string | null, key?: string | null, name?: string | null, layoutType?: string | null, template?: string | null, settings?: Array<{ __typename?: 'CompositionDisplaySetting', key?: string | null, value?: string | null } | null> | null } & { ' $fragmentName'?: 'CompositionNodeData_CompositionComponentNode_Fragment' };

type CompositionNodeData_CompositionNode_Fragment = { __typename?: 'CompositionNode', type?: string | null, key?: string | null, name?: string | null, layoutType?: string | null, template?: string | null, settings?: Array<{ __typename?: 'CompositionDisplaySetting', key?: string | null, value?: string | null } | null> | null } & { ' $fragmentName'?: 'CompositionNodeData_CompositionNode_Fragment' };

type CompositionNodeData_CompositionStructureNode_Fragment = { __typename?: 'CompositionStructureNode', type?: string | null, key?: string | null, name?: string | null, layoutType?: string | null, template?: string | null, settings?: Array<{ __typename?: 'CompositionDisplaySetting', key?: string | null, value?: string | null } | null> | null } & { ' $fragmentName'?: 'CompositionNodeData_CompositionStructureNode_Fragment' };

export type CompositionNodeDataFragment = CompositionNodeData_CompositionComponentNode_Fragment | CompositionNodeData_CompositionNode_Fragment | CompositionNodeData_CompositionStructureNode_Fragment;

export type CompositionComponentNodeDataFragment = { __typename?: 'CompositionComponentNode', component?: (
    { __typename?: 'ArticleListElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ArticleListElement_Fragment': BlockData_ArticleListElement_Fragment;'ElementData_ArticleListElement_Fragment': ElementData_ArticleListElement_Fragment } }
  ) | (
    { __typename?: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'BlockData_BlankSection_Fragment': BlockData_BlankSection_Fragment;'ElementData_BlankSection_Fragment': ElementData_BlankSection_Fragment } }
  ) | (
    { __typename?: 'BlogListingBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_BlogListingBlock_Fragment': BlockData_BlogListingBlock_Fragment;'ElementData_BlogListingBlock_Fragment': ElementData_BlogListingBlock_Fragment } }
  ) | (
    { __typename?: 'ButtonBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ButtonBlock_Fragment': BlockData_ButtonBlock_Fragment;'ElementData_ButtonBlock_Fragment': ElementData_ButtonBlock_Fragment } }
  ) | (
    { __typename?: 'CTAElement' }
    & { ' $fragmentRefs'?: { 'BlockData_CTAElement_Fragment': BlockData_CTAElement_Fragment;'ElementData_CTAElement_Fragment': ElementData_CTAElement_Fragment } }
  ) | (
    { __typename?: 'CardBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_CardBlock_Fragment': BlockData_CardBlock_Fragment;'ElementData_CardBlock_Fragment': ElementData_CardBlock_Fragment } }
  ) | (
    { __typename?: 'CarouselBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_CarouselBlock_Fragment': BlockData_CarouselBlock_Fragment;'ElementData_CarouselBlock_Fragment': ElementData_CarouselBlock_Fragment } }
  ) | (
    { __typename?: 'ContentRecsBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ContentRecsBlock_Fragment': BlockData_ContentRecsBlock_Fragment;'ElementData_ContentRecsBlock_Fragment': ElementData_ContentRecsBlock_Fragment } }
  ) | (
    { __typename?: 'ContentRecsElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ContentRecsElement_Fragment': BlockData_ContentRecsElement_Fragment;'ElementData_ContentRecsElement_Fragment': ElementData_ContentRecsElement_Fragment } }
  ) | (
    { __typename?: 'Dictionary' }
    & { ' $fragmentRefs'?: { 'BlockData_Dictionary_Fragment': BlockData_Dictionary_Fragment;'ElementData_Dictionary_Fragment': ElementData_Dictionary_Fragment } }
  ) | (
    { __typename?: 'DictionaryItem' }
    & { ' $fragmentRefs'?: { 'BlockData_DictionaryItem_Fragment': BlockData_DictionaryItem_Fragment;'ElementData_DictionaryItem_Fragment': ElementData_DictionaryItem_Fragment } }
  ) | (
    { __typename?: 'HeaderBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HeaderBlock_Fragment': BlockData_HeaderBlock_Fragment;'ElementData_HeaderBlock_Fragment': ElementData_HeaderBlock_Fragment } }
  ) | (
    { __typename?: 'HeadingElement' }
    & { ' $fragmentRefs'?: { 'BlockData_HeadingElement_Fragment': BlockData_HeadingElement_Fragment;'ElementData_HeadingElement_Fragment': ElementData_HeadingElement_Fragment } }
  ) | (
    { __typename?: 'HeroBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HeroBlock_Fragment': BlockData_HeroBlock_Fragment;'ElementData_HeroBlock_Fragment': ElementData_HeroBlock_Fragment } }
  ) | (
    { __typename?: 'HomePageHeroBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HomePageHeroBlock_Fragment': BlockData_HomePageHeroBlock_Fragment;'ElementData_HomePageHeroBlock_Fragment': ElementData_HomePageHeroBlock_Fragment } }
  ) | (
    { __typename?: 'HtmlBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HtmlBlock_Fragment': BlockData_HtmlBlock_Fragment;'ElementData_HtmlBlock_Fragment': ElementData_HtmlBlock_Fragment } }
  ) | (
    { __typename?: 'ImageElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ImageElement_Fragment': BlockData_ImageElement_Fragment;'ElementData_ImageElement_Fragment': ElementData_ImageElement_Fragment } }
  ) | (
    { __typename?: 'JustForTestingBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_JustForTestingBlock_Fragment': BlockData_JustForTestingBlock_Fragment;'ElementData_JustForTestingBlock_Fragment': ElementData_JustForTestingBlock_Fragment } }
  ) | (
    { __typename?: 'LayoutContainerBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_LayoutContainerBlock_Fragment': BlockData_LayoutContainerBlock_Fragment;'ElementData_LayoutContainerBlock_Fragment': ElementData_LayoutContainerBlock_Fragment } }
  ) | (
    { __typename?: 'MegaMenuGroupBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_MegaMenuGroupBlock_Fragment': BlockData_MegaMenuGroupBlock_Fragment;'ElementData_MegaMenuGroupBlock_Fragment': ElementData_MegaMenuGroupBlock_Fragment } }
  ) | (
    { __typename?: 'MenuNavigationBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_MenuNavigationBlock_Fragment': BlockData_MenuNavigationBlock_Fragment;'ElementData_MenuNavigationBlock_Fragment': ElementData_MenuNavigationBlock_Fragment } }
  ) | (
    { __typename?: 'NavigationMenuBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_NavigationMenuBlock_Fragment': BlockData_NavigationMenuBlock_Fragment;'ElementData_NavigationMenuBlock_Fragment': ElementData_NavigationMenuBlock_Fragment } }
  ) | (
    { __typename?: 'OdpEmbedBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_OdpEmbedBlock_Fragment': BlockData_OdpEmbedBlock_Fragment;'ElementData_OdpEmbedBlock_Fragment': ElementData_OdpEmbedBlock_Fragment } }
  ) | (
    { __typename?: 'OfficeLocation' }
    & { ' $fragmentRefs'?: { 'BlockData_OfficeLocation_Fragment': BlockData_OfficeLocation_Fragment;'ElementData_OfficeLocation_Fragment': ElementData_OfficeLocation_Fragment } }
  ) | (
    { __typename?: 'PageSeoSettings' }
    & { ' $fragmentRefs'?: { 'BlockData_PageSeoSettings_Fragment': BlockData_PageSeoSettings_Fragment;'ElementData_PageSeoSettings_Fragment': ElementData_PageSeoSettings_Fragment } }
  ) | (
    { __typename?: 'ParagraphElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ParagraphElement_Fragment': BlockData_ParagraphElement_Fragment;'ElementData_ParagraphElement_Fragment': ElementData_ParagraphElement_Fragment } }
  ) | (
    { __typename?: 'QuoteBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_QuoteBlock_Fragment': BlockData_QuoteBlock_Fragment;'ElementData_QuoteBlock_Fragment': ElementData_QuoteBlock_Fragment } }
  ) | (
    { __typename?: 'TestimonialElement' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialElement_Fragment': BlockData_TestimonialElement_Fragment;'ElementData_TestimonialElement_Fragment': ElementData_TestimonialElement_Fragment } }
  ) | (
    { __typename?: 'TextBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TextBlock_Fragment': BlockData_TextBlock_Fragment;'ElementData_TextBlock_Fragment': ElementData_TextBlock_Fragment } }
  ) | (
    { __typename?: 'VideoElement' }
    & { ' $fragmentRefs'?: { 'BlockData_VideoElement_Fragment': BlockData_VideoElement_Fragment;'ElementData_VideoElement_Fragment': ElementData_VideoElement_Fragment } }
  ) | (
    { __typename?: 'WebsiteFooter' }
    & { ' $fragmentRefs'?: { 'BlockData_WebsiteFooter_Fragment': BlockData_WebsiteFooter_Fragment;'ElementData_WebsiteFooter_Fragment': ElementData_WebsiteFooter_Fragment } }
  ) | (
    { __typename?: '_Component' }
    & { ' $fragmentRefs'?: { 'BlockData__Component_Fragment': BlockData__Component_Fragment;'ElementData__Component_Fragment': ElementData__Component_Fragment } }
  ) | (
    { __typename?: '_Section' }
    & { ' $fragmentRefs'?: { 'BlockData__Section_Fragment': BlockData__Section_Fragment;'ElementData__Section_Fragment': ElementData__Section_Fragment } }
  ) | null } & { ' $fragmentName'?: 'CompositionComponentNodeDataFragment' };

export type LinkItemDataFragment = { __typename?: 'Link', title?: string | null, text?: string | null, target?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'LinkItemDataFragment' };

export type getContentByIdQueryVariables = Exact<{
  key: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<Locales> | Locales>;
  path?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
}>;


export type getContentByIdQuery = { __typename?: 'Query', content?: { __typename?: '_ContentOutput', total?: number | null, items?: (
      { __typename?: 'ArticleGroupPage' }
      & { ' $fragmentRefs'?: { 'PageData_ArticleGroupPage_Fragment': PageData_ArticleGroupPage_Fragment } }
    ) | (
      { __typename?: 'ArticleListElement' }
      & { ' $fragmentRefs'?: { 'BlockData_ArticleListElement_Fragment': BlockData_ArticleListElement_Fragment;'PageData_ArticleListElement_Fragment': PageData_ArticleListElement_Fragment } }
    ) | (
      { __typename?: 'ArticlePage' }
      & { ' $fragmentRefs'?: { 'PageData_ArticlePage_Fragment': PageData_ArticlePage_Fragment } }
    ) | (
      { __typename?: 'BlankExperience' }
      & { ' $fragmentRefs'?: { 'PageData_BlankExperience_Fragment': PageData_BlankExperience_Fragment } }
    ) | (
      { __typename?: 'BlankSection' }
      & { ' $fragmentRefs'?: { 'BlockData_BlankSection_Fragment': BlockData_BlankSection_Fragment;'PageData_BlankSection_Fragment': PageData_BlankSection_Fragment } }
    ) | (
      { __typename?: 'BlogListingBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_BlogListingBlock_Fragment': BlockData_BlogListingBlock_Fragment;'PageData_BlogListingBlock_Fragment': PageData_BlogListingBlock_Fragment } }
    ) | (
      { __typename?: 'BlogPostPage' }
      & { ' $fragmentRefs'?: { 'PageData_BlogPostPage_Fragment': PageData_BlogPostPage_Fragment } }
    ) | (
      { __typename?: 'ButtonBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_ButtonBlock_Fragment': BlockData_ButtonBlock_Fragment;'PageData_ButtonBlock_Fragment': PageData_ButtonBlock_Fragment } }
    ) | (
      { __typename?: 'CTAElement' }
      & { ' $fragmentRefs'?: { 'BlockData_CTAElement_Fragment': BlockData_CTAElement_Fragment;'PageData_CTAElement_Fragment': PageData_CTAElement_Fragment } }
    ) | (
      { __typename?: 'CardBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_CardBlock_Fragment': BlockData_CardBlock_Fragment;'PageData_CardBlock_Fragment': PageData_CardBlock_Fragment } }
    ) | (
      { __typename?: 'CarouselBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_CarouselBlock_Fragment': BlockData_CarouselBlock_Fragment;'PageData_CarouselBlock_Fragment': PageData_CarouselBlock_Fragment } }
    ) | (
      { __typename?: 'ContentRecsBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_ContentRecsBlock_Fragment': BlockData_ContentRecsBlock_Fragment;'PageData_ContentRecsBlock_Fragment': PageData_ContentRecsBlock_Fragment } }
    ) | (
      { __typename?: 'ContentRecsElement' }
      & { ' $fragmentRefs'?: { 'BlockData_ContentRecsElement_Fragment': BlockData_ContentRecsElement_Fragment;'PageData_ContentRecsElement_Fragment': PageData_ContentRecsElement_Fragment } }
    ) | (
      { __typename?: 'DefaultImage' }
      & { ' $fragmentRefs'?: { 'PageData_DefaultImage_Fragment': PageData_DefaultImage_Fragment } }
    ) | (
      { __typename?: 'Dictionary' }
      & { ' $fragmentRefs'?: { 'BlockData_Dictionary_Fragment': BlockData_Dictionary_Fragment;'PageData_Dictionary_Fragment': PageData_Dictionary_Fragment } }
    ) | (
      { __typename?: 'DictionaryItem' }
      & { ' $fragmentRefs'?: { 'BlockData_DictionaryItem_Fragment': BlockData_DictionaryItem_Fragment;'PageData_DictionaryItem_Fragment': PageData_DictionaryItem_Fragment } }
    ) | (
      { __typename?: 'GenericMedia' }
      & { ' $fragmentRefs'?: { 'PageData_GenericMedia_Fragment': PageData_GenericMedia_Fragment } }
    ) | (
      { __typename?: 'HeaderBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_HeaderBlock_Fragment': BlockData_HeaderBlock_Fragment;'PageData_HeaderBlock_Fragment': PageData_HeaderBlock_Fragment } }
    ) | (
      { __typename?: 'HeadingElement' }
      & { ' $fragmentRefs'?: { 'BlockData_HeadingElement_Fragment': BlockData_HeadingElement_Fragment;'PageData_HeadingElement_Fragment': PageData_HeadingElement_Fragment } }
    ) | (
      { __typename?: 'HeroBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_HeroBlock_Fragment': BlockData_HeroBlock_Fragment;'PageData_HeroBlock_Fragment': PageData_HeroBlock_Fragment } }
    ) | (
      { __typename?: 'Home' }
      & { ' $fragmentRefs'?: { 'PageData_Home_Fragment': PageData_Home_Fragment } }
    ) | (
      { __typename?: 'HomePageHeroBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_HomePageHeroBlock_Fragment': BlockData_HomePageHeroBlock_Fragment;'PageData_HomePageHeroBlock_Fragment': PageData_HomePageHeroBlock_Fragment } }
    ) | (
      { __typename?: 'HtmlBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_HtmlBlock_Fragment': BlockData_HtmlBlock_Fragment;'PageData_HtmlBlock_Fragment': PageData_HtmlBlock_Fragment } }
    ) | (
      { __typename?: 'ImageElement' }
      & { ' $fragmentRefs'?: { 'BlockData_ImageElement_Fragment': BlockData_ImageElement_Fragment;'PageData_ImageElement_Fragment': PageData_ImageElement_Fragment } }
    ) | (
      { __typename?: 'ImageMedia' }
      & { ' $fragmentRefs'?: { 'PageData_ImageMedia_Fragment': PageData_ImageMedia_Fragment } }
    ) | (
      { __typename?: 'JustForTestingBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_JustForTestingBlock_Fragment': BlockData_JustForTestingBlock_Fragment;'PageData_JustForTestingBlock_Fragment': PageData_JustForTestingBlock_Fragment } }
    ) | (
      { __typename?: 'LandingPage' }
      & { ' $fragmentRefs'?: { 'PageData_LandingPage_Fragment': PageData_LandingPage_Fragment } }
    ) | (
      { __typename?: 'LayoutContainerBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_LayoutContainerBlock_Fragment': BlockData_LayoutContainerBlock_Fragment;'PageData_LayoutContainerBlock_Fragment': PageData_LayoutContainerBlock_Fragment } }
    ) | (
      { __typename?: 'MegaMenuGroupBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_MegaMenuGroupBlock_Fragment': BlockData_MegaMenuGroupBlock_Fragment;'PageData_MegaMenuGroupBlock_Fragment': PageData_MegaMenuGroupBlock_Fragment } }
    ) | (
      { __typename?: 'MenuNavigationBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_MenuNavigationBlock_Fragment': BlockData_MenuNavigationBlock_Fragment;'PageData_MenuNavigationBlock_Fragment': PageData_MenuNavigationBlock_Fragment } }
    ) | (
      { __typename?: 'NavigationMenuBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_NavigationMenuBlock_Fragment': BlockData_NavigationMenuBlock_Fragment;'PageData_NavigationMenuBlock_Fragment': PageData_NavigationMenuBlock_Fragment } }
    ) | (
      { __typename?: 'OdpEmbedBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_OdpEmbedBlock_Fragment': BlockData_OdpEmbedBlock_Fragment;'PageData_OdpEmbedBlock_Fragment': PageData_OdpEmbedBlock_Fragment } }
    ) | (
      { __typename?: 'OfficeLocation' }
      & { ' $fragmentRefs'?: { 'BlockData_OfficeLocation_Fragment': BlockData_OfficeLocation_Fragment;'PageData_OfficeLocation_Fragment': PageData_OfficeLocation_Fragment } }
    ) | (
      { __typename?: 'PageSeoSettings' }
      & { ' $fragmentRefs'?: { 'BlockData_PageSeoSettings_Fragment': BlockData_PageSeoSettings_Fragment;'PageData_PageSeoSettings_Fragment': PageData_PageSeoSettings_Fragment } }
    ) | (
      { __typename?: 'ParagraphElement' }
      & { ' $fragmentRefs'?: { 'BlockData_ParagraphElement_Fragment': BlockData_ParagraphElement_Fragment;'PageData_ParagraphElement_Fragment': PageData_ParagraphElement_Fragment } }
    ) | (
      { __typename?: 'QuoteBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_QuoteBlock_Fragment': BlockData_QuoteBlock_Fragment;'PageData_QuoteBlock_Fragment': PageData_QuoteBlock_Fragment } }
    ) | (
      { __typename?: 'StandardPage' }
      & { ' $fragmentRefs'?: { 'PageData_StandardPage_Fragment': PageData_StandardPage_Fragment } }
    ) | (
      { __typename?: 'StartPage' }
      & { ' $fragmentRefs'?: { 'PageData_StartPage_Fragment': PageData_StartPage_Fragment } }
    ) | (
      { __typename?: 'SysContentFolder' }
      & { ' $fragmentRefs'?: { 'PageData_SysContentFolder_Fragment': PageData_SysContentFolder_Fragment } }
    ) | (
      { __typename?: 'TestimonialElement' }
      & { ' $fragmentRefs'?: { 'BlockData_TestimonialElement_Fragment': BlockData_TestimonialElement_Fragment;'PageData_TestimonialElement_Fragment': PageData_TestimonialElement_Fragment } }
    ) | (
      { __typename?: 'TextBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_TextBlock_Fragment': BlockData_TextBlock_Fragment;'PageData_TextBlock_Fragment': PageData_TextBlock_Fragment } }
    ) | (
      { __typename?: 'Video' }
      & { ' $fragmentRefs'?: { 'PageData_Video_Fragment': PageData_Video_Fragment } }
    ) | (
      { __typename?: 'VideoElement' }
      & { ' $fragmentRefs'?: { 'BlockData_VideoElement_Fragment': BlockData_VideoElement_Fragment;'PageData_VideoElement_Fragment': PageData_VideoElement_Fragment } }
    ) | (
      { __typename?: 'VideoMedia' }
      & { ' $fragmentRefs'?: { 'PageData_VideoMedia_Fragment': PageData_VideoMedia_Fragment } }
    ) | (
      { __typename?: 'WebsiteFooter' }
      & { ' $fragmentRefs'?: { 'BlockData_WebsiteFooter_Fragment': BlockData_WebsiteFooter_Fragment;'PageData_WebsiteFooter_Fragment': PageData_WebsiteFooter_Fragment } }
    ) | (
      { __typename?: '_Component' }
      & { ' $fragmentRefs'?: { 'BlockData__Component_Fragment': BlockData__Component_Fragment;'PageData__Component_Fragment': PageData__Component_Fragment } }
    ) | (
      { __typename?: '_Content' }
      & { ' $fragmentRefs'?: { 'PageData__Content_Fragment': PageData__Content_Fragment } }
    ) | (
      { __typename?: '_Experience' }
      & { ' $fragmentRefs'?: { 'PageData__Experience_Fragment': PageData__Experience_Fragment } }
    ) | (
      { __typename?: '_Folder' }
      & { ' $fragmentRefs'?: { 'PageData__Folder_Fragment': PageData__Folder_Fragment } }
    ) | (
      { __typename?: '_Image' }
      & { ' $fragmentRefs'?: { 'PageData__Image_Fragment': PageData__Image_Fragment } }
    ) | (
      { __typename?: '_Media' }
      & { ' $fragmentRefs'?: { 'PageData__Media_Fragment': PageData__Media_Fragment } }
    ) | (
      { __typename?: '_Page' }
      & { ' $fragmentRefs'?: { 'PageData__Page_Fragment': PageData__Page_Fragment } }
    ) | (
      { __typename?: '_Section' }
      & { ' $fragmentRefs'?: { 'BlockData__Section_Fragment': BlockData__Section_Fragment;'PageData__Section_Fragment': PageData__Section_Fragment } }
    ) | (
      { __typename?: '_Video' }
      & { ' $fragmentRefs'?: { 'PageData__Video_Fragment': PageData__Video_Fragment } }
    ) | null } | null };

export type getContentByPathQueryVariables = Exact<{
  path: Array<Scalars['String']['input']> | Scalars['String']['input'];
  locale?: InputMaybe<Array<Locales> | Locales>;
  siteId?: InputMaybe<Scalars['String']['input']>;
}>;


export type getContentByPathQuery = { __typename?: 'Query', content?: { __typename?: '_ContentOutput', total?: number | null, items?: (
      { __typename?: 'ArticleGroupPage' }
      & { ' $fragmentRefs'?: { 'IContentData_ArticleGroupPage_Fragment': IContentData_ArticleGroupPage_Fragment;'PageData_ArticleGroupPage_Fragment': PageData_ArticleGroupPage_Fragment } }
    ) | (
      { __typename?: 'ArticleListElement' }
      & { ' $fragmentRefs'?: { 'IContentData_ArticleListElement_Fragment': IContentData_ArticleListElement_Fragment;'PageData_ArticleListElement_Fragment': PageData_ArticleListElement_Fragment } }
    ) | (
      { __typename?: 'ArticlePage' }
      & { ' $fragmentRefs'?: { 'IContentData_ArticlePage_Fragment': IContentData_ArticlePage_Fragment;'PageData_ArticlePage_Fragment': PageData_ArticlePage_Fragment } }
    ) | (
      { __typename?: 'BlankExperience' }
      & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment;'PageData_BlankExperience_Fragment': PageData_BlankExperience_Fragment } }
    ) | (
      { __typename?: 'BlankSection' }
      & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment;'PageData_BlankSection_Fragment': PageData_BlankSection_Fragment } }
    ) | (
      { __typename?: 'BlogListingBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_BlogListingBlock_Fragment': IContentData_BlogListingBlock_Fragment;'PageData_BlogListingBlock_Fragment': PageData_BlogListingBlock_Fragment } }
    ) | (
      { __typename?: 'BlogPostPage' }
      & { ' $fragmentRefs'?: { 'IContentData_BlogPostPage_Fragment': IContentData_BlogPostPage_Fragment;'PageData_BlogPostPage_Fragment': PageData_BlogPostPage_Fragment } }
    ) | (
      { __typename?: 'ButtonBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment;'PageData_ButtonBlock_Fragment': PageData_ButtonBlock_Fragment } }
    ) | (
      { __typename?: 'CTAElement' }
      & { ' $fragmentRefs'?: { 'IContentData_CTAElement_Fragment': IContentData_CTAElement_Fragment;'PageData_CTAElement_Fragment': PageData_CTAElement_Fragment } }
    ) | (
      { __typename?: 'CardBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment;'PageData_CardBlock_Fragment': PageData_CardBlock_Fragment } }
    ) | (
      { __typename?: 'CarouselBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_CarouselBlock_Fragment': IContentData_CarouselBlock_Fragment;'PageData_CarouselBlock_Fragment': PageData_CarouselBlock_Fragment } }
    ) | (
      { __typename?: 'ContentRecsBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_ContentRecsBlock_Fragment': IContentData_ContentRecsBlock_Fragment;'PageData_ContentRecsBlock_Fragment': PageData_ContentRecsBlock_Fragment } }
    ) | (
      { __typename?: 'ContentRecsElement' }
      & { ' $fragmentRefs'?: { 'IContentData_ContentRecsElement_Fragment': IContentData_ContentRecsElement_Fragment;'PageData_ContentRecsElement_Fragment': PageData_ContentRecsElement_Fragment } }
    ) | (
      { __typename?: 'DefaultImage' }
      & { ' $fragmentRefs'?: { 'IContentData_DefaultImage_Fragment': IContentData_DefaultImage_Fragment;'PageData_DefaultImage_Fragment': PageData_DefaultImage_Fragment } }
    ) | (
      { __typename?: 'Dictionary' }
      & { ' $fragmentRefs'?: { 'IContentData_Dictionary_Fragment': IContentData_Dictionary_Fragment;'PageData_Dictionary_Fragment': PageData_Dictionary_Fragment } }
    ) | (
      { __typename?: 'DictionaryItem' }
      & { ' $fragmentRefs'?: { 'IContentData_DictionaryItem_Fragment': IContentData_DictionaryItem_Fragment;'PageData_DictionaryItem_Fragment': PageData_DictionaryItem_Fragment } }
    ) | (
      { __typename?: 'GenericMedia' }
      & { ' $fragmentRefs'?: { 'IContentData_GenericMedia_Fragment': IContentData_GenericMedia_Fragment;'PageData_GenericMedia_Fragment': PageData_GenericMedia_Fragment } }
    ) | (
      { __typename?: 'HeaderBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_HeaderBlock_Fragment': IContentData_HeaderBlock_Fragment;'PageData_HeaderBlock_Fragment': PageData_HeaderBlock_Fragment } }
    ) | (
      { __typename?: 'HeadingElement' }
      & { ' $fragmentRefs'?: { 'IContentData_HeadingElement_Fragment': IContentData_HeadingElement_Fragment;'PageData_HeadingElement_Fragment': PageData_HeadingElement_Fragment } }
    ) | (
      { __typename?: 'HeroBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment;'PageData_HeroBlock_Fragment': PageData_HeroBlock_Fragment } }
    ) | (
      { __typename?: 'Home' }
      & { ' $fragmentRefs'?: { 'IContentData_Home_Fragment': IContentData_Home_Fragment;'PageData_Home_Fragment': PageData_Home_Fragment } }
    ) | (
      { __typename?: 'HomePageHeroBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_HomePageHeroBlock_Fragment': IContentData_HomePageHeroBlock_Fragment;'PageData_HomePageHeroBlock_Fragment': PageData_HomePageHeroBlock_Fragment } }
    ) | (
      { __typename?: 'HtmlBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_HtmlBlock_Fragment': IContentData_HtmlBlock_Fragment;'PageData_HtmlBlock_Fragment': PageData_HtmlBlock_Fragment } }
    ) | (
      { __typename?: 'ImageElement' }
      & { ' $fragmentRefs'?: { 'IContentData_ImageElement_Fragment': IContentData_ImageElement_Fragment;'PageData_ImageElement_Fragment': PageData_ImageElement_Fragment } }
    ) | (
      { __typename?: 'ImageMedia' }
      & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment;'PageData_ImageMedia_Fragment': PageData_ImageMedia_Fragment } }
    ) | (
      { __typename?: 'JustForTestingBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_JustForTestingBlock_Fragment': IContentData_JustForTestingBlock_Fragment;'PageData_JustForTestingBlock_Fragment': PageData_JustForTestingBlock_Fragment } }
    ) | (
      { __typename?: 'LandingPage' }
      & { ' $fragmentRefs'?: { 'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment;'PageData_LandingPage_Fragment': PageData_LandingPage_Fragment } }
    ) | (
      { __typename?: 'LayoutContainerBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_LayoutContainerBlock_Fragment': IContentData_LayoutContainerBlock_Fragment;'PageData_LayoutContainerBlock_Fragment': PageData_LayoutContainerBlock_Fragment } }
    ) | (
      { __typename?: 'MegaMenuGroupBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment;'PageData_MegaMenuGroupBlock_Fragment': PageData_MegaMenuGroupBlock_Fragment } }
    ) | (
      { __typename?: 'MenuNavigationBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_MenuNavigationBlock_Fragment': IContentData_MenuNavigationBlock_Fragment;'PageData_MenuNavigationBlock_Fragment': PageData_MenuNavigationBlock_Fragment } }
    ) | (
      { __typename?: 'NavigationMenuBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_NavigationMenuBlock_Fragment': IContentData_NavigationMenuBlock_Fragment;'PageData_NavigationMenuBlock_Fragment': PageData_NavigationMenuBlock_Fragment } }
    ) | (
      { __typename?: 'OdpEmbedBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_OdpEmbedBlock_Fragment': IContentData_OdpEmbedBlock_Fragment;'PageData_OdpEmbedBlock_Fragment': PageData_OdpEmbedBlock_Fragment } }
    ) | (
      { __typename?: 'OfficeLocation' }
      & { ' $fragmentRefs'?: { 'IContentData_OfficeLocation_Fragment': IContentData_OfficeLocation_Fragment;'PageData_OfficeLocation_Fragment': PageData_OfficeLocation_Fragment } }
    ) | (
      { __typename?: 'PageSeoSettings' }
      & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment;'PageData_PageSeoSettings_Fragment': PageData_PageSeoSettings_Fragment } }
    ) | (
      { __typename?: 'ParagraphElement' }
      & { ' $fragmentRefs'?: { 'IContentData_ParagraphElement_Fragment': IContentData_ParagraphElement_Fragment;'PageData_ParagraphElement_Fragment': PageData_ParagraphElement_Fragment } }
    ) | (
      { __typename?: 'QuoteBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_QuoteBlock_Fragment': IContentData_QuoteBlock_Fragment;'PageData_QuoteBlock_Fragment': PageData_QuoteBlock_Fragment } }
    ) | (
      { __typename?: 'StandardPage' }
      & { ' $fragmentRefs'?: { 'IContentData_StandardPage_Fragment': IContentData_StandardPage_Fragment;'PageData_StandardPage_Fragment': PageData_StandardPage_Fragment } }
    ) | (
      { __typename?: 'StartPage' }
      & { ' $fragmentRefs'?: { 'IContentData_StartPage_Fragment': IContentData_StartPage_Fragment;'PageData_StartPage_Fragment': PageData_StartPage_Fragment } }
    ) | (
      { __typename?: 'SysContentFolder' }
      & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment;'PageData_SysContentFolder_Fragment': PageData_SysContentFolder_Fragment } }
    ) | (
      { __typename?: 'TestimonialElement' }
      & { ' $fragmentRefs'?: { 'IContentData_TestimonialElement_Fragment': IContentData_TestimonialElement_Fragment;'PageData_TestimonialElement_Fragment': PageData_TestimonialElement_Fragment } }
    ) | (
      { __typename?: 'TextBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment;'PageData_TextBlock_Fragment': PageData_TextBlock_Fragment } }
    ) | (
      { __typename?: 'Video' }
      & { ' $fragmentRefs'?: { 'IContentData_Video_Fragment': IContentData_Video_Fragment;'PageData_Video_Fragment': PageData_Video_Fragment } }
    ) | (
      { __typename?: 'VideoElement' }
      & { ' $fragmentRefs'?: { 'IContentData_VideoElement_Fragment': IContentData_VideoElement_Fragment;'PageData_VideoElement_Fragment': PageData_VideoElement_Fragment } }
    ) | (
      { __typename?: 'VideoMedia' }
      & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment;'PageData_VideoMedia_Fragment': PageData_VideoMedia_Fragment } }
    ) | (
      { __typename?: 'WebsiteFooter' }
      & { ' $fragmentRefs'?: { 'IContentData_WebsiteFooter_Fragment': IContentData_WebsiteFooter_Fragment;'PageData_WebsiteFooter_Fragment': PageData_WebsiteFooter_Fragment } }
    ) | (
      { __typename?: '_Component' }
      & { ' $fragmentRefs'?: { 'IContentData__Component_Fragment': IContentData__Component_Fragment;'PageData__Component_Fragment': PageData__Component_Fragment } }
    ) | (
      { __typename?: '_Content' }
      & { ' $fragmentRefs'?: { 'IContentData__Content_Fragment': IContentData__Content_Fragment;'PageData__Content_Fragment': PageData__Content_Fragment } }
    ) | (
      { __typename?: '_Experience' }
      & { ' $fragmentRefs'?: { 'IContentData__Experience_Fragment': IContentData__Experience_Fragment;'PageData__Experience_Fragment': PageData__Experience_Fragment } }
    ) | (
      { __typename?: '_Folder' }
      & { ' $fragmentRefs'?: { 'IContentData__Folder_Fragment': IContentData__Folder_Fragment;'PageData__Folder_Fragment': PageData__Folder_Fragment } }
    ) | (
      { __typename?: '_Image' }
      & { ' $fragmentRefs'?: { 'IContentData__Image_Fragment': IContentData__Image_Fragment;'PageData__Image_Fragment': PageData__Image_Fragment } }
    ) | (
      { __typename?: '_Media' }
      & { ' $fragmentRefs'?: { 'IContentData__Media_Fragment': IContentData__Media_Fragment;'PageData__Media_Fragment': PageData__Media_Fragment } }
    ) | (
      { __typename?: '_Page' }
      & { ' $fragmentRefs'?: { 'IContentData__Page_Fragment': IContentData__Page_Fragment;'PageData__Page_Fragment': PageData__Page_Fragment } }
    ) | (
      { __typename?: '_Section' }
      & { ' $fragmentRefs'?: { 'IContentData__Section_Fragment': IContentData__Section_Fragment;'PageData__Section_Fragment': PageData__Section_Fragment } }
    ) | (
      { __typename?: '_Video' }
      & { ' $fragmentRefs'?: { 'IContentData__Video_Fragment': IContentData__Video_Fragment;'PageData__Video_Fragment': PageData__Video_Fragment } }
    ) | null } | null };

export type getContentTypeQueryVariables = Exact<{
  key: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<Locales> | Locales>;
  path?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
}>;


export type getContentTypeQuery = { __typename?: 'Query', content?: { __typename?: '_ContentOutput', total?: number | null, items?: { __typename?: 'ArticleGroupPage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ArticleListElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ArticlePage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'BlankExperience', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'BlankSection', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'BlogListingBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'BlogPostPage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ButtonBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'CTAElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'CardBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'CarouselBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ContentRecsBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ContentRecsElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'DefaultImage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Dictionary', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'DictionaryItem', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'GenericMedia', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'HeaderBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'HeadingElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'HeroBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Home', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'HomePageHeroBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'HtmlBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ImageElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ImageMedia', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'JustForTestingBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'LandingPage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'LayoutContainerBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'MegaMenuGroupBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'MenuNavigationBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'NavigationMenuBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'OdpEmbedBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'OfficeLocation', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'PageSeoSettings', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ParagraphElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'QuoteBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'StandardPage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'StartPage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'SysContentFolder', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'TestimonialElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'TextBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Video', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'VideoElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'VideoMedia', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'WebsiteFooter', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Component', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Content', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Experience', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Folder', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Image', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Media', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Page', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Section', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Video', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | null } | null };

export const LinkDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<LinkDataFragment, unknown>;
export const IContentInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<IContentInfoFragment, unknown>;
export const IContentDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<IContentDataFragment, unknown>;
export const PageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<PageDataFragment, unknown>;
export const ReferenceDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<ReferenceDataFragment, unknown>;
export const IContentListItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<IContentListItemFragment, unknown>;
export const CompositionNodeDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionNodeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","alias":{"kind":"Name","value":"layoutType"},"name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<CompositionNodeDataFragment, unknown>;
export const BlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<BlockDataFragment, unknown>;
export const IElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<IElementDataFragment, unknown>;
export const ElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<ElementDataFragment, unknown>;
export const CompositionComponentNodeDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionComponentNodeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionComponentNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}}]}}]} as unknown as DocumentNode<CompositionComponentNodeDataFragment, unknown>;
export const ExperienceDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionComponentNodeData"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionComponentNodeData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionNodeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","alias":{"kind":"Name","value":"layoutType"},"name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionComponentNodeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionComponentNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}}]}}]}}]} as unknown as DocumentNode<ExperienceDataFragment, unknown>;
export const LinkItemDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<LinkItemDataFragment, unknown>;
export const getContentByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domain"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"_Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hierarchical"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"base"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domain"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}}]} as unknown as DocumentNode<getContentByIdQuery, getContentByIdQueryVariables>;
export const getContentByPathDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentByPath"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"_Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"default"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"base"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}}}]}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}}]} as unknown as DocumentNode<getContentByPathQuery, getContentByPathQueryVariables>;
export const getContentTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domain"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"_Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hierarchical"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"base"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domain"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"}}]}}]}}]}}]}}]} as unknown as DocumentNode<getContentTypeQuery, getContentTypeQueryVariables>;