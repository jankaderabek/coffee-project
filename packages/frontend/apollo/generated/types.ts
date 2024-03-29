import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Coffee = {
  __typename?: 'Coffee';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  roaster: Scalars['String'];
  title: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  process?: Maybe<Scalars['String']>;
  characteristics?: Maybe<Scalars['String']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
};


export type CoffeeReviewsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CoffeeAggregator = {
  __typename?: 'CoffeeAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CoffeeConnection = {
  __typename?: 'CoffeeConnection';
  values?: Maybe<Array<Maybe<Coffee>>>;
  groupBy?: Maybe<CoffeeGroupBy>;
  aggregate?: Maybe<CoffeeAggregator>;
};

export type CoffeeConnectionCharacteristics = {
  __typename?: 'CoffeeConnectionCharacteristics';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CoffeeConnection>;
};

export type CoffeeConnectionCountry = {
  __typename?: 'CoffeeConnectionCountry';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CoffeeConnection>;
};

export type CoffeeConnectionCreated_At = {
  __typename?: 'CoffeeConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CoffeeConnection>;
};

export type CoffeeConnectionId = {
  __typename?: 'CoffeeConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CoffeeConnection>;
};

export type CoffeeConnectionProcess = {
  __typename?: 'CoffeeConnectionProcess';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CoffeeConnection>;
};

export type CoffeeConnectionRoaster = {
  __typename?: 'CoffeeConnectionRoaster';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CoffeeConnection>;
};

export type CoffeeConnectionTitle = {
  __typename?: 'CoffeeConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CoffeeConnection>;
};

export type CoffeeConnectionUpdated_At = {
  __typename?: 'CoffeeConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CoffeeConnection>;
};

export type CoffeeGroupBy = {
  __typename?: 'CoffeeGroupBy';
  id?: Maybe<Array<Maybe<CoffeeConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CoffeeConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CoffeeConnectionUpdated_At>>>;
  roaster?: Maybe<Array<Maybe<CoffeeConnectionRoaster>>>;
  title?: Maybe<Array<Maybe<CoffeeConnectionTitle>>>;
  country?: Maybe<Array<Maybe<CoffeeConnectionCountry>>>;
  process?: Maybe<Array<Maybe<CoffeeConnectionProcess>>>;
  characteristics?: Maybe<Array<Maybe<CoffeeConnectionCharacteristics>>>;
};

export type CoffeeInput = {
  roaster: Scalars['String'];
  title: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  process?: Maybe<Scalars['String']>;
  characteristics?: Maybe<Scalars['String']>;
  reviews?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateCoffeeInput = {
  data?: Maybe<CoffeeInput>;
};

export type CreateCoffeePayload = {
  __typename?: 'createCoffeePayload';
  coffee?: Maybe<Coffee>;
};

export type CreateReviewInput = {
  data?: Maybe<ReviewInput>;
};

export type CreateReviewPayload = {
  __typename?: 'createReviewPayload';
  review?: Maybe<Review>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};



export type DeleteCoffeeInput = {
  where?: Maybe<InputId>;
};

export type DeleteCoffeePayload = {
  __typename?: 'deleteCoffeePayload';
  coffee?: Maybe<Coffee>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteReviewInput = {
  where?: Maybe<InputId>;
};

export type DeleteReviewPayload = {
  __typename?: 'deleteReviewPayload';
  review?: Maybe<Review>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditCoffeeInput = {
  roaster?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  process?: Maybe<Scalars['String']>;
  characteristics?: Maybe<Scalars['String']>;
  reviews?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditReviewInput = {
  brewing?: Maybe<Scalars['String']>;
  stars?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  coffee?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type InputId = {
  id: Scalars['ID'];
};



export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Coffee | CoffeeConnection | CoffeeAggregator | CoffeeGroupBy | CoffeeConnectionId | CoffeeConnectionCreated_At | CoffeeConnectionUpdated_At | CoffeeConnectionRoaster | CoffeeConnectionTitle | CoffeeConnectionCountry | CoffeeConnectionProcess | CoffeeConnectionCharacteristics | CreateCoffeePayload | UpdateCoffeePayload | DeleteCoffeePayload | Review | ReviewConnection | ReviewAggregator | ReviewAggregatorSum | ReviewAggregatorAvg | ReviewAggregatorMin | ReviewAggregatorMax | ReviewGroupBy | ReviewConnectionId | ReviewConnectionCreated_At | ReviewConnectionUpdated_At | ReviewConnectionBrewing | ReviewConnectionStars | ReviewConnectionComment | ReviewConnectionCoffee | CreateReviewPayload | UpdateReviewPayload | DeleteReviewPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createCoffee?: Maybe<CreateCoffeePayload>;
  updateCoffee?: Maybe<UpdateCoffeePayload>;
  deleteCoffee?: Maybe<DeleteCoffeePayload>;
  createReview?: Maybe<CreateReviewPayload>;
  updateReview?: Maybe<UpdateReviewPayload>;
  deleteReview?: Maybe<DeleteReviewPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateCoffeeArgs = {
  input?: Maybe<CreateCoffeeInput>;
};


export type MutationUpdateCoffeeArgs = {
  input?: Maybe<UpdateCoffeeInput>;
};


export type MutationDeleteCoffeeArgs = {
  input?: Maybe<DeleteCoffeeInput>;
};


export type MutationCreateReviewArgs = {
  input?: Maybe<CreateReviewInput>;
};


export type MutationUpdateReviewArgs = {
  input?: Maybe<UpdateReviewInput>;
};


export type MutationDeleteReviewArgs = {
  input?: Maybe<DeleteReviewInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  coffee?: Maybe<Coffee>;
  coffees?: Maybe<Array<Maybe<Coffee>>>;
  coffeesConnection?: Maybe<CoffeeConnection>;
  review?: Maybe<Review>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  reviewsConnection?: Maybe<ReviewConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryCoffeeArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCoffeesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryCoffeesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryReviewArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryReviewsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryReviewsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Review = {
  __typename?: 'Review';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  brewing: Scalars['String'];
  stars: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
  coffee?: Maybe<Coffee>;
};

export type ReviewAggregator = {
  __typename?: 'ReviewAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<ReviewAggregatorSum>;
  avg?: Maybe<ReviewAggregatorAvg>;
  min?: Maybe<ReviewAggregatorMin>;
  max?: Maybe<ReviewAggregatorMax>;
};

export type ReviewAggregatorAvg = {
  __typename?: 'ReviewAggregatorAvg';
  stars?: Maybe<Scalars['Float']>;
};

export type ReviewAggregatorMax = {
  __typename?: 'ReviewAggregatorMax';
  stars?: Maybe<Scalars['Float']>;
};

export type ReviewAggregatorMin = {
  __typename?: 'ReviewAggregatorMin';
  stars?: Maybe<Scalars['Float']>;
};

export type ReviewAggregatorSum = {
  __typename?: 'ReviewAggregatorSum';
  stars?: Maybe<Scalars['Float']>;
};

export type ReviewConnection = {
  __typename?: 'ReviewConnection';
  values?: Maybe<Array<Maybe<Review>>>;
  groupBy?: Maybe<ReviewGroupBy>;
  aggregate?: Maybe<ReviewAggregator>;
};

export type ReviewConnectionBrewing = {
  __typename?: 'ReviewConnectionBrewing';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewConnectionCoffee = {
  __typename?: 'ReviewConnectionCoffee';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewConnectionComment = {
  __typename?: 'ReviewConnectionComment';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewConnectionCreated_At = {
  __typename?: 'ReviewConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewConnectionId = {
  __typename?: 'ReviewConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewConnectionStars = {
  __typename?: 'ReviewConnectionStars';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewConnectionUpdated_At = {
  __typename?: 'ReviewConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewGroupBy = {
  __typename?: 'ReviewGroupBy';
  id?: Maybe<Array<Maybe<ReviewConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ReviewConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ReviewConnectionUpdated_At>>>;
  brewing?: Maybe<Array<Maybe<ReviewConnectionBrewing>>>;
  stars?: Maybe<Array<Maybe<ReviewConnectionStars>>>;
  comment?: Maybe<Array<Maybe<ReviewConnectionComment>>>;
  coffee?: Maybe<Array<Maybe<ReviewConnectionCoffee>>>;
};

export type ReviewInput = {
  brewing: Scalars['String'];
  stars?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  coffee?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type UpdateCoffeeInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCoffeeInput>;
};

export type UpdateCoffeePayload = {
  __typename?: 'updateCoffeePayload';
  coffee?: Maybe<Coffee>;
};

export type UpdateReviewInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditReviewInput>;
};

export type UpdateReviewPayload = {
  __typename?: 'updateReviewPayload';
  review?: Maybe<Review>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};


export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type GetReviewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetReviewsQuery = (
  { __typename?: 'Query' }
  & { reviews?: Maybe<Array<Maybe<(
    { __typename?: 'Review' }
    & Pick<Review, 'id' | 'comment'>
    & { coffee?: Maybe<(
      { __typename?: 'Coffee' }
      & Pick<Coffee, 'title'>
    )> }
  )>>> }
);

export type GetReviewQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetReviewQuery = (
  { __typename?: 'Query' }
  & { review?: Maybe<(
    { __typename?: 'Review' }
    & ReviewDataFragment
  )> }
);

export type CoffeeDetailFragment = (
  { __typename?: 'Coffee' }
  & Pick<Coffee, 'roaster' | 'title' | 'characteristics' | 'process' | 'country'>
);

export type CreatedCoffeeDetailFragment = (
  { __typename?: 'Coffee' }
  & Pick<Coffee, 'id'>
  & CoffeeDetailFragment
);

export type GetCoffeeListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoffeeListQuery = (
  { __typename?: 'Query' }
  & { coffees?: Maybe<Array<Maybe<(
    { __typename?: 'Coffee' }
    & Pick<Coffee, 'id'>
    & CoffeeDetailFragment
  )>>> }
);

export type SendCoffeeMutationVariables = Exact<{
  input?: Maybe<CreateCoffeeInput>;
}>;


export type SendCoffeeMutation = (
  { __typename?: 'Mutation' }
  & { createCoffee?: Maybe<(
    { __typename?: 'createCoffeePayload' }
    & { coffee?: Maybe<(
      { __typename?: 'Coffee' }
      & CreatedCoffeeDetailFragment
    )> }
  )> }
);

export type EditableTextReviewDataFragment = (
  { __typename?: 'Review' }
  & Pick<Review, 'brewing' | 'stars' | 'comment'>
);

export type ReviewDataFragment = (
  { __typename?: 'Review' }
  & Pick<Review, 'id'>
  & EditableTextReviewDataFragment
);

export type SendReviewMutationVariables = Exact<{
  input?: Maybe<CreateReviewInput>;
}>;


export type SendReviewMutation = (
  { __typename?: 'Mutation' }
  & { createReview?: Maybe<(
    { __typename?: 'createReviewPayload' }
    & { review?: Maybe<(
      { __typename?: 'Review' }
      & { coffee?: Maybe<(
        { __typename?: 'Coffee' }
        & Pick<Coffee, 'id'>
      )> }
      & ReviewDataFragment
    )> }
  )> }
);

export const CoffeeDetailFragmentDoc = gql`
    fragment CoffeeDetail on Coffee {
  roaster
  title
  characteristics
  process
  country
}
    `;
export const CreatedCoffeeDetailFragmentDoc = gql`
    fragment CreatedCoffeeDetail on Coffee {
  ...CoffeeDetail
  id
}
    ${CoffeeDetailFragmentDoc}`;
export const EditableTextReviewDataFragmentDoc = gql`
    fragment EditableTextReviewData on Review {
  brewing
  stars
  comment
}
    `;
export const ReviewDataFragmentDoc = gql`
    fragment ReviewData on Review {
  ...EditableTextReviewData
  id
}
    ${EditableTextReviewDataFragmentDoc}`;
export const GetReviewsDocument = gql`
    query getReviews {
  reviews {
    id
    coffee {
      title
    }
    comment
  }
}
    `;

/**
 * __useGetReviewsQuery__
 *
 * To run a query within a Vue component, call `useGetReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReviewsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetReviewsQuery(
 *   {
 *   }
 * );
 */
export function useGetReviewsQuery(options: VueApolloComposable.UseQueryOptions<GetReviewsQuery, GetReviewsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetReviewsQuery, GetReviewsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetReviewsQuery, GetReviewsQueryVariables>> = {}) {
            return VueApolloComposable.useQuery<GetReviewsQuery, undefined>(GetReviewsDocument, undefined, options);
          }
export type GetReviewsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetReviewsQuery, GetReviewsQueryVariables>;
export const GetReviewDocument = gql`
    query getReview($id: ID!) {
  review(id: $id) {
    ...ReviewData
  }
}
    ${ReviewDataFragmentDoc}`;

/**
 * __useGetReviewQuery__
 *
 * To run a query within a Vue component, call `useGetReviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReviewQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetReviewQuery(
 *   {
 *      id: // value for 'id'
 *   }
 * );
 */
export function useGetReviewQuery(variables: GetReviewQueryVariables | VueCompositionApi.Ref<GetReviewQueryVariables> | ReactiveFunction<GetReviewQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetReviewQuery, GetReviewQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetReviewQuery, GetReviewQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetReviewQuery, GetReviewQueryVariables>> = {}) {
            return VueApolloComposable.useQuery<GetReviewQuery, GetReviewQueryVariables>(GetReviewDocument, variables, options);
          }
export type GetReviewQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetReviewQuery, GetReviewQueryVariables>;
export const GetCoffeeListDocument = gql`
    query getCoffeeList {
  coffees {
    id
    ...CoffeeDetail
  }
}
    ${CoffeeDetailFragmentDoc}`;

/**
 * __useGetCoffeeListQuery__
 *
 * To run a query within a Vue component, call `useGetCoffeeListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCoffeeListQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetCoffeeListQuery(
 *   {
 *   }
 * );
 */
export function useGetCoffeeListQuery(options: VueApolloComposable.UseQueryOptions<GetCoffeeListQuery, GetCoffeeListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetCoffeeListQuery, GetCoffeeListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetCoffeeListQuery, GetCoffeeListQueryVariables>> = {}) {
            return VueApolloComposable.useQuery<GetCoffeeListQuery, undefined>(GetCoffeeListDocument, undefined, options);
          }
export type GetCoffeeListQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetCoffeeListQuery, GetCoffeeListQueryVariables>;
export const SendCoffeeDocument = gql`
    mutation sendCoffee($input: createCoffeeInput) {
  createCoffee(input: $input) {
    coffee {
      ...CreatedCoffeeDetail
    }
  }
}
    ${CreatedCoffeeDetailFragmentDoc}`;

/**
 * __useSendCoffeeMutation__
 *
 * To run a mutation, you first call `useSendCoffeeMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSendCoffeeMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSendCoffeeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendCoffeeMutation(options: VueApolloComposable.UseMutationOptions<SendCoffeeMutation, SendCoffeeMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<SendCoffeeMutation, SendCoffeeMutationVariables>> = {}) {
            return VueApolloComposable.useMutation<SendCoffeeMutation, SendCoffeeMutationVariables>(SendCoffeeDocument, options);
          }
export type SendCoffeeMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<SendCoffeeMutation, SendCoffeeMutationVariables>;
export const SendReviewDocument = gql`
    mutation sendReview($input: createReviewInput) {
  createReview(input: $input) {
    review {
      ...ReviewData
      coffee {
        id
      }
    }
  }
}
    ${ReviewDataFragmentDoc}`;

/**
 * __useSendReviewMutation__
 *
 * To run a mutation, you first call `useSendReviewMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSendReviewMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSendReviewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendReviewMutation(options: VueApolloComposable.UseMutationOptions<SendReviewMutation, SendReviewMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<SendReviewMutation, SendReviewMutationVariables>> = {}) {
            return VueApolloComposable.useMutation<SendReviewMutation, SendReviewMutationVariables>(SendReviewDocument, options);
          }
export type SendReviewMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<SendReviewMutation, SendReviewMutationVariables>;