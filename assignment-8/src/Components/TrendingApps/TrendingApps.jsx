import { Link } from "react-router";
import ApplicationCard from "../ApplicationCard/ApplicationCard";
import { useEffect, useState } from "react";
import axios from "axios";

const TrendingApps = () => {
  const [homePageData, setHomePageData] = useState([]);

  // Load 8 data
  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const res = await axios.get("/appsData.json");
        const data = res.data;

        if (Array.isArray(data)) {
          setHomePageData(data.slice(0, 8));
        } else {
          console.log("Invalid Data format");
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchDatas();
  }, []);

  return (
    <div className="pt-10">
      <h1 className="text-5xl font-bold mb-4">Trending Apps</h1>
      <p className="text-gray-600">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1   gap-4 pb-10 p-10">
        {homePageData.map((data) => (
          <ApplicationCard key={data.id} data={data} />
        ))}
      </div>
      <Link
        to={"/allApps"}
        className="bg-gradient-to-r from-violet-700 to-purple-700 
                hover:from-violet-600 hover:to-purple-600 
                text-white font-bold py-2 px-4 rounded 
                transition-all duration-500 ease-in-out 
                hover:scale-105"
      >
        Show All
      </Link>
    </div>
  );
};

export default TrendingApps;
