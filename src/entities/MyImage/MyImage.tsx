import React from "react";
import * as s from "./MyImage.module.scss"
import Img from "@/shared/components/Img/Img";
import MyImagesJpeg from "@/asset/images/MyImage/avatar.jpeg";
import MyImagesWebP from "@/asset/images/MyImage/avatar.webp";
// Type
type PropsType = {

};
// MyImage
const MyImage: React.FC<PropsType> = React.memo((p) => {

	// Return
	return (
		<div>
			<Img srcJpg={MyImagesJpeg} srcWebP={MyImagesWebP} alt={"my photo"} loading={undefined}/>
		</div>
	)
});

export default MyImage