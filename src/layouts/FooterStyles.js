export const footerStyles = {
    container: {
      padding: '64px 200px 44px',
      backgroundColor: '#333',
      fontSize: '14px'
    },
    containerInner: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center', // Vertically center the content
      fontSize: '14px'
    },
    column: {
      flex: '1 1 calc(33.33% - 0px)',
      padding: '0 0px',
      marginBottom: '20px',
      color: '#999999',
    },
    columnTitle: {
      fontSize: '1rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 0,
    },
    // Footer 2 (Contact Information)
    contact: {
      backgroundColor: '#222',
      padding: '25px 200px 10px',
    },
    // Footer 3 (Copyright Information)
    copyright: {
      backgroundColor: '#333',
      padding: '64px 200px 44px',
    },
    copyrightInner: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    // Additional styles for Footer 3...

  '@media (max-width: 768px)': {
    container: {
      padding: '40px 20px 20px', // Adjust padding for mobile
    },
    containerInner: {
      flexDirection: 'column', // Stack columns vertically on mobile
      alignItems: 'flex-start', // Align items to the left on mobile
    },
    column: {
      flex: '1 1 100%', // Make columns full-width on mobile
      marginBottom: '10px', // Reduce bottom margin on mobile
    },
    columnTitle: {
      marginBottom: '10px', // Reduce bottom margin on mobile
    },
    contact: {
      padding: '20px 20px 10px', // Adjust padding for mobile
    },
    copyright: {
      padding: '40px 20px 20px', // Adjust padding for mobile
    },
  },
};
  