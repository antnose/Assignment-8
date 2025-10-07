import ApplicationCard from "../../Components/ApplicationCard/ApplicationCard";
import axios from "axios";
import { useEffect, useState } from "react";

const AllApps = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    const allData = async () => {
      try {
        const res = await axios.get("appsData.json");
        const data = res.data;
        if (Array.isArray(data)) {
          setAllData(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    allData();
  }, []);
  return (
    <div>
      <h1 className="text-6xl font-bold py-5">Our All Applications</h1>
      <p className="text-gray-500">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1   gap-4 pb-10 p-10">
        {allData?.map((data) => (
          <ApplicationCard data={data} />
        ))}
      </div>
    </div>
  );
};

export default AllApps;
