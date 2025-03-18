import type { $Enums } from "@dummyxPrisma/generatedClient/index";

type ValueOf<T> = T[keyof T];

type NonEmptyArray<T> = [T, ...T[]];

type MustInclude<T, U extends T[]> = [T] extends [ValueOf<U>] ? U : never;

function stringUnionToArray<T>() {
    return <U extends NonEmptyArray<T>>(...elements: MustInclude<T, U>) => elements;
}
function arrayToObject<T extends string | number | symbol>(arr: T[]): { [K in T]: K } {
    return arr.reduce(
        (acc, curr) => {
            acc[curr] = curr;
            return acc;
        },
        {} as { [K in T]: K }
    );
}

/** Data for enums */

const app_users_genderArr = stringUnionToArray<$Enums.users_gender>()("male", "female", "other");

export const app_users_genderData = {
    array: app_users_genderArr,
    object: arrayToObject(app_users_genderArr),
};
