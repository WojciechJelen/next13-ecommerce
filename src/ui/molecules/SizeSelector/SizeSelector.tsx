"use client";

import { RadioGroup } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { type Size } from "@/types";

type PropsType = {
	sizes: Array<Size>;
};

export function SizeSelector({ sizes }: PropsType) {
	const [selectedSize, setSelectedSize] = useState<Size>(sizes[0]);

	return (
		<RadioGroup value={selectedSize} onChange={setSelectedSize}>
			<RadioGroup.Label className="block text-sm font-medium text-gray-700">Size</RadioGroup.Label>
			<div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
				{sizes.map((size) => (
					<RadioGroup.Option
						as="div"
						key={size.name}
						value={size}
						className={({ active }) =>
							twMerge(
								active ? "ring-2 ring-indigo-500" : "",
								"relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none",
							)
						}
					>
						{({ active, checked }) => (
							<>
								<RadioGroup.Label as="p" className="text-base font-medium text-gray-900">
									{size.name}
								</RadioGroup.Label>
								<RadioGroup.Description as="p" className="mt-1 text-sm text-gray-500">
									{size.description}
								</RadioGroup.Description>
								<div
									className={twMerge(
										active ? "border" : "border-2",
										checked ? "border-indigo-500" : "border-transparent",
										"pointer-events-none absolute -inset-px rounded-lg",
									)}
									aria-hidden="true"
								/>
							</>
						)}
					</RadioGroup.Option>
				))}
			</div>
		</RadioGroup>
	);
}
