import React, { useState } from "react";
import { Container, Button, InputGroup, FormControl } from "react-bootstrap";
import "./Game.css";

let randomNumber = Math.round(Math.random() * 10);

export const Game = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => setValue(e.target.value);
  const [results, setResult] = useState("");
  const [tries, setTries] = useState("3");
  const [tryAgainButton, setTryAgainButton] = useState("");

  const restartGame = () => {
    randomNumber = Math.round(Math.random() * 10);
    setTries(3);
    setResult("");
    setTryAgainButton("");
  };

  const onClick = () => {
    const userGuess = value;

    // Si el número es correcto
    if (tries !== 0) {
      if (userGuess == randomNumber) {
        setResult(<p className="alert alert-success">Correct!</p>);
        setTryAgainButton(
          <Button
            variant="outline-danger"
            type="submit"
            onClick={restartGame}
            size="lg"
            block
          >
            Play Again
          </Button>
        );
      } else if (tries === 1) {
        setResult(
          <p className="alert alert-danger">
            Game Over! :( . The number was {randomNumber}.
          </p>
        );
        setTries(tries - 1);
        setTryAgainButton(
          <Button
            variant="outline-danger"
            type="submit"
            onClick={restartGame}
            size="lg"
            block
          >
            Try Again
          </Button>
        );
      } else if (userGuess > randomNumber) {
        setTries(tries - 1);
        setResult(<p className="alert alert-warning">Too high, guess again</p>);
      } else if (userGuess < randomNumber && userGuess !== "") {
        setTries(tries - 1);
        setResult(<p className="alert alert-warning">Too low, guess again</p>);
      } else setResult("");
    }
  };

  return (
    <Container id="game">
      <h1>Game (Clip 2020)</h1>
      <p className="lead">
        Guess a number between 1 and 10. You have {tries} tries left.
      </p>
      <InputGroup className="mb-3">
        <FormControl
          value={value}
          type="number"
          min="1"
          max="10"
          onChange={onChange}
          placeholder="Number"
        />
      </InputGroup>
      <Button variant="danger" type="submit" onClick={onClick} size="lg" block>
        Guess
      </Button>
      <br />
      <br />
      {results}
      {tryAgainButton}
    </Container>
  );
};
