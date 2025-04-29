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

	const onSubmit = (data: FormData) => {
		console.log({ ...data, countryCode: selectedCountry.value });
		reset();
	};

	// Return
	return (
			<div className={s["contact-form-wrapper"]}>

			<form onSubmit={handleSubmit(onSubmit)} className={s["contact-form"]}>
				<div className="contact-form__row">
					<div>
						<input {...register("firstName")} placeholder="First name *" />
						<p className={s["error"]}>{errors.firstName?.message}</p>
					</div>
					<div>
						<input {...register("lastName")} placeholder="Last name *" />
						<p className={s["error"]}>{errors.lastName?.message}</p>
					</div>
				</div>

				<div>
					<input {...register("email")} placeholder="Email *" />
					<p className={s["error"]}>{errors.email?.message}</p>
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
