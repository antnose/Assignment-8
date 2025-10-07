const InstalledAppsCard = ({ filterDt, handleRemoveDtFromLocalStor }) => {
  return (
    <div className="card card-side bg-base-100 shadow-sm flex items-center justify-center">
      <figure>
        <img
          className="h-28 w-28 rounded-2xl p-3"
          src={filterDt.image}
          alt="Movie"
        />
      </figure>
      <div className="card-body grid grid-cols-2 items-center">
        <div className="text-start ">
          <h2 className="card-title"> {filterDt.title} </h2>
          <p>Click the button to watch on app.</p>
        </div>
        <div className="justify-self-end-safe">
          <button
            onClick={() => handleRemoveDtFromLocalStor(filterDt.id)}
            className="btn btn-success text-white"
          >
            Uninstall
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstalledAppsCard;
