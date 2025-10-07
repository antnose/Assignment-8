import { useEffect, useState } from "react";
import { getStoredApp, removeFromStoreDb } from "../../Utility/addToLocalStor";
import axios from "axios";
import InstalledAppsCard from "../InstalledAppsCard/InstalledAppsCard";

const InstalledAppCard = () => {
  const [data, setData] = useState([]);
  const [filteredDt, setFilteredDt] = useState([]);

  useEffect(() => {
    const storedAppIds = getStoredApp().map(Number);
    setData(storedAppIds);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/appsData.json");
        const appsData = res.data;

        if (Array.isArray(appsData)) {
          const filteredData = appsData.filter((app) => data.includes(app.id));
          setFilteredDt(filteredData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
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
  };

  return (
    <div className="grid gap-y-5">
      {filteredDt.map((filterDt) => (
        <InstalledAppsCard
          key={filterDt.id}
          filterDt={filterDt}
          handleRemoveDtFromLocalStor={handleRemoveDtFromLocalStor}
        />
      ))}
    </div>
  );
};

export default InstalledAppCard;
