import { useLoaderData } from "react-router";
import ApplicationCard from "../../Components/ApplicationCard/ApplicationCard";

const AllApps = () => {
  const allData = useLoaderData();
  console.log(allData);
  return (
    <div>
      <h1 className="text-6xl font-bold py-5">Our All Applications</h1>
      <p className="text-gray-500">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1   gap-4 pb-10 p-10">
        {allData.map((data) => (
          <ApplicationCard data={data} />
        ))}
      </div>
    </div>
  );
};

export default AllApps;
