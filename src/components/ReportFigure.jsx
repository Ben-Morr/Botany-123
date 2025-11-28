import React from 'react';
import { Image } from 'react-bootstrap';

const ReportFigure = ({ src, alt, caption, figureNumber }) => {
  
  // --- STYLES ---
  const styles = {
    container: {
      backgroundColor: 'white',
      padding: '15px',                // White frame around the image
      borderRadius: '12px',           // Smooth corners
      boxShadow: '0 8px 20px rgba(0,0,0,0.1)', // Soft "lifted" shadow
      marginBottom: '2rem',           // Space below the figure
      border: '1px solid rgba(27, 77, 46, 0.15)', // Very subtle green border to match theme
      transition: 'transform 0.3s ease', // Smooth hover animation
      cursor: 'default'
    },
    caption: {
      marginTop: '12px',
      color: '#555',                  // Dark gray text
      fontSize: '0.95rem',
      textAlign: 'center',
      borderTop: '2px solid #f0f0f0', // Little separator line
      paddingTop: '8px'
    }
  };

  return (
    <div 
      style={styles.container} 
      className="report-figure"
      // Optional: Adds a tiny "lift" effect when you hover over the image
      //onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
      //onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      {/* The Image Itself */}
      <Image
        src={src}
        alt={alt}
        fluid       // Bootstrap class to make it responsive (max-width: 100%)
        rounded     // Adds slightly rounded corners to the image data itself
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />

      {/* The Caption */}
      <div style={styles.caption}>
        <strong style={{ color: '#1b4d2e' }}>Figure {figureNumber}:</strong> {caption}
      </div>
    </div>
  );
};

export default ReportFigure;