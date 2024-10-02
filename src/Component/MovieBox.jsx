
// eslint-disable-next-line react/prop-types
const MovieBox = ({category, selectedMovies, setSelectedMovies }) => {

    const handleSelection = (category) => () => {
        // eslint-disable-next-line react/prop-types
        if(selectedMovies.includes(category)){
            // eslint-disable-next-line react/prop-types
            setSelectedMovies(selectedMovies.filter((movie) => movie !== category))
        } else {
            setSelectedMovies([...selectedMovies, category])
        }
    }

  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: "lightblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
        boarder: `2px solid ${
          // eslint-disable-next-line react/prop-types
          selectedMovies.includes(category) ? "red" : "black"
        }`,
      }}
      onClick={handleSelection(category)}
    >
      <h1>{category.movie}</h1>
    </div>
  );
};

export default MovieBox;