import { motion } from "framer-motion";
import { Link } from "react-router";
import appleStoreLogo from "../../assets/appleStore.svg";
import playStoreLogo from "../../assets/playStore.svg";
import heroPng from "../../assets/hero.png";

const Home = () => {
  return (
    <div>
      {/* Title Section Start */}
      <h1 className="text-7xl font-bold text-[#212121]">
        We Build <br />
        <motion.span
          className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        >
          Productive
        </motion.span>{" "}
        Apps
      </h1>

      <p className="text-gray-500 py-7">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>

      <div className="flex text-center items-center justify-center gap-5 pb-5">
        <Link
          className="btn bg-white border-gray-300"
          to={"https://play.google.com/store/games?hl=en&pli=1"}
          target="blank"
        >
          <img className="w-4" src={playStoreLogo} alt="" /> Google Play Store
        </Link>
        <Link
          className="btn bg-white border-gray-300"
          to={"https://www.apple.com/store"}
          target="blank"
        >
          <img className="w-5" src={appleStoreLogo} alt="" /> App Store
        </Link>
      </div>

      {/* Title Section End */}

      {/* banner section Start */}
      <div className="flex flex-col items-center mt-10  text-center justify-center px-0">
        <img src={heroPng} alt="" />
        <div className="bg-purple-600 w-full">
          <h1 className="font-bold text-6xl text-white pt-14">
            Trusted by Millions, Built for You
          </h1>

          <div className="stats stats-vertical lg:stats-horizontal shadow text-white py-14">
            <div className="stat ">
              <div className="stat-title text-white">Total Downloads</div>
              <div className="stat-value">29.6M</div>
              <div className="stat-desc text-white">
                21% More than Last Month
              </div>
            </div>

            <div className="stat ">
              <div className="stat-title text-white">Total Reviews</div>
              <div className="stat-value">906K</div>
              <div className="stat-desc text-white">
                46% More than Last Month
              </div>
            </div>

            <div className="stat ">
              <div className="stat-title text-white">Active Apps</div>
              <div className="stat-value">132+</div>
              <div className="stat-desc text-white">31 More Will Launch</div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner Section End */}
    </div>
  );
};

export default Home;
