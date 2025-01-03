import React from "react";
import { AccordionBody, AccordionHeader } from "react-bootstrap";

import Accordion from "react-bootstrap/Accordion";
import "./Faq.css";

function Faq() {
  return (
    <div className="">
      <Accordion className="bg-body-secondary">
        <Accordion.Item eventKey="0">
          <AccordionHeader className="">
            What is an online food ordering system?
          </AccordionHeader>
          <AccordionBody>
            An online food ordering system lets customers view your menu, place
            an order, and pay right on your site. SelvaNila Restaurant offers a
            commission-free online ordering system, so you can feed your
            customers and your bottom line. Learn how to set up your online
            ordering system so you can reach more customers
          </AccordionBody>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Faq;
