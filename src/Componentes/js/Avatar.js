import React from 'react';
import frigidairesLogo from '../images/frigidaires_logo.png';
import '../css/avatar.css'

function Avatar() {
  return(
    <div className='logo-frigidaires'>
      <img 
      className='logo-frigidaires-logo'
      src={frigidairesLogo}
      alt='Logo de FrigidAires'
      /> 
      <p className='logo-frigidaires-texto'>FrigidAires</p>
    </div>
  )
  
}

export default Avatar;
