import s from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={s.statistics}>
        {title ? <h2 className={s.title}>{title}</h2> : null}

        <ul className={s.statList}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li className={s.item} key={id}>
                <span className={s.label}>{label}</span>
                <span className={s.percentage}>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
