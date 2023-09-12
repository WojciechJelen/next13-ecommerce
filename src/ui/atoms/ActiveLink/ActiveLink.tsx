import { type Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type PropsType = {
	href: Url;
	children: React.ReactNode;
	className?: string;
};

export const ActiveLink = ({ href, children, className }: PropsType) => {
	const pathName = usePathname();
	const isActive = pathName === href;
	const classes = twMerge(
		"flex items-center text-sm font-medium text-gray-700 hover:text-gray-800",
		isActive && "underline underline-offset-2",
		className,
	);

	return (
		<Link href={href} className={classes}>
			{children}
		</Link>
	);
};
