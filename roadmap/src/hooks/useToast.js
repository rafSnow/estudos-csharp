import { useCallback, useRef, useState } from "react";

const MAX_TOASTS = 3;
const DISMISS_MS = 3000;

export default function useToast() {
  const [toasts, setToasts] = useState([]);
  const nextId = useRef(1);

  const addToast = useCallback((message, type = "success") => {
    const id = nextId.current++;
    setToasts((prev) => {
      const next = [...prev, { id, message, type }];
      return next.length > MAX_TOASTS ? next.slice(-MAX_TOASTS) : next;
    });
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, DISMISS_MS);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toasts, addToast, removeToast };
}
