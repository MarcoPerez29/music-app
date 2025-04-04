import styled from "styled-components";

//Para el score que nos da el año
interface DetailInfoProps {
    score?: number;
};

const DetailArticle = styled.article`
    text-align: center;
    padding: 30px;
`

const DetailTitle = styled.h2`
    font-size: 1.3rem;
    font-weight: 600;
    margin-top: 20px;
`

const DetailInfo = styled.p<DetailInfoProps>`
    font-size: 1rem;
    margin: 7px;
    color: ${props => {
        const score = props.score ?? 0;
        if(score >= 2010) return 'green';
        if(score >= 2000) return 'gold';
        if(score >= 1900) return 'red';
        return 'white';
    }};
`

const DetailImage = styled.img`
    width: 200px;
    margin: 20px;
`

export {
    DetailArticle,
    DetailTitle,
    DetailInfo,
    DetailImage,
}