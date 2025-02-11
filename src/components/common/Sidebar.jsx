import React from 'react'

function Sidebar() {
return (
    <>
        <div className="flex h-screen flex-col justify-between border-e bg-white">
            <div className="px-4 py-6">
                <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                sharingvision.com
                </span>

                <ul className="mt-6 space-y-1">
                <li>
                    <a
                    href="/"
                    className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                    >
                    Dashboard
                    </a>
                </li>

                <li>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                        className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                        <span className="text-sm font-medium"> Posts </span>

                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                            />
                        </svg>
                        </span>
                    </summary>

                    <ul className="mt-2 space-y-1 px-4">
                        <li>
                        <a
                            href="/posts"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            All Posts
                        </a>
                        </li>

                        <li>
                        <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Sub Menu
                        </a>
                        </li>
                    </ul>
                    </details>
                </li>

                <li>
                    <a
                    href="/posts/add"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                    Add Posts
                    </a>
                </li>

                <li>
                    <a
                    href="/posts/preview"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                    Preview
                    </a>
                </li>
                </ul>
            </div>
        </div>
    </>
)
}

export default Sidebar
