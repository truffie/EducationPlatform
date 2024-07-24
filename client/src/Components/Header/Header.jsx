import styles from './Header.module.css';

import { React, useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';

import Cookie from 'js-cookie';

export function Header() {
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  function getToken() {
    const aplicationToken = Cookie.get('accessToken');
    setToken(aplicationToken);
  }

  useEffect(() => getToken(), [token]);

  function deleteToken() {
    Cookie.remove('accessToken');
    setToken('');
    navigate('/');
  }

  return (
    <header className={`${'bgColored'} ${'lineAccent'} ${styles.header}`}>
      <div
        className={`${styles.headerWrapper} ${'wrapper'} ${'layout2Columns'}`}
      >
        <Link to="/">
          <p className={`${styles.logo} animationHovered`}>Hschool</p>
        </Link>
        <div>
          {token ? (
            <Button
              onClick={deleteToken}
              className={styles.login}
              value={'Log out'}
            ></Button>
          ) : (
            <>
              <Button
                className={styles.login}
                value={'Login →'}
                path={'/login'}
              />
              <Button
                className={styles.signup}
                value={'Sign Up'}
                path={'/signup'}
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
