import Oven from "./Oven.js";
import Sink from "./Sink";
const Kitchen = () => {
  return (
    <div className="kitchen">
      <h1>Kitchen</h1>
      <Oven />
      <Sink />
    </div>
  );
};
export default Kitchen;
