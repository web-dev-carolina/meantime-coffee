import React, {} from 'react';
import '../styles/OurCoffee.css';
import { Row, Container, Col } from 'react-bootstrap';
import Coffee from '../assets/coffee-pour.jpeg';

const OurCoffee = () => {
    return (<>
     <Container>
        <Row>
            <Col>
                <div className="coffee-pour-wrapper">
                    <img className="coffee-pour" src={Coffee}></img>
                </div>
                </Col>
                <Col>
                <div className="column">
                    <h2>Delicious and Ethical.</h2>
                    <p>TThe Meantime partners with Carrboro Coffee Roasters, "the premiere small-batch artisan roaster in the Carrboro/Chapel Hill area and beyond," to bring UNC the finest and freshest coffee from around the world.</p>
                </div>
            </Col>
        </Row>
        <Row>
            <div className="menu">
                <h1>OUR MENU</h1>
                <h2>-coffee-</h2>
                <p className="menu-item"><strong>drip coffee</strong> |&nbsp;freshly brewed medium or dark roast coffee- try adding espresso to make a redeye</p>
                <p className="menu-item"><strong>iced coffee</strong> | brewed japanese style over ice</p>
                <p className="menu-item"><strong>café au lait</strong> | choice of brewed coffee topped with steamed milk</p>
                <p className="menu-item"><strong>espresso</strong> | double shot of our signature piedmont espresso</p>
                <p className="menu-item"><strong>americano</strong> | double shot of espresso topped with hot water</p>
                <p className="menu-item"><strong>macchiato</strong> | double shot of espresso topped with 1 oz of microfoam</p>
                <p className="menu-item"><strong>cortado</strong> | double shot of espresso topped with 2 oz of steamed milk</p>
                <p className="menu-item"><strong>cappuccino</strong> | double shot of espresso topped with steamed whole milk and a thick layer of velvety microfoam</p>
                <p className="menu-item"><strong>latte</strong> | double shot of espresso topped with steamed milk and a layer of microfoam</p>
                <p className="menu-item"><strong>mocha</strong> | double shot of espresso mixed with rich ghirardelli chocolate syrup topped with steamed milk and microfoam</p>

                <h2>-not coffee-</h2>
                <p class="menu-item"><strong>tea</strong> | selection of loose leaf teas, brewed fresh to order</p>
                <p class="menu-item"><strong>hot chocolate</strong> | steamed milk mixed with rich ghirardelli chocolate syrup</p>
                <p class="menu-item"><strong>chai latte</strong> | spicy chai steamed with whole milk- try it with espresso to make it a dirty chai</p>
                <p class="menu-item"><strong>london fog</strong> | loose leaf earl grey steeped with vanilla, topped with steamed milk and foam</p>
                <p class="menu-item"><strong>apple cider</strong> | warm apple cider perfect for cold days, with just the right amount of spice</p>


                <h2>-customizations-</h2>
                <p class="menu-item"><strong>make it iced</strong> | +0.5 • <strong>extra espresso</strong> | +1 • <strong>non-dairy milk</strong> | +0.75 • <strong>add flavor shot</strong> | +0.5</p>

            </div>


        </Row>
    </Container>
    
    </>)
}

export default OurCoffee;