const Card = ({ cards, loading }) => {
  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      {cards.map((card) => (
        <div className="col-3" key={card.id}>
          <div className="card">
            <img className="card-img-top" src={card.flag} alt="no img" />
            <div className="card-body">
              <div className="h4">{card.name}</div>
              <p className="card-text">{card.region}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
