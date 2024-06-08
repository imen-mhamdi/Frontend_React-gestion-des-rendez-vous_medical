import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'; 
import { Image, Button, Row, Col, Card } from 'react-bootstrap';
import './home.css'
import homeImage from '../assets/image/home.png';
import home2Image from '../assets/image/home2.png';
import cardioImage from '../assets/image/cardiology.png';
import neuroImage from '../assets/image/neurology.jpg';
import orthoImage from '../assets/image/orthopedics.png';
import Doctors from './Doctors/Doctors';
import imenImage from '../assets/image/imen.png';
import ihebImage from '../assets/image/iheb.jpg';
import phyrasImage from '../assets/image/phyras.jpg';
import partner1Image from '../assets/image/partner1.png';
import partner2Image from '../assets/image/partner2.png';
import partner3Image from '../assets/image/partner3.png';
import ReservationForm from './ReservationForm'; 

const services = [
  {
    id: 1,
    title: "Cardiologie",
    description: "Soins complets pour le cœur et le système cardiovasculaire.",
    image: cardioImage,
  },
  {
    id: 2,
    title: "Neurologie",
    description: "Soins spécialisés pour le cerveau et le système nerveux.",
    image: neuroImage,
  },
  {
    id: 3,
    title: "Orthopédie",
    description: "Soins pour les os, les articulations et les muscles.",
    image: orthoImage,
  },
  {
    id: 4,
    title: "Cardiologie",
    description: "Soins complets pour le cœur et le système cardiovasculaire.",
    image: cardioImage,
  },
  {
    id: 5,
    title: "Cardiologie",
    description: "Soins complets pour le cœur et le système cardiovasculaire.",
    image: cardioImage,
  },
  {
    id: 6,
    title: "Cardiologie",
    description: "Soins complets pour le cœur et le système cardiovasculaire.",
    image: cardioImage,
  },
];


const equipe= [
  { id:'1',
    firstName: 'Imen',
    lastName: 'Mhamdi',
    email: 'imenmhd69@gmail.com',
    phone: '+216 28075090',
    image: imenImage,
  },
 
  { id:'2',
    firstName: 'Iheb',
    lastName: 'Zouaoui',
    email: 'Iheb.Zouaoui@gmail.com',
    phone: '+216 55222696',
    image: ihebImage,
  },
  { id:'3',
    firstName: 'Phyras',
    lastName: 'Sbaii',
    email: 'Phyras.Sbaii@gmail.com',
    phone: '+216 28555935',
    image: phyrasImage,
  }
];




const Home = () => {


  //reservation  form
  const [showReservationForm, setShowReservationForm] = useState(false);

  const openReservationForm = () => {
    setShowReservationForm(true); // Afficher le formulaire de réservation
  };

  const closeReservationForm = () => {
    setShowReservationForm(false); // Masquer le formulaire
  };



  
  const buttonStyle = {
    backgroundColor: '#007E85', // Couleur de fond du bouton
    color: 'white', // Couleur du texte
    padding: '10px 30px', // Padding du bouton
    borderRadius: '10px', // Coins arrondis
  };
  const cardTitleStyle = {
    color: '#007E85', // Couleur du texte du titre de la carte
    fontWeight: 'bold', // Texte en gras
  };

  return (
    <div className="container my-4">
      {/* Section d'accueil */}
      <Row className="align-items-center">
        <Col md={7} style={{ marginTop: '50px' }}>
          <h2>
            <strong>Fournir des soins de qualité pour un avenir plus sain</strong>
          </h2>
          <p>
            Dans notre Clinique, nous sommes dédiés à fournir des soins médicaux exceptionnels à nos patients et à leurs familles.
          </p>
          <Button
            variant="primary"
            style={{ padding: '10px 30px', borderRadius: '0 20px 20px 0', margin: '20px 20px 20px 0' }}
            onClick={openReservationForm }
          >
            Réservez Maintenant <i className="bi bi-play"></i>
          </Button>
        </Col>
        <Col md={5} className="text-end">
          <Image src={homeImage} fluid style={{ width: '100%', height: '450px' }} />
        </Col>
      </Row>

      {/* Section MediCare en Chiffres centrée */}
      <div className="my-4" style={{ textAlign: 'center' }}>
        <h3 style={{ color: '#007E85', fontWeight: 'bold', marginBottom: '50px', marginTop: '60px' }}>
          Clinique pédiatrique de Tunis en Chiffres
        </h3>
        <Row style={{ justifyContent: 'center' }}>
          <Col xs={3} style={{ textAlign: 'center' }}>
            <h4 style={{ fontWeight: 'bold', color: '#1E90FF', fontSize: '30px' }}>99%</h4>
            <p>Patients Satisfaits</p>
          </Col>
          <Col xs={3} style={{ textAlign: 'center' }}>
            <h4 style={{ fontWeight: 'bold', color: '#1E90FF', fontSize: '30px' }}>15k</h4>
            <p>Rendez-vous</p>
          </Col>
          <Col xs={3} style={{ textAlign: 'center' }}>
            <h4 style={{ fontWeight: 'bold', color: '#1E90FF', fontSize: '30px' }}>12k</h4>
            <p>Patients guéris</p>
          </Col>
          <Col xs={3} style={{ textAlign: 'center' }}>
            <h4 style={{ fontWeight: 'bold', color: '#1E90FF', fontSize: '30px' }}>240%</h4>
            <p>Croissance</p>
          </Col>
        </Row>
      </div>

      {/* Nouvelle sous-partie avec texte à gauche et image à droite */}
      <div className="my-4">
        <Row style={{ marginTop: '50px' }}>
          <Col md={6} style={{ marginTop: '60px' }}>
            <h3 style={{ color: '#007E85', fontWeight: 'bold' }}>"Vous avez de nombreuses raisons de nous choisir."</h3>
            <p>
              Nous nous engageons à offrir des soins de qualité aux patients et à leurs familles. Notre équipe de professionnels expérimentés travaille sans relâche pour garantir des services exceptionnels et des résultats optimaux.
            </p>
          </Col>
          <Col md={6} className="text-end">
            <Image src={home2Image} fluid style={{ width: '90%', height: '90%' }} />
          </Col>
        </Row>
      </div>

      {/* Section "Nos Services" */}
      <div className="my-4" style={{ textAlign: 'center' }}>
        <h3 style={{ color: '#007E85', fontWeight: 'bold', marginBottom: '20px', marginTop: '80px' }}>
          Nos Services
        </h3>
        <p style={{ marginBottom: '30px', marginTop: '10px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper dalar elementum tempus hac tellus libero accumsan.
        </p>

        {/* Cartes des Services */}
        <Row className="justify-content-center">
          {services.map((service) => (
            <Col md={3} className="mb-4 mx-3" key={service.id}>
              <Card style={{ width: '100%' }}>
                <Card.Img
                  variant="top"
                  src={service.image}
                  style={{ height: '150px', marginTop:'10px',objectFit: 'contain' }}
                />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

     {/* Section "Nos médecins" avec Carousel */}
   
    <div style={{ textAlign: 'center', marginTop: '90px' }}>
    <Doctors />
    </div>


    <div className="my-4" style={{ textAlign: 'center' }}>
        <h3 style={{ color: '#007E85', fontWeight: 'bold', marginBottom: '20px', marginTop: '80px' }}>
        Rencontrez les membres de notre équipe
        </h3>
        <p style={{ marginBottom: '30px', marginTop: '10px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper dalar elementum tempus hac tellus libero accumsan.
        </p>

        <Row className="justify-content-center">
         {equipe.map((equipe) => ( 
         <Col md={3} className="mb-4 mx-3" key={equipe.id}>  
        <Card style={{ width: '100%' }}>
        <Card.Img
          variant="top"
          src={equipe.image}  
          style={{ height: '150px',marginTop:'20px', objectFit: 'contain'  }}
        />
        <Card.Body>
          <Card.Title>{equipe.firstName} {equipe.lastName}</Card.Title>
          <Card.Text>{equipe.email}</Card.Text>  
          <Card.Text>{equipe.phone}</Card.Text> 
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
      </div>


      <div className="my-4" style={{ textAlign: 'center' }}>
    <h3 style={{ color: '#007E85', fontWeight: 'bold', marginBottom: '20px', marginTop: '80px' }}>
      Nos partenaires
    </h3>
    <p style={{ marginBottom: '30px', marginTop: '10px' }}>
      Nous sommes fiers de collaborer avec des partenaires de confiance.
    </p>

    <Row className="justify-content-center">
      <Col md={3} className="mb-4 mx-3">
        <Image
          src={partner1Image}
          fluid
          style={{ width: '100%', maxHeight: '100px', marginTop:'20px',objectFit: 'contain' }}
        />
      </Col>
      <Col md={3} className="mb-4 mx-3">
        <Image
          src={partner2Image}
          fluid
          style={{ width: '100%', maxHeight: '100px', objectFit: 'contain' }} 
        />
      </Col>
      <Col md={3} className="mb-4 mx-3">
        <Image
          src={partner3Image}
          fluid
          style={{ width: '100%', maxHeight: '100px', objectFit: 'contain' }} 
        />
      </Col>
    </Row>
  </div>

    </div>
  );
};

export default Home;
