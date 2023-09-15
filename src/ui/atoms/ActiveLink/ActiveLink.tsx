import { type RouteType } from "next/dist/lib/load-custom-routes";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type PropsType = {
	children: React.ReactNode;
	className?: string;
	activeClassName?: string;
} & LinkProps<RouteType>;

export const ActiveLink = ({ href, children, className, activeClassName }: PropsType) => {
	const pathName = usePathname();
	const isActive = pathName === href;
	const classes = twMerge(className, isActive && activeClassName);

	return (
		<Link href={href} className={classes}>
			{children}
		</Link>
	);
};
