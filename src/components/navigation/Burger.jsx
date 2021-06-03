import "../../scss/navigation/Burger.scss";

const Burger = (props) => {
  return (
    <div
      onClick={props.handleOnClick}
      className={`${"burger"} ${props.className}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Burger;
