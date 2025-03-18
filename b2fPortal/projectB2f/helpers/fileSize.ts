import { filesize } from "filesize";

export const fileSizeInHumanFormat = (sizeInBytes: number) => {
    // console.log(`fileSizeInHumanFormat ${sizeInBytes}`);

    return filesize(sizeInBytes, { base: 2, standard: "jedec" });
};
