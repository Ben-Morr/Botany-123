import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReportFigure from '../components/ReportFigure'

import micro from '../assets/Home/Trichoderma_harzianum_Micro.jpg'
import macro from '../assets/Home/Trichoderma_harzianum_Macro.jpg'

const HomePage = () => {

  return (
    <Container className="mt-5 pb-5">

      <h1 className="display-3 fw-bold" style={{ color: '#1b4d2e' }}>Trichoderma harzianum</h1>

      <h2 className="pb-2 mb-4" style={{ color: '#1b4d2e', borderBottom: '2px solid #1b4d2e' }}>Description</h2>

      <Row className="justify-content-center">
        <Col md={5}>
          <ReportFigure
            src={macro}
            alt="Macro view of T. harzianum"
            figureNumber="1"
            caption="Macro view of T. harzianum"
          />
        </Col>

        <Col md={5}>
          <ReportFigure
            src={micro}
            alt="Micro view of T. harzianum"
            figureNumber="2"
            caption="Micro view of T. harzianum"
          />
        </Col>
      </Row>

      <p style={styles.paragraph}>
        Trichoderma harzianum is a very common fungus found in many soils and diverse habitats. 
        It tends to colonize plant root systems and has strong anti-fungal properties. 
        Some strains even show mycoparasitic and antibiosis properties, meaning they can attack other fungi.
      </p>

      <p style={styles.paragraph}>
        On an agar plate, it starts off as simple white mycelia. It grows rapidly, quickly taking over 
        the entire plate. Round clumps of green spores develop on the surface, which eventually turn dark green. 
        As they mature, you can sometimes see the colony secreting droplets of amber liquid. The underside of the agar 
        plate changes from off-white to a dark amber as the fungus develops, and then fades back to a lighter 
        off-white color as the culture begins to die off.
      </p>

      <p className='mb-5' style={styles.paragraph}>
        Under the microscope, the features are distinct. The hyphae are clear and have cross-walls separating 
        the cells. The structures that hold the spores look like branched trees. At the tips of these branches 
        are flask-shaped cells called phialides, which hold the spores in clusters. The spores themselves are 
        round to oval-shaped and look smooth.
      </p>

      <h2 className="pb-2 mb-4" style={{ color: '#1b4d2e', borderBottom: '2px solid #1b4d2e' }}>Background research</h2>

      <p style={styles.paragraph}>
        My background research uncovered Trichoderma harzianum as an incredibly versatile and useful fungi, 
        especially for agricultural use. My first article, Corenell University’s Biological Control: A Guide 
        to Natural Enemies in North America on Trichoderma was a great overview of its life cycle and some of its 
        general uses.
      </p>

      <p style={styles.paragraph}>
        A more specific agricultural use was highlighted in the 2025 study titled "Efficacy of Trichoderma harzianum 
        as a Natural Biocontrol...", Rashid showed Trichoderma as a useful biocontrol agent, through its use against 
        several fungi on tomato plants. First lab tests were used and showed Trichoderma was able to slow or completely 
        stop the growth of fungi such as Fusarium and Rhizoctonia, after which green house tests done on live tomato plants 
        treated with Trichoderma, showed that they were significantly healthier than those untreated. This is a great study 
        that shows Trichoderma’s real-world application within agriculture.
      </p>
            
      <p style={styles.paragraph}>
        While it has verifiably anti-fungal properties, it is beneficial for plants beyond that, the article 
        "Trichoderma as Biostimulant" by López-Bucio, Ramón Pelagio-Flores, and Alfredo Herrera-Estrella, covers how it 
        also shows probiotic effects for plants. Trichoderma is able to release compounds that change how plants’ roots 
        grow, causing them to branch out more and reach nutrients deeper in the soil. This extra growth is stimulated 
        through the release of auxins, peptides, volatiles, and metabolites in the rhizosphere. This is also a great 
        article on Trichoderma’s real-world applications. 
      </p>

      <p className='mb-5' style={styles.paragraph}>
        Finally, the 2023 study "Trichoderma harzianum as Fungicide and Symbiont: Is it Safe for Human and Animals?", 
        Shahbazfar et al.  looks at the health effects of Trichoderma on both humans and animals. They exposed lab 
        animals to the fungus and found that while it is generally safe for agricultural use, high doses could cause 
        inflammation in organs like the liver and lungs. So, while it is safer than most other pesticides, caution should 
        still be had when applying it for agricultural use. This study shows that while Trichoderma is a very useful 
        fungus, it still shouldn’t be misused, and procedures should be put in place when it is used.
      </p>

      <h2 className="pb-2 mb-4" style={{ color: '#1b4d2e', borderBottom: '2px solid #1b4d2e' }}>References</h2>
      <p className="mb-4 text-break">
        "Trichoderma." <em>Biological Control: A Guide to Natural Enemies in North America</em>, Cornell University College of 
        Agriculture and Life Sciences, <a href="https://biocontrol.entomology.cornell.edu/pathogens/trichoderma.php" target="_blank" rel="noopener noreferrer">https://biocontrol.entomology.cornell.edu/pathogens/trichoderma.php</a>. 
        Accessed 20 Nov. 2025.
      </p>

      <p className="mb-4 text-break">
        Rashid, T. S. "Efficacy of Trichoderma harzianum as a Natural Biocontrol and Growth-Promoting Agent Against 
        Selected Tomato Fungal Pathogens." <em>Journal of Phytopathology</em>, vol. 173, no. 4, 2025, p. e70130. 
        <a href="https://doi.org/10.1111/jph.70130" target="_blank" rel="noopener noreferrer">https://doi.org/10.1111/jph.70130</a>.
      </p>

      <p className="mb-4 text-break">
        López-Bucio, José, Ramón Pelagio-Flores, and Alfredo Herrera-Estrella. "Trichoderma as Biostimulant: 
        Exploiting the Multilevel Properties of a Plant Beneficial Fungus." <em>Scientia Horticulturae</em>, vol. 196, 2015, 
        pp. 109-123. <a href="https://doi.org/10.1016/j.scienta.2015.08.043" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.scienta.2015.08.043</a>.
      </p>

      <p className="mb-4 text-break">
        Shahbazfar, Amir Ali, et al. "Trichoderma harzianum as Fungicide and Symbiont: Is it Safe for Human and Animals?" 
        <em>Veterinary Research Forum</em>, vol. 14, no. 11, 2023, pp. 604–614. PubMed Central, 
        <a href="https://doi.org/10.30466/vrf.2023.561862.3618" target="_blank" rel="noopener noreferrer">https://doi.org/10.30466/vrf.2023.561862.3618</a>.
      </p>

      <div style={styles.studentInfoCard}>
        <p className="mb-0"><strong>Ben Morrison</strong></p>
        <p className="mb-0">Botany 123</p>
        <p className="mb-0">Fall 2025</p>
      </div>

    </Container>
  );
};

const styles = {
  paragraph: {
    fontSize: '24px'
  },
  studentInfoCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)', 
    padding: '20px',
    borderRadius: '10px',
    display: 'inline-block',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
  },
};

export default HomePage;