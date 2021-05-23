import { NavLink } from "react-router-dom";

const Links = (props) => {
  const items = [
    {
      to: "/",
      name: "HOME",
    },
    {
      to: "/movies",
      name: "MOVIES",
    },
    {
      to: "/about",
      name: "ABOUT",
    },
  ];

  const renderItems = () => {
    return items.map((item) => <NavLink exact activeClassName={props.activeClassName}  to={item.to}>{item.name}</NavLink>);
  };

  return (
    <div onMouseUp={props.onMouseUp} className={props.className}>
      {renderItems()}
    </div>
  );
};

export default Links;
