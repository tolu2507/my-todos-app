import React, { useEffect } from "react";
export function DeleteScreen() {
  useEffect(() => {
    alert("deleted");
  }, []);
  return (
    <div>
      <>Todo Successfully Deleted</>
    </div>
  );
}
