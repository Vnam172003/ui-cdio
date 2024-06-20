import { motion, useAnimation, useTime, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import UserInforHeader from "./UserInforHeader";
import { Input } from "antd";

function Header() {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setVisible(prevScrollY > currentScrollY);
    setPrevScrollY(currentScrollY);
  };
  const controls = useAnimation();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);
  useEffect(() => {
    controls.start({ opacity: visible ? 1 : 0 });
  }, [visible, controls]);
  const time = useTime();
  const rotate = useTransform(
    time,
    [0, 4000], // For every 4 seconds...
    [0, 360], // ...rotate 360deg
    { clamp: false }
  );
  return (
    <>
      <header className="   w-full bg-opacity-80 pt-[50px]  ">
        <motion.div
          initial={{ opacity: 1 }}
          animate={controls}
          transition={{ opacity: { duration: 0.2 } }}
          className="group fixed top-0 right-0 left-0 z-50  "
        >
          <div className="flex w-full items-center py-4 justify-between  bg-[#51438D] px-10  ">
            <Link to={"/"} className="">
              <p className="text-2xl ">Hospital</p>
            </Link>
            <Input placeholder="tìm kiếm" className="w-[300px]" />
            <div className="flex gap-3 ">
              <UserInforHeader />
            </div>
          </div>
        </motion.div>
      </header>
    </>
  );
}

export default Header;
