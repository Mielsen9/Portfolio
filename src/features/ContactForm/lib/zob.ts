import {z} from "zod";

 export const schema = z.object({
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	email: z.string().email("Invalid email").min(1, "Email is required"),
	countryCode: z.string().optional(),
	phone: z.string().optional(),
	message: z.string().optional(),
});

export type FormData = z.infer<typeof schema>;