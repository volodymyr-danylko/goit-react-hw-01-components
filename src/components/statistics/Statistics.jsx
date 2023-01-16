import PropTypes, { arrayOf } from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats &&
          stats.length > 0 &&
          stats.map(item => (
            <li className="item" key={item.id}>
              <span className="label">{item.label}</span>
              <span className="percentage" key={item.id}>
                {item.percentage}%
              </span>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
