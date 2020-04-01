import styled from "styled-components";

const SpeechBubble = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  background: ${props => props.color || "#00aabb"} ;
  border-radius: 0.4em;
  padding: 0.5rem 1rem;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: ${props => props.color || "#00aabb"};
    border-bottom: 0;
    border-left: 0;
    margin-left: -10px;
    margin-bottom: -20px;
  }
`;

export default SpeechBubble;
