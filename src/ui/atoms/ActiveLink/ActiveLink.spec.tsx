import { render, screen } from "@testing-library/react";
import { usePathname } from "next/navigation";
import { ActiveLink, type PropsType } from "./ActiveLink";

import "@testing-library/jest-dom";

jest.mock("next/navigation");

const baseProps: PropsType<string> = {
	href: "/",
	children: "Products",
	exact: false,
};

describe("Home", () => {
	const mockUsePathname = jest.fn();

	beforeEach(() => {
		jest.resetAllMocks();
		(usePathname as jest.Mock).mockImplementation(mockUsePathname);
	});

	it("renders the ActiveLink properly", () => {
		mockUsePathname.mockReturnValue("/home");
		render(<ActiveLink {...baseProps} />);

		const heading = screen.getByRole("link", {
			name: "Products",
		});

		expect(heading).toBeInTheDocument();
	});
});
