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

export type AccountCreateInput = {
  content: AccountContentInput;
};

export type AccountDeleteInput = {
  id: Scalars['ID'];
};

export type AccountPatchInput = {
  content: AccountContentPatchInput;
  id: Scalars['ID'];
};

export type AccountReplaceInput = {
  content: AccountContentInput;
  id: Scalars['ID'];
};

export type AccountsGetByIdResponse = {
  __typename?: 'AccountsGetByIdResponse';
  error?: Maybe<Array<Maybe<ErrorResponse>>>;
  success?: Maybe<Array<Maybe<Account>>>;
};

export type AccountsListInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type AccountsListResponse = {
  __typename?: 'AccountsListResponse';
  code?: Maybe<Scalars['Int']>;
  message: Scalars['String'];
  records?: Maybe<Array<Maybe<Account>>>;
};

export type ErrorResponse = {
  __typename?: 'ErrorResponse';
  code: Scalars['Int'];
  id: Scalars['ID'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  accountsCreate?: Maybe<RecordsMutationResponse>;
  accountsDelete?: Maybe<RecordsMutationResponse>;
  accountsPatch?: Maybe<RecordsMutationResponse>;
  accountsReplace?: Maybe<RecordsMutationResponse>;
};


export type MutationAccountsCreateArgs = {
  records: Array<InputMaybe<AccountCreateInput>>;
};


export type MutationAccountsDeleteArgs = {
  records: Array<InputMaybe<AccountDeleteInput>>;
};


export type MutationAccountsPatchArgs = {
  records: Array<InputMaybe<AccountPatchInput>>;
};


export type MutationAccountsReplaceArgs = {
  records: Array<InputMaybe<AccountReplaceInput>>;
};

export type Query = {
  __typename?: 'Query';
  accountsGetById?: Maybe<AccountsGetByIdResponse>;
  accountsList?: Maybe<AccountsListResponse>;
};


export type QueryAccountsGetByIdArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryAccountsListArgs = {
  query?: InputMaybe<AccountsListInput>;
};

export type RecordsMutationResponse = {
  __typename?: 'RecordsMutationResponse';
  error: Array<ErrorResponse>;
  success: Array<Scalars['ID']>;
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
  AccountCreateInput: AccountCreateInput;
  AccountDeleteInput: AccountDeleteInput;
  AccountPatchInput: AccountPatchInput;
  AccountReplaceInput: AccountReplaceInput;
  AccountsGetByIdResponse: ResolverTypeWrapper<AccountsGetByIdResponse>;
  AccountsListInput: AccountsListInput;
  AccountsListResponse: ResolverTypeWrapper<AccountsListResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ErrorResponse: ResolverTypeWrapper<ErrorResponse>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  RecordsMutationResponse: ResolverTypeWrapper<RecordsMutationResponse>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account;
  AccountContent: AccountContent;
  AccountContentInput: AccountContentInput;
  AccountContentPatchInput: AccountContentPatchInput;
  AccountCreateInput: AccountCreateInput;
  AccountDeleteInput: AccountDeleteInput;
  AccountPatchInput: AccountPatchInput;
  AccountReplaceInput: AccountReplaceInput;
  AccountsGetByIdResponse: AccountsGetByIdResponse;
  AccountsListInput: AccountsListInput;
  AccountsListResponse: AccountsListResponse;
  Boolean: Scalars['Boolean'];
  ErrorResponse: ErrorResponse;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Query: {};
  RecordsMutationResponse: RecordsMutationResponse;
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

export type AccountsGetByIdResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountsGetByIdResponse'] = ResolversParentTypes['AccountsGetByIdResponse']> = ResolversObject<{
  error?: Resolver<Maybe<Array<Maybe<ResolversTypes['ErrorResponse']>>>, ParentType, ContextType>;
  success?: Resolver<Maybe<Array<Maybe<ResolversTypes['Account']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountsListResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountsListResponse'] = ResolversParentTypes['AccountsListResponse']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  records?: Resolver<Maybe<Array<Maybe<ResolversTypes['Account']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ErrorResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ErrorResponse'] = ResolversParentTypes['ErrorResponse']> = ResolversObject<{
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  accountsCreate?: Resolver<Maybe<ResolversTypes['RecordsMutationResponse']>, ParentType, ContextType, RequireFields<MutationAccountsCreateArgs, 'records'>>;
  accountsDelete?: Resolver<Maybe<ResolversTypes['RecordsMutationResponse']>, ParentType, ContextType, RequireFields<MutationAccountsDeleteArgs, 'records'>>;
  accountsPatch?: Resolver<Maybe<ResolversTypes['RecordsMutationResponse']>, ParentType, ContextType, RequireFields<MutationAccountsPatchArgs, 'records'>>;
  accountsReplace?: Resolver<Maybe<ResolversTypes['RecordsMutationResponse']>, ParentType, ContextType, RequireFields<MutationAccountsReplaceArgs, 'records'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  accountsGetById?: Resolver<Maybe<ResolversTypes['AccountsGetByIdResponse']>, ParentType, ContextType, RequireFields<QueryAccountsGetByIdArgs, 'ids'>>;
  accountsList?: Resolver<Maybe<ResolversTypes['AccountsListResponse']>, ParentType, ContextType, Partial<QueryAccountsListArgs>>;
}>;

export type RecordsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecordsMutationResponse'] = ResolversParentTypes['RecordsMutationResponse']> = ResolversObject<{
  error?: Resolver<Array<ResolversTypes['ErrorResponse']>, ParentType, ContextType>;
  success?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  AccountContent?: AccountContentResolvers<ContextType>;
  AccountsGetByIdResponse?: AccountsGetByIdResponseResolvers<ContextType>;
  AccountsListResponse?: AccountsListResponseResolvers<ContextType>;
  ErrorResponse?: ErrorResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RecordsMutationResponse?: RecordsMutationResponseResolvers<ContextType>;
}>;

