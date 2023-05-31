import React, { PropsWithChildren } from 'react'

export const Kbd = (props: PropsWithChildren) => {
	return (
		<kbd className="font-mono h-min px-2 py-0.5 rounded-md border border-gray-700 border-b-4 bg-gray-600 text-gray-400 mx-1">
			{props.children}
		</kbd>
	)
}