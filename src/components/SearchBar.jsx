import React, { useState } from 'react';
import styled from "styled-components";

const Container = styled.div`
    margin-bottom: 30px;
`;

const Input = styled.input`
    font-size: 20px;
    padding: 5px 10px;
`;

export default function (props) {
    const [value, setValue] = useState('');
    return (
        <Container>
            <Input
                onChange={e => {
                    setValue(e.target.value);
                    props.callback(e.target.value);
                }}
                value={value}
                type="text"
            />
        </Container>
    );
}
