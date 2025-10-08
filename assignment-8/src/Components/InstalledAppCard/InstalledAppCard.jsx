import { useContext, useEffect, useState } from "react";
import { getStoredApp, removeFromStoreDb } from "../../Utility/addToLocalStor";
import axios from "axios";
import InstalledAppsCard from "../InstalledAppsCard/InstalledAppsCard";
import Swal from "sweetalert2";
import { LoadingContext } from "../../CustomContext/LoadingContext";
import LoadingPage from "../LoadingPage/LoadingPage";

const InstalledAppCard = () => {
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
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="grid gap-y-5">
          {filteredDt.map((filterDt) => (
            <InstalledAppsCard
              key={filterDt.id}
              filterDt={filterDt}
              handleRemoveDtFromLocalStor={handleRemoveDtFromLocalStor}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default InstalledAppCard;
