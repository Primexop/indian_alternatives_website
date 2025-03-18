const buildTypesArr = ["apk", "aab"] as const;

export type TBuildTypes = (typeof buildTypesArr)[number];

type TBuildTypesObject = {
    [K in TBuildTypes]: K;
};

const buildTypesObj = Object.fromEntries(
    buildTypesArr.map((status) => [status, status])
) as TBuildTypesObject;

export const buildTypes = {
    arr: buildTypesArr,
    obj: buildTypesObj,
};

const androidBuildRequestsStatusArr = [
    "pending",
    "completed",
    "failed",
] as const;

export type TAndroidBuildRequestsStatus =
    (typeof androidBuildRequestsStatusArr)[number];

type TAndroidBuildRequestsStatusObj = {
    [K in TAndroidBuildRequestsStatus]: K;
};

const androidBuildRequestsStatusObj = Object.fromEntries(
    androidBuildRequestsStatusArr.map((status) => [status, status])
) as TAndroidBuildRequestsStatusObj;

export const androidBuildRequestsStatus = {
    arr: androidBuildRequestsStatusArr,
    obj: androidBuildRequestsStatusObj,
};
