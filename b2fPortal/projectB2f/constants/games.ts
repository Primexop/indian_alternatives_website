const gameTypesArr = ["contest", "challenge", "tournament"] as const;

type TGameTypes = (typeof gameTypesArr)[number];

const gameTypesObject: Record<TGameTypes, TGameTypes> = gameTypesArr.reduce(
    (obj, type) => {
        obj[type] = type;
        return obj;
    },
    {} as Record<TGameTypes, TGameTypes>
);

export const gameTypes = {
    arr: gameTypesArr,
    object: gameTypesObject,
};
