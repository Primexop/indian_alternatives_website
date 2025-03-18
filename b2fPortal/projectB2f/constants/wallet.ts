const walletTypesArr = ["winWallet", "depositWallet"] as const;

export type TWalletTypes = (typeof walletTypesArr)[number];

type TWalletTypesObject = {
    [K in TWalletTypes]: K;
};

const walletTypesObj = Object.fromEntries(
    walletTypesArr.map((status) => [status, status])
) as TWalletTypesObject;

export const walletTypes = {
    arr: walletTypesArr,
    obj: walletTypesObj,
};

const transactionTypesArr = ["credit", "debit"] as const;

export type TTransactionTypes = (typeof transactionTypesArr)[number];

type TTransactionTypesObj = {
    [K in TTransactionTypes]: K;
};

const transactionTypesObj = Object.fromEntries(
    transactionTypesArr.map((status) => [status, status])
) as TTransactionTypesObj;

export const transactionTypes = {
    arr: transactionTypesArr,
    obj: transactionTypesObj,
};

const withdrawalMethodTypesArr = ["mobileNumber", "email", "upiId"] as const;

export type TWithdrawalMethodTypes = (typeof withdrawalMethodTypesArr)[number];

type TWithdrawalMethodTypesObj = {
    [K in TWithdrawalMethodTypes]: K;
};

const withdrawalMethodTypesObj = Object.fromEntries(
    withdrawalMethodTypesArr.map((status) => [status, status])
) as TWithdrawalMethodTypesObj;

export const withdrawalMethodTypes = {
    arr: withdrawalMethodTypesArr,
    obj: withdrawalMethodTypesObj,
};

const manualDepositRequestsStatusArr = [
    "pending",
    "approved",
    "rejected",
] as const;

export type TManualDepositRequestsStatus =
    (typeof manualDepositRequestsStatusArr)[number];

type TManualDepositRequestsStatusObj = {
    [K in TManualDepositRequestsStatus]: K;
};

const manualDepositRequestsStatusObj = Object.fromEntries(
    manualDepositRequestsStatusArr.map((status) => [status, status])
) as TManualDepositRequestsStatusObj;

export const manualDepositRequestsStatus = {
    arr: manualDepositRequestsStatusArr,
    obj: manualDepositRequestsStatusObj,
};

const withdrawalRequestsStatusArr = [
    "pending",
    "approved",
    "rejected",
] as const;

export type TWithdrawalRequestsStatus =
    (typeof withdrawalRequestsStatusArr)[number];

type TWithdrawalRequestsStatusObj = {
    [K in TWithdrawalRequestsStatus]: K;
};

const withdrawalRequestsStatusObj = Object.fromEntries(
    withdrawalRequestsStatusArr.map((status) => [status, status])
) as TWithdrawalRequestsStatusObj;

export const withdrawalRequestsStatus = {
    arr: withdrawalRequestsStatusArr,
    obj: withdrawalRequestsStatusObj,
};

const paymentGatewayNamesArr = ["manualUpi"] as const;

export type TPaymentGatewayNames = (typeof paymentGatewayNamesArr)[number];

type TPaymentGatewayNamesObj = {
    [K in TPaymentGatewayNames]: K;
};

const paymentGatewayNamesObj = Object.fromEntries(
    paymentGatewayNamesArr.map((status) => [status, status])
) as TPaymentGatewayNamesObj;

export const paymentGatewayNames = {
    arr: paymentGatewayNamesArr,
    obj: paymentGatewayNamesObj,
};
