import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container' >
      <video src='https://michaelpaonam.github.io/koiro/videos/video-1.mp4' autoPlay loop muted />
      {/* <video src="https://player.vimeo.com/external/342571552.hd.mp4?s=6aa6f164de3812abadff3dde86d19f7a074a8a66&profile_id=175&oauth2_token_id=57447761" autoPlay loop muted /> */}
      {/* <video src="https://vod-progressive.akamaized.net/exp=1619816036~acl=%2A%2F1106059995.mp4%2A~hmac=a79b10604808ac9b11ad5ae79ab685ea66b07879f21153d57498f046d2b7e7b3/vimeo-prod-skyfire-std-us/01/3329/11/291648067/1106059995.mp4?filename=Pexels+Videos+1448735.mp4" autoplay loop muted></video> */}
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          EXPLORE
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;


// style={{
//   backgroundImage: "url('/images/img-camping.jpg')",
// backgroundPosition: 'center',
// backgroundSize: 'center/cover',
// backgroundRepeat: 'no-repeat',

// }}
