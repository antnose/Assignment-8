import { Link } from "react-router";
import downloadImg from "../../assets/icon-downloads.png";
import reviewdImg from "../../assets/icon-ratings.png";

const ApplicationCard = ({ data }) => {
  // SHow download number in understandable way start
  const formatDownloads = (num) => {
    if (!num) return "0";
    return new Intl.NumberFormat("en", {
      notation: "compact",
      compactDisplay: "short",
    }).format(num);
  };
  // SHow download number in understandable way End
  return (
    <Link
      to={`/allApps/${data?.id}`}
      className="card bg-base-100 w-full shadow-sm cursor-pointer"
    >
      <figure className="bg-base-100 p-4">
        <img
          className="h-64 object-cover rounded-2xl "
          src={data?.image}
          alt={data?.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {data?.title} </h2>
        <div className="card-actions flex justify-between">
          <div className="badge badge-outline border-0 lg:p-4 badge-success bg-green-100 flex items-center justify-center">
            <img className="w-4 h-4" src={downloadImg} alt="" />
            {formatDownloads(data?.downloads)}
          </div>
          <div className="badge badge-soft lg:p-4 badge-warning bg-amber-100 flex items-center justify-center ">
            <img className="w-4 h-4" src={reviewdImg} alt="" />
            {formatDownloads(data?.ratingAvg)}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ApplicationCard;
