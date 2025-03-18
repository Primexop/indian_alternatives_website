const supportMethodIconsNamesArr = [
    "whatsapp",
    "email",
    "instagram",
    "phone",
    "telegram",
    "discord",
] as const;

export type TSupportMethodIconsNames =
    (typeof supportMethodIconsNamesArr)[number];

type TSupportMethodIconsNamesObj = {
    [K in TSupportMethodIconsNames]: K;
};

const supportMethodIconsNamesObj = Object.fromEntries(
    supportMethodIconsNamesArr.map((data, i) => {
        return [data, data];
    })
) as TSupportMethodIconsNamesObj;

export const supportMethodIconsNames = {
    arr: supportMethodIconsNamesArr,
    obj: supportMethodIconsNamesObj,
};
