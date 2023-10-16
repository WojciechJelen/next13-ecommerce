"use client";

import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

type PropsType = {
	totalPages: number;
	currentPage: number;
	category: string;
	className?: string;
};

export function Pagination({ totalPages, className, currentPage, category }: PropsType) {
	const classNames = twMerge(
		"flex items-center justify-between border-t border-gray-200 px-4 sm:px-0",
		className,
	);

	return (
		<nav className={classNames}>
			<div className="-mt-px flex w-0 flex-1">
				<Link
					href={`/products/${category}/${currentPage - 1}`}
					className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
				>
					<ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
					Previous
				</Link>
			</div>
			<div className="hidden md:-mt-px md:flex">
				{totalPages > 1 &&
					Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
						<ActiveLink
							key={page}
							href={`/products/${category}/${page}`}
							className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
							activeClassName="border-indigo-500 text-indigo-600"
						>
							{page}
						</ActiveLink>
					))}
			</div>
			<div className="-mt-px flex w-0 flex-1 justify-end">
				<Link
					href={`/products/${category}/${currentPage + 1}`}
					className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
				>
					Next
					<ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
				</Link>
			</div>
		</nav>
	);
}
