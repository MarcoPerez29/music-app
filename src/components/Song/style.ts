import styled from "styled-components";

//Para el score que nos da el año
interface SongInfoProps {
    score?: number;
};

const SongList = styled.li`
    background-color: #CAC0B3;
    border: red;
    list-style: none;
    padding: 10px;
    border-radius: 10px;
    color: #000;
    transition: all .25s linear;

    &:hover {
        transform: scale(1.03);
    }
`

const SongTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: 600;
    padding: 10px;
`
//Para el score que nos da el año
const SongInfo = styled.p<SongInfoProps>`
    font-size: 1rem;
    color: ${props => {
        const score = props.score ?? 0;
        if(score >= 2010) return 'green';
        if(score >= 2000) return 'gold';
        if(score >= 1900) return 'red';
        return 'black';
    }};
`
const SongImage = styled.img`
    width: 60%;
`
export {
    SongTitle,
    SongInfo,
    SongList,
    SongImage,
}