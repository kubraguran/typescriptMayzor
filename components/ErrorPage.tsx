
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Result } from 'antd';
import { Link } from "react-router-dom";


const ErrorPage:React.FC = () => {
    return (
        <Container>
        <Row>
          <Col>
          <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Link to = "/userstable"><Button type="primary">Back Home</Button></Link>}/>
  </Col>
        </Row>
      </Container>
    )
}

export default ErrorPage;