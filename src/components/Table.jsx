import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TR = styled.tr`
  &:nth-child(2n) {
    background: aliceblue;
  }
`;

export default function(props) {
    return (
        <Table>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
                {props.repos.map((repo) => {
                    return (
                        <TR>
                            <td>{repo.id}</td>
                            <td>{repo.name}</td>
                        </TR>
                    )
                })}
            </tbody>
        </Table>
    );
}
