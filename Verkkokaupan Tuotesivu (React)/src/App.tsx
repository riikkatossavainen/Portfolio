import React, { useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Mustapaita from "./paitoja/20071-900.jpg";
import Valkoinenpaita from "./paitoja/20071-100.jpg";
import Punainenpaita from "./paitoja/20010-300.jpg";
import Sininenpaita from "./paitoja/20010-270.jpg";
import Harmaapaita from "./paitoja/20010-470.jpg";

import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";

const App: React.FC = () => {
  const [vari, setVari] = useState<string>("Ei valittuna");
  const [koko, setKoko] = useState<string>("Ei valittuna");
  const [hinta, setHinta] = useState<number>(10.0);
  const [nopeus, setNopeus] = useState<number>(0);

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let kokoValinta: any;
  let kpl;
  let ostoskori;
  let kokonaishinta;
  let lisaaOstoskoriin;
  let alennettuHinta;

  const paivita = (event: any): void => {
    const value: string = event.target.value;

    setVari(value);
    if (value === "Musta") {
      setIndex(0);
    } else if (value === "Punainen") {
      setIndex(1);
    } else if (value === "Valkoinen") {
      setIndex(2);
    } else if (value === "Sininen") {
      setIndex(3);
    } else if (value === "Harmaa") {
      setIndex(4);
    }
  };

  const valittu = (event: any): void => {
    setKoko(event.target.value);
  };
  const maksu = (event: any): void => {
    setHinta(event.target.value * 10);
  };

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
    vaihdaSelect(selectedIndex);
  };

  const vaihdaSelect = (selectedIndex: any) => {
    if (selectedIndex === 0) {
      setVari("Musta");
    } else if (selectedIndex === 1) {
      setVari("Punainen");
    } else if (selectedIndex === 2) {
      setVari("Valkoinen");
    } else if (selectedIndex === 3) {
      setVari("Sininen");
    } else if (selectedIndex === 4) {
      setVari("Harmaa");
    }
  };

  if (vari === "Musta" || vari === "Valkoinen") {
    kokoValinta = (
      <Form>
        <Form.Label>Valitse koko</Form.Label>
        <Form.Control as="select" onChange={valittu}>
          <option>XS</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
          <option>XXL</option>
        </Form.Control>
      </Form>
    );
  } else if (vari === "Punainen") {
    kokoValinta = (
      <Form>
        <Form.Label>Valitse koko</Form.Label>
        <Form.Control as="select" onChange={valittu}>
          <option disabled>XS</option>
          <option>S</option>
          <option>M</option>
          <option disabled>L</option>
          <option disabled>XL</option>
          <option disabled>XXL</option>
        </Form.Control>
      </Form>
    );
  } else if (vari === "Harmaa" || vari === "Sininen") {
    kokoValinta = (
      <Form>
        <Form.Label>Valitse koko</Form.Label>
        <Form.Control as="select" onChange={valittu}>
          <option disabled>XS</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
          <option disabled>XXL</option>
        </Form.Control>
      </Form>
    );
  } else {
    kokoValinta = "";
  }

  if (
    koko === "XXL" ||
    koko === "XL" ||
    koko === "L" ||
    koko === "M" ||
    koko === "S" ||
    koko === "XS"
  ) {
    kpl = (
      <Form>
        <Form.Label>Kappalemäärä:</Form.Label>
        <Form.Control type="number" defaultValue="1" onChange={maksu} />
        <Form.Text className="text-muted">
          Valitse kuinka monta kappaletta paitoja haluat ostaa{" "}
        </Form.Text>
      </Form>
    );

    if (hinta <= 10) {
      lisaaOstoskoriin = "Lisää paita ostoskoriin";

      ostoskori = <Button onClick={handleShow}>{lisaaOstoskoriin}</Button>;
    } else {
      lisaaOstoskoriin = "Lisää paidat ostoskoriin";

      ostoskori = <Button onClick={handleShow}>{lisaaOstoskoriin}</Button>;
    }

    if (hinta <= 50) {
      kokonaishinta = <h4>Kokonaishinta: {hinta} €</h4>;
    } else {
      alennettuHinta = <b className="alennus">{hinta * 0.8} €</b>;

      kokonaishinta = (
        <h4>
          Alennettu hinta: {alennettuHinta} <s>{hinta} €</s>
        </h4>
      );

      ostoskori = <Button onClick={handleShow}>{lisaaOstoskoriin}</Button>;
    }

    if (hinta >= 200) {
      kokonaishinta = (
        <h5>
          Tilauksesi on poikkeuksellisen suuri. Jos haluat tilata yli 20
          kappaleita tuotteita ota yhteys asiakaspalveluun.
        </h5>
      );

      ostoskori = <Button disabled>{lisaaOstoskoriin}</Button>;
    }
    if (hinta <= 0) {
      kokonaishinta = (
        <>
          <p className="alennus"> Hyväksyttävä kappalemäärä: 1-20</p>
          <br></br>
          <h4>Kokonaishinta: 10 €</h4>
        </>
      );

      ostoskori = <Button onClick={handleShow}>{lisaaOstoskoriin}</Button>;
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <Carousel
            activeIndex={index}
            interval={nopeus}
            onSelect={handleSelect}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Mustapaita}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Punainenpaita}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Valkoinenpaita}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Sininenpaita}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Harmaapaita}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>

        <Col>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h4>Maailman paras paita</h4>
          <p>
            Tämä paita on maailman paras paita. Se on käsinkudottua 100%
            puuvillaa ja käsitelty täysin vettähylkivällä materiaalilla. Paita
            ei siis ikinä sotkeudu mitenkään. Tämä paita sopii sekä miehille,
            naisille ja kaikille muille sukupuolille. Tämän parempaa paitaa saa
            hakea.
          </p>
          Varastotilanne: <Badge variant="success">Varastossa</Badge>
          <p>Toimitusaika: 1-3 päivä</p>
          <h4>10€ / kpl</h4>
          <Form>
            <Form.Label>Valitse väri</Form.Label>
            <Form.Control value={vari} as="select" onChange={paivita}>
              <option>Valitse väri</option>
              <option value="Musta">Musta</option>
              <option value="Punainen">Punainen</option>

              <option value="Valkoinen">Valkoinen</option>

              <option value="Sininen">Sininen</option>

              <option value="Harmaa">Harmaa</option>
            </Form.Control>
          </Form>
          {kokoValinta}
          {kpl}
          <br></br>
          {kokonaishinta}
          {ostoskori}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Lisätty onnistuneesti ostoskoriin</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Tilauksesi:</h4>

              <p>
                T-paita ({vari})<br />
                {hinta / 10} kpl
                <br />
                Koko: {koko}
              </p>
              <p>{kokonaishinta}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Valmis
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
