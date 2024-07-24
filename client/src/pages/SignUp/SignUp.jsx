import styles from './SignUp.module.css';

import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from './../../Components/Header/Header';
import { Footer } from './../../Components/Footer/Footer';
import { Button } from './../../Components/Button/Button';
import { request } from './../../helper/request';

export function SignUp() {
  const refs = useRef({
    name: null,
    surname: null,
    email: null,
    pwd: null,
  });
  const navigate = useNavigate();

  const fields = ['name', 'surname', 'email', 'pwd'];

  async function getInp() {
    const data = {};
    for (let inp in refs.current) {
      data[inp] = refs.current[inp].value;
    }

    await request('api/reg', 'post', data, navigate, '/login');
  }

  return (
    <>
      <Header />
      <div className={`bgColored main`}>
        <div className={`wrapper ${styles.wrapper}`}>
          <div className={styles.content}>
            <h1 className={`${'ContentHeader'} ${'mainHeader'}`}>Sign Up</h1>
            {fields.map((field) => (
              <input
                key={field}
                ref={(el) => (refs.current[field] = el)}
                type={field === 'pwd' ? 'password' : 'text'}
                placeholder={field}
              />
            ))}
            <Button onClick={getInp} value="Sign Up" />
          </div>
          <div className={styles.image}></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
