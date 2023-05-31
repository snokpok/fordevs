import React, { useEffect, useState } from 'react'

export const useKeyboard = () => {
	const [currentKey, setCurrentKey] = useState<string | null>(null);
	useEffect(() => {
		const handleDown = (ev: KeyboardEvent) => {
			setCurrentKey(ev.key);
		};
		const handleUp = (ev: KeyboardEvent) => {
			setCurrentKey(null);
		};
		window.addEventListener("keydown", handleDown);
		window.addEventListener("keyup", handleUp);
		return () => {
			window.removeEventListener("keydown", handleDown);
			window.removeEventListener("keyup", handleUp);
		};
	}, []);

	return {
		currentKey,
	}
}