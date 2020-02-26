import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';


class AppNav  extends Component {
    state = { }
    render(){
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Expense Tracker Application</NavbarBrand>
                    {/*<NavbarToggler onClick={toggle} />*/}
                    {/*<Collapse isOpen={isOpen} navbar>*/}
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/categories">Categories</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/expenses">Expenses</NavLink>
                            </NavItem>
                            {/*<UncontrolledDropdown nav inNavbar>*/}
                            {/*    <DropdownToggle nav caret>*/}
                            {/*        Options*/}
                            {/*    </DropdownToggle>*/}
                            {/*    <DropdownMenu right>*/}
                            {/*        <DropdownItem>*/}
                            {/*            Option 1*/}
                            {/*        </DropdownItem>*/}
                            {/*        <DropdownItem>*/}
                            {/*            Option 2*/}
                            {/*        </DropdownItem>*/}
                            {/*        <DropdownItem divider />*/}
                            {/*        <DropdownItem>*/}
                            {/*            Reset*/}
                            {/*        </DropdownItem>*/}
                            {/*    </DropdownMenu>*/}
                            {/*</UncontrolledDropdown>*/}
                        </Nav>
                        <NavbarText>Simple Text</NavbarText>
                    {/*</Collapse>*/}
                </Navbar>
            </div>
        );
    }
}

export default AppNav;