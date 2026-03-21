import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Main = () => {
  const [text, setText] = useState('');
  const [photoIndex, setPhotoIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const phrases = ["Eventopia is your event planning assistant.", "Input event details and get personalized recommendations."];

    let currentPhraseIndex = 0;
    let currentLetterIndex = 0;

    let typingInterval = setInterval(() => {
      if (currentLetterIndex <= phrases[currentPhraseIndex].length) {
        setText(phrases[currentPhraseIndex].slice(0, currentLetterIndex));
        currentLetterIndex += 1;
      } else {
        clearInterval(typingInterval);

        setTimeout(() => {
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
          currentLetterIndex = 0;

          typingInterval = setInterval(() => {
            if (currentLetterIndex <= phrases[currentPhraseIndex].length) {
              setText(phrases[currentPhraseIndex].slice(0, currentLetterIndex));
              currentLetterIndex += 1;
            } else {
              clearInterval(typingInterval);
            }
          }, 100);
        }, 1000);
      }
    }, 100);

    // Automatically change photos every 5 seconds
    const photoChangeInterval = setInterval(() => {
      setPhotoIndex((prevIndex) => (prevIndex + 1) % 1); // Change 2 to the number of photos you have
    }, 12000);

    return () => {
      clearInterval(typingInterval);
      clearInterval(photoChangeInterval);
    };
  }, []);

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      textAlign: 'center',
      overflow: 'hidden',
    }}>
      {/* Photo and Video Background */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}>
        {/* Video Background - only plays when showVideo is true */}
        {showVideo && (
          <video autoPlay muted loop style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: '-1',
          }}>
            <source src="./main10.mp4" type="video/mp4" />
          </video>
        )}

        {/* First Photo Background */}
        {photoIndex === 0 && !showVideo && (
          <div style={{
            background: `url("./main5.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
          }}></div>
        )}
      </div>

      <Container>
        <div style={{ position: 'relative', zIndex: '1', textAlign: 'left' }}>
          <h1><b>Eventopia</b></h1>
          <h4 style={{ marginTop: '20px', color: '#D8D8D8' }}>{text}</h4>
          <Link to='/login' className="btn btn-primary" style={{ backgroundColor: 'black', marginRight: '20px', marginTop: '20px' }}>Login →</Link>
        </div>
      </Container>
      <Container>
      <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
            <button onClick={handlePlayVideo} className="btn btn-primary" style={{ border: 'transparent', backgroundColor: 'transparent', marginTop: '20px' }}>🎥 Play Video</button>
          </div>
      </Container>
    </div>
  );
};






