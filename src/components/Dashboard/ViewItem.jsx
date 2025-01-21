import  { useState, useEffect } from "react";
import apiClient from "../../../Services/api-Client";

const ViewItem = ({ itemID }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    apiClient.get("/items/" + itemID).then((res) => {
      setData(res.data);
    });
  }, [itemID]); 

  return (
    <div dir="rtl" className="p-6  rounded-lg ">
      <ul className="space-y-4">
        <li className="text-lg font-semibold text-gray-800">
          <span className="text-orange-600">اسم المنتج:</span> {data.name || "غير متوفر"}
        </li>
        <li className="text-lg text-gray-700">
          <span className="text-orange-600">الوصف:</span> {data.description || "غير متوفر"}
        </li>
        <li className="text-lg text-gray-700">
          <span className="text-orange-600">السعر:</span> {data.price ? `${data.price} ريال` : "غير متوفر"}
        </li>
        <li className="text-lg text-gray-700">
          <span className="text-orange-600">الحالة:</span> {data.status || "غير متوفر"}
        </li>
      </ul>
    </div>
  );
};

export default ViewItem;
