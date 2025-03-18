const contestStatusArr = [
    "upcoming",
    "ongoing",
    "cancelled",
    "cancelling",
    "resulted",
    "resulting",
] as const;

export type TContestStatus = (typeof contestStatusArr)[number];

type ContestStatusObject = {
    [K in TContestStatus]: K;
};

const contestStatusObject = Object.fromEntries(
    contestStatusArr.map((status) => [status, status])
) as ContestStatusObject;

export const contestStatus = {
    arr: contestStatusArr,
    object: contestStatusObject,
};
