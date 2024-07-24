import styles from './LogIn.module.css';

import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Footer } from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Header';
import { Button } from '../../Components/Button/Button';
import { request } from '../../helper/request';

export function LogIn() {
  const refs = useRef({
    email: null,
    pwd: null,
  });
  const navigate = useNavigate();

  const fields = ['email', 'pwd'];

  async function getInp() {
    const data = {};
    for (let inp in refs.current) {
      data[inp] = refs.current[inp].value;
    }
    const req = await request('api/auth', 'post', data, navigate, '/');
    console.log(req);
  }

  return (
    <>
      <Header />
      <div className={`bgColored main`}>
        <div className={`wrapper ${styles.wrapper}`}>
          <div className={styles.content}>
            <h1 className={`${'ContentHeader'} ${'mainHeader'}`}>Login</h1>
            {fields.map((field) => (
              <input
                key={field}
                ref={(el) => (refs.current[field] = el)}
                type={field === 'pwd' ? 'password' : 'text'}
                placeholder={field}
              />
            ))}
            <Button onClick={getInp} className="primaryColored" value="Login" />
          </div>
          <div className={styles.image}></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
