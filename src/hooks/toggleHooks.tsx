import { clearDb } from "./localStorageHook";

export function handleToggle() {
  const div = document.querySelector<HTMLDivElement>("#block");
  if (div !== null && div !== undefined) {
    div.style.display = "block";
  }
}

export function handleCloseToggle() {
  const div = document.querySelector<HTMLDivElement>("#block");
  if (div !== null && div !== undefined) {
    div.style.display = "none";
  }
}

export function handleClear() {
  clearDb();
}
