"use client";
import { contactRequestsZodSchema } from "@b2fPortal/website/trpcApi/modules/contactRequests/contactRequestsZod";
import { trpcErrorHandler, trpcResponseHandler } from "@helpers/trpc/handlers";
import { backendV1 } from "@helpers/trpc/trpc";
import { myToast } from "@helpers/utilityHelper";
import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function ContactForm() {
    const contactRequestsMutation = backendV1.contactRequests.create.useMutation();
    const contactRequestsMutationSchema = contactRequestsZodSchema.create;

    type TContactRequestsMutationSchema = z.infer<typeof contactRequestsMutationSchema>;
    const {
        handleSubmit,
        register,
        formState: { isSubmitting },
    } = useForm<TContactRequestsMutationSchema>();
    const backendV1Utils = backendV1.useUtils();

    const onSubmit = async (formDataRaw) => {
        try {
            console.log("formDataRaw,", formDataRaw);

            const formData = await contactRequestsMutationSchema.parseAsync(formDataRaw);
            const response = await contactRequestsMutation.mutateAsync(formData);

            trpcResponseHandler(response);
            if (response.status === "success") {
                backendV1Utils.contactRequests.invalidate();
                myToast.fire({
                    icon: "success",
                    title: "Contact Request Sent Successfully!",
                    position: "top",
                });
            }
        } catch (error) {
            console.log(error);
            trpcErrorHandler(error);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block font-medium">First Name</label>
                    <input
                        {...register("firstName", { required: "First name is required" })}
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                        placeholder="Enter your first name"
                    />
                </div>
                <div>
                    <label className="block font-medium">Last Name</label>
                    <input
                        {...register("lastName", { required: "Last name is required" })}
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                        placeholder="Enter your last name"
                    />
                </div>
                <div>
                    <label className="block font-medium">WhatsApp Number</label>
                    <div className="flex items-center ">
                        <span className="text-xl">+</span>
                        <input
                            defaultValue="91"
                            {...register("whatsAppCountryCode", { required: "Country Code is required" })}
                            className="w-fit px-1 py-2 max-w-12 border-[1px] rounded-md focus:ring-2 focus:ring-blue-200 outline-none"
                        />
                        <input
                            {...register("whatsAppNumber", { required: "WhatsApp number is required" })}
                            className="ml-2 w-2/3 mt-1 px-3 py-2 border grow rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                            placeholder="Enter your WhatsApp number"
                        />
                    </div>
                </div>
                <div>
                    <label className="block font-medium">Email</label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Invalid email address",
                            },
                        })}
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label className="block font-medium">Message</label>
                    <textarea
                        {...register("message", { required: "Message is required" })}
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none resize-none"
                        placeholder="Enter your message"
                        rows={4}
                    ></textarea>
                </div>
                <Button
                    isLoading={isSubmitting}
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Send Message
                </Button>
            </form>
        </div>
    );
}
