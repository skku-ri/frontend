import { redirect } from 'react-router-dom';

import { useAppSelector } from '../../app/hooks';
import { selectIsLogined } from '../../models/user/userSlice';
import { TopBar } from '../top-bar/TopBar';

import styles from './Page.module.css';

export function Page(props: { children?: React.ReactNode }) {
  const userIsLogined = useAppSelector(selectIsLogined);
  if (!userIsLogined) {
    redirect('/login');
  }

  return (
    <>
      <TopBar />
      <div className={styles.content}>{props.children}</div>
    </>
  );
}
