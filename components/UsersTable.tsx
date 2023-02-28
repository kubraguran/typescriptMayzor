import React, { useState } from "react";
import { people } from "./data";
import SingleUser from "./SingleUser";
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import pp from "./profile/pp.png"
import mayzor from "./profile/mayzor.png"
import { RiShutDownLine } from "react-icons/ri";
import { MdTune } from "react-icons/md";
import { UpOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import { BsTrash,BsPencilFill,BsPersonPlusFill,BsGridFill,BsBell } from "react-icons/bs";
import InputGroup from 'react-bootstrap/InputGroup';
import { AiOutlineUser,AiOutlineSearch,AiOutlineHome,AiOutlineDown } from "react-icons/ai";




const { Panel } = Collapse;


type ExpandIconPosition = 'start' | 'end';






interface Person {
  name: string;
  email: string;
  id: number;
  situation: string;
  phone: string;
  img: string;

}

const UsersTable: React.FC = () => {
  const location = useLocation();
  const email = location.state?.email || '';
  const [peopleData, setPeopleData] = useState<Person[]>(people);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);



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



  const handlePersonClick = (person: Person) => {
    setSelectedPerson(person);
  };

  const handleCancelClick = () => {
    setSelectedPerson(null);
  };

  const handlePersonEdit = (editedPerson: Person) => {
    const index = peopleData.findIndex(person => person.id === editedPerson.id);

    const updatedPeopleData = [
      ...peopleData.slice(0, index),
      editedPerson,
      ...peopleData.slice(index + 1)
    ];
    setPeopleData(updatedPeopleData);
    setSelectedPerson(null); 
  };

  const handlePersonDelete = (deletedPerson: Person) => {
    const confirm = window.confirm("Are You Sure?")

    if(confirm){
      const updatedPeopleData = peopleData.filter(person => person.id !== deletedPerson.id);
      setPeopleData(updatedPeopleData);
      setSelectedPerson(null);
    }

    
  };

  if (selectedPerson) {
    return <SingleUser
      person={selectedPerson}
      onEdit={handlePersonEdit}
      onDelete={handlePersonDelete}
      onCancel={handleCancelClick}
      img={selectedPerson?.img}
      email={email}

    />;
  }




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
                  <Link to = "/userstable" style ={{textDecoration:"none"}} ><div className="iconCollapse"> <button><BsPersonPlusFill /></button>  <p>Kullanıcı İşlemleri </p></div></Link> 
                  </Panel>
              </Collapse>

              <br />
            </div>
          </Col>


          <Col md={10} className="usersTable">
            <div style={{ backgroundColor: "white", overflow: "auto" }} id="table" className="infoPage mx-3 my-5" >
              <Table responsive >
                <thead>
                  
                  <tr>
                    <th>#</th>
                    <th>Ad-Soyad</th>
                    <th>E-mail</th>
                    <th>Telefon</th>
                    <th>Durum</th>
                    <th>İşlem</th>
                  </tr>
                </thead>
                <tbody>
                  {peopleData.map((person) => (
                    <tr key={person.id} >
                      <td>{person.id}</td>
                      <td>
                        <span>
                      <img className="tableImg" src={person.img} alt={person.name}></img>
                       </span>
                      <span>
                      {person.name}
                      </span>
                      </td>
                      <td>{person.email}</td>
                      <td>{person.phone}</td>
                      <td><p className={person.situation === "Aktif" ? "success" : person.situation === "Kısıtlandı" ? "warning" : "danger"}>
                        {person.situation}
                      </p>
                      </td>
                      <td>
                        <button className="editButton" onClick={(e) => { e.stopPropagation(); handlePersonDelete(person); }}>
                          <BsTrash />
                        </button>
                        <button className="editButton" onClick={() => handlePersonClick(person)}>
                          <BsPencilFill />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
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

export default UsersTable;



