import InstalledAppCard from "../../Components/InstalledAppCard/InstalledAppCard";

const InstalledApps = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold">Your Installed Apps</h1>
      <p className="text-gray-600 py-5 text-xl">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div>
        <InstalledAppCard />
      </div>
    </div>
  );
};

export default InstalledApps;
