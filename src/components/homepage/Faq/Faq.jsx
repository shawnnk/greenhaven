import React, { useState } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import { SECTION_CONFIG } from "../../../data/config/SectionConfig";
// import faqImage from "/images/bg/leaves2-t.png";
import { faqData } from "../../../data/FaqData";
import "./Faq.css";

const Faq = () => {
  const [activeKey, setActiveKey] = useState("0");
  const { title, subtitle, description } = SECTION_CONFIG.faqs;

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <section id="faqs" className="faq-section section-wrapper">
      {/* <img src={faqImage} className="faq-bg-image" alt="" /> */}
      <Container className="container-wrapper">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          description={description}
        />

        <Row className="faq-content justify-content-center fade-in delay-1s mb-4">
          <Col md={8}>
            <Accordion activeKey={activeKey}>
              {faqData.map((faq, idx) => {
                const key = String(idx);
                const isOpen = activeKey === key;

                return (
                  <Accordion.Item eventKey={key} key={faq.id}>
                    <Accordion.Header onClick={() => handleToggle(key)}>
                      <span className="faq-title">{faq.question}</span>

                      {/* Custom icon */}
                      <span className={`faq-icon ${isOpen ? "open" : ""}`}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </Accordion.Header>

                    <Accordion.Body>{faq.answer}</Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
