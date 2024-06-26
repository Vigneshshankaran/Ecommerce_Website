import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function SearchBox() {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword) {
            const searchParams = new URLSearchParams({
                keyword: keyword,
                page: 1,
            }).toString();
            navigate(`/?${searchParams}`);
        } else {
          alert("Please enter a valid keyword!");
            navigate('/');

        }
    };

    return (
        <Form onSubmit={submitHandler} inline className="d-flex align-items-center">
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className='mr-sm-2 ml-sm-5'
            />
            <Button type='submit' variant='outline-success' className='p-2'>
                Submit
            </Button>
        </Form>
    );
}

export default SearchBox;

