export const Component3 = (props) => {
  console.log("Component3 is rendered.");

  const { nClick } = props;

  return (
    <>
      <h2>received number = {nClick} </h2>
    </>
  );
};
