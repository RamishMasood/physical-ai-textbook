import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const ObjectiveItem = ({ children }) => {
  return <li className={styles.objectiveItem}>{children}</li>;
};

export default function LearningObjectives({ children }) {
  return (
    <div className={clsx('margin-vert--md', styles.learningObjectives)}>
      <h4>Learning Objectives</h4>
      <ul className={styles.objectiveList}>{children}</ul>
    </div>
  );
}

export { ObjectiveItem };