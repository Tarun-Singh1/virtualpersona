const Arrow = ({ link }) => {
  return (
    <a href={link} className="ml-5 fill-n-1" target="_blank" rel="noopener noreferrer">
      <svg width="24" height="24">
        <path d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414z" />
      </svg>
    </a>
  );
};

export default Arrow;
