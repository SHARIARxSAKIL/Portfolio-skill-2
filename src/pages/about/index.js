import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp align-items-center">
          <Col lg="4" className="text-center mb-4 mb-lg-0">
            <div className="about-photo-container">
              <img 
                src={`${process.env.PUBLIC_URL}/images/profile2.png`} 
                alt="Shariar Sakil" 
                className="about-photo"
              />
            </div>
          </Col>
          <Col lg="8" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timeline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            <h4 className="mb-4" style={{color: "#0d47a1"}}>Technical Skills</h4>
            <div className="skills-container">
              {skills.filter(skill => skill.category === "Technical").map((data, i) => {
                return (
                  <span key={i} className="skill-tag">{data.name}</span>
                );
              })}
            </div>
            <h4 className="mb-4 mt-5" style={{color: "#0d47a1"}}>Soft Skills</h4>
            <div className="skills-container">
              {skills.filter(skill => skill.category === "Soft").map((data, i) => {
                return (
                  <span key={i} className="skill-tag">{data.name}</span>
                );
              })}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">CV</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p className="mb-3"> View or download my CV to understand more about my experience, projects, and qualifications.</p>
              <Link to="/cv" className="btn btn-primary" style={{
                padding: "10px 20px",
                backgroundColor: "#0d47a1",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
                display: "inline-block"
              }}>
                View My CV
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Things I Can Offer</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
