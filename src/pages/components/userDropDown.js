import { React, useState } from 'react';
import UserIcon from '../../assets/userIcon.png';
import { useUsername, useUsernameUpdate } from '../../context/UsernameContext';
import { useBasket } from '../../context/BasketContext';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserDropDown() {
    const [usernameState, setUsernameState] = useState("");
    const userState = useUsername()
    const updateUser = useUsernameUpdate()
    const basketState = useBasket()

    const handleLogin = (e) => {
        e.preventDefault();
        updateUser(usernameState);
    }

    return (
        <>
            {userState ?
                <>
                    <div style={{textAlign:"center"}}>
                        <img src={UserIcon} alt="Profile Picture" style={{width:"auto", height:"6vh"}} />
                        <h5> {userState} </h5>
                    </div>
                        <h6>Cart : </h6>
                        {basketState.map((item) =>  {
                            return(
                                <div key={item}>{item}</div>
                            )
                        })}
                </>
            : 
                <Form onSubmit={handleLogin}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control size="sm" placeholder="Enter Username" value={usernameState} onChange={(e) => setUsernameState(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control size="sm" type="password" placeholder="Enter Password"/>
                    </Form.Group>
                    <Button variant="dark" type="submit">Login</Button>
                </Form>
            }
        </>
    )
}

export default UserDropDown;
