
import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import pp from "./profile/pp.png"
import mayzor from "./profile/mayzor.png"
import { RiShutDownLine } from "react-icons/ri";
import { MdTune } from "react-icons/md";
import { UpOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import { BsPersonPlusFill,BsGridFill,BsBell } from "react-icons/bs";
import InputGroup from 'react-bootstrap/InputGroup';
import { AiOutlineHome,AiOutlineUser,AiOutlineSearch ,AiOutlineDown} from "react-icons/ai";
import {Link} from "react-router-dom";
import { Result } from 'antd';


const { Panel } = Collapse;


type ExpandIconPosition = 'start' | 'end';



const MainPage:React.FC = () => {
    const location = useLocation();
    const email = location.state?.email || '';
  
  
  
  
    const [expandIconPosition, setExpandIconPosition] = useState<ExpandIconPosition>('end');
  
    const onPositionChange = (newExpandIconPosition: ExpandIconPosition) => {
      setExpandIconPosition(newExpandIconPosition);
    };
  
    const emailName = (email: string) => {
      const [name] = email.split('@');
      return name;
    };
  
    const onChange = (key: string | string[]) => {
      console.log(key);
    };
  
    const customExpandIcon = (panelProps: any) => {
      const { isActive } = panelProps;
      return isActive ? <UpOutlined /> : <UpOutlined rotate={180} />;
    };
  
    
    return (
        <div className="mainDiv">
        <Navbar className = "navbarStyle" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#"><img src = {mayzor} id= "mayzorNav" alt = "mayzor" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
              </Nav>
              <Form className="d-flex mx-4">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="search"><AiOutlineSearch/></InputGroup.Text>
                  <Form.Control
                    className="me-2 my-1"
                    id= "searchInput"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <Navbar.Brand href="#"><MdTune className="iconsNav" /></Navbar.Brand>
                <Navbar.Brand href="#"><BsBell className="iconsNav" /></Navbar.Brand>
                <Navbar.Brand className="iconsNav" href="#"> <img src={pp} alt="..." className="navImg" /></Navbar.Brand>
                <Navbar.Brand className="iconsNav" id="userName" href="#">{emailName(email)}</Navbar.Brand>
                <Navbar.Brand href="#"><AiOutlineDown className="iconsDown" /></Navbar.Brand>
              </Form>
             
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container fluid >
          <Row>
            <Col md={2} className="sideBar d-none d-md-block">
              
                <img src={pp} alt="..." className="userImg" />
                <br />
               <div className="mainUser">
               <p className="email">{email}</p>
                <p className="text-muted admin">Yönetici</p>
                <a href="" className="shutdown"> <RiShutDownLine /></a>
                </div>
              
              <div className="accordion">
                <Collapse
                  defaultActiveKey={['1']}
                  onChange={onChange}
                  expandIconPosition={expandIconPosition}
                  expandIcon={customExpandIcon}
                  ghost>
                  <Panel header="Navigasyon" className="panelHeader" key="1">
                  <Link to = "/mainpage" style ={{textDecoration:"none"}}> <div className="iconCollapse"> <button><BsGridFill /></button> <p>Anasayfa  </p></div></Link>
                  </Panel>
                  <Panel header="APPS" className="panelHeader" key="2">
                  <Link to = "/userstable" style ={{textDecoration:"none"}}><div className="iconCollapse"> <button><BsPersonPlusFill /></button>  <p>Kullanıcı İşlemleri </p></div></Link> 
                  </Panel>
                </Collapse>
  
                <br />
              </div>
            </Col>
            <Col>
            <Result
    status="warning"
    title="Burası Bir Anasayfa"/>
            </Col>
          </Row>
          <Row className="footer d-block d-sm-none">
        <Col >
        <Navbar id = "footer" fixed="bottom">
          <ul className="footerIcons">
            <li>
              <AiOutlineHome/>
            </li>
            <li>
              <AiOutlineUser/>
            </li>
          </ul>
        </Navbar>
        </Col>
      </Row>
        </Container>
      </div>
    )
}

export default MainPage;