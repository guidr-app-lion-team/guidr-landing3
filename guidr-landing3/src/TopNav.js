import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Button } from 'reactstrap';
  

export default class TopNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="sticky">
        <Navbar className="main-color" expand="md">
          <NavbarBrand className="nav-color" href="/">Guidr2</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  ADVENTURE BEgitGINS
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Book an adventure
                  </DropdownItem>
                  <DropdownItem>
                    Host a trip
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Explore the world
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
              <Button color="primary">Login</Button>
              </NavItem>
              <NavItem>
              <Button color="primary">Sign Up</Button>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}