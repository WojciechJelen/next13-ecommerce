import { type RouteType } from "next/dist/lib/load-custom-routes";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type PropsType = {
	children: React.ReactNode;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
} & LinkProps<RouteType>;

export const ActiveLink = ({ href, children, exact, className, activeClassName }: PropsType) => {
	const pathName = usePathname();
	// eslint-disable-next-line @typescript-eslint/no-base-to-string
	const isActive = exact ? pathName === href : pathName.startsWith(href.toString());

	const classes = twMerge(className, isActive && activeClassName);
	return (
		<Link href={href} className={classes}>
			{children}
		</Link>
	);
};
