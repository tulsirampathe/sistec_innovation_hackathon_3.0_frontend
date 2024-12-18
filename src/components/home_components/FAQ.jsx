import React from "react";
import { Accordion } from "react-bootstrap";

const FAQ = (props) => {
  return (
    <>
      <Accordion.Item eventKey={props.id} className="py-3 rounded-4 my-3 item">
        <Accordion.Header>{props.question}</Accordion.Header>

        <Accordion.Body>{props.answer}</Accordion.Body>
      </Accordion.Item>
    </>
  );
};

export default FAQ;
