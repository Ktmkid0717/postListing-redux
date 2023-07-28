import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from 'react-router-dom';

const NavContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 50px;
`;
const NavBackItem = styled.div`
  position: absolute;
  left: 20px;
`;

const NavItem = styled.li`
  margin: 0 0.5rem;
`;

const NavLink = styled(RouterLink)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  // const [BackBtn, setBackBtn] = useState(false)

  return (
    <NavContainer>
      <NavItems>
        {/* {BackBtn 
           && (
          <NavBackItem  onClick={()=>setBackBtn(false)}>
            <NavLink to="/">Back</NavLink>
          </NavBackItem>
        )} */}
        <NavItem onClick={()=>setBackBtn(false)}>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem onClick={()=>setBackBtn(true)}>
          <NavLink to="/posts/new">New Post</NavLink>
        </NavItem>
      </NavItems>
    </NavContainer>
  );
};

export default Navbar;
