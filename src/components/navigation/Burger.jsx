import "../../scss/navigation/Burger.scss";

const Burger = (props) => {
  return (
    <div
      onMouseUp={props.handleMouseUp}
      className={`${"burger"} ${props.className}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Burger;
