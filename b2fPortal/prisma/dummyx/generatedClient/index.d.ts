
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model admin_sessions
 * 
 */
export type admin_sessions = $Result.DefaultSelection<Prisma.$admin_sessionsPayload>
/**
 * Model admins
 * 
 */
export type admins = $Result.DefaultSelection<Prisma.$adminsPayload>
/**
 * Model contact_requests
 * 
 */
export type contact_requests = $Result.DefaultSelection<Prisma.$contact_requestsPayload>
/**
 * Model user_sessions
 * 
 */
export type user_sessions = $Result.DefaultSelection<Prisma.$user_sessionsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model clients
 * 
 */
export type clients = $Result.DefaultSelection<Prisma.$clientsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const users_gender: {
  male: 'male',
  female: 'female',
  other: 'other'
};

export type users_gender = (typeof users_gender)[keyof typeof users_gender]

}

export type users_gender = $Enums.users_gender

export const users_gender: typeof $Enums.users_gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admin_sessions
 * const admin_sessions = await prisma.admin_sessions.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admin_sessions
   * const admin_sessions = await prisma.admin_sessions.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Executes a typed SQL query and returns a typed result
   * @example
   * ```
   * import { myQuery } from '@prisma/client/sql'
   * 
   * const result = await prisma.$queryRawTyped(myQuery())
   * ```
   */
  $queryRawTyped<T>(typedSql: runtime.TypedSql<unknown[], T>): Prisma.PrismaPromise<T[]>

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.admin_sessions`: Exposes CRUD operations for the **admin_sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admin_sessions
    * const admin_sessions = await prisma.admin_sessions.findMany()
    * ```
    */
  get admin_sessions(): Prisma.admin_sessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admins`: Exposes CRUD operations for the **admins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admins.findMany()
    * ```
    */
  get admins(): Prisma.adminsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact_requests`: Exposes CRUD operations for the **contact_requests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contact_requests
    * const contact_requests = await prisma.contact_requests.findMany()
    * ```
    */
  get contact_requests(): Prisma.contact_requestsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_sessions`: Exposes CRUD operations for the **user_sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_sessions
    * const user_sessions = await prisma.user_sessions.findMany()
    * ```
    */
  get user_sessions(): Prisma.user_sessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clients`: Exposes CRUD operations for the **clients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.clients.findMany()
    * ```
    */
  get clients(): Prisma.clientsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    admin_sessions: 'admin_sessions',
    admins: 'admins',
    contact_requests: 'contact_requests',
    user_sessions: 'user_sessions',
    users: 'users',
    clients: 'clients'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "admin_sessions" | "admins" | "contact_requests" | "user_sessions" | "users" | "clients"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admin_sessions: {
        payload: Prisma.$admin_sessionsPayload<ExtArgs>
        fields: Prisma.admin_sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.admin_sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.admin_sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_sessionsPayload>
          }
          findFirst: {
            args: Prisma.admin_sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.admin_sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_sessionsPayload>
          }
          findMany: {
            args: Prisma.admin_sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_sessionsPayload>[]
          }
          create: {
            args: Prisma.admin_sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_sessionsPayload>
          }
          createMany: {
            args: Prisma.admin_sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.admin_sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_sessionsPayload>
          }
          update: {
            args: Prisma.admin_sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_sessionsPayload>
          }
          deleteMany: {
            args: Prisma.admin_sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.admin_sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.admin_sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_sessionsPayload>
          }
          aggregate: {
            args: Prisma.Admin_sessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin_sessions>
          }
          groupBy: {
            args: Prisma.admin_sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Admin_sessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.admin_sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<Admin_sessionsCountAggregateOutputType> | number
          }
        }
      }
      admins: {
        payload: Prisma.$adminsPayload<ExtArgs>
        fields: Prisma.adminsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          findFirst: {
            args: Prisma.adminsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          findMany: {
            args: Prisma.adminsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>[]
          }
          create: {
            args: Prisma.adminsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          createMany: {
            args: Prisma.adminsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.adminsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          update: {
            args: Prisma.adminsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          deleteMany: {
            args: Prisma.adminsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.adminsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          aggregate: {
            args: Prisma.AdminsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmins>
          }
          groupBy: {
            args: Prisma.adminsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminsGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminsCountArgs<ExtArgs>
            result: $Utils.Optional<AdminsCountAggregateOutputType> | number
          }
        }
      }
      contact_requests: {
        payload: Prisma.$contact_requestsPayload<ExtArgs>
        fields: Prisma.contact_requestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contact_requestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_requestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contact_requestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_requestsPayload>
          }
          findFirst: {
            args: Prisma.contact_requestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_requestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contact_requestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_requestsPayload>
          }
          findMany: {
            args: Prisma.contact_requestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_requestsPayload>[]
          }
          create: {
            args: Prisma.contact_requestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_requestsPayload>
          }
          createMany: {
            args: Prisma.contact_requestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.contact_requestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_requestsPayload>
          }
          update: {
            args: Prisma.contact_requestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_requestsPayload>
          }
          deleteMany: {
            args: Prisma.contact_requestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contact_requestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.contact_requestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_requestsPayload>
          }
          aggregate: {
            args: Prisma.Contact_requestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact_requests>
          }
          groupBy: {
            args: Prisma.contact_requestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Contact_requestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.contact_requestsCountArgs<ExtArgs>
            result: $Utils.Optional<Contact_requestsCountAggregateOutputType> | number
          }
        }
      }
      user_sessions: {
        payload: Prisma.$user_sessionsPayload<ExtArgs>
        fields: Prisma.user_sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload>
          }
          findFirst: {
            args: Prisma.user_sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload>
          }
          findMany: {
            args: Prisma.user_sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload>[]
          }
          create: {
            args: Prisma.user_sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload>
          }
          createMany: {
            args: Prisma.user_sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload>
          }
          update: {
            args: Prisma.user_sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload>
          }
          deleteMany: {
            args: Prisma.user_sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload>
          }
          aggregate: {
            args: Prisma.User_sessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_sessions>
          }
          groupBy: {
            args: Prisma.user_sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_sessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<User_sessionsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      clients: {
        payload: Prisma.$clientsPayload<ExtArgs>
        fields: Prisma.clientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          findFirst: {
            args: Prisma.clientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          findMany: {
            args: Prisma.clientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>[]
          }
          create: {
            args: Prisma.clientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          createMany: {
            args: Prisma.clientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.clientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          update: {
            args: Prisma.clientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          deleteMany: {
            args: Prisma.clientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          aggregate: {
            args: Prisma.ClientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClients>
          }
          groupBy: {
            args: Prisma.clientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.clientsCountArgs<ExtArgs>
            result: $Utils.Optional<ClientsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRawTyped: {
          args: runtime.UnknownTypedSql,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin_sessions?: admin_sessionsOmit
    admins?: adminsOmit
    contact_requests?: contact_requestsOmit
    user_sessions?: user_sessionsOmit
    users?: usersOmit
    clients?: clientsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AdminsCountOutputType
   */

  export type AdminsCountOutputType = {
    admin_sessions: number
  }

  export type AdminsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin_sessions?: boolean | AdminsCountOutputTypeCountAdmin_sessionsArgs
  }

  // Custom InputTypes
  /**
   * AdminsCountOutputType without action
   */
  export type AdminsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminsCountOutputType
     */
    select?: AdminsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminsCountOutputType without action
   */
  export type AdminsCountOutputTypeCountAdmin_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: admin_sessionsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    user_sessions: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_sessions?: boolean | UsersCountOutputTypeCountUser_sessionsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_sessionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admin_sessions
   */

  export type AggregateAdmin_sessions = {
    _count: Admin_sessionsCountAggregateOutputType | null
    _avg: Admin_sessionsAvgAggregateOutputType | null
    _sum: Admin_sessionsSumAggregateOutputType | null
    _min: Admin_sessionsMinAggregateOutputType | null
    _max: Admin_sessionsMaxAggregateOutputType | null
  }

  export type Admin_sessionsAvgAggregateOutputType = {
    adminSessionId: number | null
    adminId: number | null
    createdAt: number | null
    validTill: number | null
    refreshTokenId: number | null
  }

  export type Admin_sessionsSumAggregateOutputType = {
    adminSessionId: number | null
    adminId: number | null
    createdAt: number | null
    validTill: number | null
    refreshTokenId: number | null
  }

  export type Admin_sessionsMinAggregateOutputType = {
    adminSessionId: number | null
    adminId: number | null
    createdAt: number | null
    validTill: number | null
    refreshTokenId: number | null
  }

  export type Admin_sessionsMaxAggregateOutputType = {
    adminSessionId: number | null
    adminId: number | null
    createdAt: number | null
    validTill: number | null
    refreshTokenId: number | null
  }

  export type Admin_sessionsCountAggregateOutputType = {
    adminSessionId: number
    adminId: number
    createdAt: number
    validTill: number
    refreshTokenId: number
    _all: number
  }


  export type Admin_sessionsAvgAggregateInputType = {
    adminSessionId?: true
    adminId?: true
    createdAt?: true
    validTill?: true
    refreshTokenId?: true
  }

  export type Admin_sessionsSumAggregateInputType = {
    adminSessionId?: true
    adminId?: true
    createdAt?: true
    validTill?: true
    refreshTokenId?: true
  }

  export type Admin_sessionsMinAggregateInputType = {
    adminSessionId?: true
    adminId?: true
    createdAt?: true
    validTill?: true
    refreshTokenId?: true
  }

  export type Admin_sessionsMaxAggregateInputType = {
    adminSessionId?: true
    adminId?: true
    createdAt?: true
    validTill?: true
    refreshTokenId?: true
  }

  export type Admin_sessionsCountAggregateInputType = {
    adminSessionId?: true
    adminId?: true
    createdAt?: true
    validTill?: true
    refreshTokenId?: true
    _all?: true
  }

  export type Admin_sessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_sessions to aggregate.
     */
    where?: admin_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_sessions to fetch.
     */
    orderBy?: admin_sessionsOrderByWithRelationInput | admin_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: admin_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admin_sessions
    **/
    _count?: true | Admin_sessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Admin_sessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Admin_sessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Admin_sessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Admin_sessionsMaxAggregateInputType
  }

  export type GetAdmin_sessionsAggregateType<T extends Admin_sessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin_sessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin_sessions[P]>
      : GetScalarType<T[P], AggregateAdmin_sessions[P]>
  }




  export type admin_sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: admin_sessionsWhereInput
    orderBy?: admin_sessionsOrderByWithAggregationInput | admin_sessionsOrderByWithAggregationInput[]
    by: Admin_sessionsScalarFieldEnum[] | Admin_sessionsScalarFieldEnum
    having?: admin_sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Admin_sessionsCountAggregateInputType | true
    _avg?: Admin_sessionsAvgAggregateInputType
    _sum?: Admin_sessionsSumAggregateInputType
    _min?: Admin_sessionsMinAggregateInputType
    _max?: Admin_sessionsMaxAggregateInputType
  }

  export type Admin_sessionsGroupByOutputType = {
    adminSessionId: number
    adminId: number
    createdAt: number
    validTill: number
    refreshTokenId: number
    _count: Admin_sessionsCountAggregateOutputType | null
    _avg: Admin_sessionsAvgAggregateOutputType | null
    _sum: Admin_sessionsSumAggregateOutputType | null
    _min: Admin_sessionsMinAggregateOutputType | null
    _max: Admin_sessionsMaxAggregateOutputType | null
  }

  type GetAdmin_sessionsGroupByPayload<T extends admin_sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Admin_sessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Admin_sessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Admin_sessionsGroupByOutputType[P]>
            : GetScalarType<T[P], Admin_sessionsGroupByOutputType[P]>
        }
      >
    >


  export type admin_sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    adminSessionId?: boolean
    adminId?: boolean
    createdAt?: boolean
    validTill?: boolean
    refreshTokenId?: boolean
    admins?: boolean | adminsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin_sessions"]>



  export type admin_sessionsSelectScalar = {
    adminSessionId?: boolean
    adminId?: boolean
    createdAt?: boolean
    validTill?: boolean
    refreshTokenId?: boolean
  }

  export type admin_sessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"adminSessionId" | "adminId" | "createdAt" | "validTill" | "refreshTokenId", ExtArgs["result"]["admin_sessions"]>
  export type admin_sessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admins?: boolean | adminsDefaultArgs<ExtArgs>
  }

  export type $admin_sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin_sessions"
    objects: {
      admins: Prisma.$adminsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      adminSessionId: number
      adminId: number
      createdAt: number
      validTill: number
      refreshTokenId: number
    }, ExtArgs["result"]["admin_sessions"]>
    composites: {}
  }

  type admin_sessionsGetPayload<S extends boolean | null | undefined | admin_sessionsDefaultArgs> = $Result.GetResult<Prisma.$admin_sessionsPayload, S>

  type admin_sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<admin_sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Admin_sessionsCountAggregateInputType | true
    }

  export interface admin_sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin_sessions'], meta: { name: 'admin_sessions' } }
    /**
     * Find zero or one Admin_sessions that matches the filter.
     * @param {admin_sessionsFindUniqueArgs} args - Arguments to find a Admin_sessions
     * @example
     * // Get one Admin_sessions
     * const admin_sessions = await prisma.admin_sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends admin_sessionsFindUniqueArgs>(args: SelectSubset<T, admin_sessionsFindUniqueArgs<ExtArgs>>): Prisma__admin_sessionsClient<$Result.GetResult<Prisma.$admin_sessionsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Admin_sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {admin_sessionsFindUniqueOrThrowArgs} args - Arguments to find a Admin_sessions
     * @example
     * // Get one Admin_sessions
     * const admin_sessions = await prisma.admin_sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends admin_sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, admin_sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__admin_sessionsClient<$Result.GetResult<Prisma.$admin_sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Admin_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_sessionsFindFirstArgs} args - Arguments to find a Admin_sessions
     * @example
     * // Get one Admin_sessions
     * const admin_sessions = await prisma.admin_sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends admin_sessionsFindFirstArgs>(args?: SelectSubset<T, admin_sessionsFindFirstArgs<ExtArgs>>): Prisma__admin_sessionsClient<$Result.GetResult<Prisma.$admin_sessionsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Admin_sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_sessionsFindFirstOrThrowArgs} args - Arguments to find a Admin_sessions
     * @example
     * // Get one Admin_sessions
     * const admin_sessions = await prisma.admin_sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends admin_sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, admin_sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__admin_sessionsClient<$Result.GetResult<Prisma.$admin_sessionsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Admin_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admin_sessions
     * const admin_sessions = await prisma.admin_sessions.findMany()
     * 
     * // Get first 10 Admin_sessions
     * const admin_sessions = await prisma.admin_sessions.findMany({ take: 10 })
     * 
     * // Only select the `adminSessionId`
     * const admin_sessionsWithAdminSessionIdOnly = await prisma.admin_sessions.findMany({ select: { adminSessionId: true } })
     * 
     */
    findMany<T extends admin_sessionsFindManyArgs>(args?: SelectSubset<T, admin_sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_sessionsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Admin_sessions.
     * @param {admin_sessionsCreateArgs} args - Arguments to create a Admin_sessions.
     * @example
     * // Create one Admin_sessions
     * const Admin_sessions = await prisma.admin_sessions.create({
     *   data: {
     *     // ... data to create a Admin_sessions
     *   }
     * })
     * 
     */
    create<T extends admin_sessionsCreateArgs>(args: SelectSubset<T, admin_sessionsCreateArgs<ExtArgs>>): Prisma__admin_sessionsClient<$Result.GetResult<Prisma.$admin_sessionsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Admin_sessions.
     * @param {admin_sessionsCreateManyArgs} args - Arguments to create many Admin_sessions.
     * @example
     * // Create many Admin_sessions
     * const admin_sessions = await prisma.admin_sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends admin_sessionsCreateManyArgs>(args?: SelectSubset<T, admin_sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin_sessions.
     * @param {admin_sessionsDeleteArgs} args - Arguments to delete one Admin_sessions.
     * @example
     * // Delete one Admin_sessions
     * const Admin_sessions = await prisma.admin_sessions.delete({
     *   where: {
     *     // ... filter to delete one Admin_sessions
     *   }
     * })
     * 
     */
    delete<T extends admin_sessionsDeleteArgs>(args: SelectSubset<T, admin_sessionsDeleteArgs<ExtArgs>>): Prisma__admin_sessionsClient<$Result.GetResult<Prisma.$admin_sessionsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Admin_sessions.
     * @param {admin_sessionsUpdateArgs} args - Arguments to update one Admin_sessions.
     * @example
     * // Update one Admin_sessions
     * const admin_sessions = await prisma.admin_sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends admin_sessionsUpdateArgs>(args: SelectSubset<T, admin_sessionsUpdateArgs<ExtArgs>>): Prisma__admin_sessionsClient<$Result.GetResult<Prisma.$admin_sessionsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Admin_sessions.
     * @param {admin_sessionsDeleteManyArgs} args - Arguments to filter Admin_sessions to delete.
     * @example
     * // Delete a few Admin_sessions
     * const { count } = await prisma.admin_sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends admin_sessionsDeleteManyArgs>(args?: SelectSubset<T, admin_sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admin_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admin_sessions
     * const admin_sessions = await prisma.admin_sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends admin_sessionsUpdateManyArgs>(args: SelectSubset<T, admin_sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin_sessions.
     * @param {admin_sessionsUpsertArgs} args - Arguments to update or create a Admin_sessions.
     * @example
     * // Update or create a Admin_sessions
     * const admin_sessions = await prisma.admin_sessions.upsert({
     *   create: {
     *     // ... data to create a Admin_sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin_sessions we want to update
     *   }
     * })
     */
    upsert<T extends admin_sessionsUpsertArgs>(args: SelectSubset<T, admin_sessionsUpsertArgs<ExtArgs>>): Prisma__admin_sessionsClient<$Result.GetResult<Prisma.$admin_sessionsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Admin_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_sessionsCountArgs} args - Arguments to filter Admin_sessions to count.
     * @example
     * // Count the number of Admin_sessions
     * const count = await prisma.admin_sessions.count({
     *   where: {
     *     // ... the filter for the Admin_sessions we want to count
     *   }
     * })
    **/
    count<T extends admin_sessionsCountArgs>(
      args?: Subset<T, admin_sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Admin_sessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_sessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Admin_sessionsAggregateArgs>(args: Subset<T, Admin_sessionsAggregateArgs>): Prisma.PrismaPromise<GetAdmin_sessionsAggregateType<T>>

    /**
     * Group by Admin_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_sessionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends admin_sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: admin_sessionsGroupByArgs['orderBy'] }
        : { orderBy?: admin_sessionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, admin_sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmin_sessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin_sessions model
   */
  readonly fields: admin_sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin_sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__admin_sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admins<T extends adminsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, adminsDefaultArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admin_sessions model
   */ 
  interface admin_sessionsFieldRefs {
    readonly adminSessionId: FieldRef<"admin_sessions", 'Int'>
    readonly adminId: FieldRef<"admin_sessions", 'Int'>
    readonly createdAt: FieldRef<"admin_sessions", 'Int'>
    readonly validTill: FieldRef<"admin_sessions", 'Int'>
    readonly refreshTokenId: FieldRef<"admin_sessions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * admin_sessions findUnique
   */
  export type admin_sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_sessions
     */
    select?: admin_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_sessions
     */
    omit?: admin_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which admin_sessions to fetch.
     */
    where: admin_sessionsWhereUniqueInput
  }

  /**
   * admin_sessions findUniqueOrThrow
   */
  export type admin_sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_sessions
     */
    select?: admin_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_sessions
     */
    omit?: admin_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which admin_sessions to fetch.
     */
    where: admin_sessionsWhereUniqueInput
  }

  /**
   * admin_sessions findFirst
   */
  export type admin_sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_sessions
     */
    select?: admin_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_sessions
     */
    omit?: admin_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which admin_sessions to fetch.
     */
    where?: admin_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_sessions to fetch.
     */
    orderBy?: admin_sessionsOrderByWithRelationInput | admin_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_sessions.
     */
    cursor?: admin_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_sessions.
     */
    distinct?: Admin_sessionsScalarFieldEnum | Admin_sessionsScalarFieldEnum[]
  }

  /**
   * admin_sessions findFirstOrThrow
   */
  export type admin_sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_sessions
     */
    select?: admin_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_sessions
     */
    omit?: admin_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which admin_sessions to fetch.
     */
    where?: admin_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_sessions to fetch.
     */
    orderBy?: admin_sessionsOrderByWithRelationInput | admin_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_sessions.
     */
    cursor?: admin_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_sessions.
     */
    distinct?: Admin_sessionsScalarFieldEnum | Admin_sessionsScalarFieldEnum[]
  }

  /**
   * admin_sessions findMany
   */
  export type admin_sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_sessions
     */
    select?: admin_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_sessions
     */
    omit?: admin_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which admin_sessions to fetch.
     */
    where?: admin_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_sessions to fetch.
     */
    orderBy?: admin_sessionsOrderByWithRelationInput | admin_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admin_sessions.
     */
    cursor?: admin_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_sessions.
     */
    skip?: number
    distinct?: Admin_sessionsScalarFieldEnum | Admin_sessionsScalarFieldEnum[]
  }

  /**
   * admin_sessions create
   */
  export type admin_sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_sessions
     */
    select?: admin_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_sessions
     */
    omit?: admin_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_sessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a admin_sessions.
     */
    data: XOR<admin_sessionsCreateInput, admin_sessionsUncheckedCreateInput>
  }

  /**
   * admin_sessions createMany
   */
  export type admin_sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admin_sessions.
     */
    data: admin_sessionsCreateManyInput | admin_sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin_sessions update
   */
  export type admin_sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_sessions
     */
    select?: admin_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_sessions
     */
    omit?: admin_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_sessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a admin_sessions.
     */
    data: XOR<admin_sessionsUpdateInput, admin_sessionsUncheckedUpdateInput>
    /**
     * Choose, which admin_sessions to update.
     */
    where: admin_sessionsWhereUniqueInput
  }

  /**
   * admin_sessions updateMany
   */
  export type admin_sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admin_sessions.
     */
    data: XOR<admin_sessionsUpdateManyMutationInput, admin_sessionsUncheckedUpdateManyInput>
    /**
     * Filter which admin_sessions to update
     */
    where?: admin_sessionsWhereInput
    /**
     * Limit how many admin_sessions to update.
     */
    limit?: number
  }

  /**
   * admin_sessions upsert
   */
  export type admin_sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_sessions
     */
    select?: admin_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_sessions
     */
    omit?: admin_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_sessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the admin_sessions to update in case it exists.
     */
    where: admin_sessionsWhereUniqueInput
    /**
     * In case the admin_sessions found by the `where` argument doesn't exist, create a new admin_sessions with this data.
     */
    create: XOR<admin_sessionsCreateInput, admin_sessionsUncheckedCreateInput>
    /**
     * In case the admin_sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<admin_sessionsUpdateInput, admin_sessionsUncheckedUpdateInput>
  }

  /**
   * admin_sessions delete
   */
  export type admin_sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_sessions
     */
    select?: admin_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_sessions
     */
    omit?: admin_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_sessionsInclude<ExtArgs> | null
    /**
     * Filter which admin_sessions to delete.
     */
    where: admin_sessionsWhereUniqueInput
  }

  /**
   * admin_sessions deleteMany
   */
  export type admin_sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_sessions to delete
     */
    where?: admin_sessionsWhereInput
    /**
     * Limit how many admin_sessions to delete.
     */
    limit?: number
  }

  /**
   * admin_sessions without action
   */
  export type admin_sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_sessions
     */
    select?: admin_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_sessions
     */
    omit?: admin_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_sessionsInclude<ExtArgs> | null
  }


  /**
   * Model admins
   */

  export type AggregateAdmins = {
    _count: AdminsCountAggregateOutputType | null
    _avg: AdminsAvgAggregateOutputType | null
    _sum: AdminsSumAggregateOutputType | null
    _min: AdminsMinAggregateOutputType | null
    _max: AdminsMaxAggregateOutputType | null
  }

  export type AdminsAvgAggregateOutputType = {
    adminId: number | null
    wallet: Decimal | null
    updatedAt: number | null
    createdAt: number | null
  }

  export type AdminsSumAggregateOutputType = {
    adminId: number | null
    wallet: Decimal | null
    updatedAt: number | null
    createdAt: number | null
  }

  export type AdminsMinAggregateOutputType = {
    adminId: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    wallet: Decimal | null
    updatedAt: number | null
    createdAt: number | null
    passwordHash: string | null
  }

  export type AdminsMaxAggregateOutputType = {
    adminId: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    wallet: Decimal | null
    updatedAt: number | null
    createdAt: number | null
    passwordHash: string | null
  }

  export type AdminsCountAggregateOutputType = {
    adminId: number
    firstName: number
    lastName: number
    email: number
    wallet: number
    updatedAt: number
    createdAt: number
    passwordHash: number
    _all: number
  }


  export type AdminsAvgAggregateInputType = {
    adminId?: true
    wallet?: true
    updatedAt?: true
    createdAt?: true
  }

  export type AdminsSumAggregateInputType = {
    adminId?: true
    wallet?: true
    updatedAt?: true
    createdAt?: true
  }

  export type AdminsMinAggregateInputType = {
    adminId?: true
    firstName?: true
    lastName?: true
    email?: true
    wallet?: true
    updatedAt?: true
    createdAt?: true
    passwordHash?: true
  }

  export type AdminsMaxAggregateInputType = {
    adminId?: true
    firstName?: true
    lastName?: true
    email?: true
    wallet?: true
    updatedAt?: true
    createdAt?: true
    passwordHash?: true
  }

  export type AdminsCountAggregateInputType = {
    adminId?: true
    firstName?: true
    lastName?: true
    email?: true
    wallet?: true
    updatedAt?: true
    createdAt?: true
    passwordHash?: true
    _all?: true
  }

  export type AdminsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to aggregate.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminsMaxAggregateInputType
  }

  export type GetAdminsAggregateType<T extends AdminsAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmins[P]>
      : GetScalarType<T[P], AggregateAdmins[P]>
  }




  export type adminsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminsWhereInput
    orderBy?: adminsOrderByWithAggregationInput | adminsOrderByWithAggregationInput[]
    by: AdminsScalarFieldEnum[] | AdminsScalarFieldEnum
    having?: adminsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminsCountAggregateInputType | true
    _avg?: AdminsAvgAggregateInputType
    _sum?: AdminsSumAggregateInputType
    _min?: AdminsMinAggregateInputType
    _max?: AdminsMaxAggregateInputType
  }

  export type AdminsGroupByOutputType = {
    adminId: number
    firstName: string
    lastName: string
    email: string
    wallet: Decimal
    updatedAt: number | null
    createdAt: number
    passwordHash: string
    _count: AdminsCountAggregateOutputType | null
    _avg: AdminsAvgAggregateOutputType | null
    _sum: AdminsSumAggregateOutputType | null
    _min: AdminsMinAggregateOutputType | null
    _max: AdminsMaxAggregateOutputType | null
  }

  type GetAdminsGroupByPayload<T extends adminsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminsGroupByOutputType[P]>
            : GetScalarType<T[P], AdminsGroupByOutputType[P]>
        }
      >
    >


  export type adminsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    adminId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    wallet?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    passwordHash?: boolean
    admin_sessions?: boolean | admins$admin_sessionsArgs<ExtArgs>
    _count?: boolean | AdminsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admins"]>



  export type adminsSelectScalar = {
    adminId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    wallet?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    passwordHash?: boolean
  }

  export type adminsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"adminId" | "firstName" | "lastName" | "email" | "wallet" | "updatedAt" | "createdAt" | "passwordHash", ExtArgs["result"]["admins"]>
  export type adminsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin_sessions?: boolean | admins$admin_sessionsArgs<ExtArgs>
    _count?: boolean | AdminsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $adminsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admins"
    objects: {
      admin_sessions: Prisma.$admin_sessionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      adminId: number
      firstName: string
      lastName: string
      email: string
      wallet: Prisma.Decimal
      updatedAt: number | null
      createdAt: number
      passwordHash: string
    }, ExtArgs["result"]["admins"]>
    composites: {}
  }

  type adminsGetPayload<S extends boolean | null | undefined | adminsDefaultArgs> = $Result.GetResult<Prisma.$adminsPayload, S>

  type adminsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminsCountAggregateInputType | true
    }

  export interface adminsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admins'], meta: { name: 'admins' } }
    /**
     * Find zero or one Admins that matches the filter.
     * @param {adminsFindUniqueArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminsFindUniqueArgs>(args: SelectSubset<T, adminsFindUniqueArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Admins that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminsFindUniqueOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminsFindUniqueOrThrowArgs>(args: SelectSubset<T, adminsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsFindFirstArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminsFindFirstArgs>(args?: SelectSubset<T, adminsFindFirstArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Admins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsFindFirstOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminsFindFirstOrThrowArgs>(args?: SelectSubset<T, adminsFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admins.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admins.findMany({ take: 10 })
     * 
     * // Only select the `adminId`
     * const adminsWithAdminIdOnly = await prisma.admins.findMany({ select: { adminId: true } })
     * 
     */
    findMany<T extends adminsFindManyArgs>(args?: SelectSubset<T, adminsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Admins.
     * @param {adminsCreateArgs} args - Arguments to create a Admins.
     * @example
     * // Create one Admins
     * const Admins = await prisma.admins.create({
     *   data: {
     *     // ... data to create a Admins
     *   }
     * })
     * 
     */
    create<T extends adminsCreateArgs>(args: SelectSubset<T, adminsCreateArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Admins.
     * @param {adminsCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admins = await prisma.admins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminsCreateManyArgs>(args?: SelectSubset<T, adminsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admins.
     * @param {adminsDeleteArgs} args - Arguments to delete one Admins.
     * @example
     * // Delete one Admins
     * const Admins = await prisma.admins.delete({
     *   where: {
     *     // ... filter to delete one Admins
     *   }
     * })
     * 
     */
    delete<T extends adminsDeleteArgs>(args: SelectSubset<T, adminsDeleteArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Admins.
     * @param {adminsUpdateArgs} args - Arguments to update one Admins.
     * @example
     * // Update one Admins
     * const admins = await prisma.admins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminsUpdateArgs>(args: SelectSubset<T, adminsUpdateArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminsDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminsDeleteManyArgs>(args?: SelectSubset<T, adminsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admins = await prisma.admins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminsUpdateManyArgs>(args: SelectSubset<T, adminsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admins.
     * @param {adminsUpsertArgs} args - Arguments to update or create a Admins.
     * @example
     * // Update or create a Admins
     * const admins = await prisma.admins.upsert({
     *   create: {
     *     // ... data to create a Admins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admins we want to update
     *   }
     * })
     */
    upsert<T extends adminsUpsertArgs>(args: SelectSubset<T, adminsUpsertArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admins.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminsCountArgs>(
      args?: Subset<T, adminsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminsAggregateArgs>(args: Subset<T, AdminsAggregateArgs>): Prisma.PrismaPromise<GetAdminsAggregateType<T>>

    /**
     * Group by Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adminsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminsGroupByArgs['orderBy'] }
        : { orderBy?: adminsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adminsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admins model
   */
  readonly fields: adminsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin_sessions<T extends admins$admin_sessionsArgs<ExtArgs> = {}>(args?: Subset<T, admins$admin_sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_sessionsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admins model
   */ 
  interface adminsFieldRefs {
    readonly adminId: FieldRef<"admins", 'Int'>
    readonly firstName: FieldRef<"admins", 'String'>
    readonly lastName: FieldRef<"admins", 'String'>
    readonly email: FieldRef<"admins", 'String'>
    readonly wallet: FieldRef<"admins", 'Decimal'>
    readonly updatedAt: FieldRef<"admins", 'Int'>
    readonly createdAt: FieldRef<"admins", 'Int'>
    readonly passwordHash: FieldRef<"admins", 'String'>
  }
    

  // Custom InputTypes
  /**
   * admins findUnique
   */
  export type adminsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where: adminsWhereUniqueInput
  }

  /**
   * admins findUniqueOrThrow
   */
  export type adminsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where: adminsWhereUniqueInput
  }

  /**
   * admins findFirst
   */
  export type adminsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * admins findFirstOrThrow
   */
  export type adminsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * admins findMany
   */
  export type adminsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * admins create
   */
  export type adminsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * The data needed to create a admins.
     */
    data: XOR<adminsCreateInput, adminsUncheckedCreateInput>
  }

  /**
   * admins createMany
   */
  export type adminsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminsCreateManyInput | adminsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admins update
   */
  export type adminsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * The data needed to update a admins.
     */
    data: XOR<adminsUpdateInput, adminsUncheckedUpdateInput>
    /**
     * Choose, which admins to update.
     */
    where: adminsWhereUniqueInput
  }

  /**
   * admins updateMany
   */
  export type adminsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminsUpdateManyMutationInput, adminsUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminsWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admins upsert
   */
  export type adminsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * The filter to search for the admins to update in case it exists.
     */
    where: adminsWhereUniqueInput
    /**
     * In case the admins found by the `where` argument doesn't exist, create a new admins with this data.
     */
    create: XOR<adminsCreateInput, adminsUncheckedCreateInput>
    /**
     * In case the admins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminsUpdateInput, adminsUncheckedUpdateInput>
  }

  /**
   * admins delete
   */
  export type adminsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter which admins to delete.
     */
    where: adminsWhereUniqueInput
  }

  /**
   * admins deleteMany
   */
  export type adminsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminsWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admins.admin_sessions
   */
  export type admins$admin_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_sessions
     */
    select?: admin_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_sessions
     */
    omit?: admin_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_sessionsInclude<ExtArgs> | null
    where?: admin_sessionsWhereInput
    orderBy?: admin_sessionsOrderByWithRelationInput | admin_sessionsOrderByWithRelationInput[]
    cursor?: admin_sessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Admin_sessionsScalarFieldEnum | Admin_sessionsScalarFieldEnum[]
  }

  /**
   * admins without action
   */
  export type adminsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
  }


  /**
   * Model contact_requests
   */

  export type AggregateContact_requests = {
    _count: Contact_requestsCountAggregateOutputType | null
    _avg: Contact_requestsAvgAggregateOutputType | null
    _sum: Contact_requestsSumAggregateOutputType | null
    _min: Contact_requestsMinAggregateOutputType | null
    _max: Contact_requestsMaxAggregateOutputType | null
  }

  export type Contact_requestsAvgAggregateOutputType = {
    contactRequestId: number | null
    updatedAt: number | null
    createdAt: number | null
  }

  export type Contact_requestsSumAggregateOutputType = {
    contactRequestId: number | null
    updatedAt: number | null
    createdAt: number | null
  }

  export type Contact_requestsMinAggregateOutputType = {
    contactRequestId: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    whatsAppCountryCode: string | null
    whatsAppNumber: string | null
    message: string | null
    updatedAt: number | null
    createdAt: number | null
  }

  export type Contact_requestsMaxAggregateOutputType = {
    contactRequestId: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    whatsAppCountryCode: string | null
    whatsAppNumber: string | null
    message: string | null
    updatedAt: number | null
    createdAt: number | null
  }

  export type Contact_requestsCountAggregateOutputType = {
    contactRequestId: number
    firstName: number
    lastName: number
    email: number
    whatsAppCountryCode: number
    whatsAppNumber: number
    message: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type Contact_requestsAvgAggregateInputType = {
    contactRequestId?: true
    updatedAt?: true
    createdAt?: true
  }

  export type Contact_requestsSumAggregateInputType = {
    contactRequestId?: true
    updatedAt?: true
    createdAt?: true
  }

  export type Contact_requestsMinAggregateInputType = {
    contactRequestId?: true
    firstName?: true
    lastName?: true
    email?: true
    whatsAppCountryCode?: true
    whatsAppNumber?: true
    message?: true
    updatedAt?: true
    createdAt?: true
  }

  export type Contact_requestsMaxAggregateInputType = {
    contactRequestId?: true
    firstName?: true
    lastName?: true
    email?: true
    whatsAppCountryCode?: true
    whatsAppNumber?: true
    message?: true
    updatedAt?: true
    createdAt?: true
  }

  export type Contact_requestsCountAggregateInputType = {
    contactRequestId?: true
    firstName?: true
    lastName?: true
    email?: true
    whatsAppCountryCode?: true
    whatsAppNumber?: true
    message?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type Contact_requestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contact_requests to aggregate.
     */
    where?: contact_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contact_requests to fetch.
     */
    orderBy?: contact_requestsOrderByWithRelationInput | contact_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contact_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contact_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contact_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contact_requests
    **/
    _count?: true | Contact_requestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Contact_requestsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Contact_requestsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Contact_requestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Contact_requestsMaxAggregateInputType
  }

  export type GetContact_requestsAggregateType<T extends Contact_requestsAggregateArgs> = {
        [P in keyof T & keyof AggregateContact_requests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact_requests[P]>
      : GetScalarType<T[P], AggregateContact_requests[P]>
  }




  export type contact_requestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contact_requestsWhereInput
    orderBy?: contact_requestsOrderByWithAggregationInput | contact_requestsOrderByWithAggregationInput[]
    by: Contact_requestsScalarFieldEnum[] | Contact_requestsScalarFieldEnum
    having?: contact_requestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Contact_requestsCountAggregateInputType | true
    _avg?: Contact_requestsAvgAggregateInputType
    _sum?: Contact_requestsSumAggregateInputType
    _min?: Contact_requestsMinAggregateInputType
    _max?: Contact_requestsMaxAggregateInputType
  }

  export type Contact_requestsGroupByOutputType = {
    contactRequestId: number
    firstName: string
    lastName: string
    email: string
    whatsAppCountryCode: string
    whatsAppNumber: string
    message: string
    updatedAt: number | null
    createdAt: number
    _count: Contact_requestsCountAggregateOutputType | null
    _avg: Contact_requestsAvgAggregateOutputType | null
    _sum: Contact_requestsSumAggregateOutputType | null
    _min: Contact_requestsMinAggregateOutputType | null
    _max: Contact_requestsMaxAggregateOutputType | null
  }

  type GetContact_requestsGroupByPayload<T extends contact_requestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Contact_requestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Contact_requestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Contact_requestsGroupByOutputType[P]>
            : GetScalarType<T[P], Contact_requestsGroupByOutputType[P]>
        }
      >
    >


  export type contact_requestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    contactRequestId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    whatsAppCountryCode?: boolean
    whatsAppNumber?: boolean
    message?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contact_requests"]>



  export type contact_requestsSelectScalar = {
    contactRequestId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    whatsAppCountryCode?: boolean
    whatsAppNumber?: boolean
    message?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type contact_requestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"contactRequestId" | "firstName" | "lastName" | "email" | "whatsAppCountryCode" | "whatsAppNumber" | "message" | "updatedAt" | "createdAt", ExtArgs["result"]["contact_requests"]>

  export type $contact_requestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contact_requests"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      contactRequestId: number
      firstName: string
      lastName: string
      email: string
      whatsAppCountryCode: string
      whatsAppNumber: string
      message: string
      updatedAt: number | null
      createdAt: number
    }, ExtArgs["result"]["contact_requests"]>
    composites: {}
  }

  type contact_requestsGetPayload<S extends boolean | null | undefined | contact_requestsDefaultArgs> = $Result.GetResult<Prisma.$contact_requestsPayload, S>

  type contact_requestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<contact_requestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Contact_requestsCountAggregateInputType | true
    }

  export interface contact_requestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contact_requests'], meta: { name: 'contact_requests' } }
    /**
     * Find zero or one Contact_requests that matches the filter.
     * @param {contact_requestsFindUniqueArgs} args - Arguments to find a Contact_requests
     * @example
     * // Get one Contact_requests
     * const contact_requests = await prisma.contact_requests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contact_requestsFindUniqueArgs>(args: SelectSubset<T, contact_requestsFindUniqueArgs<ExtArgs>>): Prisma__contact_requestsClient<$Result.GetResult<Prisma.$contact_requestsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Contact_requests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contact_requestsFindUniqueOrThrowArgs} args - Arguments to find a Contact_requests
     * @example
     * // Get one Contact_requests
     * const contact_requests = await prisma.contact_requests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contact_requestsFindUniqueOrThrowArgs>(args: SelectSubset<T, contact_requestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contact_requestsClient<$Result.GetResult<Prisma.$contact_requestsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Contact_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_requestsFindFirstArgs} args - Arguments to find a Contact_requests
     * @example
     * // Get one Contact_requests
     * const contact_requests = await prisma.contact_requests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contact_requestsFindFirstArgs>(args?: SelectSubset<T, contact_requestsFindFirstArgs<ExtArgs>>): Prisma__contact_requestsClient<$Result.GetResult<Prisma.$contact_requestsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Contact_requests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_requestsFindFirstOrThrowArgs} args - Arguments to find a Contact_requests
     * @example
     * // Get one Contact_requests
     * const contact_requests = await prisma.contact_requests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contact_requestsFindFirstOrThrowArgs>(args?: SelectSubset<T, contact_requestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__contact_requestsClient<$Result.GetResult<Prisma.$contact_requestsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Contact_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_requestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contact_requests
     * const contact_requests = await prisma.contact_requests.findMany()
     * 
     * // Get first 10 Contact_requests
     * const contact_requests = await prisma.contact_requests.findMany({ take: 10 })
     * 
     * // Only select the `contactRequestId`
     * const contact_requestsWithContactRequestIdOnly = await prisma.contact_requests.findMany({ select: { contactRequestId: true } })
     * 
     */
    findMany<T extends contact_requestsFindManyArgs>(args?: SelectSubset<T, contact_requestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contact_requestsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Contact_requests.
     * @param {contact_requestsCreateArgs} args - Arguments to create a Contact_requests.
     * @example
     * // Create one Contact_requests
     * const Contact_requests = await prisma.contact_requests.create({
     *   data: {
     *     // ... data to create a Contact_requests
     *   }
     * })
     * 
     */
    create<T extends contact_requestsCreateArgs>(args: SelectSubset<T, contact_requestsCreateArgs<ExtArgs>>): Prisma__contact_requestsClient<$Result.GetResult<Prisma.$contact_requestsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Contact_requests.
     * @param {contact_requestsCreateManyArgs} args - Arguments to create many Contact_requests.
     * @example
     * // Create many Contact_requests
     * const contact_requests = await prisma.contact_requests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends contact_requestsCreateManyArgs>(args?: SelectSubset<T, contact_requestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contact_requests.
     * @param {contact_requestsDeleteArgs} args - Arguments to delete one Contact_requests.
     * @example
     * // Delete one Contact_requests
     * const Contact_requests = await prisma.contact_requests.delete({
     *   where: {
     *     // ... filter to delete one Contact_requests
     *   }
     * })
     * 
     */
    delete<T extends contact_requestsDeleteArgs>(args: SelectSubset<T, contact_requestsDeleteArgs<ExtArgs>>): Prisma__contact_requestsClient<$Result.GetResult<Prisma.$contact_requestsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Contact_requests.
     * @param {contact_requestsUpdateArgs} args - Arguments to update one Contact_requests.
     * @example
     * // Update one Contact_requests
     * const contact_requests = await prisma.contact_requests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends contact_requestsUpdateArgs>(args: SelectSubset<T, contact_requestsUpdateArgs<ExtArgs>>): Prisma__contact_requestsClient<$Result.GetResult<Prisma.$contact_requestsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Contact_requests.
     * @param {contact_requestsDeleteManyArgs} args - Arguments to filter Contact_requests to delete.
     * @example
     * // Delete a few Contact_requests
     * const { count } = await prisma.contact_requests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends contact_requestsDeleteManyArgs>(args?: SelectSubset<T, contact_requestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contact_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_requestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contact_requests
     * const contact_requests = await prisma.contact_requests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends contact_requestsUpdateManyArgs>(args: SelectSubset<T, contact_requestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contact_requests.
     * @param {contact_requestsUpsertArgs} args - Arguments to update or create a Contact_requests.
     * @example
     * // Update or create a Contact_requests
     * const contact_requests = await prisma.contact_requests.upsert({
     *   create: {
     *     // ... data to create a Contact_requests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact_requests we want to update
     *   }
     * })
     */
    upsert<T extends contact_requestsUpsertArgs>(args: SelectSubset<T, contact_requestsUpsertArgs<ExtArgs>>): Prisma__contact_requestsClient<$Result.GetResult<Prisma.$contact_requestsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Contact_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_requestsCountArgs} args - Arguments to filter Contact_requests to count.
     * @example
     * // Count the number of Contact_requests
     * const count = await prisma.contact_requests.count({
     *   where: {
     *     // ... the filter for the Contact_requests we want to count
     *   }
     * })
    **/
    count<T extends contact_requestsCountArgs>(
      args?: Subset<T, contact_requestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Contact_requestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Contact_requestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Contact_requestsAggregateArgs>(args: Subset<T, Contact_requestsAggregateArgs>): Prisma.PrismaPromise<GetContact_requestsAggregateType<T>>

    /**
     * Group by Contact_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_requestsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends contact_requestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contact_requestsGroupByArgs['orderBy'] }
        : { orderBy?: contact_requestsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, contact_requestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContact_requestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contact_requests model
   */
  readonly fields: contact_requestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contact_requests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contact_requestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the contact_requests model
   */ 
  interface contact_requestsFieldRefs {
    readonly contactRequestId: FieldRef<"contact_requests", 'Int'>
    readonly firstName: FieldRef<"contact_requests", 'String'>
    readonly lastName: FieldRef<"contact_requests", 'String'>
    readonly email: FieldRef<"contact_requests", 'String'>
    readonly whatsAppCountryCode: FieldRef<"contact_requests", 'String'>
    readonly whatsAppNumber: FieldRef<"contact_requests", 'String'>
    readonly message: FieldRef<"contact_requests", 'String'>
    readonly updatedAt: FieldRef<"contact_requests", 'Int'>
    readonly createdAt: FieldRef<"contact_requests", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * contact_requests findUnique
   */
  export type contact_requestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_requests
     */
    select?: contact_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_requests
     */
    omit?: contact_requestsOmit<ExtArgs> | null
    /**
     * Filter, which contact_requests to fetch.
     */
    where: contact_requestsWhereUniqueInput
  }

  /**
   * contact_requests findUniqueOrThrow
   */
  export type contact_requestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_requests
     */
    select?: contact_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_requests
     */
    omit?: contact_requestsOmit<ExtArgs> | null
    /**
     * Filter, which contact_requests to fetch.
     */
    where: contact_requestsWhereUniqueInput
  }

  /**
   * contact_requests findFirst
   */
  export type contact_requestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_requests
     */
    select?: contact_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_requests
     */
    omit?: contact_requestsOmit<ExtArgs> | null
    /**
     * Filter, which contact_requests to fetch.
     */
    where?: contact_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contact_requests to fetch.
     */
    orderBy?: contact_requestsOrderByWithRelationInput | contact_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contact_requests.
     */
    cursor?: contact_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contact_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contact_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contact_requests.
     */
    distinct?: Contact_requestsScalarFieldEnum | Contact_requestsScalarFieldEnum[]
  }

  /**
   * contact_requests findFirstOrThrow
   */
  export type contact_requestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_requests
     */
    select?: contact_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_requests
     */
    omit?: contact_requestsOmit<ExtArgs> | null
    /**
     * Filter, which contact_requests to fetch.
     */
    where?: contact_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contact_requests to fetch.
     */
    orderBy?: contact_requestsOrderByWithRelationInput | contact_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contact_requests.
     */
    cursor?: contact_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contact_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contact_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contact_requests.
     */
    distinct?: Contact_requestsScalarFieldEnum | Contact_requestsScalarFieldEnum[]
  }

  /**
   * contact_requests findMany
   */
  export type contact_requestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_requests
     */
    select?: contact_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_requests
     */
    omit?: contact_requestsOmit<ExtArgs> | null
    /**
     * Filter, which contact_requests to fetch.
     */
    where?: contact_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contact_requests to fetch.
     */
    orderBy?: contact_requestsOrderByWithRelationInput | contact_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contact_requests.
     */
    cursor?: contact_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contact_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contact_requests.
     */
    skip?: number
    distinct?: Contact_requestsScalarFieldEnum | Contact_requestsScalarFieldEnum[]
  }

  /**
   * contact_requests create
   */
  export type contact_requestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_requests
     */
    select?: contact_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_requests
     */
    omit?: contact_requestsOmit<ExtArgs> | null
    /**
     * The data needed to create a contact_requests.
     */
    data: XOR<contact_requestsCreateInput, contact_requestsUncheckedCreateInput>
  }

  /**
   * contact_requests createMany
   */
  export type contact_requestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contact_requests.
     */
    data: contact_requestsCreateManyInput | contact_requestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contact_requests update
   */
  export type contact_requestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_requests
     */
    select?: contact_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_requests
     */
    omit?: contact_requestsOmit<ExtArgs> | null
    /**
     * The data needed to update a contact_requests.
     */
    data: XOR<contact_requestsUpdateInput, contact_requestsUncheckedUpdateInput>
    /**
     * Choose, which contact_requests to update.
     */
    where: contact_requestsWhereUniqueInput
  }

  /**
   * contact_requests updateMany
   */
  export type contact_requestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contact_requests.
     */
    data: XOR<contact_requestsUpdateManyMutationInput, contact_requestsUncheckedUpdateManyInput>
    /**
     * Filter which contact_requests to update
     */
    where?: contact_requestsWhereInput
    /**
     * Limit how many contact_requests to update.
     */
    limit?: number
  }

  /**
   * contact_requests upsert
   */
  export type contact_requestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_requests
     */
    select?: contact_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_requests
     */
    omit?: contact_requestsOmit<ExtArgs> | null
    /**
     * The filter to search for the contact_requests to update in case it exists.
     */
    where: contact_requestsWhereUniqueInput
    /**
     * In case the contact_requests found by the `where` argument doesn't exist, create a new contact_requests with this data.
     */
    create: XOR<contact_requestsCreateInput, contact_requestsUncheckedCreateInput>
    /**
     * In case the contact_requests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contact_requestsUpdateInput, contact_requestsUncheckedUpdateInput>
  }

  /**
   * contact_requests delete
   */
  export type contact_requestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_requests
     */
    select?: contact_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_requests
     */
    omit?: contact_requestsOmit<ExtArgs> | null
    /**
     * Filter which contact_requests to delete.
     */
    where: contact_requestsWhereUniqueInput
  }

  /**
   * contact_requests deleteMany
   */
  export type contact_requestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contact_requests to delete
     */
    where?: contact_requestsWhereInput
    /**
     * Limit how many contact_requests to delete.
     */
    limit?: number
  }

  /**
   * contact_requests without action
   */
  export type contact_requestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_requests
     */
    select?: contact_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_requests
     */
    omit?: contact_requestsOmit<ExtArgs> | null
  }


  /**
   * Model user_sessions
   */

  export type AggregateUser_sessions = {
    _count: User_sessionsCountAggregateOutputType | null
    _avg: User_sessionsAvgAggregateOutputType | null
    _sum: User_sessionsSumAggregateOutputType | null
    _min: User_sessionsMinAggregateOutputType | null
    _max: User_sessionsMaxAggregateOutputType | null
  }

  export type User_sessionsAvgAggregateOutputType = {
    userSessionId: number | null
    userId: number | null
    createdAt: number | null
    validTill: number | null
    refreshTokenId: number | null
  }

  export type User_sessionsSumAggregateOutputType = {
    userSessionId: number | null
    userId: number | null
    createdAt: number | null
    validTill: number | null
    refreshTokenId: number | null
  }

  export type User_sessionsMinAggregateOutputType = {
    userSessionId: number | null
    userId: number | null
    createdAt: number | null
    validTill: number | null
    refreshTokenId: number | null
  }

  export type User_sessionsMaxAggregateOutputType = {
    userSessionId: number | null
    userId: number | null
    createdAt: number | null
    validTill: number | null
    refreshTokenId: number | null
  }

  export type User_sessionsCountAggregateOutputType = {
    userSessionId: number
    userId: number
    createdAt: number
    validTill: number
    refreshTokenId: number
    _all: number
  }


  export type User_sessionsAvgAggregateInputType = {
    userSessionId?: true
    userId?: true
    createdAt?: true
    validTill?: true
    refreshTokenId?: true
  }

  export type User_sessionsSumAggregateInputType = {
    userSessionId?: true
    userId?: true
    createdAt?: true
    validTill?: true
    refreshTokenId?: true
  }

  export type User_sessionsMinAggregateInputType = {
    userSessionId?: true
    userId?: true
    createdAt?: true
    validTill?: true
    refreshTokenId?: true
  }

  export type User_sessionsMaxAggregateInputType = {
    userSessionId?: true
    userId?: true
    createdAt?: true
    validTill?: true
    refreshTokenId?: true
  }

  export type User_sessionsCountAggregateInputType = {
    userSessionId?: true
    userId?: true
    createdAt?: true
    validTill?: true
    refreshTokenId?: true
    _all?: true
  }

  export type User_sessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_sessions to aggregate.
     */
    where?: user_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_sessions to fetch.
     */
    orderBy?: user_sessionsOrderByWithRelationInput | user_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_sessions
    **/
    _count?: true | User_sessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_sessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_sessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_sessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_sessionsMaxAggregateInputType
  }

  export type GetUser_sessionsAggregateType<T extends User_sessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_sessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_sessions[P]>
      : GetScalarType<T[P], AggregateUser_sessions[P]>
  }




  export type user_sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_sessionsWhereInput
    orderBy?: user_sessionsOrderByWithAggregationInput | user_sessionsOrderByWithAggregationInput[]
    by: User_sessionsScalarFieldEnum[] | User_sessionsScalarFieldEnum
    having?: user_sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_sessionsCountAggregateInputType | true
    _avg?: User_sessionsAvgAggregateInputType
    _sum?: User_sessionsSumAggregateInputType
    _min?: User_sessionsMinAggregateInputType
    _max?: User_sessionsMaxAggregateInputType
  }

  export type User_sessionsGroupByOutputType = {
    userSessionId: number
    userId: number
    createdAt: number
    validTill: number
    refreshTokenId: number
    _count: User_sessionsCountAggregateOutputType | null
    _avg: User_sessionsAvgAggregateOutputType | null
    _sum: User_sessionsSumAggregateOutputType | null
    _min: User_sessionsMinAggregateOutputType | null
    _max: User_sessionsMaxAggregateOutputType | null
  }

  type GetUser_sessionsGroupByPayload<T extends user_sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_sessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_sessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_sessionsGroupByOutputType[P]>
            : GetScalarType<T[P], User_sessionsGroupByOutputType[P]>
        }
      >
    >


  export type user_sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userSessionId?: boolean
    userId?: boolean
    createdAt?: boolean
    validTill?: boolean
    refreshTokenId?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_sessions"]>



  export type user_sessionsSelectScalar = {
    userSessionId?: boolean
    userId?: boolean
    createdAt?: boolean
    validTill?: boolean
    refreshTokenId?: boolean
  }

  export type user_sessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userSessionId" | "userId" | "createdAt" | "validTill" | "refreshTokenId", ExtArgs["result"]["user_sessions"]>
  export type user_sessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_sessions"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userSessionId: number
      userId: number
      createdAt: number
      validTill: number
      refreshTokenId: number
    }, ExtArgs["result"]["user_sessions"]>
    composites: {}
  }

  type user_sessionsGetPayload<S extends boolean | null | undefined | user_sessionsDefaultArgs> = $Result.GetResult<Prisma.$user_sessionsPayload, S>

  type user_sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_sessionsCountAggregateInputType | true
    }

  export interface user_sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_sessions'], meta: { name: 'user_sessions' } }
    /**
     * Find zero or one User_sessions that matches the filter.
     * @param {user_sessionsFindUniqueArgs} args - Arguments to find a User_sessions
     * @example
     * // Get one User_sessions
     * const user_sessions = await prisma.user_sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_sessionsFindUniqueArgs>(args: SelectSubset<T, user_sessionsFindUniqueArgs<ExtArgs>>): Prisma__user_sessionsClient<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User_sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_sessionsFindUniqueOrThrowArgs} args - Arguments to find a User_sessions
     * @example
     * // Get one User_sessions
     * const user_sessions = await prisma.user_sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_sessionsClient<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sessionsFindFirstArgs} args - Arguments to find a User_sessions
     * @example
     * // Get one User_sessions
     * const user_sessions = await prisma.user_sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_sessionsFindFirstArgs>(args?: SelectSubset<T, user_sessionsFindFirstArgs<ExtArgs>>): Prisma__user_sessionsClient<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User_sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sessionsFindFirstOrThrowArgs} args - Arguments to find a User_sessions
     * @example
     * // Get one User_sessions
     * const user_sessions = await prisma.user_sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_sessionsClient<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more User_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_sessions
     * const user_sessions = await prisma.user_sessions.findMany()
     * 
     * // Get first 10 User_sessions
     * const user_sessions = await prisma.user_sessions.findMany({ take: 10 })
     * 
     * // Only select the `userSessionId`
     * const user_sessionsWithUserSessionIdOnly = await prisma.user_sessions.findMany({ select: { userSessionId: true } })
     * 
     */
    findMany<T extends user_sessionsFindManyArgs>(args?: SelectSubset<T, user_sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User_sessions.
     * @param {user_sessionsCreateArgs} args - Arguments to create a User_sessions.
     * @example
     * // Create one User_sessions
     * const User_sessions = await prisma.user_sessions.create({
     *   data: {
     *     // ... data to create a User_sessions
     *   }
     * })
     * 
     */
    create<T extends user_sessionsCreateArgs>(args: SelectSubset<T, user_sessionsCreateArgs<ExtArgs>>): Prisma__user_sessionsClient<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many User_sessions.
     * @param {user_sessionsCreateManyArgs} args - Arguments to create many User_sessions.
     * @example
     * // Create many User_sessions
     * const user_sessions = await prisma.user_sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_sessionsCreateManyArgs>(args?: SelectSubset<T, user_sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_sessions.
     * @param {user_sessionsDeleteArgs} args - Arguments to delete one User_sessions.
     * @example
     * // Delete one User_sessions
     * const User_sessions = await prisma.user_sessions.delete({
     *   where: {
     *     // ... filter to delete one User_sessions
     *   }
     * })
     * 
     */
    delete<T extends user_sessionsDeleteArgs>(args: SelectSubset<T, user_sessionsDeleteArgs<ExtArgs>>): Prisma__user_sessionsClient<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User_sessions.
     * @param {user_sessionsUpdateArgs} args - Arguments to update one User_sessions.
     * @example
     * // Update one User_sessions
     * const user_sessions = await prisma.user_sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_sessionsUpdateArgs>(args: SelectSubset<T, user_sessionsUpdateArgs<ExtArgs>>): Prisma__user_sessionsClient<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more User_sessions.
     * @param {user_sessionsDeleteManyArgs} args - Arguments to filter User_sessions to delete.
     * @example
     * // Delete a few User_sessions
     * const { count } = await prisma.user_sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_sessionsDeleteManyArgs>(args?: SelectSubset<T, user_sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_sessions
     * const user_sessions = await prisma.user_sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_sessionsUpdateManyArgs>(args: SelectSubset<T, user_sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_sessions.
     * @param {user_sessionsUpsertArgs} args - Arguments to update or create a User_sessions.
     * @example
     * // Update or create a User_sessions
     * const user_sessions = await prisma.user_sessions.upsert({
     *   create: {
     *     // ... data to create a User_sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_sessions we want to update
     *   }
     * })
     */
    upsert<T extends user_sessionsUpsertArgs>(args: SelectSubset<T, user_sessionsUpsertArgs<ExtArgs>>): Prisma__user_sessionsClient<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of User_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sessionsCountArgs} args - Arguments to filter User_sessions to count.
     * @example
     * // Count the number of User_sessions
     * const count = await prisma.user_sessions.count({
     *   where: {
     *     // ... the filter for the User_sessions we want to count
     *   }
     * })
    **/
    count<T extends user_sessionsCountArgs>(
      args?: Subset<T, user_sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_sessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_sessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_sessionsAggregateArgs>(args: Subset<T, User_sessionsAggregateArgs>): Prisma.PrismaPromise<GetUser_sessionsAggregateType<T>>

    /**
     * Group by User_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sessionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_sessionsGroupByArgs['orderBy'] }
        : { orderBy?: user_sessionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_sessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_sessions model
   */
  readonly fields: user_sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_sessions model
   */ 
  interface user_sessionsFieldRefs {
    readonly userSessionId: FieldRef<"user_sessions", 'Int'>
    readonly userId: FieldRef<"user_sessions", 'Int'>
    readonly createdAt: FieldRef<"user_sessions", 'Int'>
    readonly validTill: FieldRef<"user_sessions", 'Int'>
    readonly refreshTokenId: FieldRef<"user_sessions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user_sessions findUnique
   */
  export type user_sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which user_sessions to fetch.
     */
    where: user_sessionsWhereUniqueInput
  }

  /**
   * user_sessions findUniqueOrThrow
   */
  export type user_sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which user_sessions to fetch.
     */
    where: user_sessionsWhereUniqueInput
  }

  /**
   * user_sessions findFirst
   */
  export type user_sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which user_sessions to fetch.
     */
    where?: user_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_sessions to fetch.
     */
    orderBy?: user_sessionsOrderByWithRelationInput | user_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_sessions.
     */
    cursor?: user_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_sessions.
     */
    distinct?: User_sessionsScalarFieldEnum | User_sessionsScalarFieldEnum[]
  }

  /**
   * user_sessions findFirstOrThrow
   */
  export type user_sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which user_sessions to fetch.
     */
    where?: user_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_sessions to fetch.
     */
    orderBy?: user_sessionsOrderByWithRelationInput | user_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_sessions.
     */
    cursor?: user_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_sessions.
     */
    distinct?: User_sessionsScalarFieldEnum | User_sessionsScalarFieldEnum[]
  }

  /**
   * user_sessions findMany
   */
  export type user_sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which user_sessions to fetch.
     */
    where?: user_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_sessions to fetch.
     */
    orderBy?: user_sessionsOrderByWithRelationInput | user_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_sessions.
     */
    cursor?: user_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_sessions.
     */
    skip?: number
    distinct?: User_sessionsScalarFieldEnum | User_sessionsScalarFieldEnum[]
  }

  /**
   * user_sessions create
   */
  export type user_sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_sessions.
     */
    data: XOR<user_sessionsCreateInput, user_sessionsUncheckedCreateInput>
  }

  /**
   * user_sessions createMany
   */
  export type user_sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_sessions.
     */
    data: user_sessionsCreateManyInput | user_sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_sessions update
   */
  export type user_sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_sessions.
     */
    data: XOR<user_sessionsUpdateInput, user_sessionsUncheckedUpdateInput>
    /**
     * Choose, which user_sessions to update.
     */
    where: user_sessionsWhereUniqueInput
  }

  /**
   * user_sessions updateMany
   */
  export type user_sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_sessions.
     */
    data: XOR<user_sessionsUpdateManyMutationInput, user_sessionsUncheckedUpdateManyInput>
    /**
     * Filter which user_sessions to update
     */
    where?: user_sessionsWhereInput
    /**
     * Limit how many user_sessions to update.
     */
    limit?: number
  }

  /**
   * user_sessions upsert
   */
  export type user_sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_sessions to update in case it exists.
     */
    where: user_sessionsWhereUniqueInput
    /**
     * In case the user_sessions found by the `where` argument doesn't exist, create a new user_sessions with this data.
     */
    create: XOR<user_sessionsCreateInput, user_sessionsUncheckedCreateInput>
    /**
     * In case the user_sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_sessionsUpdateInput, user_sessionsUncheckedUpdateInput>
  }

  /**
   * user_sessions delete
   */
  export type user_sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sessionsInclude<ExtArgs> | null
    /**
     * Filter which user_sessions to delete.
     */
    where: user_sessionsWhereUniqueInput
  }

  /**
   * user_sessions deleteMany
   */
  export type user_sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_sessions to delete
     */
    where?: user_sessionsWhereInput
    /**
     * Limit how many user_sessions to delete.
     */
    limit?: number
  }

  /**
   * user_sessions without action
   */
  export type user_sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sessionsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    userId: number | null
    wallet: Decimal | null
    updatedAt: number | null
    createdAt: number | null
  }

  export type UsersSumAggregateOutputType = {
    userId: number | null
    wallet: Decimal | null
    updatedAt: number | null
    createdAt: number | null
  }

  export type UsersMinAggregateOutputType = {
    userId: number | null
    firstName: string | null
    lastName: string | null
    gender: $Enums.users_gender | null
    username: string | null
    email: string | null
    countryCode: string | null
    mobileNumber: string | null
    wallet: Decimal | null
    updatedAt: number | null
    createdAt: number | null
    passwordHash: string | null
  }

  export type UsersMaxAggregateOutputType = {
    userId: number | null
    firstName: string | null
    lastName: string | null
    gender: $Enums.users_gender | null
    username: string | null
    email: string | null
    countryCode: string | null
    mobileNumber: string | null
    wallet: Decimal | null
    updatedAt: number | null
    createdAt: number | null
    passwordHash: string | null
  }

  export type UsersCountAggregateOutputType = {
    userId: number
    firstName: number
    lastName: number
    gender: number
    username: number
    email: number
    countryCode: number
    mobileNumber: number
    wallet: number
    updatedAt: number
    createdAt: number
    passwordHash: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    userId?: true
    wallet?: true
    updatedAt?: true
    createdAt?: true
  }

  export type UsersSumAggregateInputType = {
    userId?: true
    wallet?: true
    updatedAt?: true
    createdAt?: true
  }

  export type UsersMinAggregateInputType = {
    userId?: true
    firstName?: true
    lastName?: true
    gender?: true
    username?: true
    email?: true
    countryCode?: true
    mobileNumber?: true
    wallet?: true
    updatedAt?: true
    createdAt?: true
    passwordHash?: true
  }

  export type UsersMaxAggregateInputType = {
    userId?: true
    firstName?: true
    lastName?: true
    gender?: true
    username?: true
    email?: true
    countryCode?: true
    mobileNumber?: true
    wallet?: true
    updatedAt?: true
    createdAt?: true
    passwordHash?: true
  }

  export type UsersCountAggregateInputType = {
    userId?: true
    firstName?: true
    lastName?: true
    gender?: true
    username?: true
    email?: true
    countryCode?: true
    mobileNumber?: true
    wallet?: true
    updatedAt?: true
    createdAt?: true
    passwordHash?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    userId: number
    firstName: string
    lastName: string
    gender: $Enums.users_gender
    username: string
    email: string
    countryCode: string
    mobileNumber: string
    wallet: Decimal
    updatedAt: number | null
    createdAt: number
    passwordHash: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    gender?: boolean
    username?: boolean
    email?: boolean
    countryCode?: boolean
    mobileNumber?: boolean
    wallet?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    passwordHash?: boolean
    user_sessions?: boolean | users$user_sessionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    gender?: boolean
    username?: boolean
    email?: boolean
    countryCode?: boolean
    mobileNumber?: boolean
    wallet?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    passwordHash?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "firstName" | "lastName" | "gender" | "username" | "email" | "countryCode" | "mobileNumber" | "wallet" | "updatedAt" | "createdAt" | "passwordHash", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_sessions?: boolean | users$user_sessionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      user_sessions: Prisma.$user_sessionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      firstName: string
      lastName: string
      gender: $Enums.users_gender
      username: string
      email: string
      countryCode: string
      mobileNumber: string
      wallet: Prisma.Decimal
      updatedAt: number | null
      createdAt: number
      passwordHash: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const usersWithUserIdOnly = await prisma.users.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_sessions<T extends users$user_sessionsArgs<ExtArgs> = {}>(args?: Subset<T, users$user_sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly userId: FieldRef<"users", 'Int'>
    readonly firstName: FieldRef<"users", 'String'>
    readonly lastName: FieldRef<"users", 'String'>
    readonly gender: FieldRef<"users", 'users_gender'>
    readonly username: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly countryCode: FieldRef<"users", 'String'>
    readonly mobileNumber: FieldRef<"users", 'String'>
    readonly wallet: FieldRef<"users", 'Decimal'>
    readonly updatedAt: FieldRef<"users", 'Int'>
    readonly createdAt: FieldRef<"users", 'Int'>
    readonly passwordHash: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.user_sessions
   */
  export type users$user_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sessionsInclude<ExtArgs> | null
    where?: user_sessionsWhereInput
    orderBy?: user_sessionsOrderByWithRelationInput | user_sessionsOrderByWithRelationInput[]
    cursor?: user_sessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_sessionsScalarFieldEnum | User_sessionsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model clients
   */

  export type AggregateClients = {
    _count: ClientsCountAggregateOutputType | null
    _avg: ClientsAvgAggregateOutputType | null
    _sum: ClientsSumAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  export type ClientsAvgAggregateOutputType = {
    clientId: number | null
    followUpDate: number | null
    createdAt: number | null
    updatedAt: number | null
  }

  export type ClientsSumAggregateOutputType = {
    clientId: number | null
    followUpDate: number | null
    createdAt: number | null
    updatedAt: number | null
  }

  export type ClientsMinAggregateOutputType = {
    clientId: number | null
    name: string | null
    mobileNumber: string | null
    whatsappNumber: string | null
    email: string | null
    address: string | null
    purposeOfContact: string | null
    followUpDate: number | null
    createdAt: number | null
    updatedAt: number | null
  }

  export type ClientsMaxAggregateOutputType = {
    clientId: number | null
    name: string | null
    mobileNumber: string | null
    whatsappNumber: string | null
    email: string | null
    address: string | null
    purposeOfContact: string | null
    followUpDate: number | null
    createdAt: number | null
    updatedAt: number | null
  }

  export type ClientsCountAggregateOutputType = {
    clientId: number
    name: number
    mobileNumber: number
    whatsappNumber: number
    email: number
    address: number
    purposeOfContact: number
    followUpDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientsAvgAggregateInputType = {
    clientId?: true
    followUpDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientsSumAggregateInputType = {
    clientId?: true
    followUpDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientsMinAggregateInputType = {
    clientId?: true
    name?: true
    mobileNumber?: true
    whatsappNumber?: true
    email?: true
    address?: true
    purposeOfContact?: true
    followUpDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientsMaxAggregateInputType = {
    clientId?: true
    name?: true
    mobileNumber?: true
    whatsappNumber?: true
    email?: true
    address?: true
    purposeOfContact?: true
    followUpDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientsCountAggregateInputType = {
    clientId?: true
    name?: true
    mobileNumber?: true
    whatsappNumber?: true
    email?: true
    address?: true
    purposeOfContact?: true
    followUpDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clients to aggregate.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clients
    **/
    _count?: true | ClientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientsMaxAggregateInputType
  }

  export type GetClientsAggregateType<T extends ClientsAggregateArgs> = {
        [P in keyof T & keyof AggregateClients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClients[P]>
      : GetScalarType<T[P], AggregateClients[P]>
  }




  export type clientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientsWhereInput
    orderBy?: clientsOrderByWithAggregationInput | clientsOrderByWithAggregationInput[]
    by: ClientsScalarFieldEnum[] | ClientsScalarFieldEnum
    having?: clientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientsCountAggregateInputType | true
    _avg?: ClientsAvgAggregateInputType
    _sum?: ClientsSumAggregateInputType
    _min?: ClientsMinAggregateInputType
    _max?: ClientsMaxAggregateInputType
  }

  export type ClientsGroupByOutputType = {
    clientId: number
    name: string
    mobileNumber: string
    whatsappNumber: string
    email: string
    address: string
    purposeOfContact: string
    followUpDate: number | null
    createdAt: number
    updatedAt: number | null
    _count: ClientsCountAggregateOutputType | null
    _avg: ClientsAvgAggregateOutputType | null
    _sum: ClientsSumAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  type GetClientsGroupByPayload<T extends clientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientsGroupByOutputType[P]>
            : GetScalarType<T[P], ClientsGroupByOutputType[P]>
        }
      >
    >


  export type clientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    clientId?: boolean
    name?: boolean
    mobileNumber?: boolean
    whatsappNumber?: boolean
    email?: boolean
    address?: boolean
    purposeOfContact?: boolean
    followUpDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["clients"]>



  export type clientsSelectScalar = {
    clientId?: boolean
    name?: boolean
    mobileNumber?: boolean
    whatsappNumber?: boolean
    email?: boolean
    address?: boolean
    purposeOfContact?: boolean
    followUpDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type clientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"clientId" | "name" | "mobileNumber" | "whatsappNumber" | "email" | "address" | "purposeOfContact" | "followUpDate" | "createdAt" | "updatedAt", ExtArgs["result"]["clients"]>

  export type $clientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clients"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      clientId: number
      name: string
      mobileNumber: string
      whatsappNumber: string
      email: string
      address: string
      purposeOfContact: string
      followUpDate: number | null
      createdAt: number
      updatedAt: number | null
    }, ExtArgs["result"]["clients"]>
    composites: {}
  }

  type clientsGetPayload<S extends boolean | null | undefined | clientsDefaultArgs> = $Result.GetResult<Prisma.$clientsPayload, S>

  type clientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientsCountAggregateInputType | true
    }

  export interface clientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clients'], meta: { name: 'clients' } }
    /**
     * Find zero or one Clients that matches the filter.
     * @param {clientsFindUniqueArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clientsFindUniqueArgs>(args: SelectSubset<T, clientsFindUniqueArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Clients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clientsFindUniqueOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clientsFindUniqueOrThrowArgs>(args: SelectSubset<T, clientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsFindFirstArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clientsFindFirstArgs>(args?: SelectSubset<T, clientsFindFirstArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Clients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsFindFirstOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clientsFindFirstOrThrowArgs>(args?: SelectSubset<T, clientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.clients.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.clients.findMany({ take: 10 })
     * 
     * // Only select the `clientId`
     * const clientsWithClientIdOnly = await prisma.clients.findMany({ select: { clientId: true } })
     * 
     */
    findMany<T extends clientsFindManyArgs>(args?: SelectSubset<T, clientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Clients.
     * @param {clientsCreateArgs} args - Arguments to create a Clients.
     * @example
     * // Create one Clients
     * const Clients = await prisma.clients.create({
     *   data: {
     *     // ... data to create a Clients
     *   }
     * })
     * 
     */
    create<T extends clientsCreateArgs>(args: SelectSubset<T, clientsCreateArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Clients.
     * @param {clientsCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const clients = await prisma.clients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clientsCreateManyArgs>(args?: SelectSubset<T, clientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clients.
     * @param {clientsDeleteArgs} args - Arguments to delete one Clients.
     * @example
     * // Delete one Clients
     * const Clients = await prisma.clients.delete({
     *   where: {
     *     // ... filter to delete one Clients
     *   }
     * })
     * 
     */
    delete<T extends clientsDeleteArgs>(args: SelectSubset<T, clientsDeleteArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Clients.
     * @param {clientsUpdateArgs} args - Arguments to update one Clients.
     * @example
     * // Update one Clients
     * const clients = await prisma.clients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clientsUpdateArgs>(args: SelectSubset<T, clientsUpdateArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Clients.
     * @param {clientsDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.clients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clientsDeleteManyArgs>(args?: SelectSubset<T, clientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const clients = await prisma.clients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clientsUpdateManyArgs>(args: SelectSubset<T, clientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clients.
     * @param {clientsUpsertArgs} args - Arguments to update or create a Clients.
     * @example
     * // Update or create a Clients
     * const clients = await prisma.clients.upsert({
     *   create: {
     *     // ... data to create a Clients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clients we want to update
     *   }
     * })
     */
    upsert<T extends clientsUpsertArgs>(args: SelectSubset<T, clientsUpsertArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.clients.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends clientsCountArgs>(
      args?: Subset<T, clientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientsAggregateArgs>(args: Subset<T, ClientsAggregateArgs>): Prisma.PrismaPromise<GetClientsAggregateType<T>>

    /**
     * Group by Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientsGroupByArgs['orderBy'] }
        : { orderBy?: clientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clients model
   */
  readonly fields: clientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the clients model
   */ 
  interface clientsFieldRefs {
    readonly clientId: FieldRef<"clients", 'Int'>
    readonly name: FieldRef<"clients", 'String'>
    readonly mobileNumber: FieldRef<"clients", 'String'>
    readonly whatsappNumber: FieldRef<"clients", 'String'>
    readonly email: FieldRef<"clients", 'String'>
    readonly address: FieldRef<"clients", 'String'>
    readonly purposeOfContact: FieldRef<"clients", 'String'>
    readonly followUpDate: FieldRef<"clients", 'Int'>
    readonly createdAt: FieldRef<"clients", 'Int'>
    readonly updatedAt: FieldRef<"clients", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * clients findUnique
   */
  export type clientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients findUniqueOrThrow
   */
  export type clientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients findFirst
   */
  export type clientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * clients findFirstOrThrow
   */
  export type clientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * clients findMany
   */
  export type clientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clients.
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * clients create
   */
  export type clientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * The data needed to create a clients.
     */
    data: XOR<clientsCreateInput, clientsUncheckedCreateInput>
  }

  /**
   * clients createMany
   */
  export type clientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clients.
     */
    data: clientsCreateManyInput | clientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clients update
   */
  export type clientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * The data needed to update a clients.
     */
    data: XOR<clientsUpdateInput, clientsUncheckedUpdateInput>
    /**
     * Choose, which clients to update.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients updateMany
   */
  export type clientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clients.
     */
    data: XOR<clientsUpdateManyMutationInput, clientsUncheckedUpdateManyInput>
    /**
     * Filter which clients to update
     */
    where?: clientsWhereInput
    /**
     * Limit how many clients to update.
     */
    limit?: number
  }

  /**
   * clients upsert
   */
  export type clientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * The filter to search for the clients to update in case it exists.
     */
    where: clientsWhereUniqueInput
    /**
     * In case the clients found by the `where` argument doesn't exist, create a new clients with this data.
     */
    create: XOR<clientsCreateInput, clientsUncheckedCreateInput>
    /**
     * In case the clients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientsUpdateInput, clientsUncheckedUpdateInput>
  }

  /**
   * clients delete
   */
  export type clientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Filter which clients to delete.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients deleteMany
   */
  export type clientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clients to delete
     */
    where?: clientsWhereInput
    /**
     * Limit how many clients to delete.
     */
    limit?: number
  }

  /**
   * clients without action
   */
  export type clientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Admin_sessionsScalarFieldEnum: {
    adminSessionId: 'adminSessionId',
    adminId: 'adminId',
    createdAt: 'createdAt',
    validTill: 'validTill',
    refreshTokenId: 'refreshTokenId'
  };

  export type Admin_sessionsScalarFieldEnum = (typeof Admin_sessionsScalarFieldEnum)[keyof typeof Admin_sessionsScalarFieldEnum]


  export const AdminsScalarFieldEnum: {
    adminId: 'adminId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    wallet: 'wallet',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    passwordHash: 'passwordHash'
  };

  export type AdminsScalarFieldEnum = (typeof AdminsScalarFieldEnum)[keyof typeof AdminsScalarFieldEnum]


  export const Contact_requestsScalarFieldEnum: {
    contactRequestId: 'contactRequestId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    whatsAppCountryCode: 'whatsAppCountryCode',
    whatsAppNumber: 'whatsAppNumber',
    message: 'message',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type Contact_requestsScalarFieldEnum = (typeof Contact_requestsScalarFieldEnum)[keyof typeof Contact_requestsScalarFieldEnum]


  export const User_sessionsScalarFieldEnum: {
    userSessionId: 'userSessionId',
    userId: 'userId',
    createdAt: 'createdAt',
    validTill: 'validTill',
    refreshTokenId: 'refreshTokenId'
  };

  export type User_sessionsScalarFieldEnum = (typeof User_sessionsScalarFieldEnum)[keyof typeof User_sessionsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    gender: 'gender',
    username: 'username',
    email: 'email',
    countryCode: 'countryCode',
    mobileNumber: 'mobileNumber',
    wallet: 'wallet',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    passwordHash: 'passwordHash'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ClientsScalarFieldEnum: {
    clientId: 'clientId',
    name: 'name',
    mobileNumber: 'mobileNumber',
    whatsappNumber: 'whatsappNumber',
    email: 'email',
    address: 'address',
    purposeOfContact: 'purposeOfContact',
    followUpDate: 'followUpDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientsScalarFieldEnum = (typeof ClientsScalarFieldEnum)[keyof typeof ClientsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const adminsOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    passwordHash: 'passwordHash'
  };

  export type adminsOrderByRelevanceFieldEnum = (typeof adminsOrderByRelevanceFieldEnum)[keyof typeof adminsOrderByRelevanceFieldEnum]


  export const contact_requestsOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    whatsAppCountryCode: 'whatsAppCountryCode',
    whatsAppNumber: 'whatsAppNumber',
    message: 'message'
  };

  export type contact_requestsOrderByRelevanceFieldEnum = (typeof contact_requestsOrderByRelevanceFieldEnum)[keyof typeof contact_requestsOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    username: 'username',
    email: 'email',
    countryCode: 'countryCode',
    mobileNumber: 'mobileNumber',
    passwordHash: 'passwordHash'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const clientsOrderByRelevanceFieldEnum: {
    name: 'name',
    mobileNumber: 'mobileNumber',
    whatsappNumber: 'whatsappNumber',
    email: 'email',
    address: 'address',
    purposeOfContact: 'purposeOfContact'
  };

  export type clientsOrderByRelevanceFieldEnum = (typeof clientsOrderByRelevanceFieldEnum)[keyof typeof clientsOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'users_gender'
   */
  export type Enumusers_genderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_gender'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type admin_sessionsWhereInput = {
    AND?: admin_sessionsWhereInput | admin_sessionsWhereInput[]
    OR?: admin_sessionsWhereInput[]
    NOT?: admin_sessionsWhereInput | admin_sessionsWhereInput[]
    adminSessionId?: IntFilter<"admin_sessions"> | number
    adminId?: IntFilter<"admin_sessions"> | number
    createdAt?: IntFilter<"admin_sessions"> | number
    validTill?: IntFilter<"admin_sessions"> | number
    refreshTokenId?: IntFilter<"admin_sessions"> | number
    admins?: XOR<AdminsScalarRelationFilter, adminsWhereInput>
  }

  export type admin_sessionsOrderByWithRelationInput = {
    adminSessionId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    validTill?: SortOrder
    refreshTokenId?: SortOrder
    admins?: adminsOrderByWithRelationInput
  }

  export type admin_sessionsWhereUniqueInput = Prisma.AtLeast<{
    adminSessionId?: number
    AND?: admin_sessionsWhereInput | admin_sessionsWhereInput[]
    OR?: admin_sessionsWhereInput[]
    NOT?: admin_sessionsWhereInput | admin_sessionsWhereInput[]
    adminId?: IntFilter<"admin_sessions"> | number
    createdAt?: IntFilter<"admin_sessions"> | number
    validTill?: IntFilter<"admin_sessions"> | number
    refreshTokenId?: IntFilter<"admin_sessions"> | number
    admins?: XOR<AdminsScalarRelationFilter, adminsWhereInput>
  }, "adminSessionId">

  export type admin_sessionsOrderByWithAggregationInput = {
    adminSessionId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    validTill?: SortOrder
    refreshTokenId?: SortOrder
    _count?: admin_sessionsCountOrderByAggregateInput
    _avg?: admin_sessionsAvgOrderByAggregateInput
    _max?: admin_sessionsMaxOrderByAggregateInput
    _min?: admin_sessionsMinOrderByAggregateInput
    _sum?: admin_sessionsSumOrderByAggregateInput
  }

  export type admin_sessionsScalarWhereWithAggregatesInput = {
    AND?: admin_sessionsScalarWhereWithAggregatesInput | admin_sessionsScalarWhereWithAggregatesInput[]
    OR?: admin_sessionsScalarWhereWithAggregatesInput[]
    NOT?: admin_sessionsScalarWhereWithAggregatesInput | admin_sessionsScalarWhereWithAggregatesInput[]
    adminSessionId?: IntWithAggregatesFilter<"admin_sessions"> | number
    adminId?: IntWithAggregatesFilter<"admin_sessions"> | number
    createdAt?: IntWithAggregatesFilter<"admin_sessions"> | number
    validTill?: IntWithAggregatesFilter<"admin_sessions"> | number
    refreshTokenId?: IntWithAggregatesFilter<"admin_sessions"> | number
  }

  export type adminsWhereInput = {
    AND?: adminsWhereInput | adminsWhereInput[]
    OR?: adminsWhereInput[]
    NOT?: adminsWhereInput | adminsWhereInput[]
    adminId?: IntFilter<"admins"> | number
    firstName?: StringFilter<"admins"> | string
    lastName?: StringFilter<"admins"> | string
    email?: StringFilter<"admins"> | string
    wallet?: DecimalFilter<"admins"> | Decimal | DecimalJsLike | number | string
    updatedAt?: IntNullableFilter<"admins"> | number | null
    createdAt?: IntFilter<"admins"> | number
    passwordHash?: StringFilter<"admins"> | string
    admin_sessions?: Admin_sessionsListRelationFilter
  }

  export type adminsOrderByWithRelationInput = {
    adminId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    wallet?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    passwordHash?: SortOrder
    admin_sessions?: admin_sessionsOrderByRelationAggregateInput
    _relevance?: adminsOrderByRelevanceInput
  }

  export type adminsWhereUniqueInput = Prisma.AtLeast<{
    adminId?: number
    AND?: adminsWhereInput | adminsWhereInput[]
    OR?: adminsWhereInput[]
    NOT?: adminsWhereInput | adminsWhereInput[]
    firstName?: StringFilter<"admins"> | string
    lastName?: StringFilter<"admins"> | string
    email?: StringFilter<"admins"> | string
    wallet?: DecimalFilter<"admins"> | Decimal | DecimalJsLike | number | string
    updatedAt?: IntNullableFilter<"admins"> | number | null
    createdAt?: IntFilter<"admins"> | number
    passwordHash?: StringFilter<"admins"> | string
    admin_sessions?: Admin_sessionsListRelationFilter
  }, "adminId">

  export type adminsOrderByWithAggregationInput = {
    adminId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    wallet?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    passwordHash?: SortOrder
    _count?: adminsCountOrderByAggregateInput
    _avg?: adminsAvgOrderByAggregateInput
    _max?: adminsMaxOrderByAggregateInput
    _min?: adminsMinOrderByAggregateInput
    _sum?: adminsSumOrderByAggregateInput
  }

  export type adminsScalarWhereWithAggregatesInput = {
    AND?: adminsScalarWhereWithAggregatesInput | adminsScalarWhereWithAggregatesInput[]
    OR?: adminsScalarWhereWithAggregatesInput[]
    NOT?: adminsScalarWhereWithAggregatesInput | adminsScalarWhereWithAggregatesInput[]
    adminId?: IntWithAggregatesFilter<"admins"> | number
    firstName?: StringWithAggregatesFilter<"admins"> | string
    lastName?: StringWithAggregatesFilter<"admins"> | string
    email?: StringWithAggregatesFilter<"admins"> | string
    wallet?: DecimalWithAggregatesFilter<"admins"> | Decimal | DecimalJsLike | number | string
    updatedAt?: IntNullableWithAggregatesFilter<"admins"> | number | null
    createdAt?: IntWithAggregatesFilter<"admins"> | number
    passwordHash?: StringWithAggregatesFilter<"admins"> | string
  }

  export type contact_requestsWhereInput = {
    AND?: contact_requestsWhereInput | contact_requestsWhereInput[]
    OR?: contact_requestsWhereInput[]
    NOT?: contact_requestsWhereInput | contact_requestsWhereInput[]
    contactRequestId?: IntFilter<"contact_requests"> | number
    firstName?: StringFilter<"contact_requests"> | string
    lastName?: StringFilter<"contact_requests"> | string
    email?: StringFilter<"contact_requests"> | string
    whatsAppCountryCode?: StringFilter<"contact_requests"> | string
    whatsAppNumber?: StringFilter<"contact_requests"> | string
    message?: StringFilter<"contact_requests"> | string
    updatedAt?: IntNullableFilter<"contact_requests"> | number | null
    createdAt?: IntFilter<"contact_requests"> | number
  }

  export type contact_requestsOrderByWithRelationInput = {
    contactRequestId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    whatsAppCountryCode?: SortOrder
    whatsAppNumber?: SortOrder
    message?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _relevance?: contact_requestsOrderByRelevanceInput
  }

  export type contact_requestsWhereUniqueInput = Prisma.AtLeast<{
    contactRequestId?: number
    AND?: contact_requestsWhereInput | contact_requestsWhereInput[]
    OR?: contact_requestsWhereInput[]
    NOT?: contact_requestsWhereInput | contact_requestsWhereInput[]
    firstName?: StringFilter<"contact_requests"> | string
    lastName?: StringFilter<"contact_requests"> | string
    email?: StringFilter<"contact_requests"> | string
    whatsAppCountryCode?: StringFilter<"contact_requests"> | string
    whatsAppNumber?: StringFilter<"contact_requests"> | string
    message?: StringFilter<"contact_requests"> | string
    updatedAt?: IntNullableFilter<"contact_requests"> | number | null
    createdAt?: IntFilter<"contact_requests"> | number
  }, "contactRequestId">

  export type contact_requestsOrderByWithAggregationInput = {
    contactRequestId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    whatsAppCountryCode?: SortOrder
    whatsAppNumber?: SortOrder
    message?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: contact_requestsCountOrderByAggregateInput
    _avg?: contact_requestsAvgOrderByAggregateInput
    _max?: contact_requestsMaxOrderByAggregateInput
    _min?: contact_requestsMinOrderByAggregateInput
    _sum?: contact_requestsSumOrderByAggregateInput
  }

  export type contact_requestsScalarWhereWithAggregatesInput = {
    AND?: contact_requestsScalarWhereWithAggregatesInput | contact_requestsScalarWhereWithAggregatesInput[]
    OR?: contact_requestsScalarWhereWithAggregatesInput[]
    NOT?: contact_requestsScalarWhereWithAggregatesInput | contact_requestsScalarWhereWithAggregatesInput[]
    contactRequestId?: IntWithAggregatesFilter<"contact_requests"> | number
    firstName?: StringWithAggregatesFilter<"contact_requests"> | string
    lastName?: StringWithAggregatesFilter<"contact_requests"> | string
    email?: StringWithAggregatesFilter<"contact_requests"> | string
    whatsAppCountryCode?: StringWithAggregatesFilter<"contact_requests"> | string
    whatsAppNumber?: StringWithAggregatesFilter<"contact_requests"> | string
    message?: StringWithAggregatesFilter<"contact_requests"> | string
    updatedAt?: IntNullableWithAggregatesFilter<"contact_requests"> | number | null
    createdAt?: IntWithAggregatesFilter<"contact_requests"> | number
  }

  export type user_sessionsWhereInput = {
    AND?: user_sessionsWhereInput | user_sessionsWhereInput[]
    OR?: user_sessionsWhereInput[]
    NOT?: user_sessionsWhereInput | user_sessionsWhereInput[]
    userSessionId?: IntFilter<"user_sessions"> | number
    userId?: IntFilter<"user_sessions"> | number
    createdAt?: IntFilter<"user_sessions"> | number
    validTill?: IntFilter<"user_sessions"> | number
    refreshTokenId?: IntFilter<"user_sessions"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_sessionsOrderByWithRelationInput = {
    userSessionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    validTill?: SortOrder
    refreshTokenId?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type user_sessionsWhereUniqueInput = Prisma.AtLeast<{
    userSessionId?: number
    AND?: user_sessionsWhereInput | user_sessionsWhereInput[]
    OR?: user_sessionsWhereInput[]
    NOT?: user_sessionsWhereInput | user_sessionsWhereInput[]
    userId?: IntFilter<"user_sessions"> | number
    createdAt?: IntFilter<"user_sessions"> | number
    validTill?: IntFilter<"user_sessions"> | number
    refreshTokenId?: IntFilter<"user_sessions"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "userSessionId">

  export type user_sessionsOrderByWithAggregationInput = {
    userSessionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    validTill?: SortOrder
    refreshTokenId?: SortOrder
    _count?: user_sessionsCountOrderByAggregateInput
    _avg?: user_sessionsAvgOrderByAggregateInput
    _max?: user_sessionsMaxOrderByAggregateInput
    _min?: user_sessionsMinOrderByAggregateInput
    _sum?: user_sessionsSumOrderByAggregateInput
  }

  export type user_sessionsScalarWhereWithAggregatesInput = {
    AND?: user_sessionsScalarWhereWithAggregatesInput | user_sessionsScalarWhereWithAggregatesInput[]
    OR?: user_sessionsScalarWhereWithAggregatesInput[]
    NOT?: user_sessionsScalarWhereWithAggregatesInput | user_sessionsScalarWhereWithAggregatesInput[]
    userSessionId?: IntWithAggregatesFilter<"user_sessions"> | number
    userId?: IntWithAggregatesFilter<"user_sessions"> | number
    createdAt?: IntWithAggregatesFilter<"user_sessions"> | number
    validTill?: IntWithAggregatesFilter<"user_sessions"> | number
    refreshTokenId?: IntWithAggregatesFilter<"user_sessions"> | number
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    userId?: IntFilter<"users"> | number
    firstName?: StringFilter<"users"> | string
    lastName?: StringFilter<"users"> | string
    gender?: Enumusers_genderFilter<"users"> | $Enums.users_gender
    username?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    countryCode?: StringFilter<"users"> | string
    mobileNumber?: StringFilter<"users"> | string
    wallet?: DecimalFilter<"users"> | Decimal | DecimalJsLike | number | string
    updatedAt?: IntNullableFilter<"users"> | number | null
    createdAt?: IntFilter<"users"> | number
    passwordHash?: StringFilter<"users"> | string
    user_sessions?: User_sessionsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    username?: SortOrder
    email?: SortOrder
    countryCode?: SortOrder
    mobileNumber?: SortOrder
    wallet?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    passwordHash?: SortOrder
    user_sessions?: user_sessionsOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    firstName?: StringFilter<"users"> | string
    lastName?: StringFilter<"users"> | string
    gender?: Enumusers_genderFilter<"users"> | $Enums.users_gender
    username?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    countryCode?: StringFilter<"users"> | string
    mobileNumber?: StringFilter<"users"> | string
    wallet?: DecimalFilter<"users"> | Decimal | DecimalJsLike | number | string
    updatedAt?: IntNullableFilter<"users"> | number | null
    createdAt?: IntFilter<"users"> | number
    passwordHash?: StringFilter<"users"> | string
    user_sessions?: User_sessionsListRelationFilter
  }, "userId">

  export type usersOrderByWithAggregationInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    username?: SortOrder
    email?: SortOrder
    countryCode?: SortOrder
    mobileNumber?: SortOrder
    wallet?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    passwordHash?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"users"> | number
    firstName?: StringWithAggregatesFilter<"users"> | string
    lastName?: StringWithAggregatesFilter<"users"> | string
    gender?: Enumusers_genderWithAggregatesFilter<"users"> | $Enums.users_gender
    username?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    countryCode?: StringWithAggregatesFilter<"users"> | string
    mobileNumber?: StringWithAggregatesFilter<"users"> | string
    wallet?: DecimalWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string
    updatedAt?: IntNullableWithAggregatesFilter<"users"> | number | null
    createdAt?: IntWithAggregatesFilter<"users"> | number
    passwordHash?: StringWithAggregatesFilter<"users"> | string
  }

  export type clientsWhereInput = {
    AND?: clientsWhereInput | clientsWhereInput[]
    OR?: clientsWhereInput[]
    NOT?: clientsWhereInput | clientsWhereInput[]
    clientId?: IntFilter<"clients"> | number
    name?: StringFilter<"clients"> | string
    mobileNumber?: StringFilter<"clients"> | string
    whatsappNumber?: StringFilter<"clients"> | string
    email?: StringFilter<"clients"> | string
    address?: StringFilter<"clients"> | string
    purposeOfContact?: StringFilter<"clients"> | string
    followUpDate?: IntNullableFilter<"clients"> | number | null
    createdAt?: IntFilter<"clients"> | number
    updatedAt?: IntNullableFilter<"clients"> | number | null
  }

  export type clientsOrderByWithRelationInput = {
    clientId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    whatsappNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    purposeOfContact?: SortOrder
    followUpDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: clientsOrderByRelevanceInput
  }

  export type clientsWhereUniqueInput = Prisma.AtLeast<{
    clientId?: number
    AND?: clientsWhereInput | clientsWhereInput[]
    OR?: clientsWhereInput[]
    NOT?: clientsWhereInput | clientsWhereInput[]
    name?: StringFilter<"clients"> | string
    mobileNumber?: StringFilter<"clients"> | string
    whatsappNumber?: StringFilter<"clients"> | string
    email?: StringFilter<"clients"> | string
    address?: StringFilter<"clients"> | string
    purposeOfContact?: StringFilter<"clients"> | string
    followUpDate?: IntNullableFilter<"clients"> | number | null
    createdAt?: IntFilter<"clients"> | number
    updatedAt?: IntNullableFilter<"clients"> | number | null
  }, "clientId">

  export type clientsOrderByWithAggregationInput = {
    clientId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    whatsappNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    purposeOfContact?: SortOrder
    followUpDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: clientsCountOrderByAggregateInput
    _avg?: clientsAvgOrderByAggregateInput
    _max?: clientsMaxOrderByAggregateInput
    _min?: clientsMinOrderByAggregateInput
    _sum?: clientsSumOrderByAggregateInput
  }

  export type clientsScalarWhereWithAggregatesInput = {
    AND?: clientsScalarWhereWithAggregatesInput | clientsScalarWhereWithAggregatesInput[]
    OR?: clientsScalarWhereWithAggregatesInput[]
    NOT?: clientsScalarWhereWithAggregatesInput | clientsScalarWhereWithAggregatesInput[]
    clientId?: IntWithAggregatesFilter<"clients"> | number
    name?: StringWithAggregatesFilter<"clients"> | string
    mobileNumber?: StringWithAggregatesFilter<"clients"> | string
    whatsappNumber?: StringWithAggregatesFilter<"clients"> | string
    email?: StringWithAggregatesFilter<"clients"> | string
    address?: StringWithAggregatesFilter<"clients"> | string
    purposeOfContact?: StringWithAggregatesFilter<"clients"> | string
    followUpDate?: IntNullableWithAggregatesFilter<"clients"> | number | null
    createdAt?: IntWithAggregatesFilter<"clients"> | number
    updatedAt?: IntNullableWithAggregatesFilter<"clients"> | number | null
  }

  export type admin_sessionsCreateInput = {
    createdAt: number
    validTill: number
    refreshTokenId: number
    admins: adminsCreateNestedOneWithoutAdmin_sessionsInput
  }

  export type admin_sessionsUncheckedCreateInput = {
    adminSessionId?: number
    adminId: number
    createdAt: number
    validTill: number
    refreshTokenId: number
  }

  export type admin_sessionsUpdateInput = {
    createdAt?: IntFieldUpdateOperationsInput | number
    validTill?: IntFieldUpdateOperationsInput | number
    refreshTokenId?: IntFieldUpdateOperationsInput | number
    admins?: adminsUpdateOneRequiredWithoutAdmin_sessionsNestedInput
  }

  export type admin_sessionsUncheckedUpdateInput = {
    adminSessionId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    createdAt?: IntFieldUpdateOperationsInput | number
    validTill?: IntFieldUpdateOperationsInput | number
    refreshTokenId?: IntFieldUpdateOperationsInput | number
  }

  export type admin_sessionsCreateManyInput = {
    adminSessionId?: number
    adminId: number
    createdAt: number
    validTill: number
    refreshTokenId: number
  }

  export type admin_sessionsUpdateManyMutationInput = {
    createdAt?: IntFieldUpdateOperationsInput | number
    validTill?: IntFieldUpdateOperationsInput | number
    refreshTokenId?: IntFieldUpdateOperationsInput | number
  }

  export type admin_sessionsUncheckedUpdateManyInput = {
    adminSessionId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    createdAt?: IntFieldUpdateOperationsInput | number
    validTill?: IntFieldUpdateOperationsInput | number
    refreshTokenId?: IntFieldUpdateOperationsInput | number
  }

  export type adminsCreateInput = {
    firstName: string
    lastName: string
    email: string
    wallet: Decimal | DecimalJsLike | number | string
    updatedAt?: number | null
    createdAt: number
    passwordHash: string
    admin_sessions?: admin_sessionsCreateNestedManyWithoutAdminsInput
  }

  export type adminsUncheckedCreateInput = {
    adminId?: number
    firstName: string
    lastName: string
    email: string
    wallet: Decimal | DecimalJsLike | number | string
    updatedAt?: number | null
    createdAt: number
    passwordHash: string
    admin_sessions?: admin_sessionsUncheckedCreateNestedManyWithoutAdminsInput
  }

  export type adminsUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    wallet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: IntFieldUpdateOperationsInput | number
    passwordHash?: StringFieldUpdateOperationsInput | string
    admin_sessions?: admin_sessionsUpdateManyWithoutAdminsNestedInput
  }

  export type adminsUncheckedUpdateInput = {
    adminId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    wallet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: IntFieldUpdateOperationsInput | number
    passwordHash?: StringFieldUpdateOperationsInput | string
    admin_sessions?: admin_sessionsUncheckedUpdateManyWithoutAdminsNestedInput
  }

  export type adminsCreateManyInput = {
    adminId?: number
    firstName: string
    lastName: string
    email: string
    wallet: Decimal | DecimalJsLike | number | string
    updatedAt?: number | null
    createdAt: number
    passwordHash: string
  }

  export type adminsUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    wallet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: IntFieldUpdateOperationsInput | number
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type adminsUncheckedUpdateManyInput = {
    adminId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    wallet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: IntFieldUpdateOperationsInput | number
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type contact_requestsCreateInput = {
    firstName: string
    lastName: string
    email: string
    whatsAppCountryCode: string
    whatsAppNumber: string
    message: string
    updatedAt?: number | null
    createdAt: number
  }

  export type contact_requestsUncheckedCreateInput = {
    contactRequestId?: number
    firstName: string
    lastName: string
    email: string
    whatsAppCountryCode: string
    whatsAppNumber: string
    message: string
    updatedAt?: number | null
    createdAt: number
  }

  export type contact_requestsUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsAppCountryCode?: StringFieldUpdateOperationsInput | string
    whatsAppNumber?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: IntFieldUpdateOperationsInput | number
  }

  export type contact_requestsUncheckedUpdateInput = {
    contactRequestId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsAppCountryCode?: StringFieldUpdateOperationsInput | string
    whatsAppNumber?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: IntFieldUpdateOperationsInput | number
  }

  export type contact_requestsCreateManyInput = {
    contactRequestId?: number
    firstName: string
    lastName: string
    email: string
    whatsAppCountryCode: string
    whatsAppNumber: string
    message: string
    updatedAt?: number | null
    createdAt: number
  }

  export type contact_requestsUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsAppCountryCode?: StringFieldUpdateOperationsInput | string
    whatsAppNumber?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: IntFieldUpdateOperationsInput | number
  }

  export type contact_requestsUncheckedUpdateManyInput = {
    contactRequestId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsAppCountryCode?: StringFieldUpdateOperationsInput | string
    whatsAppNumber?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: IntFieldUpdateOperationsInput | number
  }

  export type user_sessionsCreateInput = {
    createdAt: number
    validTill: number
    refreshTokenId: number
    users: usersCreateNestedOneWithoutUser_sessionsInput
  }

  export type user_sessionsUncheckedCreateInput = {
    userSessionId?: number
    userId: number
    createdAt: number
    validTill: number
    refreshTokenId: number
  }

  export type user_sessionsUpdateInput = {
    createdAt?: IntFieldUpdateOperationsInput | number
    validTill?: IntFieldUpdateOperationsInput | number
    refreshTokenId?: IntFieldUpdateOperationsInput | number
    users?: usersUpdateOneRequiredWithoutUser_sessionsNestedInput
  }

  export type user_sessionsUncheckedUpdateInput = {
    userSessionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: IntFieldUpdateOperationsInput | number
    validTill?: IntFieldUpdateOperationsInput | number
    refreshTokenId?: IntFieldUpdateOperationsInput | number
  }

  export type user_sessionsCreateManyInput = {
    userSessionId?: number
    userId: number
    createdAt: number
    validTill: number
    refreshTokenId: number
  }

  export type user_sessionsUpdateManyMutationInput = {
    createdAt?: IntFieldUpdateOperationsInput | number
    validTill?: IntFieldUpdateOperationsInput | number
    refreshTokenId?: IntFieldUpdateOperationsInput | number
  }

  export type user_sessionsUncheckedUpdateManyInput = {
    userSessionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: IntFieldUpdateOperationsInput | number
    validTill?: IntFieldUpdateOperationsInput | number
    refreshTokenId?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateInput = {
    firstName: string
    lastName: string
    gender: $Enums.users_gender
    username: string
    email: string
    countryCode: string
    mobileNumber: string
    wallet: Decimal | DecimalJsLike | number | string
    updatedAt?: number | null
    createdAt: number
    passwordHash: string
    user_sessions?: user_sessionsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    userId?: number
    firstName: string
    lastName: string
    gender: $Enums.users_gender
    username: string
    email: string
    countryCode: string
    mobileNumber: string
    wallet: Decimal | DecimalJsLike | number | string
    updatedAt?: number | null
    createdAt: number
    passwordHash: string
    user_sessions?: user_sessionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: Enumusers_genderFieldUpdateOperationsInput | $Enums.users_gender
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    wallet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: IntFieldUpdateOperationsInput | number
    passwordHash?: StringFieldUpdateOperationsInput | string
    user_sessions?: user_sessionsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: Enumusers_genderFieldUpdateOperationsInput | $Enums.users_gender
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    wallet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: IntFieldUpdateOperationsInput | number
    passwordHash?: StringFieldUpdateOperationsInput | string
    user_sessions?: user_sessionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    userId?: number
    firstName: string
    lastName: string
    gender: $Enums.users_gender
    username: string
    email: string
    countryCode: string
    mobileNumber: string
    wallet: Decimal | DecimalJsLike | number | string
    updatedAt?: number | null
    createdAt: number
    passwordHash: string
  }

  export type usersUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: Enumusers_genderFieldUpdateOperationsInput | $Enums.users_gender
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    wallet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: IntFieldUpdateOperationsInput | number
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: Enumusers_genderFieldUpdateOperationsInput | $Enums.users_gender
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    wallet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: IntFieldUpdateOperationsInput | number
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type clientsCreateInput = {
    name: string
    mobileNumber: string
    whatsappNumber: string
    email: string
    address: string
    purposeOfContact: string
    followUpDate?: number | null
    createdAt: number
    updatedAt?: number | null
  }

  export type clientsUncheckedCreateInput = {
    clientId?: number
    name: string
    mobileNumber: string
    whatsappNumber: string
    email: string
    address: string
    purposeOfContact: string
    followUpDate?: number | null
    createdAt: number
    updatedAt?: number | null
  }

  export type clientsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    whatsappNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    purposeOfContact?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type clientsUncheckedUpdateInput = {
    clientId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    whatsappNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    purposeOfContact?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type clientsCreateManyInput = {
    clientId?: number
    name: string
    mobileNumber: string
    whatsappNumber: string
    email: string
    address: string
    purposeOfContact: string
    followUpDate?: number | null
    createdAt: number
    updatedAt?: number | null
  }

  export type clientsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    whatsappNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    purposeOfContact?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type clientsUncheckedUpdateManyInput = {
    clientId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    whatsappNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    purposeOfContact?: StringFieldUpdateOperationsInput | string
    followUpDate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AdminsScalarRelationFilter = {
    is?: adminsWhereInput
    isNot?: adminsWhereInput
  }

  export type admin_sessionsCountOrderByAggregateInput = {
    adminSessionId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    validTill?: SortOrder
    refreshTokenId?: SortOrder
  }

  export type admin_sessionsAvgOrderByAggregateInput = {
    adminSessionId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    validTill?: SortOrder
    refreshTokenId?: SortOrder
  }

  export type admin_sessionsMaxOrderByAggregateInput = {
    adminSessionId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    validTill?: SortOrder
    refreshTokenId?: SortOrder
  }

  export type admin_sessionsMinOrderByAggregateInput = {
    adminSessionId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    validTill?: SortOrder
    refreshTokenId?: SortOrder
  }

  export type admin_sessionsSumOrderByAggregateInput = {
    adminSessionId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    validTill?: SortOrder
    refreshTokenId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Admin_sessionsListRelationFilter = {
    every?: admin_sessionsWhereInput
    some?: admin_sessionsWhereInput
    none?: admin_sessionsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type admin_sessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type adminsOrderByRelevanceInput = {
    fields: adminsOrderByRelevanceFieldEnum | adminsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type adminsCountOrderByAggregateInput = {
    adminId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    wallet?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    passwordHash?: SortOrder
  }

  export type adminsAvgOrderByAggregateInput = {
    adminId?: SortOrder
    wallet?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type adminsMaxOrderByAggregateInput = {
    adminId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    wallet?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    passwordHash?: SortOrder
  }

  export type adminsMinOrderByAggregateInput = {
    adminId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    wallet?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    passwordHash?: SortOrder
  }

  export type adminsSumOrderByAggregateInput = {
    adminId?: SortOrder
    wallet?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type contact_requestsOrderByRelevanceInput = {
    fields: contact_requestsOrderByRelevanceFieldEnum | contact_requestsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type contact_requestsCountOrderByAggregateInput = {
    contactRequestId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    whatsAppCountryCode?: SortOrder
    whatsAppNumber?: SortOrder
    message?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type contact_requestsAvgOrderByAggregateInput = {
    contactRequestId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type contact_requestsMaxOrderByAggregateInput = {
    contactRequestId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    whatsAppCountryCode?: SortOrder
    whatsAppNumber?: SortOrder
    message?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type contact_requestsMinOrderByAggregateInput = {
    contactRequestId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    whatsAppCountryCode?: SortOrder
    whatsAppNumber?: SortOrder
    message?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type contact_requestsSumOrderByAggregateInput = {
    contactRequestId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type user_sessionsCountOrderByAggregateInput = {
    userSessionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    validTill?: SortOrder
    refreshTokenId?: SortOrder
  }

  export type user_sessionsAvgOrderByAggregateInput = {
    userSessionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    validTill?: SortOrder
    refreshTokenId?: SortOrder
  }

  export type user_sessionsMaxOrderByAggregateInput = {
    userSessionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    validTill?: SortOrder
    refreshTokenId?: SortOrder
  }

  export type user_sessionsMinOrderByAggregateInput = {
    userSessionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    validTill?: SortOrder
    refreshTokenId?: SortOrder
  }

  export type user_sessionsSumOrderByAggregateInput = {
    userSessionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    validTill?: SortOrder
    refreshTokenId?: SortOrder
  }

  export type Enumusers_genderFilter<$PrismaModel = never> = {
    equals?: $Enums.users_gender | Enumusers_genderFieldRefInput<$PrismaModel>
    in?: $Enums.users_gender[]
    notIn?: $Enums.users_gender[]
    not?: NestedEnumusers_genderFilter<$PrismaModel> | $Enums.users_gender
  }

  export type User_sessionsListRelationFilter = {
    every?: user_sessionsWhereInput
    some?: user_sessionsWhereInput
    none?: user_sessionsWhereInput
  }

  export type user_sessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    username?: SortOrder
    email?: SortOrder
    countryCode?: SortOrder
    mobileNumber?: SortOrder
    wallet?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    passwordHash?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    userId?: SortOrder
    wallet?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    username?: SortOrder
    email?: SortOrder
    countryCode?: SortOrder
    mobileNumber?: SortOrder
    wallet?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    passwordHash?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    username?: SortOrder
    email?: SortOrder
    countryCode?: SortOrder
    mobileNumber?: SortOrder
    wallet?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    passwordHash?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    userId?: SortOrder
    wallet?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type Enumusers_genderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_gender | Enumusers_genderFieldRefInput<$PrismaModel>
    in?: $Enums.users_gender[]
    notIn?: $Enums.users_gender[]
    not?: NestedEnumusers_genderWithAggregatesFilter<$PrismaModel> | $Enums.users_gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusers_genderFilter<$PrismaModel>
    _max?: NestedEnumusers_genderFilter<$PrismaModel>
  }

  export type clientsOrderByRelevanceInput = {
    fields: clientsOrderByRelevanceFieldEnum | clientsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type clientsCountOrderByAggregateInput = {
    clientId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    whatsappNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    purposeOfContact?: SortOrder
    followUpDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type clientsAvgOrderByAggregateInput = {
    clientId?: SortOrder
    followUpDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type clientsMaxOrderByAggregateInput = {
    clientId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    whatsappNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    purposeOfContact?: SortOrder
    followUpDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type clientsMinOrderByAggregateInput = {
    clientId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    whatsappNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    purposeOfContact?: SortOrder
    followUpDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type clientsSumOrderByAggregateInput = {
    clientId?: SortOrder
    followUpDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type adminsCreateNestedOneWithoutAdmin_sessionsInput = {
    create?: XOR<adminsCreateWithoutAdmin_sessionsInput, adminsUncheckedCreateWithoutAdmin_sessionsInput>
    connectOrCreate?: adminsCreateOrConnectWithoutAdmin_sessionsInput
    connect?: adminsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type adminsUpdateOneRequiredWithoutAdmin_sessionsNestedInput = {
    create?: XOR<adminsCreateWithoutAdmin_sessionsInput, adminsUncheckedCreateWithoutAdmin_sessionsInput>
    connectOrCreate?: adminsCreateOrConnectWithoutAdmin_sessionsInput
    upsert?: adminsUpsertWithoutAdmin_sessionsInput
    connect?: adminsWhereUniqueInput
    update?: XOR<XOR<adminsUpdateToOneWithWhereWithoutAdmin_sessionsInput, adminsUpdateWithoutAdmin_sessionsInput>, adminsUncheckedUpdateWithoutAdmin_sessionsInput>
  }

  export type admin_sessionsCreateNestedManyWithoutAdminsInput = {
    create?: XOR<admin_sessionsCreateWithoutAdminsInput, admin_sessionsUncheckedCreateWithoutAdminsInput> | admin_sessionsCreateWithoutAdminsInput[] | admin_sessionsUncheckedCreateWithoutAdminsInput[]
    connectOrCreate?: admin_sessionsCreateOrConnectWithoutAdminsInput | admin_sessionsCreateOrConnectWithoutAdminsInput[]
    createMany?: admin_sessionsCreateManyAdminsInputEnvelope
    connect?: admin_sessionsWhereUniqueInput | admin_sessionsWhereUniqueInput[]
  }

  export type admin_sessionsUncheckedCreateNestedManyWithoutAdminsInput = {
    create?: XOR<admin_sessionsCreateWithoutAdminsInput, admin_sessionsUncheckedCreateWithoutAdminsInput> | admin_sessionsCreateWithoutAdminsInput[] | admin_sessionsUncheckedCreateWithoutAdminsInput[]
    connectOrCreate?: admin_sessionsCreateOrConnectWithoutAdminsInput | admin_sessionsCreateOrConnectWithoutAdminsInput[]
    createMany?: admin_sessionsCreateManyAdminsInputEnvelope
    connect?: admin_sessionsWhereUniqueInput | admin_sessionsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type admin_sessionsUpdateManyWithoutAdminsNestedInput = {
    create?: XOR<admin_sessionsCreateWithoutAdminsInput, admin_sessionsUncheckedCreateWithoutAdminsInput> | admin_sessionsCreateWithoutAdminsInput[] | admin_sessionsUncheckedCreateWithoutAdminsInput[]
    connectOrCreate?: admin_sessionsCreateOrConnectWithoutAdminsInput | admin_sessionsCreateOrConnectWithoutAdminsInput[]
    upsert?: admin_sessionsUpsertWithWhereUniqueWithoutAdminsInput | admin_sessionsUpsertWithWhereUniqueWithoutAdminsInput[]
    createMany?: admin_sessionsCreateManyAdminsInputEnvelope
    set?: admin_sessionsWhereUniqueInput | admin_sessionsWhereUniqueInput[]
    disconnect?: admin_sessionsWhereUniqueInput | admin_sessionsWhereUniqueInput[]
    delete?: admin_sessionsWhereUniqueInput | admin_sessionsWhereUniqueInput[]
    connect?: admin_sessionsWhereUniqueInput | admin_sessionsWhereUniqueInput[]
    update?: admin_sessionsUpdateWithWhereUniqueWithoutAdminsInput | admin_sessionsUpdateWithWhereUniqueWithoutAdminsInput[]
    updateMany?: admin_sessionsUpdateManyWithWhereWithoutAdminsInput | admin_sessionsUpdateManyWithWhereWithoutAdminsInput[]
    deleteMany?: admin_sessionsScalarWhereInput | admin_sessionsScalarWhereInput[]
  }

  export type admin_sessionsUncheckedUpdateManyWithoutAdminsNestedInput = {
    create?: XOR<admin_sessionsCreateWithoutAdminsInput, admin_sessionsUncheckedCreateWithoutAdminsInput> | admin_sessionsCreateWithoutAdminsInput[] | admin_sessionsUncheckedCreateWithoutAdminsInput[]
    connectOrCreate?: admin_sessionsCreateOrConnectWithoutAdminsInput | admin_sessionsCreateOrConnectWithoutAdminsInput[]
    upsert?: admin_sessionsUpsertWithWhereUniqueWithoutAdminsInput | admin_sessionsUpsertWithWhereUniqueWithoutAdminsInput[]
    createMany?: admin_sessionsCreateManyAdminsInputEnvelope
    set?: admin_sessionsWhereUniqueInput | admin_sessionsWhereUniqueInput[]
    disconnect?: admin_sessionsWhereUniqueInput | admin_sessionsWhereUniqueInput[]
    delete?: admin_sessionsWhereUniqueInput | admin_sessionsWhereUniqueInput[]
    connect?: admin_sessionsWhereUniqueInput | admin_sessionsWhereUniqueInput[]
    update?: admin_sessionsUpdateWithWhereUniqueWithoutAdminsInput | admin_sessionsUpdateWithWhereUniqueWithoutAdminsInput[]
    updateMany?: admin_sessionsUpdateManyWithWhereWithoutAdminsInput | admin_sessionsUpdateManyWithWhereWithoutAdminsInput[]
    deleteMany?: admin_sessionsScalarWhereInput | admin_sessionsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutUser_sessionsInput = {
    create?: XOR<usersCreateWithoutUser_sessionsInput, usersUncheckedCreateWithoutUser_sessionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_sessionsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutUser_sessionsNestedInput = {
    create?: XOR<usersCreateWithoutUser_sessionsInput, usersUncheckedCreateWithoutUser_sessionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_sessionsInput
    upsert?: usersUpsertWithoutUser_sessionsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_sessionsInput, usersUpdateWithoutUser_sessionsInput>, usersUncheckedUpdateWithoutUser_sessionsInput>
  }

  export type user_sessionsCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_sessionsCreateWithoutUsersInput, user_sessionsUncheckedCreateWithoutUsersInput> | user_sessionsCreateWithoutUsersInput[] | user_sessionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_sessionsCreateOrConnectWithoutUsersInput | user_sessionsCreateOrConnectWithoutUsersInput[]
    createMany?: user_sessionsCreateManyUsersInputEnvelope
    connect?: user_sessionsWhereUniqueInput | user_sessionsWhereUniqueInput[]
  }

  export type user_sessionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_sessionsCreateWithoutUsersInput, user_sessionsUncheckedCreateWithoutUsersInput> | user_sessionsCreateWithoutUsersInput[] | user_sessionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_sessionsCreateOrConnectWithoutUsersInput | user_sessionsCreateOrConnectWithoutUsersInput[]
    createMany?: user_sessionsCreateManyUsersInputEnvelope
    connect?: user_sessionsWhereUniqueInput | user_sessionsWhereUniqueInput[]
  }

  export type Enumusers_genderFieldUpdateOperationsInput = {
    set?: $Enums.users_gender
  }

  export type user_sessionsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_sessionsCreateWithoutUsersInput, user_sessionsUncheckedCreateWithoutUsersInput> | user_sessionsCreateWithoutUsersInput[] | user_sessionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_sessionsCreateOrConnectWithoutUsersInput | user_sessionsCreateOrConnectWithoutUsersInput[]
    upsert?: user_sessionsUpsertWithWhereUniqueWithoutUsersInput | user_sessionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_sessionsCreateManyUsersInputEnvelope
    set?: user_sessionsWhereUniqueInput | user_sessionsWhereUniqueInput[]
    disconnect?: user_sessionsWhereUniqueInput | user_sessionsWhereUniqueInput[]
    delete?: user_sessionsWhereUniqueInput | user_sessionsWhereUniqueInput[]
    connect?: user_sessionsWhereUniqueInput | user_sessionsWhereUniqueInput[]
    update?: user_sessionsUpdateWithWhereUniqueWithoutUsersInput | user_sessionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_sessionsUpdateManyWithWhereWithoutUsersInput | user_sessionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_sessionsScalarWhereInput | user_sessionsScalarWhereInput[]
  }

  export type user_sessionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_sessionsCreateWithoutUsersInput, user_sessionsUncheckedCreateWithoutUsersInput> | user_sessionsCreateWithoutUsersInput[] | user_sessionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_sessionsCreateOrConnectWithoutUsersInput | user_sessionsCreateOrConnectWithoutUsersInput[]
    upsert?: user_sessionsUpsertWithWhereUniqueWithoutUsersInput | user_sessionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_sessionsCreateManyUsersInputEnvelope
    set?: user_sessionsWhereUniqueInput | user_sessionsWhereUniqueInput[]
    disconnect?: user_sessionsWhereUniqueInput | user_sessionsWhereUniqueInput[]
    delete?: user_sessionsWhereUniqueInput | user_sessionsWhereUniqueInput[]
    connect?: user_sessionsWhereUniqueInput | user_sessionsWhereUniqueInput[]
    update?: user_sessionsUpdateWithWhereUniqueWithoutUsersInput | user_sessionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_sessionsUpdateManyWithWhereWithoutUsersInput | user_sessionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_sessionsScalarWhereInput | user_sessionsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumusers_genderFilter<$PrismaModel = never> = {
    equals?: $Enums.users_gender | Enumusers_genderFieldRefInput<$PrismaModel>
    in?: $Enums.users_gender[]
    notIn?: $Enums.users_gender[]
    not?: NestedEnumusers_genderFilter<$PrismaModel> | $Enums.users_gender
  }

  export type NestedEnumusers_genderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_gender | Enumusers_genderFieldRefInput<$PrismaModel>
    in?: $Enums.users_gender[]
    notIn?: $Enums.users_gender[]
    not?: NestedEnumusers_genderWithAggregatesFilter<$PrismaModel> | $Enums.users_gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusers_genderFilter<$PrismaModel>
    _max?: NestedEnumusers_genderFilter<$PrismaModel>
  }

  export type adminsCreateWithoutAdmin_sessionsInput = {
    firstName: string
    lastName: string
    email: string
    wallet: Decimal | DecimalJsLike | number | string
    updatedAt?: number | null
    createdAt: number
    passwordHash: string
  }

  export type adminsUncheckedCreateWithoutAdmin_sessionsInput = {
    adminId?: number
    firstName: string
    lastName: string
    email: string
    wallet: Decimal | DecimalJsLike | number | string
    updatedAt?: number | null
    createdAt: number
    passwordHash: string
  }

  export type adminsCreateOrConnectWithoutAdmin_sessionsInput = {
    where: adminsWhereUniqueInput
    create: XOR<adminsCreateWithoutAdmin_sessionsInput, adminsUncheckedCreateWithoutAdmin_sessionsInput>
  }

  export type adminsUpsertWithoutAdmin_sessionsInput = {
    update: XOR<adminsUpdateWithoutAdmin_sessionsInput, adminsUncheckedUpdateWithoutAdmin_sessionsInput>
    create: XOR<adminsCreateWithoutAdmin_sessionsInput, adminsUncheckedCreateWithoutAdmin_sessionsInput>
    where?: adminsWhereInput
  }

  export type adminsUpdateToOneWithWhereWithoutAdmin_sessionsInput = {
    where?: adminsWhereInput
    data: XOR<adminsUpdateWithoutAdmin_sessionsInput, adminsUncheckedUpdateWithoutAdmin_sessionsInput>
  }

  export type adminsUpdateWithoutAdmin_sessionsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    wallet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: IntFieldUpdateOperationsInput | number
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type adminsUncheckedUpdateWithoutAdmin_sessionsInput = {
    adminId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    wallet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: IntFieldUpdateOperationsInput | number
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type admin_sessionsCreateWithoutAdminsInput = {
    createdAt: number
    validTill: number
    refreshTokenId: number
  }

  export type admin_sessionsUncheckedCreateWithoutAdminsInput = {
    adminSessionId?: number
    createdAt: number
    validTill: number
    refreshTokenId: number
  }

  export type admin_sessionsCreateOrConnectWithoutAdminsInput = {
    where: admin_sessionsWhereUniqueInput
    create: XOR<admin_sessionsCreateWithoutAdminsInput, admin_sessionsUncheckedCreateWithoutAdminsInput>
  }

  export type admin_sessionsCreateManyAdminsInputEnvelope = {
    data: admin_sessionsCreateManyAdminsInput | admin_sessionsCreateManyAdminsInput[]
    skipDuplicates?: boolean
  }

  export type admin_sessionsUpsertWithWhereUniqueWithoutAdminsInput = {
    where: admin_sessionsWhereUniqueInput
    update: XOR<admin_sessionsUpdateWithoutAdminsInput, admin_sessionsUncheckedUpdateWithoutAdminsInput>
    create: XOR<admin_sessionsCreateWithoutAdminsInput, admin_sessionsUncheckedCreateWithoutAdminsInput>
  }

  export type admin_sessionsUpdateWithWhereUniqueWithoutAdminsInput = {
    where: admin_sessionsWhereUniqueInput
    data: XOR<admin_sessionsUpdateWithoutAdminsInput, admin_sessionsUncheckedUpdateWithoutAdminsInput>
  }

  export type admin_sessionsUpdateManyWithWhereWithoutAdminsInput = {
    where: admin_sessionsScalarWhereInput
    data: XOR<admin_sessionsUpdateManyMutationInput, admin_sessionsUncheckedUpdateManyWithoutAdminsInput>
  }

  export type admin_sessionsScalarWhereInput = {
    AND?: admin_sessionsScalarWhereInput | admin_sessionsScalarWhereInput[]
    OR?: admin_sessionsScalarWhereInput[]
    NOT?: admin_sessionsScalarWhereInput | admin_sessionsScalarWhereInput[]
    adminSessionId?: IntFilter<"admin_sessions"> | number
    adminId?: IntFilter<"admin_sessions"> | number
    createdAt?: IntFilter<"admin_sessions"> | number
    validTill?: IntFilter<"admin_sessions"> | number
    refreshTokenId?: IntFilter<"admin_sessions"> | number
  }

  export type usersCreateWithoutUser_sessionsInput = {
    firstName: string
    lastName: string
    gender: $Enums.users_gender
    username: string
    email: string
    countryCode: string
    mobileNumber: string
    wallet: Decimal | DecimalJsLike | number | string
    updatedAt?: number | null
    createdAt: number
    passwordHash: string
  }

  export type usersUncheckedCreateWithoutUser_sessionsInput = {
    userId?: number
    firstName: string
    lastName: string
    gender: $Enums.users_gender
    username: string
    email: string
    countryCode: string
    mobileNumber: string
    wallet: Decimal | DecimalJsLike | number | string
    updatedAt?: number | null
    createdAt: number
    passwordHash: string
  }

  export type usersCreateOrConnectWithoutUser_sessionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_sessionsInput, usersUncheckedCreateWithoutUser_sessionsInput>
  }

  export type usersUpsertWithoutUser_sessionsInput = {
    update: XOR<usersUpdateWithoutUser_sessionsInput, usersUncheckedUpdateWithoutUser_sessionsInput>
    create: XOR<usersCreateWithoutUser_sessionsInput, usersUncheckedCreateWithoutUser_sessionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_sessionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_sessionsInput, usersUncheckedUpdateWithoutUser_sessionsInput>
  }

  export type usersUpdateWithoutUser_sessionsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: Enumusers_genderFieldUpdateOperationsInput | $Enums.users_gender
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    wallet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: IntFieldUpdateOperationsInput | number
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateWithoutUser_sessionsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: Enumusers_genderFieldUpdateOperationsInput | $Enums.users_gender
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    wallet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: IntFieldUpdateOperationsInput | number
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type user_sessionsCreateWithoutUsersInput = {
    createdAt: number
    validTill: number
    refreshTokenId: number
  }

  export type user_sessionsUncheckedCreateWithoutUsersInput = {
    userSessionId?: number
    createdAt: number
    validTill: number
    refreshTokenId: number
  }

  export type user_sessionsCreateOrConnectWithoutUsersInput = {
    where: user_sessionsWhereUniqueInput
    create: XOR<user_sessionsCreateWithoutUsersInput, user_sessionsUncheckedCreateWithoutUsersInput>
  }

  export type user_sessionsCreateManyUsersInputEnvelope = {
    data: user_sessionsCreateManyUsersInput | user_sessionsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_sessionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_sessionsWhereUniqueInput
    update: XOR<user_sessionsUpdateWithoutUsersInput, user_sessionsUncheckedUpdateWithoutUsersInput>
    create: XOR<user_sessionsCreateWithoutUsersInput, user_sessionsUncheckedCreateWithoutUsersInput>
  }

  export type user_sessionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_sessionsWhereUniqueInput
    data: XOR<user_sessionsUpdateWithoutUsersInput, user_sessionsUncheckedUpdateWithoutUsersInput>
  }

  export type user_sessionsUpdateManyWithWhereWithoutUsersInput = {
    where: user_sessionsScalarWhereInput
    data: XOR<user_sessionsUpdateManyMutationInput, user_sessionsUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_sessionsScalarWhereInput = {
    AND?: user_sessionsScalarWhereInput | user_sessionsScalarWhereInput[]
    OR?: user_sessionsScalarWhereInput[]
    NOT?: user_sessionsScalarWhereInput | user_sessionsScalarWhereInput[]
    userSessionId?: IntFilter<"user_sessions"> | number
    userId?: IntFilter<"user_sessions"> | number
    createdAt?: IntFilter<"user_sessions"> | number
    validTill?: IntFilter<"user_sessions"> | number
    refreshTokenId?: IntFilter<"user_sessions"> | number
  }

  export type admin_sessionsCreateManyAdminsInput = {
    adminSessionId?: number
    createdAt: number
    validTill: number
    refreshTokenId: number
  }

  export type admin_sessionsUpdateWithoutAdminsInput = {
    createdAt?: IntFieldUpdateOperationsInput | number
    validTill?: IntFieldUpdateOperationsInput | number
    refreshTokenId?: IntFieldUpdateOperationsInput | number
  }

  export type admin_sessionsUncheckedUpdateWithoutAdminsInput = {
    adminSessionId?: IntFieldUpdateOperationsInput | number
    createdAt?: IntFieldUpdateOperationsInput | number
    validTill?: IntFieldUpdateOperationsInput | number
    refreshTokenId?: IntFieldUpdateOperationsInput | number
  }

  export type admin_sessionsUncheckedUpdateManyWithoutAdminsInput = {
    adminSessionId?: IntFieldUpdateOperationsInput | number
    createdAt?: IntFieldUpdateOperationsInput | number
    validTill?: IntFieldUpdateOperationsInput | number
    refreshTokenId?: IntFieldUpdateOperationsInput | number
  }

  export type user_sessionsCreateManyUsersInput = {
    userSessionId?: number
    createdAt: number
    validTill: number
    refreshTokenId: number
  }

  export type user_sessionsUpdateWithoutUsersInput = {
    createdAt?: IntFieldUpdateOperationsInput | number
    validTill?: IntFieldUpdateOperationsInput | number
    refreshTokenId?: IntFieldUpdateOperationsInput | number
  }

  export type user_sessionsUncheckedUpdateWithoutUsersInput = {
    userSessionId?: IntFieldUpdateOperationsInput | number
    createdAt?: IntFieldUpdateOperationsInput | number
    validTill?: IntFieldUpdateOperationsInput | number
    refreshTokenId?: IntFieldUpdateOperationsInput | number
  }

  export type user_sessionsUncheckedUpdateManyWithoutUsersInput = {
    userSessionId?: IntFieldUpdateOperationsInput | number
    createdAt?: IntFieldUpdateOperationsInput | number
    validTill?: IntFieldUpdateOperationsInput | number
    refreshTokenId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}