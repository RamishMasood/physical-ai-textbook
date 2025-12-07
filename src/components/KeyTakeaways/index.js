import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const TakeawayItem = ({ children }) => {
  return <li className={styles.takeawayItem}>{children}</li>;
};

export default function KeyTakeaways({ children }) {
  return (
    <div className={clsx('margin-vert--md', styles.keyTakeaways)}>
      <h4>Key Takeaways</h4>
      <ul className={styles.takeawayList}>{children}</ul>
    </div>
  );
}

export { TakeawayItem };