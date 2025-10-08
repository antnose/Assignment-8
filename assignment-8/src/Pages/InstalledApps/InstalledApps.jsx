import InstalledAppCard from "../../Components/InstalledAppCard/InstalledAppCard";
import { useContext, useEffect, useState } from "react";
import { getStoredApp, removeFromStoreDb } from "../../Utility/addToLocalStor";
import axios from "axios";
import Swal from "sweetalert2";
import { LoadingContext } from "../../CustomContext/LoadingContext";

const InstalledApps = () => {
  const [data, setData] = useState([]);
  const [filteredDt, setFilteredDt] = useState([]);
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    const storedAppIds = getStoredApp().map(Number);
    setData(storedAppIds);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/appsData.json");
        const appsData = res.data;

        if (Array.isArray(appsData)) {
          const filteredData = appsData.filter((app) => data.includes(app.id));
          setFilteredDt(filteredData);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (data.length > 0) {
      fetchData();
    }
  }, [data]);

  // Handle Remove Data from local storage
  const handleRemoveDtFromLocalStor = (id) => {
    removeFromStoreDb(id);
    setFilteredDt((prev) => prev.filter((rmId) => rmId.id !== id));
    Swal.fire({
      title: "আমিতো ভালা না ভালা লইয়াই থাইকো! ",
      icon: "error",
      draggable: true,
    });
  };
  return (
    <div>
      <div>
        <h1 className="text-6xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-600 py-5 text-xl">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="text-right pb-10">
          <select defaultValue="Sort" className="select">
            <option disabled={true}>Sort By</option>
            <option>Size</option>
            <option>Raging</option>
            <option>Downloads</option>
          </select>
        </div>
        <div>
          <InstalledAppCard
            filteredDt={filteredDt}
            handleRemoveDtFromLocalStor={handleRemoveDtFromLocalStor}
          />
        </div>
      </div>
    </div>
  );
};

export default InstalledApps;
