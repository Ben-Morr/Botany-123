import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReportFigure from '../components/ReportFigure'

import cont1 from '../assets/Exp1/ex1_oct14_cont.jpg'
import cont2 from '../assets/Exp1/ex1_oct21_cont.jpg'
import anar1 from '../assets/Exp1/ex1_oct14_anar.jpg'
import anar2 from '../assets/Exp1/ex1_oct21_anar.jpg'

const Exp1Page = () => {
  
  return (
    <Container className="mt-5">
      <h1 style={{ color: '#1b4d2e' }}>Experiment 1: Anaerobic Environment</h1>

      <h2 className="pb-2 mb-4" style={{ color: '#1b4d2e', borderBottom: '2px solid #1b4d2e' }}>Intro/Hypothesis</h2>

      <p style={styles.paragraph}>
        In nature Trichoderma is found predominantly in soil, and to be able to adequately adapt its use into agriculture, knowing its ability to survive in 
        poor soils, such as compacted or waterlogged ones, is necessary. Since most (but not all) fungi are obligate aerobes, meaning they require oxygen for 
        their metabolism, it is likely that Trichoderma also requires oxygen.
      </p>

      <p style={styles.paragraph}>
        My hypothesis is that Trichoderma harzianum is an obligate aerobe and requires oxygen to thrive. In a low oxygen environment, the growth of 
        Trichoderma harzianum will be dramatically stunted.
      </p>

      <h2 className="pb-2 mb-4" style={{ color: '#1b4d2e', borderBottom: '2px solid #1b4d2e' }}>Methods/Materials</h2>

      <p style={styles.paragraph}>
        Two PDA plates were prepared with samples of Trichoderma harzianum, both samples were taken from the same Trichoderma colony. One of the plates 
        was placed into an anerobic environment, which was induced by placing a pouch into a jar with plate, the pouch used up all the oxygen inside said jar. 
        The second plate (the control) was incubated on an open lab shelf in normal atmospheric conditions. A control is necessary as a baseline for normal 
        Trichoderma growth. Both plates were kept in their respective conditions for one week.
      </p>

      <h2 className="pb-2 mb-4" style={{ color: '#1b4d2e', borderBottom: '2px solid #1b4d2e' }}>Results/conclusion</h2>

      <Row className="justify-content-center">
        <Col md={3}>
          <ReportFigure
            src={cont1}
            alt="Control after 1 week"
            figureNumber="1"
            caption="Control after 1 week"
          />
        </Col>

        <Col md={3}>
          <ReportFigure
            src={anar1}
            alt="After one week in anerobic environment."
            figureNumber="2"
            caption="After one week in anerobic environment"
          />
        </Col>

        <Col md={3}>
          <ReportFigure
            src={cont2}
            alt="Control after 2 weeks."
            figureNumber="3"
            caption="Control after 2 weeks."
          />
        </Col>

        <Col md={3}>
          <ReportFigure
            src={anar2}
            alt="One week outside of anerobic environment"
            figureNumber="4"
            caption="One week outside of anerobic environment."
          />
        </Col>
      </Row>

      <p style={styles.paragraph}>
        After one week both plates were entirely covered in Trichoderma mycelia, however the control was much farther along in its development. 
        For the anerobic Trichoderma it had much thinner mycelia and the agar was only a light off white, for comparison the control had thicker mycelia, 
        and the agar was a much darker amber color. Neither plates had any spores being produced.
      </p>

      <p style={styles.paragraph}>
        My hypothesis was partially supported, while the growth of Trichoderma was stunted, it did end up covering the entire plate, so it may not strictly 
        be an obligate aerobe. For a future experiment, confirming whether the Trichoderma was able to survive in the anerobic environment, or if it simply was 
        able to grow off any residual oxygen would be useful.
      </p>

    </Container>
  );
};

const styles = {
  paragraph: { fontSize: '24px' }
};

export default Exp1Page;