import styled from "styled-components";

const Title = styled.h1`
    background-color: ${ props => props.theme.colors.secondary };
    padding: 20px;
    font-weight: 800;
    font-size: 2rem;
    text-align: center;
`
export {
    Title,
}