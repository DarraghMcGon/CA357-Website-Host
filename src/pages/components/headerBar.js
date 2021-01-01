import React from 'react';
import './headerBar.css';
import TempLogo from '../../assets/tempLogo.png';
import SearchIcon from '../../assets/search.png';
import UserIcon from '../../assets/userIcon.png';
import UserDropDown from './userDropDown';
import { Navbar, Nav, Form, InputGroup, FormControl, Button, OverlayTrigger, Popover} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function HeaderBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" varient="dark">
                <Navbar.Brand><Link to="/"><img src={TempLogo} alt="Temporary Company Logo" style={{width:"auto", height:"4vh"}} /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/shop" style={{ color: 'inherit', textDecoration: 'inherit', paddingRight: "2vw"}}><b>Store</b></Link>
                        <Link to="/info" style={{ color: 'inherit', textDecoration: 'inherit', paddingRight: "2vw"}}><b>Information</b></Link>
                    </Nav>
                    <Nav>
                        <Form inline>
                            <InputGroup className="mb-3" style={{height:"1vh"}}>
                                <FormControl
                                placeholder="Search ..."
                                aria-label="Search bar"
                                style={{height:"1.5em"}}
                                />
                                <InputGroup.Append>
                                <Button variant="outline-dark" style={{height:"1.5em"}}><img src={SearchIcon} alt="Search bar icon" style={{height:"1em", marginBottom:"6vh"}}/></Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form>
                        <OverlayTrigger
                            trigger="click"
                            placement="bottom"
                            overlay={
                                <Popover id="userPopOver">
                                    <Popover.Content>
                                        <UserDropDown />
                                    </Popover.Content>
                                </Popover>
                            }
                        >
                            <Button variant="outline-dark" style={{padding:"0", margin:"0", marginLeft:"1vw", border: "None", backgroundColor:"rgba(0, 0, 0, 0)"}}><img src={UserIcon} alt="User Icon" style={{width:"auto", height:"4vh"}} /></Button>
                        </OverlayTrigger>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div class="h-bar"></div>
        </>
    )
}

export default HeaderBar;
