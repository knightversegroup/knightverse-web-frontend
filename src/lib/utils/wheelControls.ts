// Wheel controls plugin for trackpad/mouse wheel scrolling in Keen Slider
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function WheelControls(slider: any) {
	let touchTimeout: ReturnType<typeof setTimeout>;
	let position = { x: 0, y: 0 };
	let wheelActive = false;

	function dispatch(e: WheelEvent, name: string) {
		position.x -= e.deltaX;
		position.y -= e.deltaY;
		slider.container.dispatchEvent(
			new CustomEvent(name, {
				detail: {
					x: position.x,
					y: position.y
				}
			})
		);
	}

	function wheelStart(e: WheelEvent) {
		position = { x: 0, y: 0 };
		dispatch(e, 'ksDragStart');
	}

	function wheel(e: WheelEvent) {
		dispatch(e, 'ksDrag');
	}

	function wheelEnd(e: WheelEvent) {
		dispatch(e, 'ksDragEnd');
	}

	function eventWheel(e: WheelEvent) {
		if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
			e.preventDefault();
			if (!wheelActive) {
				wheelActive = true;
				wheelStart(e);
			}
			wheel(e);
			clearTimeout(touchTimeout);
			touchTimeout = setTimeout(() => {
				wheelActive = false;
				wheelEnd(e);
			}, 50);
		}
	}

	slider.on('created', () => {
		slider.container.addEventListener('wheel', eventWheel, { passive: false });
	});
}
