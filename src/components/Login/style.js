export const style = {
    root: {
      backgroundColor: '#101418',
      height: '70%',
      width: '400px',
      maxWidth: '40%',
      maxHeight: '800px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
      borderRadius: '10px',
      padding: '20px',
    },
    logo: {
      marginBottom: '20px',
      maxWidth: '80%',
    },
    loginText: {
      color: '#fff',
      marginBottom: '20px',
      fontSize: '24px',
      fontWeight: 'bold'
    },
    input: {
      width: '100%',
      marginBottom: '2vw',
      '& .MuiOutlinedInput-root': {
        borderRadius: '5px',
        backgroundColor: '#f0f2f5',
        boxShadow: 'inset 0px 1px 3px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease',
        '&.Mui-focused': {
          boxShadow: 'inset 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 0px 5px rgba(0, 0, 0, 0.2)',
        }
      },
      '& .MuiInputLabel-root': {
        fontSize: '16px',
        transition: 'transform 0.3s ease',
      },
      '& .MuiInputLabel-shrink': {
        transform: 'translate(14px, -6px) scale(0.8)',
      },
    },
    submitButton: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '16px',
      backgroundColor: '#007BFF',
      color: '#fff',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)'
    },
    createAccountContainer: {
      marginTop: '20px',
      display: 'flex',
      alignItems: 'center',
    },
    createAccountText: {
      color: '#fff',
      marginRight: '10px',
      fontSize: '16px',
    },
    createAccountLink: {
      textDecoration: 'none',
      color: '#007BFF',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'color 0.3s ease',
      '&:hover': {
        color: '#0056b3',
      }
    },
    loginError:{
      color: '#FF5757',
      fontSize: '15px',
      dispaly: 'flex',
      justifyContent:'center',
      alignItems:'center',
      aligncontent:'center',
    }
  }