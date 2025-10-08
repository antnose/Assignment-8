import ApplicationCard from "../../Components/ApplicationCard/ApplicationCard";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { LoadingContext } from "../../CustomContext/LoadingContext";
import LoadingPage from "../../Components/LoadingPage/LoadingPage";

const AllApps = () => {
  const [allData, setAllData] = useState([]);

  const { loading, setLoading } = useContext(LoadingContext);
  useEffect(() => {
    const allData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("appsData.json");
        const data = res.data;
        if (Array.isArray(data)) {
          setAllData(data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    allData();
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <div>
          <h1 className="text-6xl font-bold py-5">Our All Applications</h1>
          <p className="text-gray-500">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
          <div className="w-full flex justify-between text-black pt-7">
            <p className="font-semibold text-xl">
              {" "}
              ({allData.length}) Apps Found{" "}
            </p>
            <input
              type="search"
              name="search"
              placeholder="Search"
              id=""
              className="rounded px-2 py-1.5 input"
            />
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1   gap-4 pb-10 p-10">
            {allData?.map((data) => (
              <ApplicationCard data={data} key={data.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllApps;
