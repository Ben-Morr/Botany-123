import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReportFigure from '../components/ReportFigure'

import contFG_1 from '../assets/Exp3/ex3_oct21_FGcont.jpg'
import contTH_1 from '../assets/Exp3/ex3_oct21_THcont.jpg'
import contPC_1 from '../assets/Exp3/ex3_oct21_PCcont.jpg'
import THvsFG_1 from '../assets/Exp3/ex3_oct21_THvsFG.jpg'
import THvsPC_NA_1 from '../assets/Exp3/ex3_oct21_THvsPC_NA.jpg'
import THvsPC_PDA_1 from '../assets/Exp3/ex3_oct21_THvsPC_PDA.jpg'

import contAll_2 from '../assets/Exp3/ex3_oct28_cont_all.jpg'
import THvsFG_back_1 from '../assets/Exp3/ex3_oct28_THvsFG_back.jpg'
import THvsFG_front_1 from '../assets/Exp3/ex3_oct28_THvsFG_front.jpg'
import THvsPC_back_1 from '../assets/Exp3/ex3_oct28_THvsPC_back.jpg'
import THvsPC_front_1 from '../assets/Exp3/ex3_oct28_THvsPC_front.jpg'

import contAll_3 from '../assets/Exp3/ex3_nov4_cont_all.jpg'
import THvsFG_back_2 from '../assets/Exp3/ex3_nov4_THvsFG_back.jpg'
import THvsFG_front_2 from '../assets/Exp3/ex3_nov4_THvsFG_front.jpg'
import THvsPC_back_2 from '../assets/Exp3/ex3_nov4_THvsPC_back.jpg'
import THvsPC_front_2 from '../assets/Exp3/ex3_nov4_THvsPC_front.jpg'

const Exp3Page = () => {
  
  return (
    <Container className="mt-5">
      <h1 style={{ color: '#1b4d2e' }}>Experiment 3: Competition</h1>

      <h2 className="pb-2 mb-4" style={{ color: '#1b4d2e', borderBottom: '2px solid #1b4d2e' }}>Intro/Hypothesis</h2>

      <p style={styles.paragraph}>
        One of Trichoderma harzianum’s main uses is as a biocontrol agent to fight against plant diseases, to get a grasp on its ability to fight against 
        both fungi and bacteria, it is important to put it up against one of each. For this experiment I used Trichoderma harzianum (TH, fungi), 
        Fusarium graminearum (FG, fungi) and Pectobacterium caratovorum (PC, bacterium).
      </p>

      <p style={styles.paragraph}>
        My hypothesis is that Trichoderma’s anti-fungal nature will allow it to out compete and take over any fungus it is around, 
        while bacteria will be able to survive and take up nutrients instead of Trichoderma, stunting its growth slightly.
      </p>

      <h2 className="pb-2 mb-4" style={{ color: '#1b4d2e', borderBottom: '2px solid #1b4d2e' }}>Methods/Materials</h2>

      <Row className="justify-content-center">
        <Col Col md={4}>
          <ReportFigure
            src={contTH_1}
            alt="TH control, both PDA and NA day 1."
            figureNumber="1"
            caption="TH control, both PDA and NA day 1."
          />
        </Col>

        <Col Col md={4}>
          <ReportFigure
            src={contPC_1}
            alt="PC control, both PDA and NA day 1."
            figureNumber="2"
            caption="PC control, both PDA and NA day 1."
          />
        </Col>

        <Col Col md={4}>
          <ReportFigure
            src={contFG_1}
            alt="FG control on PDA day 1."
            figureNumber="3"
            caption="FG control on PDA day 1."
          />
        </Col>
      </Row>

      <p style={styles.paragraph}>
        Five PDA plates and three NA plates were used, of the eight, five were used for controls and three for the dual microbes. 
        Both NA and PDA were used for the TH and PC as to not benefit one over the other, the controls are used to gauge normal growth for each microbe. 
      </p>

      <Row className="justify-content-center">
        <Col Col md={4}>
          <ReportFigure
            src={THvsPC_PDA_1}
            alt="TH and PC on PDA"
            figureNumber="4"
            caption="TH and PC on PDA"
          />
        </Col>

        <Col Col md={4}>
          <ReportFigure
            src={THvsPC_NA_1}
            alt="TH and PC on NA"
            figureNumber="5"
            caption="TH and PC on NA"
          />
        </Col>

        <Col Col md={4}>
          <ReportFigure
            src={THvsFG_1}
            alt="TH and FG on PDA"
            figureNumber="6"
            caption="TH and FG on PDA"
          />
        </Col>
      </Row>

      <p style={styles.paragraph}>
        For the dual-microbe plates, one PDA plate had TH placed on one side and FG on the other. Additionally, one PDA plate and one NA plate were 
        inoculated with TH in the center, with a circle of PC swabbed around the fungus. For the controls, one PDA plate was used for FG, one PDA and 
        one NA plate were used for TH, and one PDA and one NA plate were used for PC. All plates were kept together at room temperature for one week.
      </p>

      <h2 className="pb-2 mb-4" style={{ color: '#1b4d2e', borderBottom: '2px solid #1b4d2e' }}>Results/conclusion</h2>

      <Row className="justify-content-center">
        <Col Col md={3}>
          <ReportFigure
            src={THvsPC_front_1}
            alt="TH and PC after 1 week. (Underside)"
            figureNumber="6"
            caption="TH and PC after 1 week. (Underside)"
          />
        </Col>

        <Col Col md={3}>
          <ReportFigure
            src={THvsPC_back_1}
            alt="TH and PC after 1 week. (Top)"
            figureNumber="7"
            caption="TH and PC after 1 week. (Top)" 
          />
        </Col>

        <Col Col md={3}>
          <ReportFigure
            src={THvsPC_front_2}
            alt="TH and PC after 2 weeks. (Underside)"
            figureNumber="8"
            caption="TH and PC after 2 weeks. (Underside)"
          />
        </Col>

        <Col Col md={3}>
          <ReportFigure
            src={THvsPC_back_2}
            alt="TH and PC after 2 weeks. (Top)"
            figureNumber="9"
            caption="TH and PC after 2 weeks. (Top)"
          />
        </Col>
      </Row>

      <p style={styles.paragraph}>
        For the TH and PC plates, on the PDA plate the TH was able to “jump” over the ring of PC and cover the entire plate in mycelium, 
        it shows normal growth and entirely stopped the PC from spreading away from the ring of its original spread, there is a light red color 
        on the edge of the PC were it touches the TH. For the NA plate, it was overall the same but both TH and PC seemed less developed.
      </p>

      <Row className="justify-content-center">
        <Col Col md={3}>
          <ReportFigure
            src={THvsFG_front_1}
            alt="TH and FG after 1 week. (Underside)"
            figureNumber="10"
            caption="TH and FG after 1 week. (Underside)"
          />
        </Col>

        <Col Col md={3}>
          <ReportFigure
            src={THvsFG_back_1}
            alt="TH and FG after 1 week. (Top)"
            figureNumber="11"
            caption="TH and FG after 1 week. (Top)"
          />
        </Col>

        <Col Col md={3}>
          <ReportFigure
            src={THvsFG_front_2}
            alt="TH and FG after 2 weeks. (Underside)"
            figureNumber="12"
            caption="TH and FG after 2 weeks. (Underside)"
          />
        </Col>

        <Col Col md={3}>
          <ReportFigure
            src={THvsFG_back_2}
            alt="TH and FG after 2 weeks. (Top)"
            figureNumber="13"
            caption="TH and FG after 2 weeks. (Top)"
          />
        </Col>
      </Row>

      <p style={styles.paragraph}>
        For the TH and FG plate, TH was able to cover most of the plate, with FG only getting to roughly 2.5cm by 3.5cm. The TH was starting to 
        gain its amber color, but it is mostly off-white, the FG has a browner color as opposed to the control, possibly a sign of it being killed off.
      </p>

      <Row className="justify-content-center">
        <Col Col md={4}>
          <ReportFigure
            src={contAll_2}
            alt="All controls after 1 week."
            figureNumber="14"
            caption="All controls after 1 week."
          />
        </Col>

        <Col Col md={4}>
          <ReportFigure
            src={contAll_3}
            alt="All controls after 2 weeks."
            figureNumber="15"
            caption="All controls after 2 weeks."
          />
        </Col>
      </Row>

      <p style={styles.paragraph}>
        For the controls, FG is 6.5cm by 7.5cm and has a red to dark pink coloration. For TH on both PDA and NA it is covering the entire plate, though 
        it is more developed on the PDA plate, with thicker mycelia and a darker amber coloration. For the PC it colonies are developing similarly on both 
        the PDA and NA though they seem to be slightly larger on the NA.
      </p>

      <p style={styles.paragraph}>
        Overall half of my original hypothesis held true, Trichoderma was able to hold off and kill the fungi it was near, however in contradiction to 
        my hypothesis it was also able to “snuff out” the bacteria as well, whether it did so by directly affecting it or it simply was outcompeted is 
        inconclusive. A good next step for experiments would be to do similar Trichoderma vs. fungi and bacteria, but instead of in agar plates, do it 
        on live plants and gauge how well they develop.
      </p>

    </Container>
  );
};

const styles = {
  paragraph: { fontSize: '24px' }
};

export default Exp3Page;