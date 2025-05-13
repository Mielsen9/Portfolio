import {SocialLinksType} from "@/entities/SocialLinks/type/type";

import { FaFacebookF, FaInstagram, FaTelegramPlane, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export const socialLinks: SocialLinksType[] = [
	{ name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100017116516345&locale=uk_UA', icon: FaFacebookF },
	{ name: 'LinkedIn', url: 'https://www.linkedin.com/in/petro-zvir-760711330/', icon: FaLinkedinIn },
	{ name: 'Instagram', url: 'https://www.instagram.com/mielsen_9/', icon: FaInstagram },
	{ name: 'GitHub', url: 'https://github.com/Mielsen9', icon: FaGithub },
	{ name: 'Gmail', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=zvir.petro.v@gmail.com', icon: MdEmail },
	{ name: 'Telegram', url: 'https://t.me/Petro_Zvir', icon: FaTelegramPlane },
	{ name: 'Phone', url: 'tel:+380733965459', icon: MdPhone },
];

export const iconSize = 27;
export const iconColor = "#fff";