const ApplicationCard = ({ data }) => {
  return (
    <div className="card bg-base-100 w-full  shadow-sm">
      <figure className="bg-base-100 p-4">
        <img
          className="h-64 object-cover rounded-2xl "
          src={data.image}
          alt={data.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {data.title} </h2>
        <div className="card-actions flex justify-between">
          <div className="badge badge-outline border-0 p-4 badge-success bg-green-100">
            Success
          </div>
          <div className="badge badge-soft p-4 badge-warning bg-amber-100 ">
            Warning
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
