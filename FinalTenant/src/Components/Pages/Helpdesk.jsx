import { useState } from "react";
import { FaPlus, FaRegFileExcel } from "react-icons/fa";

const data = [
  {
    no: "01",
    title: "Top Issue",
    category: "Plumbing",
    status: false,
    date: "20, Nov 2022",
  },
  {
    no: "02",
    title: "Slow Interment",
    category: "Interment",
    status: true,
    date: "20, Nov 2022",
  },
  {
    no: "03",
    title: "State Food",
    category: "Food",
    status: true,
    date: "20, Nov 2022",
  },
  {
    no: "04",
    title: "Lock Broken",
    category: "Unity",
    status: true,
    date: "20, Nov 2022",
  },
  {
    no: "05",
    title: "xxxxxx",
    category: "xxxxxx",
    date: "20, Nov 2022",
    status: true,
  },
];

const Helpdesk = () => {
  const [editOpen, setEditOpen] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleEditClick = (no) => {
    setEditOpen(editOpen === no ? null : no);
  };

  return (
    <div className="px-5 lg:px-10 lg:mt-24">
      <div className="mb-6">
        <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
          Helpdesk
        </button>
      </div>
      <div className="w-full flex gap-4 items-center mb-5">
        <p className="font-bold text-xl">Your Tickets</p>
        <button className="h-8 w-8 rounded-full bg-sky-400 text-white inline-flex justify-center items-center">
          <FaPlus />
        </button>
      </div>

      <div className="relative overflow-x-auto text-nowrap xs:min-w-full w-[300px] scrollbar-none border border-gray-200 mb-4">
        <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
            <tr>
              <th className="px-4 text-sm text-black">No</th>
              <th className="px-6 py-5 text-sm text-black">Complaint Title</th>
              <th className="px-6 py-5 text-sm text-black">Complaint Category</th>
              <th className="px-6 py-5 text-sm text-black">Date</th>
              <th className="px-6 py-5 text-sm text-black">Details</th>
              <th className="px-6 py-5 text-sm text-black">Status</th>
              <th className="px-6 py-5 text-sm text-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.no} className="text-black border-b hover:bg-gray-50 bg-white hover:text-black">
                <td className="w-4 p-4 border-b">{item.no}</td>
                <td className="px-6 py-4 font-semibold text-mixblue whitespace-nowrap border-b">{item.title}</td>
                <td className="px-6 py-4 font-medium text-black/50">{item.category}</td>
                <td className="px-6 py-4 font-medium text-black/50">{item.date}</td>
                <td className="px-6 py-4 border-b">
                  <button className="font-medium text-mixblue hover:underline">Details</button>
                </td>
                <td className="px-6 py-4 border-b">
                  <button className={`px-4 py-1 rounded-md  ${item.status ? "bg-green-50 hover:bg-green-100 text-green-600 text-sm font-semibold" : "bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 text-sm font-semibold"}`}>
                    {item.status ? "Resolved" : "In Progress"}
                  </button>
                </td>
                <td className="px-6 py-4 relative">
                  <button
                    onClick={() => handleEditClick(item.no)}
                    className="font-medium text-sky-500 hover:underline"
                  >
                    {editOpen === item.no ? "Close" : "Edit"}
                  </button>
                  {editOpen === item.no && (
                    <div className="absolute z-50  right-0 mt-2 max-w-[300px] bg-white border border-gray-300 shadow-lg rounded-md p-4">
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-2 items-center">
                          <input type="checkbox" id={`resolved-${item.no}`} className="w-[20px] h-[20px]" />
                          <label htmlFor={`resolved-${item.no}`} className="text-black">Mark as Resolved</label>
                        </div>
                        <div className="flex gap-2 items-center">
                          <input type="checkbox" id={`reopen-${item.no}`} className="w-[20px] h-[20px]" />
                          <label htmlFor={`reopen-${item.no}`} className="text-black">Reopen</label>
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="Comments"
                            className="border-2 px-2 py-1 w-full focus:outline-none rounded placeholder:font-semibold"
                          />
                        </div>
                        <div>
                          <button className="px-2 py-1 bg-green-500 text-white w-full rounded hover:bg-green-600">Save</button>
                        </div>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-2 bg-white rounded p-3 max-w-[200px] mb-24 font-medium">
        <p>Want to Give Check Out Notice</p>
        <div className="relative min-h-2">
          <button
            className="capitalize text-mixblue bg-mixblue/10 block px-3 py-1 mt-2"
            onClick={handleClick}
          >
            Click Here
          </button>
          {isFormVisible && (
            <form className="absolute top-full left-0 sm:left-[120%] sm:-top-24 mt-4 border bg-white p-4 shadow-md max-w-[200px]">
              <div className="mb-3">
                <input
                  id="bedNo"
                  type="text"
                  placeholder="Enter Bed No"
                  className="w-full px-2 py-1 border rounded focus:outline-none hover:shadow-md hover:shadow-mixblue cursor-pointer"
                />
              </div>
              <div className="mb-3">
                <input
                  id="date"
                  type="date"
                  className="w-full px-2 py-1 border rounded focus:outline-none hover:shadow-md hover:shadow-mixblue cursor-pointer "
                />
              </div>
              <div className="mb-3">
                <input
                  id="reason"
                  placeholder="Enter reason"
                  className="w-full px-2 py-1 border rounded focus:outline-none hover:shadow-md hover:shadow-mixblue cursor-pointer"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-5 py-1 rounded hover:bg-green-600"
              >
                Save
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Helpdesk;
