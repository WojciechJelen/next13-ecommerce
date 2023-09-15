type PropsType = {
	breadcrumbs: Array<{
		id: string;
		name: string;
		href: string;
	}>;
};

export function Breadcrumbs({ breadcrumbs }: PropsType) {
	return (
		<nav aria-label="Breadcrumb">
			<ol role="list" className="flex items-center space-x-2">
				{breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
					<li key={breadcrumb.id}>
						<div className="flex items-center text-sm">
							<a href={breadcrumb.href} className="font-medium text-gray-500 hover:text-gray-900">
								{breadcrumb.name}
							</a>
							{breadcrumbIdx !== breadcrumbs.length - 1 ? (
								<svg
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
								>
									<path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
								</svg>
							) : null}
						</div>
					</li>
				))}
			</ol>
		</nav>
	);
}
