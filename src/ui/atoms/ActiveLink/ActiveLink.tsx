import type { Route } from "next";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export type PropsType<T extends string> = {
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
	// if exact is true, then we need to check if the pathName is equal to href
	// if exact is false, then we need to check if the pathName starts with href
	// TODO:
	const isActive = exact ? pathName === href : pathName.startsWith(href as string);
	const classes = twMerge(className, isActive && activeClassName);

	return (
		<Link href={href} className={classes}>
			{children}
		</Link>
	);
}
