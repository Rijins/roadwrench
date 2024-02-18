import React from 'react';

const Home = () => {
  const containerStyle = {
    textAlign: 'center',
    backgroundColor: 'black', // Set your desired background color
    height: '100vh', // Adjust the height based on your needs
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff', // Set the text color to contrast with the background
    fontFamily: 'Roboto, sans-serif', // Use the 'Roboto' font
  };

  const titleStyle = {
    fontSize: '3rem', // Adjust the font size based on your needs
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Road Wrench</h1>
    </div>
  );
};

export default Home;
