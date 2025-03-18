import { contactRequestsZodSchema } from "./modules/contactRequests/contactRequestsZod";
import { demoTestZodSchema } from "./modules/demoTest/demoTestZod";
import { homeZodSchema } from "./modules/home/homeZod";

export const websiteZodSchemas = {
    demoTest: demoTestZodSchema,
    home: homeZodSchema,
    contactRequests: contactRequestsZodSchema,
};
