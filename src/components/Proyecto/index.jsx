import styled from "styled-components"
import Logo from "../../assets/logo-color.png"

export const ProyectoContainer = styled.div`
    max-width:520px;
    min-width:340px;
    width:90%;
    height:100%;
    max-height:520px;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    z-index:6;
    justify-self:center;
    align-self:center;
    border-radius:7px;
    box-shadow: 4px 9px 50px -10px rgba(0,0,0,0.85);
    background-color:white;
    overflow-y:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:1rem;
    @media(max-width:420px){
        padding:0.75rem;
        max-height:480px;
       
    }
`
const Parrafo = styled.p`
    padding: 0 0.75rem;
    text-align:justify;
`
const H2 = styled.h2`
    text-align:center;
    font-weight:normal;
    margin-top:0;
`
const Proyecto = () => {
    return(
        <ProyectoContainer>
            <img src={Logo} alt="logo-proyecto" style={{width:'240px', }}/>
            <H2>Miradores de Rilán</H2>
            <Parrafo>	
                Exclusivas seis parcelas bordemar en la península de Rilan, 
                todas con vista al mar. Playa privada, urbanización con agua 
                y electricidad subterránea para cada cada lote. Posibilidad 
                de tener embarcaciones frente al conjunto.
            </Parrafo>
        </ProyectoContainer>
    )
}
export default Proyecto