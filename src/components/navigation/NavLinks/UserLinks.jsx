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
    return items.map((item) => <NavLink to={item.to}>{item.name}</NavLink>);
  };

  return (
    <div className={props.className}>
      {renderItems()}
      <button className={props.btnClassName} onClick={props.onClick}>{props.btnName}</button>
    </div>
  );
};

export default userLinks;
