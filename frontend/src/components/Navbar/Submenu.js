import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20 px;
  list-style: none;
  height: 50px;
  text-decoration: none;
  font-size: 15px;
  &:hover {
    background: --var(navbg);
    //#252831;
    border-bottom: 4px solid #632ce4;
    cursor: pointer;
    transform: scale(1.1);
    transition-duration: 0.5s;
    mode:"null';
    filter: {
      type: 'none',
  }
    }
`;
const SidebarLabel = styled.span`
  margin-left: 16px;
`;
const DropdownLink = styled(Link)`
  background: var(--lig1);
  height: 50px;
  padding: 3 rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--sbutttext);
  font-size: 15px;
  margin: 0;
  &:hover {
    background: rgb(41, 51, 93);
    cursor: pointer;
    transform: scale(1.1);
    transition-duration: 0.5s;
    filter: {
      type: 'none',
  }
  }
`;
const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
