import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

//router dom
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const [showBasic, setShowBasic] = useState(false);
  const nav = useNavigate();

  function navigate(){
    nav('add-recipe');
  }

  return (
    <MDBNavbar expand="lg" light dark bgColor="dark">
      <MDBContainer>
        <MDBNavbarBrand><Link to={'/'}>Estarta Recipes</Link></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" to="/">
                <Link to={'/'}>Home</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <MDBBtn onClick={navigate} className='w-25' color="primary">Add Recipe</MDBBtn>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
export default NavBar;
