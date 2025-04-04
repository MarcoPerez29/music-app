import styled from "styled-components";

const AddButton = styled.button`
    background-color: #0000ff;
    color: #fff;
    font-size: 1rem;
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`
const SearchBarSection = styled.section`
    margin: 5px;
`

export {
    AddButton,
    SearchBarSection,
}