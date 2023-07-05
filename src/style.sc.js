import styled,{createGlobalStyle,keyframes} from 'styled-components';
export const Title=styled.p`
color: var(--gray-01, #D6D6F2);
font-size: 2.5rem;
font-family: 'Outfit';
font-style: normal;
font-weight: 700;
line-height: 120%;
width: 55%;
`;
export const Subtitle=styled.p`
color: var(--gray-01, #D6D6F2);
font-size: 1.3rem;
font-family: 'Outfit' ;
font-style: normal;
font-weight: 200;
line-height: 140%;
width: 55%;
`
export const Buttons=styled.div`
  display: flex;
  align-items: start;
  margin-top: 5%;
  width: 60%;

  
`;
export const Button=styled.button`
  margin: 0px 3%;
  display: flex;
  padding: 0.75rem 1.5rem;
  justify-content: center;
  align-items: center;
  color: var(--gray-02, #E2E2F5);
  text-transform: uppercase;
  font-family: 'Outfit' ;
  font-size: 0.9rem;
  border: none;
  gap: 0.5rem;
  border-radius: 62.4375rem;
  background: var(--blue, #151557);
  transition: background ease-in-out 0.2s;
  &:hover{
    background: var(--blue-light, #212187);
  }
`;
export const Container=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dark-blue, #000013);
  height: 100vh;
  max-width: 100vw;
  padding: 0px;
  margin: 0px;
`;
const Side = styled.div`
  width: 45vw;
  height: 100vh;
`;

export const SideRight= styled(Side)`
  display: flex;
  align-items: center;
  justify-content: center;
  img[alt="gif"]{
    width: 30%;
    box-shadow: 0px 0px 196px 0px rgba(112, 0, 255, 0.70);
    border-radius: 10000px;
    background-color: rgba(112, 0, 255, 0.2); 
  }
`;
export const SideLeft= styled(Side)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;