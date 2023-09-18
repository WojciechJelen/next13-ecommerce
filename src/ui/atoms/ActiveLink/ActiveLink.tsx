import type { Route } from "next";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type PropsType<T extends string> = {
	href: Route<T> | URL;
	children: React.ReactNode;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
} & LinkProps<T>;

export function ActiveLink<T extends string>({
	href,
	children,
	exact,
	activeClassName,
	className,
}: PropsType<T>) {
	const pathName = usePathname();
	const isActive = exact ? pathName === href : pathName.startsWith(href.toString());
	const classes = twMerge(className, isActive && activeClassName);

	return (
		<Link href={href} className={classes}>
			{children}
		</Link>
	);
}
