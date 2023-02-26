import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Container, Row, Col, Button } from "react-bootstrap";

import { useAuth } from "../AuthContext";

import "../index.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser, login, setError } = useAuth();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (e) {
      setError("Failed to login");
    }

    setLoading(false);
  }

  return (
    <>
      <Container>
        <Container className="pt-4">
          <Row>
            <Col lg={4}></Col>
            <Col lg={4}>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button variant="flat" type="submit">
                  Login
                </Button>
              </Form>

              <p className="text-sm text-center">
                No account yet?{" "}
                <Button variant="flat" href="/signup" disabled={loading}>
                  Sign up
                </Button>
              </p>
            </Col>
            <Col lg={4}></Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Login;
