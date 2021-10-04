import { useRef } from "react";

export default function useDebounce(fn, delay) {
  const timeoutRef = useRef(null);

  function debounceFn(...args) {
    //Cancelar a contagem anterior

    window.clearTimeout(timeoutRef.current);
    console.log(timeoutRef.current);

    //Utilisamos o parametro "current" para atribuir um valor
    timeoutRef.current = window.setTimeout(() => {
      fn(...args);
    }, delay);
  }
  return debounceFn;
}
