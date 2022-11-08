import React, { Component } from "react";
import SEO from "../../../common/SEO";
import Layout from "../../../common/Layout";
import axios from "../../../axios";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { Col, Container, Form, Row } from "react-bootstrap";
import Separator from "../../../elements/separator/Separator";
import SectionTitle from "../../../elements/sectionTitle/SectionTitle";

export default class inWorks extends Component {
  state = {
    title: "",
    image: "",
    body: [""],
    body1: [""],
    body2: [""],
    error: null,
    success: null,
    deleted: null,
    loading: false,
  };

  goBack = () => {
    this.props.history.goBack();
  };

  handleType = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value, error: null, success: null });
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    axios
      .get("articles/" + this.props.match.params.id)
      .then((result) =>
        this.setState({ ...result.data.data, error: null, loading: false })
      )
      .catch((err) => {
        this.setState({
          error: err.response.data.error.message,
          loading: false,
        });
      });
  };

  handleSave = () => {
    this.setState({ loading: true, success: null });
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .put(
        "articles/" + this.props.match.params.id,
        {
          title: this.state.title,
          body: this.state.body,
          body1: this.state.body1,
          body2: this.state.body2,
        },
        { headers }
      )
      .then((result) => {
        this.setState({
          ...result.data.data,
          error: null,
          loading: false,
          success: "Амжилттай хадгалагдлаа...",
        });
        this.props.history.push("/admin");
      })
      .catch((err) => {
        this.setState({
          error: err.response.data.error.message,
          loading: false,
        });
      });
  };

  handleDelete = () => {
    this.setState({ loading: true, success: null });
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .delete("articles/" + this.props.match.params.id, { headers })
      .then((result) => {
        this.setState({
          deleted: true,
        });
        this.props.history.push("/admin");
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          error: err.response.data.error.message,
          loading: false,
        });
      });
  };

  render() {
    if (this.state.deleted) {
      return (
        <div className="notification is-danger">
          Ном амжилттай устгагдлаа...
        </div>
      );
    }
    return (
      <>
        <SEO title="Admin" />
        <Layout>
          <div className="main-content">
            <Separator />

            {/* Start Service Area  */}
            <div className="rn-service-area rn-section-gap ">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <SectionTitle
                      textAlign="text-center"
                      radiusRounded=""
                      title="works Settings"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* End Service Area  */}
          </div>
          <Container>
            <Row style={{ paddingBottom: "150px" }}>
              <Col>
                <div className="image">
                  <img
                    src={`https://novelistgroup.com/upload/${this.state.image}`}
                    alt="card Images"
                  />
                </div>
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                  className="button-group mt--20 absolute-center"
                >
                  <Link
                    className="btn-default btn-large btn-border"
                    to="#"
                    onClick={this.handleDelete}
                  >
                    Ажлын зарыг Устгах
                  </Link>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                  className="button-group mt--20 absolute-center"
                >
                  <Link
                    className="btn-default btn-large btn-border"
                    to="#"
                    onClick={this.handleSave}
                  >
                    Ажлын зарыг Хадгалах
                  </Link>
                </ScrollAnimation>
              </Col>
              <Col>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>title нэр</Form.Label>
                    <Form.Control
                      name="title"
                      placeholder="title"
                      type="text"
                      value={this.state.title}
                      onChange={this.handleType}
                      as="textarea"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Ажлын зарын body</Form.Label>
                    <Form.Control
                      name="body"
                      placeholder="body"
                      type="text"
                      value={this.state.body}
                      onChange={this.handleType}
                      as="textarea"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Ажлын зарын body1</Form.Label>
                    <Form.Control
                      name="body1"
                      placeholder="body1"
                      type="text"
                      value={this.state.body1}
                      onChange={this.handleType}
                      as="textarea"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Ажлын зарын body1</Form.Label>
                    <Form.Control
                      name="body2"
                      placeholder="body2"
                      type="text"
                      value={this.state.body2}
                      onChange={this.handleType}
                      as="textarea"
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>
        </Layout>
      </>
    );
  }
}
