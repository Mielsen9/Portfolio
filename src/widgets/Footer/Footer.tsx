import React from "react";
import * as s from "./Footer.module.scss"
import Logo from "@/shared/ui/Logo/Logo";
// Type
type PropsType = {

};
// Footer
const Footer: React.FC<PropsType> = React.memo((p) => {

	// Return
	return (
		<footer className={s.footer}>
			<div className={s.wrapper}>
				<div className={s.container}>
					<div className={s.logo}>
						<Logo/>
					</div>
					<p>© 2035 by Petro Zvir. </p>
				</div>
			</div>
		</footer>
	)
});

export default Footer