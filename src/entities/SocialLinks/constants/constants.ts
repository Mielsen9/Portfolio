import {SocialLinksType} from "@/entities/SocialLinks/type/type";

import { FaFacebookF, FaInstagram, FaTelegramPlane, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export const socialLinks: SocialLinksType[] = [
	{ name: 'Facebook', url: 'https://facebook.com', icon: FaFacebookF },
	{ name: 'LinkedIn', url: 'https://linkedin.com/in/your_username', icon: FaLinkedinIn },
	{ name: 'Instagram', url: 'https://instagram.com', icon: FaInstagram },
	{ name: 'GitHub', url: 'https://github.com/your_username', icon: FaGithub },
	{ name: 'Gmail', url: 'mailto:your.email@gmail.com', icon: MdEmail },
	{ name: 'Telegram', url: 'https://t.me/your_username', icon: FaTelegramPlane },
	{ name: 'Phone', url: 'tel:+1234567890', icon: MdPhone },
];

export const iconSize = 27;
export const iconColor = "#000";