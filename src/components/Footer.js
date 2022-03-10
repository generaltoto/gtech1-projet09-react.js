
import {Row, Col, Container} from "react-bootstrap"

function Footer() {
  return (
    <>
      <div id="footer">
          <div className='footer'>
            <Row className="canceled">
              <Col>
              </Col>
            </Row>
          </div>
          <div className="bot-footer">
            <Row className="canceled">
              <Col>
                <p className="footer-text">© 2021 Gaming Campus - G.Tech 1 | Website by Thibault LE TALLEC and Thomas Delorme</p>
              </Col>
              <Col>
                <p className="footer-text">w/ React</p>
              </Col>
            </Row>
          </div>
      </div>
    </>
  )
}

export default Footer;