import { myToast } from "@helpers/utilityHelper";
import Swal from "sweetalert2";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function trpcResponseHandler(response: any) {
    const res = response;
    if (res?.status === "error") {
        myToast.fire({
            icon: "error",
            title: res.message,
        });

        return false;
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function trpcErrorHandler(error: any) {
    // console.log(query.error)

    if (error) {
        if (error?.data?.code === "BAD_REQUEST") {
            const data = JSON.parse(error?.message);
            Swal.fire({
                icon: "error",
                title: "Input Error",
                text: `${data[0]?.message}`,
            });

            return;
        }

        // local error handlers
        if (error?.name === "ZodError") {
            myToast.fire({
                icon: "error",
                title: `${error?.issues[0]?.message} (${error?.issues[0]?.path[0]})`,
            });
            return;
        }

        console.log({ error });
        myToast.fire({
            icon: "error",
            title: `${error}`,
        });
    }
}
