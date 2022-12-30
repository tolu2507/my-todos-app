import { CREATEUSER } from "../inteface";
export function loadDb() {
  let db: CREATEUSER[] = [];
  const locStorage = localStorage.getItem("DETAILS");
  if (locStorage) {
    const storageView = JSON.parse(locStorage);
    if (storageView && Array.isArray(storageView) && storageView.length) {
      db = storageView;
    }
  }

  return db;
}
// export default db;

export function clearDb() {
  localStorage.clear();

}