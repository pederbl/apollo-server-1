import { GraphQLResolveInfo } from 'graphql';
import { MyContext } from '../pages/api/graphql';
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

export type AccountPatchInput = {
  content: AccountContentPatchInput;
  id: Scalars['ID'];
};

export type AccountReplaceInput = {
  content: AccountContentInput;
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  accountsCreate?: Maybe<Array<Maybe<RecordMutationResponse>>>;
  accountsDelete?: Maybe<Array<Maybe<RecordMutationResponse>>>;
  accountsPatch?: Maybe<Array<Maybe<RecordMutationResponse>>>;
  accountsReplace?: Maybe<Array<Maybe<RecordMutationResponse>>>;
};


export type MutationAccountsCreateArgs = {
  records: Array<InputMaybe<AccountCreateInput>>;
};


export type MutationAccountsDeleteArgs = {
  records: Array<InputMaybe<RecordDeleteInput>>;
};


export type MutationAccountsPatchArgs = {
  records: Array<InputMaybe<AccountReplaceInput>>;
};


export type MutationAccountsReplaceArgs = {
  records: Array<InputMaybe<AccountReplaceInput>>;
};

export type Query = {
  __typename?: 'Query';
  accountsGet?: Maybe<Array<Maybe<Account>>>;
};

export type RecordDeleteInput = {
  id: Scalars['ID'];
};

export type RecordMutationResponse = {
  __typename?: 'RecordMutationResponse';
  code: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
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
  AccountPatchInput: AccountPatchInput;
  AccountReplaceInput: AccountReplaceInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  RecordDeleteInput: RecordDeleteInput;
  RecordMutationResponse: ResolverTypeWrapper<RecordMutationResponse>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account;
  AccountContent: AccountContent;
  AccountContentInput: AccountContentInput;
  AccountContentPatchInput: AccountContentPatchInput;
  AccountCreateInput: AccountCreateInput;
  AccountPatchInput: AccountPatchInput;
  AccountReplaceInput: AccountReplaceInput;
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Mutation: {};
  Query: {};
  RecordDeleteInput: RecordDeleteInput;
  RecordMutationResponse: RecordMutationResponse;
  String: Scalars['String'];
}>;

export type AccountResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  content?: Resolver<ResolversTypes['AccountContent'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountContentResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['AccountContent'] = ResolversParentTypes['AccountContent']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  accountsCreate?: Resolver<Maybe<Array<Maybe<ResolversTypes['RecordMutationResponse']>>>, ParentType, ContextType, RequireFields<MutationAccountsCreateArgs, 'records'>>;
  accountsDelete?: Resolver<Maybe<Array<Maybe<ResolversTypes['RecordMutationResponse']>>>, ParentType, ContextType, RequireFields<MutationAccountsDeleteArgs, 'records'>>;
  accountsPatch?: Resolver<Maybe<Array<Maybe<ResolversTypes['RecordMutationResponse']>>>, ParentType, ContextType, RequireFields<MutationAccountsPatchArgs, 'records'>>;
  accountsReplace?: Resolver<Maybe<Array<Maybe<ResolversTypes['RecordMutationResponse']>>>, ParentType, ContextType, RequireFields<MutationAccountsReplaceArgs, 'records'>>;
}>;

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  accountsGet?: Resolver<Maybe<Array<Maybe<ResolversTypes['Account']>>>, ParentType, ContextType>;
}>;

export type RecordMutationResponseResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['RecordMutationResponse'] = ResolversParentTypes['RecordMutationResponse']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MyContext> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  AccountContent?: AccountContentResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RecordMutationResponse?: RecordMutationResponseResolvers<ContextType>;
}>;

