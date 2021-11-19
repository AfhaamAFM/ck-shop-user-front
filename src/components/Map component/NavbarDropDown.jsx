import React from 'react'

function NavbarDropDown() {
    return (
        <>
             <NavDropdown title="Men" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </>
    )
}

export default NavbarDropDown
