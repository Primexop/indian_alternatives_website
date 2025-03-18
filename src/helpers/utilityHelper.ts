// import moment from 'moment';
import Swal from "sweetalert2";
import { getCurrentTimeStampInSeconds } from "modern-time-utils";
// import queryString from 'query-string';

// export const insertDataToCurrentUrlQuery = (newData) => {

//     const currentUrl = window.location.origin + window.location.pathname;

//     const oldData = queryString.parse(window.location.search);

//     const mergedData = { ...oldData, ...newData };

//     const queryDataString = queryString.stringify(mergedData);

//     const finalUrl = `${currentUrl}?${queryDataString}`;

//     // updating query
//     if (window.history.pushState) {

//         window.history.pushState({ path: finalUrl }, '', finalUrl);
//     } else {
//         window.location.href = finalUrl;
//     }

// };

//  short hand
export const byId = (id) => {
    return document.getElementById(id);
};

export const addDNoneClass = (htmlElement, status) => {
    if (status === true) {
        if (!htmlElement.classList.contains("d-none")) {
            htmlElement.classList.add("d-none");
        }
    }
    if (status === false) {
        if (htmlElement.classList.contains("d-none")) {
            htmlElement.classList.remove("d-none");
        }
    }
};

// export function btnLoading(btn, msg, status) {
//     if (!btn) {
//         console.log("error in btn_loading");
//     }

//     const btn_id = btn.id;
//     // console.log(btn_id);
//     if (status === true) {
//         btn.disabled = true;
//         const old_data = btn.innerHTML;
//         btn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//         ${msg}
//         <span id='${btn_id + "old_data"}' class='d-none'>${old_data}</span>`;
//     }
//     if (status === false) {
//         btn.disabled = false;
//         const old_data_div = byId(btn_id + "old_data");
//         const old_data = old_data_div.innerHTML;
//         btn.innerHTML = `${old_data}`;
//     }
// }

export const myToast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

export const unixTimeStampInSeconds = getCurrentTimeStampInSeconds;

export const insertDataToElementUsingClassName = (className, data) => {
    // adding event listener for logout button
    const elements = document.getElementsByClassName(className);

    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = data;
    }
};

export const teamNumToText = (num) => {
    let text = "";
    switch (num) {
        case 1:
            text = "Solo";
            break;
        case 2:
            text = "Duo";
            break;
        case 3:
            text = "Trio";
            break;
        case 4:
            text = "Squad";
            break;

        default:
            text = num;
            break;
    }
    return text;
};

// export const timeDifferenceInText = (timeStamp) => {
//     const now = moment(new Date()); //todays date
//     const end = moment(timeStamp);
//     const duration = moment.duration(end.diff(now));
//     const daysInNumber = duration.days();
//     const hoursInNumber = duration.hours();
//     const minutesInNumber = duration.minutes();
//     const secondsInNumber = duration.seconds();
//     // console.log(seconds);

//     let daysSectionText;
//     daysInNumber > 1 ? (daysSectionText = `${daysInNumber} Days :`) : (daysSectionText = `${daysInNumber} Day :`);

//     let hoursSectionText;
//     hoursInNumber > 1
//         ? (hoursSectionText = `${hoursInNumber} Hours :`)
//         : (hoursSectionText = `${hoursInNumber} Hour :`);

//     let minutesSectionText;
//     minutesInNumber > 1
//         ? (minutesSectionText = `${minutesInNumber} ${daysInNumber > 1 ? `Mins` : `Minutes`} :`)
//         : (minutesSectionText = `${minutesInNumber} ${daysInNumber > 1 ? `Min` : `Minute`} :`);

//     let secondsSectionText;
//     secondsInNumber > 1
//         ? (secondsSectionText = `${secondsInNumber} Seconds`)
//         : (secondsSectionText = `${secondsInNumber} Second`);

//     // eslint-disable-next-line no-unused-expressions
//     daysInNumber < 1 ? (daysSectionText = "") : true;
//     // eslint-disable-next-line no-unused-expressions
//     daysInNumber < 1 && hoursInNumber < 1 ? (hoursSectionText = "") : true;
//     // eslint-disable-next-line no-unused-expressions
//     hoursInNumber < 1 && minutesInNumber < 1 ? (minutesSectionText = "") : true;
//     // eslint-disable-next-line no-unused-expressions
//     minutesInNumber < 1 && secondsInNumber < 1 ? (secondsSectionText = "") : true;

//     let timeInText = "";

//     timeInText = `${daysSectionText} ${hoursSectionText} ${minutesSectionText} ${secondsSectionText}`;

//     if (duration.asSeconds() < 0) {
//         timeInText = `Timer Expired`;
//     }
//     return { timeInText, differenceInSeconds: duration.asSeconds() };
// };

// export function timeDifferenceTimer(timeStamp, spanId) {
//     // Update the count down every 1 second
//     const x = setInterval(function (timeStamp) {
//         const timeTextElement = byId(spanId);
//         const now = moment(new Date()); //todays date
//         const end = moment(timeStamp);
//         const duration = moment.duration(end.diff(now));
//         const daysInNumber = duration.days();
//         const hoursInNumber = duration.hours();
//         const minutesInNumber = duration.minutes();
//         const secondsInNumber = duration.seconds();
//         // console.log(seconds);

//         let daysSectionText;
//         daysInNumber > 1
//             ? (daysSectionText = `${daysInNumber} Days :`)
//             : (daysSectionText = `${daysInNumber} Day :`);

//         let hoursSectionText;
//         hoursInNumber > 1
//             ? (hoursSectionText = `${hoursInNumber} Hours :`)
//             : (hoursSectionText = `${hoursInNumber} Hour :`);

//         let minutesSectionText;
//         minutesInNumber > 1
//             ? (minutesSectionText = `${minutesInNumber} ${daysInNumber > 1 ? `Mins` : `Minutes`} :`)
//             : (minutesSectionText = `${minutesInNumber} ${daysInNumber > 1 ? `Min` : `Minute`} :`);

//         let secondsSectionText;
//         secondsInNumber > 1
//             ? (secondsSectionText = `${secondsInNumber} Seconds`)
//             : (secondsSectionText = `${secondsInNumber} Second`);

//         // eslint-disable-next-line no-unused-expressions
//         daysInNumber < 1 ? (daysSectionText = "") : true;
//         // eslint-disable-next-line no-unused-expressions
//         daysInNumber < 1 && hoursInNumber < 1 ? (hoursSectionText = "") : true;
//         // eslint-disable-next-line no-unused-expressions
//         hoursInNumber < 1 && minutesInNumber < 1
//             ? (minutesSectionText = "")
//             : true;
//         // eslint-disable-next-line no-unused-expressions
//         minutesInNumber < 1 && secondsInNumber < 1
//             ? (secondsSectionText = "")
//             : true;

//         timeTextElement.innerHTML = `${daysSectionText} ${hoursSectionText} ${minutesSectionText} ${secondsSectionText}`;
//         if (duration.asSeconds() < 0) {
//             timeTextElement.innerHTML = `Timer Expired`;
//             clearInterval(x);
//         }
//     }, 1000);
// }

export const convertToTwoDecimalInt = (data): number => {
    return +parseFloat(data).toFixed(2);
};
export const convertToInt = (data: string): number => {
    return +parseInt(data);
};

export function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function sleepInMs(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function convertCamelToNormalCapitalized(camelCaseString: string): string {
    // Split the camelCase string into words
    const words = camelCaseString.replace(/([a-z])([A-Z])/g, "$1 $2").split(/[\s_]+/);

    // Capitalize each word
    const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

    // Join the capitalized words to form the normal capitalized string
    const normalCapitalizedString = capitalizedWords.join(" ");

    return normalCapitalizedString;
}
