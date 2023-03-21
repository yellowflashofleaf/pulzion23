import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import AdminLayout from "../../Components/AdminLayout";
import privateAdminRoute from "../../routes/privateAdminRoute";
import AppContext from "../../context/AppContext";
import PrimaryButton from "../../Components/Button/PrimaryButton";
import Select from "react-select";
import { getPaymentDetails } from "../../action/paymentForm";

const VerifyPayments = () => {
  const [data, setData] = useState([]);

  const { contEvents } = useContext(AppContext);
  const [filter, setFilter] = useState("");
  const [selected,setSelected] = useState([{}])

  useEffect(() => {
    (async () => {
      const res = await getPaymentDetails();
      console.log("line no. 19", res);
      setData(res);
    })();
  }, []);
  const newFilters = [];
  data.forEach((val) => {
    newFilters.push({
      value: val.user_id,
      label: val.user_id,
    });
  });
  const options = newFilters;
  const handleSingleChange = (selectedOption) => {
    setFilter(selectedOption);
  };
  const getFormatedArray = (arr) => {
    let cols = Object.keys(arr[0]);
    cols.shift();
    cols = cols.join(", ");

    let combinedData = `data:text/csv;charset=utf-8, ${cols}, \r\n`;
    // let combinedData =
    //   "data:text/csv;charset=utf-8, User Id, Event ID, Slot ID, Event Name, First Name, Last Name, Email, Phone, Event type, Start Date & Time, End Date & Time, \r\n";

    arr.forEach((val, idx) => {
      delete val.id;
      let propertiesArray = Object.values(val);
      combinedData += propertiesArray.join(",") + "\r\n";
    });
    return combinedData;
  };
  const visible = data.filter((item) =>
    filter?.value ? filter.value === item.user_id : true
  );
  const handleCSVDownload = (e) => {
    var link = document.createElement("a");
    let d = getFormatedArray(visible);
    var encodedUri = encodeURI(d);
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "register.csv");
    document.body.appendChild(link);
    link.click();
  };

  // function onchange(e) {
  //   setSelected((preValue) => [
  //       ...preValue,
  //       visible.filter((val,idx) => val.user_id == e.target.id && val.event_id == e.target.value)
  //   ])
  //   // console.log("Id",(e.target.id).map((id)=>console.log(id)))
  // }

  // function verifyUser() {
    
  // }

  return (
    <AdminLayout>
      <Head>
        <title>Pulzion'22 | Admin</title>
      </Head>
      <div>
        <div className="grid">
          <div className="w-full px-4 py-4 mt-5 overflow-x-auto bg-primaries-800 text-primaries-100">
            <div className="flex justify-between mb-5">
              <Select
                options={options}
                className="w-60 text-primaries-700"
                value={filter}
                onChange={handleSingleChange}
              />
              <PrimaryButton handleClick={handleCSVDownload}>
                Export CSV
              </PrimaryButton>
            </div>
            <table className="min-w-full border-2 border-gray-900">
              <tr>
                <th>
                  <input type={"checkbox"}/>
                </th>
                <th className="px-2 py-2 text-base text-center border-2 border-gray-900">
                  User Id
                </th>
                <th className="px-2 py-2 text-base text-center border-2 border-gray-900">
                  Event IDS
                </th>
                <th className="px-2 py-2 text-base text-center border-2 border-gray-900">
                  Transaction ID
                </th>
                <th className="px-2 py-2 text-base text-center border-2 border-gray-900">
                  is_verified
                </th>
              </tr>
              {visible &&
                visible.map((val, idx) => (
                  <tr key={idx}>
                    <td className="px-2 py-2 text-base text-center border-2 border-gray-900">
                      <input type={"checkbox"} id={val} onChange={onchange}/>
                    </td>
                    <td className="px-2 py-2 text-base text-center border-2 border-gray-900">
                      {val.user_id}
                    </td>
                    <td className="px-2 py-2 text-base text-center border-2 border-gray-900">
                      {val.event_id}
                    </td>
                    <td className="px-2 py-2 text-base text-center border-2 border-gray-900">
                      {val.transaction_id}
                    </td>
                    <td className="px-2 py-2 text-base text-center border-2 border-gray-900">
                      {val.is_verified}
                    </td>
                  </tr>
                ))
              }
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default privateAdminRoute(VerifyPayments);
