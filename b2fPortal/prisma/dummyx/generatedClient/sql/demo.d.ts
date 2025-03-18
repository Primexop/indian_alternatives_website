import * as $runtime from "../runtime/library"

/**
 */
export const demo: () => $runtime.TypedSql<demo.Parameters, demo.Result>

export namespace demo {
  export type Parameters = []
  export type Result = {
    adminId: number
    firstName: string
    lastName: string
    email: string
    wallet: $runtime.Decimal
    updatedAt: number | null
    createdAt: number
    passwordHash: string
  }
}
