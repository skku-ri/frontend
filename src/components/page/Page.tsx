import { TopBar } from '../top-bar/TopBar';

import styles from './Page.module.css';

export function Page(props: { children?: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <div className={styles.content}>{props.children}</div>
    </>
  );
}
