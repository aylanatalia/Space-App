import styled from "styled-components";
import search from './search.png'

const ConteinerEstilizado = styled.div`
position:  relative;
display:  inline-block;
`;

const CampoEstilizado = styled.input`
height: 56px;
padding: 12px 16px;
border-radius:  10px;
border:  2px solid;
border-color: #C98CF1;
background-color: transparent;
box-sizing: border-box;
width: 556px;
color: #D9D9D9;
font-weight: 400;
font-size: 20px;
line-height: 20px;
`
const IconeLupa = styled.img`
position: absolute;
top: 10px;
right: 10px;
width: 38px;
height: 38px;
`;

const CampoTexto = ({ setFiltro }) => {
    return(
        <ConteinerEstilizado>
            <CampoEstilizado type="text" placeholder="O que você procura?" onChange={(evento) => { setFiltro(evento.target.value) }} />
            <IconeLupa src={search} alt="Lupa" />
        </ConteinerEstilizado>
    )
}

export default CampoTexto

