import styled from "styled-components";

const ResultSection = styled.section`
    text-align: center;
`
const ResultList = styled.ul`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    box-sizing: border-box;
`
const ResultInfo = styled.p`
    margin-top: 20px;
`
export {
    ResultSection,
    ResultList,
    ResultInfo,
}