import { useCallback, useEffect, useRef, useState } from "react";
import { timerKey } from "../constants/storage";

const SAVE_INTERVAL = 5000;

export default function useTimer(currentModuleId, initialTimers, saveItem) {
  const [timers, setTimers] = useState(initialTimers || {});
  const intervalRef = useRef(null);
  const visibleRef = useRef(true);
  const currentModRef = useRef(currentModuleId);
  const timersRef = useRef(timers);

  timersRef.current = timers;
  currentModRef.current = currentModuleId;

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!currentModRef.current) return;

    intervalRef.current = setInterval(() => {
      if (!visibleRef.current || !currentModRef.current) return;
      setTimers((prev) => ({
        ...prev,
        [currentModRef.current]: (prev[currentModRef.current] || 0) + 5,
      }));
    }, SAVE_INTERVAL);
  }, []);

  // Start/restart when module changes
  useEffect(() => {
    if (!currentModuleId) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentModuleId, startInterval]);

  // Visibility API — pause/resume
  useEffect(() => {
    const handleVisibility = () => {
      visibleRef.current = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  // Save to storage whenever timers change
  useEffect(() => {
    if (!currentModuleId) return;
    saveItem(timerKey(currentModuleId), timers[currentModuleId] || 0);
  }, [timers, currentModuleId, saveItem]);

  return timers;
}
