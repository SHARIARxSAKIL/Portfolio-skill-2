import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";

export const CV = () => {
  const cvFileName = "CV_Shariar_Sakil.pdf";

  return (
    <HelmetProvider>
      <Container className="cv-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title> CV | {meta.title} </title>
          <meta name="description" content="Shariar Sakil CV" />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> My CV </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        
        <Row className="mb-5">
          <Col lg="12">
            <div className="cv-download-btn mb-4">
              <a 
                href={`/${cvFileName}`} 
                download={cvFileName}
                className="btn btn-primary"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#0d47a1",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "5px",
                  display: "inline-block"
                }}
              >
                Download CV (PDF)
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg="12">
            <div className="cv-viewer">
              <iframe
                src={`/${cvFileName}`}
                type="application/pdf"
                width="100%"
                height="800px"
                title="CV"
              />
            </div>
            <p className="text-muted mt-3 text-center">
              If the PDF doesn't display, please download it using the button above.
            </p>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
