import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <h1>Patrick Quotes</h1>
      {error ? (
        <p>Error has occured</p>
      ) : (
        <>
          <p>{loading ? "LOADING..." : quote}</p>
          <Button onClick={() => fetchQuote()}>Get Quote</Button>
        </>
      )}
    </Container>
  );
}
