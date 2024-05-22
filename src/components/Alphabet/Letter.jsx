function Letter({ letter, onClick }) {
  return (
    <div className="tile" onClick={onClick}>
      {letter}
    </div>
  );
}

export default Letter;
