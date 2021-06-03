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
    return items.map((item, i) => (
      <NavLink
        key={i}
        activeClassName={props.activeClassName}
        exact to={item.to}
      >
        {item.name}
      </NavLink>
    ));
  };

  return (
    <div className={props.className}>
      {renderItems()}
    </div>
  );
};

export default Links;
