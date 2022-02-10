import './Navigation.css';

export default function Navigation({ currentPage, setCurrentPage }) {
  return (
    <div className="Navigation">
      <button
        onClick={() => setCurrentPage('Rooms')}
        className={
          currentPage === 'Rooms'
            ? 'Navigation__button Navigation__button--active'
            : 'Navigation__button'
        }
      >
        Rooms
      </button>
      <button
        onClick={() => setCurrentPage('Flatmates')}
        className={
          currentPage === 'Flatmates'
            ? 'Navigation__button Navigation__button--active'
            : 'Navigation__button'
        }
      >
        Flatmates
      </button>
    </div>
  );
}
