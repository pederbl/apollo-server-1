import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Account = {
  __typename?: 'Account';
  content: AccountContent;
  id: Scalars['ID'];
};

export type AccountContent = {
  __typename?: 'AccountContent';
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
};

export type AccountContentInput = {
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
};

export type AccountContentPatchInput = {
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type AccountListFiltersInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type AccountPatchInput = {
  content: AccountContentPatchInput;
  id: Scalars['ID'];
};

export type AccountReplaceInput = {
  content: AccountContentInput;
  id: Scalars['ID'];
};

export type AccountsDeleteResponse = {
  __typename?: 'AccountsDeleteResponse';
  deletedIds: Array<Maybe<Scalars['ID']>>;
  errors: Array<Maybe<ErrorResponse>>;
};

export type AccountsListInput = {
  filters?: InputMaybe<AccountListFiltersInput>;
};

export type AccountsListResponse = {
  __typename?: 'AccountsListResponse';
  code?: Maybe<Scalars['Int']>;
  message: Scalars['String'];
  records?: Maybe<Array<Maybe<Account>>>;
};

export type AccountsResponse = {
  __typename?: 'AccountsResponse';
  errors: Array<Maybe<ErrorResponse>>;
  records: Array<Maybe<Account>>;
};

export type ErrorResponse = {
  __typename?: 'ErrorResponse';
  code: Scalars['Int'];
  id?: Maybe<Scalars['ID']>;
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  accountsCreate?: Maybe<AccountsResponse>;
  accountsDelete?: Maybe<AccountsDeleteResponse>;
  accountsPatch?: Maybe<AccountsResponse>;
  accountsReplace?: Maybe<AccountsResponse>;
};


export type MutationAccountsCreateArgs = {
  contents: Array<InputMaybe<AccountContentInput>>;
};


export type MutationAccountsDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationAccountsPatchArgs = {
  records: Array<InputMaybe<AccountPatchInput>>;
};


export type MutationAccountsReplaceArgs = {
  records: Array<InputMaybe<AccountReplaceInput>>;
};

export type Query = {
  __typename?: 'Query';
  accountsGetByIds?: Maybe<AccountsResponse>;
  accountsList?: Maybe<AccountsListResponse>;
};


export type QueryAccountsGetByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryAccountsListArgs = {
  query?: InputMaybe<AccountsListInput>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Account: ResolverTypeWrapper<Account>;
  AccountContent: ResolverTypeWrapper<AccountContent>;
  AccountContentInput: AccountContentInput;
  AccountContentPatchInput: AccountContentPatchInput;
  AccountListFiltersInput: AccountListFiltersInput;
  AccountPatchInput: AccountPatchInput;
  AccountReplaceInput: AccountReplaceInput;
  AccountsDeleteResponse: ResolverTypeWrapper<AccountsDeleteResponse>;
  AccountsListInput: AccountsListInput;
  AccountsListResponse: ResolverTypeWrapper<AccountsListResponse>;
  AccountsResponse: ResolverTypeWrapper<AccountsResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ErrorResponse: ResolverTypeWrapper<ErrorResponse>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account;
  AccountContent: AccountContent;
  AccountContentInput: AccountContentInput;
  AccountContentPatchInput: AccountContentPatchInput;
  AccountListFiltersInput: AccountListFiltersInput;
  AccountPatchInput: AccountPatchInput;
  AccountReplaceInput: AccountReplaceInput;
  AccountsDeleteResponse: AccountsDeleteResponse;
  AccountsListInput: AccountsListInput;
  AccountsListResponse: AccountsListResponse;
  AccountsResponse: AccountsResponse;
  Boolean: Scalars['Boolean'];
  ErrorResponse: ErrorResponse;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Query: {};
  String: Scalars['String'];
}>;

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  content?: Resolver<ResolversTypes['AccountContent'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountContent'] = ResolversParentTypes['AccountContent']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountsDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountsDeleteResponse'] = ResolversParentTypes['AccountsDeleteResponse']> = ResolversObject<{
  deletedIds?: Resolver<Array<Maybe<ResolversTypes['ID']>>, ParentType, ContextType>;
  errors?: Resolver<Array<Maybe<ResolversTypes['ErrorResponse']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountsListResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountsListResponse'] = ResolversParentTypes['AccountsListResponse']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  records?: Resolver<Maybe<Array<Maybe<ResolversTypes['Account']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountsResponse'] = ResolversParentTypes['AccountsResponse']> = ResolversObject<{
  errors?: Resolver<Array<Maybe<ResolversTypes['ErrorResponse']>>, ParentType, ContextType>;
  records?: Resolver<Array<Maybe<ResolversTypes['Account']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ErrorResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ErrorResponse'] = ResolversParentTypes['ErrorResponse']> = ResolversObject<{
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  accountsCreate?: Resolver<Maybe<ResolversTypes['AccountsResponse']>, ParentType, ContextType, RequireFields<MutationAccountsCreateArgs, 'contents'>>;
  accountsDelete?: Resolver<Maybe<ResolversTypes['AccountsDeleteResponse']>, ParentType, ContextType, RequireFields<MutationAccountsDeleteArgs, 'ids'>>;
  accountsPatch?: Resolver<Maybe<ResolversTypes['AccountsResponse']>, ParentType, ContextType, RequireFields<MutationAccountsPatchArgs, 'records'>>;
  accountsReplace?: Resolver<Maybe<ResolversTypes['AccountsResponse']>, ParentType, ContextType, RequireFields<MutationAccountsReplaceArgs, 'records'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  accountsGetByIds?: Resolver<Maybe<ResolversTypes['AccountsResponse']>, ParentType, ContextType, RequireFields<QueryAccountsGetByIdsArgs, 'ids'>>;
  accountsList?: Resolver<Maybe<ResolversTypes['AccountsListResponse']>, ParentType, ContextType, Partial<QueryAccountsListArgs>>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  AccountContent?: AccountContentResolvers<ContextType>;
  AccountsDeleteResponse?: AccountsDeleteResponseResolvers<ContextType>;
  AccountsListResponse?: AccountsListResponseResolvers<ContextType>;
  AccountsResponse?: AccountsResponseResolvers<ContextType>;
  ErrorResponse?: ErrorResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

