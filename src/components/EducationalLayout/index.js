import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// A reusable layout component for educational content sections
export default function EducationalLayout({
  title,
  subtitle,
  children,
  learningObjectives,
  keyTakeaways
}) {
  return (
    <div className={clsx(styles.educationalLayout)}>
      <header className={styles.header}>
        <h1>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </header>

      {learningObjectives && (
        <section className={styles.section}>
          <h2>Learning Objectives</h2>
          {learningObjectives}
        </section>
      )}

      <section className={clsx(styles.section, styles.content)}>
        {children}
      </section>

      {keyTakeaways && (
        <section className={styles.section}>
          <h2>Key Takeaways</h2>
          {keyTakeaways}
        </section>
      )}
    </div>
  );
}