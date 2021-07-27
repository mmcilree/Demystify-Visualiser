import React from 'react';
import {Dropdown, Spinner} from 'react-bootstrap';

class DropdownChoices extends React.Component {
    render() {
        const {name, choices, makeChoice, disabled, isLoading } = this.props
        return (
            <Dropdown onSelect={(e) => makeChoice(e)}>
                <Dropdown.Toggle disabled={disabled} variant="success" id="dropdown-basic">
                    {name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {isLoading ?
                        <div className="d-flex justify-content-center">
                            <Spinner animation="border" />
                        </div>
                        :
                        choices.map((name) =>
                            <Dropdown.Item key={name} eventKey={name} onClick={() => makeChoice(name)}>
                                {name}
                            </Dropdown.Item>)}
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}

export default DropdownChoices