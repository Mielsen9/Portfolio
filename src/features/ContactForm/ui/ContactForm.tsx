import React, {useState} from "react";
import * as s from "./ContactForm.module.scss"
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import Select from "react-select";
import {schema, FormData} from "../lib/zob";
import {countries} from "../constants/constants";

// ContactForm
export const ContactForm: React.FC = React.memo((p) => {
	const { register,
		handleSubmit,
		control,
		reset,
		formState: { errors, isSubmitSuccessful } } = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const [selectedCountry, setSelectedCountry] = useState(countries[0]);

	const onSubmit = async (data: FormData) => {
		const payload = {
			...data,
			countryCode: selectedCountry.value,
		};

		try {
			const res = await fetch("https://formspree.io/f/xnndlroa", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			});

			if (res.ok) {
				reset();
			} else {
				console.error("Form submission error:", await res.text());
			}
		} catch (error) {
			console.error("Form submission failed:", error);
		}
	};

	// Return
	return (
			<div className={s["contact-form-wrapper"]}>

			<form onSubmit={handleSubmit(onSubmit)} className={s["contact-form"]}>
				<div className={s["contact-form__row"]}>
					<input
						className={errors.firstName ? s.error : ""}
						{...register("firstName")}
						placeholder="First name *"
					/>
					<input  className={errors.lastName ? s.error : ""}
					        {...register("lastName")}
					        placeholder="Last name *"
					/>
					<input className={errors.email ? s.error : ""}
					       {...register("email")}
					       placeholder="Email *"
						/>
				</div>

				<div className={s["phone-group"]}>
					<Controller
						name="countryCode"
						control={control}
						render={({ field }) => (
							<Select
								{...field}
								options={countries}
								value={selectedCountry}
								onChange={(option) => {
									setSelectedCountry(option!);
								}}
							/>
						)}
					/>
					<input {...register("phone")} placeholder="Phone number" />
				</div>

				<div>
					<textarea {...register("message")} placeholder="Message" />
				</div>

				<button type="submit" className={s["contact-form__submit"]}>Send</button>

				{isSubmitSuccessful && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						className={s["success-message"]}
					>
						Form sent successfully! 🎉
					</motion.div>
				)}

			</form>
		</div>
	)
});
