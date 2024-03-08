import { AiOutlineArrowRight } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { useStepperContext } from "../../../Hooks/StepperContext";
import { FaDollarSign } from "react-icons/fa";



export default function CKUserDetails() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  console.log(userData);

  const item = {
    name:"Exclusive Carport",
    desc:"this is carport in california USA",
    category:"carport",
    badge:"top",
    img:"https://i.ibb.co/qdbwmF3/Rectangle-168.png",
    price:6895,
}

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[new Date().getMonth()];
  const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };
  return (
    <div style={{ fontFamily: 'Helvetica' }} className="border bg-white px-5 col-span-2 shadow-sm py-5">
      <h2 className="py-5 text-3xl text-black text-opacity-75">
        Personal Information
      </h2>

      <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
        <div className="w-full md:w-3/5 grid grid-cols-1 space-y-5 justify-items-stretch gap-5 ">
          <div className="w-full flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <label className="relative cursor-pointer">
                <input
                  type="text"
                  onChange={handleChange} value={userData["firstname"] || ""}
                  placeholder="Input"
                  className="h-[50px] bg-[#f3f3f3] rounded w-full px-6 text-md border outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                  name="firstname"
                />
                <span className=" text-sm bg-transparent te text-opacity-80 absolute left-2 px-2 top-[-27px] transition duration-200 input-text">
                  First Name
                </span>
              </label>
            </div>
            <div className="w-full">
              <label className="relative cursor-pointer">
                <input
                  type="text"
                  onChange={handleChange} value={userData["lastname"] || ""}
                  placeholder="Input"
                  className="h-[50px]  bg-[#f3f3f3] w-full px-6 text-md border rounded outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                  name="lastname"
                />
                <span className=" text-sm bg-transparent te text-opacity-80 absolute left-2 px-2 top-[-27px] transition duration-200 input-text">
                  Last name
                </span>
              </label>
            </div>
          </div>
          <div>
            <label className="relative cursor-pointer">
              <input
                type="email"
                onChange={handleChange} value={userData["email"] || ""}
                placeholder="Input"
                className="h-[50px]  bg-[#f3f3f3] w-full px-6 text-md border rounded outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                name="email"
              />
              <span className=" text-sm bg-transparent te text-opacity-80 absolute left-2 px-2 top-[-27px] transition duration-200 input-text">
                Email Address
              </span>
            </label>
          </div>
          <div>
            <label className="relative cursor-pointer">
              <input
                type="text"
                onChange={handleChange} value={userData["phone"] || ""}
                placeholder="Input"
                className="h-[50px]  bg-[#f3f3f3] w-full px-6 text-md border rounded outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                name="phone"
              />
              <span className=" text-sm bg-transparent te text-opacity-80 absolute left-2 px-2 top-[-27px] transition duration-200 input-text">
                Phone
              </span>
            </label>
          </div>
          <div>
            <label className="relative cursor-pointer">
              <textarea
                type="text"
                onChange={handleChange} value={userData["customeraddress"] || ""}
                placeholder="Input"
                className="h-[150px]  bg-[#f3f3f3] w-full px-6 text-md border rounded outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                name="customeraddress"
              />
              <span className=" text-sm bg-transparent te text-opacity-80 absolute left-2 px-2 top-[-145px] transition duration-200 input-text">
                Customers Address
              </span>
            </label>
          </div>
          {/* <div>
            <label className="relative cursor-pointer">
              <input
                type="text"
                defaultValue={item?.price}
                placeholder="Input"
                className="h-[50px]  bg-[#f3f3f3] w-full px-6 text-md border rounded outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                name="price"
              />
              <span className=" text-sm bg-transparent te text-opacity-80 absolute left-2 px-2 top-[-27px] transition duration-200 input-text">
                Item Price
              </span>
            </label>
          </div>
          <div>
            <label className="relative cursor-pointer">
              <input
                type="text"
                defaultValue={item?.badge}
                placeholder="Input"
                className="h-[50px]  bg-[#f3f3f3] w-full px-6 text-md border rounded outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                name="badge"
              />
              <span className=" text-sm bg-transparent te text-opacity-80 absolute left-2 px-2 top-[-27px] transition duration-200 input-text">
                Badge
              </span>
            </label>
          </div> */}

        </div>
        <div className="w-full md:w-2/5">
          <div className=" relative bg-[#F9FAFC]">
            <div className="border sticky top-20 px-4   shadow-lg rounded-sm">
              <div className="py-4 ">
                <h3 className="text-2xl text-black text-opacity-90 ">
                  Buying Summary :
                </h3>
                <h2 className="text-lg text-semibold text-gray-600 flex items-center gap-x-2">
                  <AiOutlineArrowRight />
                  {item?.name}
                </h2>
              </div>
              <hr />
              <div className="w-full">
                <div className="flex justify-start  py-5 gap-5">
                  <div className="avatar">
                    <div className="w-20 rounded">
                      <img src={item?.img} alt="dd" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-around">
                    <h1 className="">{item?.name}</h1>

                    {/* Rating add  */}
                    {/* <div className="flex gap-2 items-center">
                      {ratings === 1 && (
                        <div className="rating">
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-green-500"
                            checked
                          />
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-gray-300"
                          />
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-gray-300"
                          />
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-gray-300"
                          />
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-gray-300"
                          />
                        </div>
                      )}
                      {ratings === 2 && (
                        <div className="rating">
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-green-500"
                          />
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-green-500"
                            checked
                          />
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-gray-300"
                          />
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-gray-300"
                          />
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-gray-300"
                          />
                        </div>
                      )}
                      {ratings === 3 && (
                        <div className="rating">
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-green-500"
                          />
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-green-500"
                          />
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-green-500"
                            checked
                          />
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-gray-300"
                          />
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-gray-300"
                          />
                        </div>
                      )}
                      {ratings === 4 && (
                        <div className="rating">
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-green-500"
                          />
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-green-500"
                          />
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-green-500"
                          />
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-green-500"
                            checked
                          />
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-gray-300"
                          />
                        </div>
                      )}
                      {ratings === 5 && (
                        <div className="rating">
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-green-500"
                          />
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-green-500"
                          />
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-green-500"
                          />
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-green-500"
                          />
                          <input
                            name="rating-1"
                            className="mask mask-star w-4 md:w-4  bg-green-500"
                            checked
                          />
                        </div>
                      )}
                      <h3 className="text-md font-semibold text-gray-400">
                        {item?.rating?.total_rating}
                      </h3>
                    </div> */}
                    {/* <div className="flex items-center gap-x-2">
                      <MdLocationPin className="text-xl text-gray-800  " />
                      <span>Dhaka Bangladesh</span>
                    </div> */}
                  </div>
                </div>
                <div>
                  <div className="w-full flex justify-between text-lg text-black text-opacity-90  my-2">
                    <p>Date</p>
                    <p className="text-end">
                      {new Date().getDate()} {month} {new Date().getFullYear()}
                    </p>
                  </div>
                  <div className="flex justify-between text-lg text-black text-opacity-90  my-2">
                    <p>Time</p>
                    <p className="text-end">{formatAMPM(new Date())}</p>
                  </div>
                  <div className="flex justify-between text-lg text-black text-opacity-90  my-2">
                    <p>Item Fee</p>
                    <p className="flex items-center justify-end text-end gap-1">
                    <i class="fa fa-eur" aria-hidden="true"></i> {item?.price} 
                    </p>
                  </div>
                  <div className="flex justify-between text-lg text-black text-opacity-90  my-2">
                    <p>Govt.Tax 7%</p>
                    <p className="flex items-center justify-end text-end gap-1">
                    <i class="fa fa-eur" aria-hidden="true"></i> {(item?.price / 100 * 7).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex flex-row justify-between text-md text-black text-opacity-90  my-2">
                    <p>Service Charge 5%</p>
                    <p className="flex items-center justify-end gap-1">
                    <i class="fa fa-eur" aria-hidden="true"></i> {(item?.price / 100 * 5).toFixed(2)}
                    </p>
                  </div>
                  <div className="py-5">
                    <hr />
                  </div>
                  <div className="flex justify-between text-lg text-black text-opacity-90  my-2 mb-10">
                    <p className="text-xl font-semibold ">Total</p>
                    <p className="text-xl flex items-center justify-end font-semibold ">
                      = <i class="fa fa-eur px-2" aria-hidden="true"></i> {(item?.price + item?.price / 100 * 7 + item?.price / 100 * 5).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>

        <div className="py-3">
          <hr />
        </div>

        <div className="py-4 flex items-center">
          <input
            type="checkbox"
            name="check"
            onChange={handleChange} value={userData["check"] || ""}
            id=""
            className="checkbox checkbox-sm border-2 checkbox-success"
          />
          <span className="ml-2">
            I have read and accepted{" "}
            <a href="!#" className="text-[#009DA6] font-semibold ">
              Terms & Conditions
            </a>
          </span>
        </div>
      </div>

    </div>
  );
}