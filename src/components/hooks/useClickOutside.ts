import { useEffect } from "react";

export default function useClickOutside({
  ref,
  omittedRefs,
  callback,
}: {
  ref: React.RefObject<HTMLElement>;
  omittedRefs?: React.RefObject<HTMLElement>[];
  callback: () => void;
}) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        // NOTE: kinda jank
        !omittedRefs?.some((ref) => ref.current?.contains(event.target as Node))
      ) {
        callback();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref, callback]);
}
