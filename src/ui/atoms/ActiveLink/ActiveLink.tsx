import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type PropsType = {
	href: string;
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
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		<Link href={href} className={classes}>
			{children}
		</Link>
	);
};
