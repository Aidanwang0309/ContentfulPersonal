import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => {
  if (props.page === "home") {
    return (
      <ul className="NavigationItemsHome">
        <NavigationItem link="/Projects">Projects</NavigationItem>
        <NavigationItem link="/Contacts">Contacts</NavigationItem>
      </ul>
    );
  } else {
    return (
      <ul className="NavigationItemsProjects">
        <NavigationItem link="/Projects">Projects</NavigationItem>
        <NavigationItem link="/Contacts">Contacts</NavigationItem>
      </ul>
    );
  }
};
export default navigationItems;
