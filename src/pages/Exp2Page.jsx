import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReportFigure from '../components/ReportFigure'

import UVExpo1 from '../assets/Exp2/ex2_oct20_UVexp1.jpg'
import UVExpo2 from '../assets/Exp2/ex2_oct21_UVexp2.jpg'
import UVExpo3 from '../assets/Exp2/ex2_oct22_UVexp3.jpg'
import cont1 from '../assets/Exp2/ex2_oct21_cont.jpg'
import cont2 from '../assets/Exp2/ex2_oct28_cont.jpg'
import UV1 from '../assets/Exp2/ex2_oct21_UV.jpg'
import UV2 from '../assets/Exp2/ex2_oct28_UV.jpg'

const Exp2Page = () => {
  
  return (
    <Container className="mt-5">
      <h1 style={{ color: '#1b4d2e' }}>Experiment 2: UV Exposure</h1>

      <h2 className="pb-2 mb-4" style={{ color: '#1b4d2e', borderBottom: '2px solid #1b4d2e' }}>Intro/Hypothesis</h2>

      <p style={styles.paragraph}>
        In agriculture Trichoderma could be used both in soil and applied directly to a plants leaves, where it would be directly exposed to UV light. 
        Since UV light is damaging to DNA and can kill microorganisms knowing exactly how it effects Trichoderma is crucial. 
      </p>

      <p style={styles.paragraph}>
        My hypothesis is that Trichoderma harzianum is susceptible to UV light, and when exposed to it, UV will stunt its growth or entirely kill it off.
      </p>

      <h2 className="pb-2 mb-4" style={{ color: '#1b4d2e', borderBottom: '2px solid #1b4d2e' }}>Methods/Materials</h2>

      <p style={styles.paragraph}>
        Two PDA plates were prepared with samples of Trichoderma harzianum, both samples were taken from the same Trichoderma colony. One plate will be given 
        three doses of UV for roughly 1 hour at a time over the course of a week, The control will be kept on a shelf with no direct contact with UV light. 
        After the UV doses the test plate will be kept with the control, at room temperature.
      </p>

      <h2 className="pb-2 mb-4" style={{ color: '#1b4d2e', borderBottom: '2px solid #1b4d2e' }}>Results/conclusion</h2>

      <Row className="justify-content-center">
        <Col Col md={5}>
          <ReportFigure
            src={UVExpo1}
            alt="First UV exposure."
            figureNumber="1"
            caption="First UV exposure. ~1 hour"
          />
        </Col>

        <Col Col md={3}>
          <ReportFigure
            src={cont1}
            alt="Control after 1 day."
            figureNumber="2"
            caption="Control after 1 day."
          />
        </Col>

        <Col Col md={3}>
          <ReportFigure
            src={UV1}
            alt="Test after 1 day and 1 hour of UV exposure."
            figureNumber="3"
            caption="Test after 1 day and 1 dose of UV."
          />
        </Col>
      </Row>

      <p style={styles.paragraph}>
        After the first dose both plates were in line with each other, both being 2.5cm by 2.5cm of growth. After the second dose the control was smaller than 
        the UV exposed plate, with the UV plate being 5cm by 5.5cm and the control being 5.1cm by 4.3cm. 
      </p>

      <Row className="justify-content-center">
        <Col Col md={5}>
          <ReportFigure
            src={UVExpo2}
            alt="Second UV exposure."
            figureNumber="4"
            caption="Second UV exposure. ~1 hour (placed upside down by accident)"
          />
        </Col>

        <Col Col md={5}>
          <ReportFigure
            src={UVExpo3}
            alt="Third UV exposure."
            figureNumber="5"
            caption="Third UV exposure. ~1 hour"
          />
        </Col>

        <Col Col md={3}>
          <ReportFigure
            src={cont2}
            alt="Control after 8 days."
            figureNumber="6"
            caption="Control after 8 days."
          />
        </Col>

        <Col Col md={3}>
          <ReportFigure
            src={UV2}
            alt="Test after 8 days and 3 doses of UV."
            figureNumber="7"
            caption="Test after 8 days and 3 doses of UV."
          />
        </Col>
      </Row>

      <p style={styles.paragraph}>
        6 days after the third dose both plates were completely covered in mycelia however, the UV exposed plate was a deep amber color and had clumps of spores 
        developed, while the control was not nearly as develop, only being a light off white with no spores.
      </p>

      <p style={styles.paragraph}>
        Seemingly UV exposure helped the growth of Trichoderma, contradicting my original hypothesis. However, I must note, first, for the second dose of UV 
        the plate was placed under the UV light upside down, putting the agar between the UV and Trichoderma, though from some light research agar should not 
        block UV light and it still had 2 other hour-long doses which should have been plenty. Second, the control Trichoderma over all developed very slowly, 
        and even after several weeks it had not developed any spores. Overall, I don’t think anything can conclusively be made from this experiment alone, and 
        another under similar circumstances should be done.
      </p>

    </Container>
  );
};

const styles = {
  paragraph: { fontSize: '24px' }
};

export default Exp2Page;