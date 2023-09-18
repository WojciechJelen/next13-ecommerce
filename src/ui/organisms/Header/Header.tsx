"use client";

import { useState } from "react";
import { Popover } from "@headlessui/react";
import {
	Bars3Icon,
	MagnifyingGlassIcon,
	ShoppingBagIcon,
	UserIcon,
} from "@heroicons/react/24/outline";

import { MobileMenu } from "./MobileMenu";
import { navigation } from "./headerData";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export function Header() {
	const [open, setOpen] = useState(false);

	return (
		<div className="bg-white">
			<MobileMenu open={open} setOpen={setOpen} />
			<header className="relative bg-white">
				<nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="border-b border-gray-200">
						<div className="flex h-16 items-center justify-between">
							<div className="flex flex-1 items-center lg:hidden">
								<button
									type="button"
									className="-ml-2 rounded-md bg-white p-2 text-gray-400"
									onClick={() => setOpen(true)}
								>
									<span className="sr-only">Open menu</span>
									<Bars3Icon className="h-6 w-6" aria-hidden="true" />
								</button>

								<a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
									<span className="sr-only">Search</span>
									<MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
								</a>
							</div>

							{/* Flyout menus */}
							<Popover.Group className="hidden lg:block lg:flex-1 lg:self-stretch">
								<div className="flex h-full space-x-8">
									{navigation.pages.map((page) => (
										<ActiveLink
											key={page.name}
											href={page.href}
											className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
											activeClassName="underline underline-offset-2"
										>
											{page.name}
										</ActiveLink>
									))}
								</div>
							</Popover.Group>

							{/* Logo */}
							<a href="#" className="flex">
								<span className="sr-only">Your Company</span>
								<img
									className="h-8 w-auto"
									src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
									alt=""
								/>
							</a>

							<div className="flex flex-1 items-center justify-end">
								<a
									href="#"
									className="hidden text-gray-700 hover:text-gray-800 lg:flex lg:items-center"
								>
									<img
										src="https://tailwindui.com/img/flags/flag-canada.svg"
										alt=""
										className="block h-auto w-5 flex-shrink-0"
									/>
									<span className="ml-3 block text-sm font-medium">CAD</span>
									<span className="sr-only">, change currency</span>
								</a>

								{/* Search */}
								<a href="#" className="ml-6 hidden p-2 text-gray-400 hover:text-gray-500 lg:block">
									<span className="sr-only">Search</span>
									<MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
								</a>

								{/* Account */}
								<a href="#" className="p-2 text-gray-400 hover:text-gray-500 lg:ml-4">
									<span className="sr-only">Account</span>
									<UserIcon className="h-6 w-6" aria-hidden="true" />
								</a>

								{/* Cart */}
								<div className="ml-4 flow-root lg:ml-6">
									<a href="#" className="group -m-2 flex items-center p-2">
										<ShoppingBagIcon
											className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
											aria-hidden="true"
										/>
										<span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
											0
										</span>
										<span className="sr-only">items in cart, view bag</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}
