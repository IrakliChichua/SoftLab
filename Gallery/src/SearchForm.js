import React, {useState} from 'react';
import {Button, ButtonToolbar, Col, Form, Row} from "react-bootstrap";

function SearchForm({onSubmit}) {
    const [userId, setUserId] = useState('')
    const [title, setTitle] = useState('')

    const submit = (e) => {
        e.preventDefault()
        if (userId && title && onSubmit) onSubmit({userId, title});
        else if (userId) onSubmit({userId})
        else if (title) onSubmit({title})
        else onSubmit('')
    }

    return (
        <Form className="m-3" onSubmit={submit}>
            <Row>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>User Id</Form.Label>
                    <Form.Control placeholder="Enter userId" value={userId} onChange={e => setUserId(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Album Name</Form.Label>
                    <Form.Control placeholder="Enter Album Name" value={title}
                                  onChange={e => setTitle(e.target.value)}/>
                </Form.Group>
            </Row>
            <ButtonToolbar className="justify-content-end">
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </ButtonToolbar>

        </Form>
    );
}

export default SearchForm;