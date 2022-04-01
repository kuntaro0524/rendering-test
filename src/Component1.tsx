import { useCallback, useState } from "react";
import { Component2 } from "./Component2";
import { Component3 } from "./Component3";
export const Component1 = () => {
  console.log("Component1 is rendered.");

  const [index, setIndex] = useState(0);

  const onClickButton = useCallback(() => {
    setIndex(index + 1);
  }, [index]);

  return (
    <>
      <h1> Component1 </h1>
      <button onClick={onClickButton}> Component1 Button </button>
      <p> {index} </p>
      <Component2 />
      <Component3 nClick={index} />
    </>
  );
};
