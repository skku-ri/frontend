import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { logout, selectUser } from '../../models/user/userSlice';
import { Card } from '../card/Card';
import { Logo } from '../logo/Logo';
import { SizedBox } from '../sized-box/SizedBox';

import styles from './TopBar.module.css';

export function TopBar(props: { className?: string }) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);

  return (
    <header className={styles.topBar + ' ' + (props.className ?? '')}>
      <a
        className={styles.topBarHome}
        style={{ textDecoration: 'none' }}
        onClick={() => navigate('/')}
      >
        <img className={styles.topBarImage} src='/images/skku_s.png' />
        <Logo className={styles.topBarLogo} />
      </a>
      <div>
        {user ? (
          <div
            className={styles.topBarCard}
            onClick={() => setShowMenu(!showMenu)}
          >
            <Card padding={[0, 20]}>
              <h1>{user.name}</h1>
            </Card>
          </div>
        ) : (
          <div className={styles.topBarCard} onClick={() => navigate('/login')}>
            <Card padding={[0, 20]}>
              <h1>로그인</h1>
            </Card>
          </div>
        )}
        <Card
          className={styles.topBarMenu}
          hidden={!showMenu}
          backgroundColor='var(--main-gray-light)'
        >
          <div
            onClick={() => {
              navigate('mycard');
              setShowMenu(false);
            }}
          >
            <Card padding={[10, 20]} className={styles.topBarMenuElement}>
              <h2>My Card</h2>
            </Card>
          </div>
          <SizedBox height={10} />

          <div
            onClick={() => {
              setShowMenu(false);
              navigate('myclub');
            }}
          >
            <Card padding={[10, 20]} className={styles.topBarMenuElement}>
              <h2>My Club</h2>
            </Card>
          </div>
          <SizedBox height={10} />

          <div
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <Card padding={[10, 20]} className={styles.topBarMenuElement}>
              <h2>Calendar</h2>
            </Card>
          </div>
          <SizedBox height={10} />

          <div
            onClick={() => {
              setShowMenu(false);
              navigate('message');
            }}
          >
            <Card padding={[10, 20]} className={styles.topBarMenuElement}>
              <h2>Message</h2>
            </Card>
          </div>
          <SizedBox height={10} />

          <div
            onClick={() => {
              setShowMenu(false);
              dispatch(logout());
              navigate('login');
            }}
          >
            <Card padding={[10, 20]} className={styles.topBarMenuElement}>
              <h2>Log out</h2>
            </Card>
          </div>
        </Card>
      </div>
      <div
        className={styles.dimmer}
        style={{ display: showMenu ? 'block' : 'none' }}
        onClick={() => setShowMenu(false)}
      ></div>
    </header>
  );
}
