import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataprojects, meta } from "../../content_option";
import { useParams, Link } from "react-router-dom";

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = dataprojects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <HelmetProvider>
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Project Not Found | {meta.title}</title>
          </Helmet>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">Project Not Found</h1>
              <Link to="/projects" className="btn btn-primary">
                Back to Projects
              </Link>
            </Col>
          </Row>
        </Container>
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{project.name} | {meta.title}</title>
          <meta name="description" content={project.overview} />
        </Helmet>

        <Row className="mb-3 mt-3 pt-md-3">
          <Col lg="12">
            <Link to="/projects" className="btn-back">
              Back to Projects
            </Link>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg="12">
            <h1 className="display-4 mb-4">{project.name}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg="12" className="text-center">
            <img
              src={project.detailImg}
              alt={project.name}
              className="project-detail-img"
            />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="4">
            <h3 className="color_sec">Project Overview</h3>
          </Col>
          <Col lg="8">
            <p className="project-overview">{project.overview}</p>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="4">
            <h3 className="color_sec">{project.partIDidTitle}</h3>
          </Col>
          <Col lg="8">
            <ul className="contribution-list">
              {project.partIDidContent.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="4">
            <h3 className="color_sec">Dashboards</h3>
          </Col>
          <Col lg="8">
            <div className="dashboard-container">
              {project.dashboards.map((dashboard, index) => (
                <div key={index} className="dashboard-item">
                  <img
                    src={dashboard.img}
                    alt={dashboard.title}
                    className="dashboard-img"
                  />
                  <h5 className="dashboard-title">{dashboard.title}</h5>
                  <p className="dashboard-desc">{dashboard.description}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="4">
            <h3 className="color_sec">What I Learned</h3>
          </Col>
          <Col lg="8">
            <p className="learning-text">{project.whatILearned}</p>
          </Col>
        </Row>

        <Row className="sec_sp mb-5">
          <Col lg="4">
            <h3 className="color_sec">Links</h3>
          </Col>
          <Col lg="8">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-project-link">
              View Project
            </a>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
