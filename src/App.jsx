import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';

const HomePage = () => (
  <Container >

    <h1 className="display-3 fw-bold" style={{ color: '#1b4d2e' }}>Trichoderma harzianum</h1>

    <h2 className="pb-2 mb-4" style={{ color: '#1b4d2e', borderBottom: '2px solid #1b4d2e' }}>Description</h2>
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

const Exp1Page = () => (
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
    <p style={styles.paragraph}>
      After one week both plates were entirely covered in Trichoderma mycelia, however the control was much farther along in its development. 
      For the anerobic Trichoderma it had much thinner mycelia and the agar was only a light off white, for comparison the control had thicker mycelia, 
      and the agar was a much darker amber color. Neither plates had any spores being produced.
    </p>

    <p style={styles.paragraph}>
      My hypothesis was partially supported, while the growth of Trichoderma was stunted, it did end up covering the entire plate, so it may not strictly 
      be an obligate aerobe. For a future experiment, confirming whether the Trichoderma was able to survive in the anerobic environment, or if it simply was 
      able to grow off any residual oxygen.
    </p>

  </Container>
);

const Exp2Page = () => (
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
    <p style={styles.paragraph}>
      After the first dose both plates were in line with each other, both being 2.5cm by 2.5cm of growth. After the second dose the control was smaller than 
      the UV exposed plate, with the UV plate being 5cm by 5.5cm and the control being 5.1cm by 4.3cm. 6 days after the third dose both plates were completely 
      covered in mycelia however, the UV exposed plate was a deep amber color and had clumps of spores developed, while the control was not nearly as develop, 
      only being a light off white with no spores. 
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

const Exp3Page = () => (
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
    <p style={styles.paragraph}>
      Five PDA plates and three NA plates were used, of the eight, five were used for controls and three for the dual microbes. 
      Both NA and PDA were used for the TH and PC as to not benefit one over the other, the controls are used to gauge normal growth for each microbe. 
    </p>

    <p style={styles.paragraph}>
      For the dual-microbe plates, one PDA plate had TH placed on one side and FG on the other. Additionally, one PDA plate and one NA plate were 
      inoculated with TH in the center, with a circle of PC swabbed around the fungus. For the controls, one PDA plate was used for FG, one PDA and 
      one NA plate were used for TH, and one PDA and one NA plate were used for PC. All plates were kept together at room temperature for one week.
    </p>

    <h2 className="pb-2 mb-4" style={{ color: '#1b4d2e', borderBottom: '2px solid #1b4d2e' }}>Results/conclusion</h2>
    <p style={styles.paragraph}>
      For the TH and PC plates, on the PDA plate the TH was able to “jump” over the ring of PC and cover the entire plate in mycelium, 
      it shows normal growth and entirely stopped the PC from spreading away from the ring of its original spread, there is a light red color 
      on the edge of the PC were it touches the TH. For the NA plate, it was overall the same but both TH and PC seemed less developed.
    </p>

    <p style={styles.paragraph}>
      For the TH and FG plate, TH was able to cover most of the plate, with FG only getting to roughly 2.5cm by 3.5cm. The TH was starting to 
      gain its amber color, but it is mostly off-white, the FG has a browner color as opposed to the control, possibly a sign of it being killed off.
    </p>

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

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* --- NAVIGATION BAR --- */}
      <Navbar variant="dark" expand="lg" fixed="top" style={styles.navbar}>
        <Container>
          {/* "as={Link} to='/'" makes it a router link, not a reload link */}
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            Trichoderma harzianum
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/exp1">Exp 1: Anaerobic</Nav.Link>
              <Nav.Link as={Link} to="/exp2">Exp 2: UV</Nav.Link>
              <Nav.Link as={Link} to="/exp3">Exp 3: Competition</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>

        {/* --- SPORE DECORATION (Left Side) --- */}
        <div style={{ position: 'absolute', bottom: '-25px', left: '-10px', display: 'flex', alignItems: 'flex-end', zIndex: -1 }}>
          
          {/* Tapering Float 1 (Tiny, highest) */}
          <div style={{ position: 'absolute', top: '-25px', left: '25px', width: '10px', height: '10px', backgroundColor: '#1b4d2e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <div style={{ width: '6px', height: '6px', backgroundColor: 'white', borderRadius: '50%' }}></div>
          </div>
           {/* Tapering Float 2 (Small, medium height) */}
          <div style={{ position: 'absolute', top: '-10px', left: '45px', width: '15px', height: '15px', backgroundColor: '#1b4d2e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <div style={{ width: '9px', height: '9px', backgroundColor: 'white', borderRadius: '50%' }}></div>
          </div>

          {/* Big Bubble Base */}
          <div style={{ width: '50px', height: '50px', backgroundColor: '#1b4d2e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Inner White */}
            <div style={{ width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%' }}></div>
          </div>
          
          {/* Small Bubble overlapping */}
          <div style={{ width: '30px', height: '30px', backgroundColor: '#1b4d2e', borderRadius: '50%', marginLeft: '-15px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <div style={{ width: '22px', height: '22px', backgroundColor: 'white', borderRadius: '50%' }}></div>
          </div>
          
           {/* Medium Bubble */}
          <div style={{ width: '40px', height: '40px', backgroundColor: '#1b4d2e', borderRadius: '50%', marginLeft: '-5px', marginBottom: '-5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <div style={{ width: '30px', height: '30px', backgroundColor: 'white', borderRadius: '50%' }}></div>
          </div>
        </div>


        {/* --- SPORE DECORATION (Right Side) --- */}
        <div style={{ position: 'absolute', bottom: '-25px', right: '-10px', display: 'flex', alignItems: 'flex-end', zIndex: -1 }}>
           
           {/* Tapering Float 1 */}
          <div style={{ position: 'absolute', top: '-20px', right: '35px', width: '12px', height: '12px', backgroundColor: '#1b4d2e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <div style={{ width: '7px', height: '7px', backgroundColor: 'white', borderRadius: '50%' }}></div>
          </div>

           {/* Medium Bubble */}
          <div style={{ width: '40px', height: '40px', backgroundColor: '#1b4d2e', borderRadius: '50%', marginRight: '-5px', marginBottom: '-5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <div style={{ width: '30px', height: '30px', backgroundColor: 'white', borderRadius: '50%' }}></div>
          </div>
          
          {/* Small Bubble */}
          <div style={{ width: '30px', height: '30px', backgroundColor: '#1b4d2e', borderRadius: '50%', marginRight: '-15px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <div style={{ width: '22px', height: '22px', backgroundColor: 'white', borderRadius: '50%' }}></div>
          </div>
          
          {/* Big Bubble Base */}
          <div style={{ width: '50px', height: '50px', backgroundColor: '#1b4d2e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <div style={{ width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%' }}></div>
          </div>
        </div>
      </Navbar>

      {/* --- CONTENT CONTAINER --- */}
      <div style={styles.contentSpacer}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exp1" element={<Exp1Page />} />
          <Route path="/exp2" element={<Exp2Page />} />
          <Route path="/exp3" element={<Exp3Page />} />
        </Routes>
      </div>

    </div>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#1b4d2e',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  contentSpacer: {
    paddingTop: '80px',
    paddingBottom: '50px'
  },
  paragraph: {
    fontSize: '24px'
  },
  studentInfoCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Semi-transparent white box
    padding: '20px',
    borderRadius: '10px',
    display: 'inline-block', // Only wraps the text
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
  },
};

export default App;
