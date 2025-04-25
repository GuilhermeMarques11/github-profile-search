import React from 'react';
import styles from './Title.module.css';
import Logo from '../../public/logo.png';
import GitHub from '../assets/github.png';

const Title = () => {
  return (
    <div className="row">
      <img className={styles.githubLogo} src={Logo} alt="Logo" />
      <h1 className={styles.title}>Perfil</h1>
      <img className={styles.githubName} src={GitHub} alt="GitHub" />
    </div>
  );
};

export default Title;
