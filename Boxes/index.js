const Box = (props) => {
  //  Write your code here.
  const { className, name } = props;
  return <div className={className}>{name}</div>;
};

const element = (
  //  Write your code here.
  <div class="bg-container">
    <h1>Boxes</h1>
    <div class="boxes-container">
      <Box className="box1" name="Small" />
      <Box className="box2" name="Medium" />
      <Box className="box3" name="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
