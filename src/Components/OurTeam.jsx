import Member1 from "../assets/Team Member/image-shocked-young-man-pointing-finger-aside-blank-copy-space-astonished-surprised-guy_176532-1888 (1).jpg";
import Member2 from "../assets/Team Member/lifestyle-business-people-holding-laptop-computer-office-desk_1150-10180.jpg";
import Member3 from "../assets/Team Member/portrait-handsome-stylish-man-with-trendy-hairdo-looks-seriously_273609-16953.jpg";
import Member4 from "../assets/Team Member/young-bearded-man-with-striped-shirt_273609-5677.jpg";
import Member5 from "../assets/Team Member/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg";
import Member6 from "../assets/Team Member/young-happy-man-with-guitar-isolated-white_115318-700.jpg";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OurTeam = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether to trigger the animation only once
    });
  }, []);
  return (
    <div className="mt-20 ">
      <h1 className="text-2xl font-bold flex justify-center  my-10 ">
        OUR Team Members
      </h1>
      <div className="grid md:grid-cols-2 justify-center md:justify-between md:ml-32 gap-14 md:gap-9 ">
        <Link to="/about">
          <div
            data-aos="zoom-out-right"
            className="max-w-sm  bg-slate-100 border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img className="rounded-t-lg h-60 w-full" src={Member1} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Elvis Presley
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <div>
                <Link className="flex justify-center gap-4 my-5">
                  <FaFacebook></FaFacebook>
                  <FaInstagram></FaInstagram>
                  <FaTwitter></FaTwitter>
                  <FaGithub></FaGithub>
                </Link>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/about">
          <div
            data-aos="zoom-out-left"
            className="max-w-sm  bg-slate-100 border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img className="rounded-t-lg h-60 w-full" src={Member2} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Elvis Presley
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <div>
                <Link className="flex justify-center gap-4 my-5">
                  <FaFacebook></FaFacebook>
                  <FaInstagram></FaInstagram>
                  <FaTwitter></FaTwitter>
                  <FaGithub></FaGithub>
                </Link>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/about">
          <div
            data-aos="fade-down-right"
            className="max-w-sm  bg-slate-100 border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img className="rounded-t-lg h-60 w-full" src={Member3} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Elvis Presley
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <div>
                <Link className="flex justify-center gap-4 my-5">
                  <FaFacebook></FaFacebook>
                  <FaInstagram></FaInstagram>
                  <FaTwitter></FaTwitter>
                  <FaGithub></FaGithub>
                </Link>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/about">
          <div
            data-aos="fade-up-left"
            className="max-w-sm  bg-slate-100 border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img className="rounded-t-lg h-60 w-full" src={Member4} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Elvis Presley
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <div>
                <Link className="flex justify-center gap-4 my-5">
                  <FaFacebook></FaFacebook>
                  <FaInstagram></FaInstagram>
                  <FaTwitter></FaTwitter>
                  <FaGithub></FaGithub>
                </Link>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/about">
          <div
            data-aos="zoom-out-up"
            className="max-w-sm  bg-slate-100 border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img className="rounded-t-lg h-60 w-full" src={Member5} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Elvis Presley
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <div>
                <Link className="flex justify-center gap-4 my-5">
                  <FaFacebook></FaFacebook>
                  <FaInstagram></FaInstagram>
                  <FaTwitter></FaTwitter>
                  <FaGithub></FaGithub>
                </Link>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/about">
          <div
            data-aos="zoom-out-down"
            className="max-w-sm  bg-slate-100 border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img className="rounded-t-lg h-60 w-full" src={Member6} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Elvis Presley
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <div>
                <Link className="flex justify-center gap-4 my-5">
                  <FaFacebook></FaFacebook>
                  <FaInstagram></FaInstagram>
                  <FaTwitter></FaTwitter>
                  <FaGithub></FaGithub>
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OurTeam;
