import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function ExerciseProblem({
  title,
  problem,
  solution,
  difficulty = 'medium',
  children
}) {
  const [showSolution, setShowSolution] = useState(false);

  const toggleSolution = () => {
    setShowSolution(!showSolution);
  };

  return (
    <div className={clsx('margin-vert--md', styles.exerciseProblem, styles[difficulty])}>
      <div className={styles.problemHeader}>
        <h4>{title}</h4>
        <span className={clsx(styles.difficulty, styles[`difficulty-${difficulty}`])}>
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </span>
      </div>
      <div className={styles.problemContent}>
        <p>{problem}</p>
        {children}
      </div>
      <div className={styles.solutionSection}>
        <button
          className={clsx('button button--sm', styles.solutionButton)}
          onClick={toggleSolution}
        >
          {showSolution ? 'Hide Solution' : 'Show Solution'}
        </button>
        {showSolution && (
          <div className={styles.solutionContent}>
            <h5>Solution:</h5>
            <div>{solution}</div>
          </div>
        )}
      </div>
    </div>
  );
}