import { NavLink } from "react-router-dom";

const userLinks = (props) => {
  const items = [
    {
      to: "/bookings",
      name: "BOOKINGS",
    },
    {
      to: "/settings",
      name: "SETTINGS",
    },
  ];

  const renderItems = () => {
    return items.map((item, i) => (
      <NavLink
        key={i}
        exakt
        activeClassName={props.activeClassName}
        to={item.to}
        onClick={props.linkHandler}
   
      >
        {item.name}
      </NavLink>
    ));
  };

  return (
    <div className={props.className}>
      {renderItems()}
      <button className={props.btnClassName} onClick={props.onClick}>
        {props.btnName}
      </button>
    </div>
  );
};

export default userLinks;
