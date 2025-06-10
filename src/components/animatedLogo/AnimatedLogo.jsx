import React from 'react';

const AnimatedLogo = () => {
  return (
    <div style={styles.container}>
      <div style={styles.logo}>
        <div style={styles.monitor}>
          <div style={styles.code}>&lt;/&gt;</div>
        </div>
        <div style={styles.name}>Somayeh Poolayi</div>
        <div style={styles.subtitle}>Computer Engineer & WEB Developer</div>
      </div>
    </div>
  );
};

// CSS-in-JS styles + keyframes
const typing = {
  animation: 'typing 2.2s steps(4, end) forwards, blink 0.7s step-end infinite',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  borderRight: '4px solid #c49360',
  width: 0,
};

const styles = {
  container: {
    backgroundColor: 'inhirit',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    display: 'flex',
    justifyContent: 'right',
       },
  logo: {
    textAlign: 'center',
    color: '#3e342c',
  },
  monitor: {
    width: 100,
    height: 80,
    border: '3px solid #c49360',
    borderRadius: 8,
    position: 'relative',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '5px 5px 12px rgba(128, 109, 48, 0.97)',
  },
  code: {
    color: '#c49360',
    fontWeight: 500,
    fontSize: 28,
    ...typing,
  },
  name: {
    fontSize: 16,
    fontWeight: 600,
    marginTop: 10,
    letterSpacing: 0.5,
    color: 'rgb(77, 37, 69)',
    
  },
  subtitle: {
    fontSize: 13,
    color: 'rgb(63, 61, 84)',
    marginTop: 6,
    letterSpacing: 0.5,
  },
};

// Inject keyframes
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes typing {
    from { width: 0; }
    to { width: 60px; }
  }
`, styleSheet.cssRules.length);
styleSheet.insertRule(`
  @keyframes blink {
    50% { border-color: transparent; }
  }
`, styleSheet.cssRules.length);

export default AnimatedLogo;