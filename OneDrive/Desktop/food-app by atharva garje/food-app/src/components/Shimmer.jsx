const Shimmer = () => {
  const shimmerCards = Array.from({ length: 4 }, (_, index) => (
    <div
      key={index}
      className="shimmer-card"
      style={{
        height: "390px",
        width: "250px",
        backgroundColor: "#f0f0f0",
        margin: "20px",
        borderRadius: "10px",
      }}
    ></div>
  ));

  return (
    <div className="shimmer-cont" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {shimmerCards}
    </div>
  );
};

export default Shimmer;