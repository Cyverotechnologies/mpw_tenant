import React from "react";
import avtar1 from "../../assets/Avatar1.png";
import avtar2 from "../../assets/Avatar2.png";
import avtar3 from "../../assets/Avatar3.png";

const notices = [
  {
    id: 1,
    imageSrc: avtar1,
    role: "Admin",
    title: "Food Menu",
    description: "Lorem ipsum dolor sit amet.",
    date: "Today",
    status: "Unread",
    statusColor: "bg-[#EFB034FF]",
  },
  {
    id: 2,
    imageSrc:
      avtar2,
    role: "Manager",
    title: "Internet Details",
    description: "Lorem ipsum dolor sit amet.",
    date: "May 10",
    status: "Read",
    statusColor: "bg-[#1DD75BFF]",
  },
  {
    id: 3,
    imageSrc:
      avtar3,
    role: "Admin",
    title: "Security",
    description: "Lorem ipsum dolor sit amet.",
    date: "May 10",
    status: "Read",
    statusColor: "bg-[#1DD75BFF]",
  },
  {
    id: 4,
    imageSrc:
      avtar2,
    role: "Manager",
    title: "Internet Details",
    description: "Lorem ipsum dolor sit amet.",
    date: "May 10",
    status: "Read",
    statusColor: "bg-[#1DD75BFF]",
  },
  {
    id: 1,
    imageSrc: avtar1,
    role: "Admin",
    title: "Food Menu",
    description: "Lorem ipsum dolor sit amet.",
    date: "Today",
    status: "Unread",
    statusColor: "bg-[#EFB034FF]",
  },
  {
    id: 2,
    imageSrc:
      avtar2,
    role: "Manager",
    title: "Internet Details",
    description: "Lorem ipsum dolor sit amet.",
    date: "May 10",
    status: "Read",
    statusColor: "bg-[#1DD75BFF]",
  },
  {
    id: 3,
    imageSrc:
      avtar3,
    role: "Admin",
    title: "Security",
    description: "Lorem ipsum dolor sit amet.",
    date: "May 10",
    status: "Read",
    statusColor: "bg-[#1DD75BFF]",
  },
  {
    id: 4,
    imageSrc:
      avtar2,
    role: "Manager",
    title: "Internet Details",
    description: "Lorem ipsum dolor sit amet.",
    date: "May 10",
    status: "Read",
    statusColor: "bg-[#1DD75BFF]",
  },
  {
    id: 1,
    imageSrc: avtar1,
    role: "Admin",
    title: "Food Menu",
    description: "Lorem ipsum dolor sit amet.",
    date: "Today",
    status: "Unread",
    statusColor: "bg-[#EFB034FF]",
  },
  {
    id: 2,
    imageSrc:
      avtar2,
    role: "Manager",
    title: "Internet Details",
    description: "Lorem ipsum dolor sit amet.",
    date: "May 10",
    status: "Read",
    statusColor: "bg-[#1DD75BFF]",
  },
  {
    id: 3,
    imageSrc:
      avtar3,
    role: "Admin",
    title: "Security",
    description: "Lorem ipsum dolor sit amet.",
    date: "May 10",
    status: "Read",
    statusColor: "bg-[#1DD75BFF]",
  },
  {
    id: 4,
    imageSrc:
      avtar2,
    role: "Manager",
    title: "Internet Details",
    description: "Lorem ipsum dolor sit amet.",
    date: "May 10",
    status: "Read",
    statusColor: "bg-[#1DD75BFF]",
  },
  {
    id: 1,
    imageSrc: avtar1,
    role: "Admin",
    title: "Food Menu",
    description: "Lorem ipsum dolor sit amet.",
    date: "Today",
    status: "Unread",
    statusColor: "bg-[#EFB034FF]",
  },
  {
    id: 2,
    imageSrc:
      avtar2,
    role: "Manager",
    title: "Internet Details",
    description: "Lorem ipsum dolor sit amet.",
    date: "May 10",
    status: "Read",
    statusColor: "bg-[#1DD75BFF]",
  },
  {
    id: 3,
    imageSrc:
      avtar3,
    role: "Admin",
    title: "Security",
    description: "Lorem ipsum dolor sit amet.",
    date: "May 10",
    status: "Read",
    statusColor: "bg-[#1DD75BFF]",
  },
  {
    id: 4,
    imageSrc:
      avtar2,
    role: "Manager",
    title: "Internet Details",
    description: "Lorem ipsum dolor sit amet.",
    date: "May 10",
    status: "Read",
    statusColor: "bg-[#1DD75BFF]",
  },
  {
    id: 1,
    imageSrc: avtar1,
    role: "Admin",
    title: "Food Menu",
    description: "Lorem ipsum dolor sit amet.",
    date: "Today",
    status: "Unread",
    statusColor: "bg-[#EFB034FF]",
  },
  {
    id: 2,
    imageSrc:
      avtar2,
    role: "Manager",
    title: "Internet Details",
    description: "Lorem ipsum dolor sit amet.",
    date: "May 10",
    status: "Read",
    statusColor: "bg-[#1DD75BFF]",
  },
  {
    id: 3,
    imageSrc:
      avtar3,
    role: "Admin",
    title: "Security",
    description: "Lorem ipsum dolor sit amet.",
    date: "May 10",
    status: "Read",
    statusColor: "bg-[#1DD75BFF]",
  },
  {
    id: 4,
    imageSrc:
      avtar2,
    role: "Manager",
    title: "Internet Details",
    description: "Lorem ipsum dolor sit amet.",
    date: "May 10",
    status: "Read",
    statusColor: "bg-[#1DD75BFF]",
  },
 
];

const Notice = () => {
  return (
    <div className="px-5 lg:px-10 lg:mt-24">
      <div className="mb-6">
        <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl mb-2">
          Active Notices
        </button>
        <div className="mt-1 h-[290px] overflow-y-scroll Ntoverflow">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className={`sm:me-6 me-4 flex justify-between sm:px-3.5 px-2 items-center py-3 ${
                notice.id % 2 === 0 ? "bg-[#F5F2FDFF]" : "bg-[#FEF6F1FF]"
              }  duration-200 cursor-pointer`}
            >
              <div className="flex items-center sm:items-start sm:gap-5 gap-3">
                <div className="mt-1">
                  <img
                    src={notice.imageSrc}
                    alt=""
                    className=" size-8 rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col ">
                  <div className="flex xs:gap-6 gap-3">
                    <h4
                      className={`font-semibold text-xs sm:text-sm ${
                        notice.id % 2 === 0 ? "self-start" : "self-end"
                      }   capitalize`}
                    >
                      {notice.role}
                    </h4>
                    <p className="sm:text-lg text-xs">{notice.title}</p>
                  </div>
                  <p className="text-xs xs:text-sm">{notice.description}</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm">{notice.date}</p>
                <button
                  className={`text-xs font-semibold px-2 py-1 rounded-full mt-1 ${notice.statusColor}`}
                >
                  {notice.status}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl mb-2">
          Past Notices
        </button>
        <div className="mt-1 h-[290px] overflow-y-scroll Ntoverflow">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className={`sm:me-6 me-4 flex justify-between sm:px-3.5 px-2 items-center py-3 ${
                notice.id % 2 === 0 ? "bg-[#F5F2FDFF]" : "bg-[#FEF6F1FF]"
              } duration-200 cursor-pointer`}
            >
              <div className="flex items-center sm:items-start sm:gap-5 gap-3">
                <div className="mt-1">
                  <img
                    src={notice.imageSrc}
                    alt=""
                    className=" size-8 rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col ">
                  <div className="flex xs:gap-6 gap-3">
                    <h4
                      className={`font-semibold text-xs sm:text-sm ${
                        notice.id % 2 === 0 ? "self-start" : "self-end"
                      }   capitalize`}
                    >
                      {notice.role}
                    </h4>
                    <p className="sm:text-lg text-xs">{notice.title}</p>
                  </div>
                  <p className="text-xs xs:text-sm">{notice.description}</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm">{notice.date}</p>
                <button
                  className={`text-xs font-semibold px-2 py-1 rounded-full mt-1 ${notice.statusColor}`}
                >
                  {notice.status}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notice;
