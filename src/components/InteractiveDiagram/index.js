import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// A simple interactive diagram component for educational purposes
export default function InteractiveDiagram({ title, children, description }) {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={clsx('margin-vert--md', styles.interactiveDiagram)}>
      <div className={styles.diagramHeader} onClick={toggleActive}>
        <h4>{title}</h4>
        <div className={styles.toggleIcon}>{isActive ? '▼' : '►'}</div>
      </div>
      <div className={clsx(styles.diagramDescription, { [styles.active]: isActive })}>
        <p>{description}</p>
      </div>
      <div className={clsx(styles.diagramContent, { [styles.active]: isActive })}>
        {children}
      </div>
    </div>
  );
}