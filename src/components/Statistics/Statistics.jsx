import styles from "./Statistics.module.scss";

const colors = [
  '#FDFD04',
  '#40FD04',
  '#04FDF2',
  '#C804FD',
  '#0384fc',
  '#e303fc',
  '#fc0362',
  '#fc9d03',
  '#fc0303',
  '#03fc94',
  '#0339fc',
];

function getRandomColor(colors) {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

const Statistics = ({ title, stats }) => { 
  return (
    <div className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={styles.item}
            key={id}
            style={{backgroundColor: getRandomColor(colors)}}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Statistics;