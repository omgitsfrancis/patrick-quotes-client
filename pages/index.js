import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import SpeechBubble from "../components/SpeechBubble";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1366px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  position: relative;
`;

const PatrickImg = styled.img`
  height: 60vh;
  transform: translateX(-10px);
`;

const StyledSpeechBubble = styled(SpeechBubble)`
  position: absolute;
  top: 0;
  right: 0;
  width: auto;;
  

`;

const QuoteText = styled.span`
  text-align: center;
`;

export default function Index() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchQuote() {
    setLoading(true);
    await fetch("https://patrick-quotes.herokuapp.com/api/quotes/random")
      .then(res => res.json())
      .then(result => setQuote(result.quote))
      .catch(err => setError(true))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <Container>
      <h1 style={{textAlign: "center"}}>Patrick Quotes</h1>
      {error ? (
        <p>Error has occured</p>
      ) : (
        <Wrapper>
          <PatrickImg src="patrick.png" />
          <StyledSpeechBubble color="#FFFF99">
            <QuoteText>{loading ? "LOADING..." : quote}</QuoteText>
          </StyledSpeechBubble>
        </Wrapper>
      )}
      <Button disabled={loading} onClick={() => fetchQuote()}>Get Quote</Button>
    </Container>
  );
}
