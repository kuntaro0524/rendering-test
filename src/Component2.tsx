import { memo } from "react";

export const Component2 = memo(() => {
  console.log("Component2 is rendered.");

  return (
    <>
      <p>Component2</p>
    </>
  );
});
