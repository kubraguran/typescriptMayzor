import React, { useState } from "react";
import { Person } from "./data";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import pp from "./profile/pp.png"
import { RiShutDownLine } from "react-icons/ri";
import mayzor from "./profile/mayzor.png"
import { UpOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import { MdMotionPhotosAuto,MdTune } from "react-icons/md";
import InputGroup from 'react-bootstrap/InputGroup';
import { BsPersonPlusFill,BsGridFill,BsBell,BsChevronCompactLeft } from "react-icons/bs";
import { AiOutlineUser,AiOutlineHome,AiOutlineDown,AiOutlineSearch } from "react-icons/ai";

import { Input } from 'antd';

const { Panel } = Collapse;





type ExpandIconPosition = 'start' | 'end';

interface Props {
  person: Person;
  onEdit: (person: Person) => void;
  onDelete: (person: Person) => void;
  onCancel: () => void;
  email: string;
  img:string;
}

const SingleUser: React.FC<Props> = ({ person, onEdit, onDelete, onCancel, email }) => {
  const [editedPerson, setEditedPerson] = useState(person);
  const [dateValue, setDateValue] = useState('');
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {

    setEditedPerson({ ...editedPerson, [field]: e.target.value });
  };

  const handleSaveClick = () => {
    onEdit(editedPerson);
  };

  const handleCancelClick = () => {
    onCancel();
  };

  const handleDeleteClick = () => {
    const confirm = window.confirm('Are you sure?');
    if (confirm) {
      onDelete(person);
    }
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
            <div className="profile">
              <img src={pp} alt="..." className="userImg" />
              <br />
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
                <Panel header="Navigasyon" className = "panelHeader" key="1">
                  <div className="iconCollapse"> <button><BsGridFill/></button> <p>Anasayfa</p></div>
                </Panel>
                <Panel header="APPS" className= "panelHeader" key="2">
                  <div className="iconCollapse"> <button><BsPersonPlusFill/></button>  <p>Kullanıcı İşlemleri</p></div>
                </Panel>
              </Collapse>
            </div>
          </Col>
          <Col md={10} >
            <div style={{ backgroundColor: "white" }} className="infoPage mx-3 my-5">
              <div className="goBack">
                <button type="button" className="backButton" onClick={handleCancelClick}>
                  <BsChevronCompactLeft className="back" />
                </button>
                <p className="userName">Kullanıcı_{person.name}</p>
              </div>
              <div><img src = {person.img} alt = {person.name} className= "singleImg"/> <span className="changeImg"><MdMotionPhotosAuto/></span></div>
              <form className="formSingle">
                <div>
                  <p>Name</p>
                  <Input size="large" type="text"
                    value={editedPerson.name}
                    onChange={(e) => handleInputChange(e, "name")}
                    placeholder="large size" className="input" />
                </div>
                <div>
                  <p>Email</p>
                  <Input size="large"
                    className="input"
                    type="email"
                    value={editedPerson.email}
                    onChange={(e) => handleInputChange(e, "email")}
                  />
                </div>
                <div>
                  <p>Phone</p>
                  <Input size="large"
                    className="input"
                    type="tel"
                    value={editedPerson.phone}
                    onChange={(e) => handleInputChange(e, "phone")}
                  />
                </div>
          
                <div>
                  <p>Doğum Tarihi</p>
                  <Input
                    type="input"
                    className="inputdate"
                    placeholder="gg.aa.yyyy"
                  />
                </div>
                <div className="buttons" >
                  <Button onClick={handleDeleteClick} id="delete" variant="primary">  Hesabı Sil</Button>
                  <Button variant="danger" id="updated" onClick={handleSaveClick}>Hesabı Güncelle</Button>
                </div>

              </form>
            </div>
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


  );
};

export default SingleUser;