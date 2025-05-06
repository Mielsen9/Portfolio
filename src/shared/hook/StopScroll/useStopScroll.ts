import {useEffect} from "react";
// Type
type PropsType = {
	containerRef: React.MutableRefObject<HTMLDivElement | null>;
	stopPointRef: React.MutableRefObject<HTMLDivElement | null>;
};
// StopScroll
export const useStopScroll = ({ containerRef, stopPointRef }: PropsType) => {
	useEffect(() => {
		const wrapper = containerRef.current;
		const stopPoint = stopPointRef.current;

		if (!wrapper || !stopPoint) return;

		const handleScroll = () => {
			const stopY = stopPoint.offsetTop + stopPoint.offsetHeight;
			const maxScrollTop = stopY - wrapper.clientHeight;

			if (wrapper.scrollTop > maxScrollTop) {
				wrapper.scrollTop = maxScrollTop;
			}
		};

		wrapper.addEventListener("scroll", handleScroll);
		return () => {
			wrapper.removeEventListener("scroll", handleScroll);
		};
	}, [containerRef, stopPointRef]);
};
