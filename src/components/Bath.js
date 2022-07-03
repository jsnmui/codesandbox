const Bath = (props) => {
  return (
    <div className="bath" id={`${props.size}Bath`}>
      <h1> {props.size} Bath</h1>
    </div>
  );
};
export default Bath;
