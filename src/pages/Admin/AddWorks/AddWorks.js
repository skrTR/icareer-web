import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../../common/Layout";
import SEO from "../../../common/SEO";
import axios from "../../../axios";
import Separator from "../../../elements/separator/Separator";
import SectionTitle from "../../../elements/sectionTitle/SectionTitle";
const AddWork = (props) => {
  const [contact, setContact] = useState({
    title: "",
    image: "",
    count: "",
    body: [""],
    body1: [""],
    body2: [""],
  });
  const [file, setFile] = useState();

  const handleAddFormChange = (event) => {
    event.preventDefault();

    if (event.target.type === "file") {
      setFile(event.target.files[0]);
      setContact({ ...contact, image: event.target.files[0].name });
    } else {
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
      setContact({ ...contact, [fieldName]: fieldValue });
    }
  };

  const handleAddFormSumbit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .post("/articles", contact, { headers })
      .then((result) => {
        const newWork = result.data.data;
        const xhr = new XMLHttpRequest();
        const data = new FormData();
        data.append("file", file);
        xhr.open(
          "PUT",
          `https://novelistgroup.com/api/v1/articles/${newWork._id}/photo`,
          { headers }
        );
        xhr.send(data);
        props.history.push("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
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
                      title="Ажлын зар нэмэх"
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
                <Form onSubmit={handleAddFormSumbit}>
                  <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Ажлын title oruulah</Form.Label>
                    <Form.Control
                      name="title"
                      placeholder="title"
                      type="text"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="workPhoto">
                    <Form.Label>Nuur Зураг</Form.Label>
                    <Form.Control
                      name="image"
                      type="file"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="body">
                    <Form.Label> body</Form.Label>
                    <Form.Control
                      name="body"
                      placeholder="body"
                      type="text"
                      as="textarea"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="body1">
                    <Form.Label> body</Form.Label>
                    <Form.Control
                      name="body1"
                      placeholder="body1"
                      type="text"
                      as="textarea"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="body2">
                    <Form.Label> body</Form.Label>
                    <Form.Control
                      name="body2"
                      placeholder="body2"
                      type="text"
                      as="textarea"
                      onChange={handleAddFormChange}
                    />
                  </Form.Group>

                  <Button type="submit">Нэмэх</Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Layout>
      </>
    </div>
  );
};

export default AddWork;
