import React from "react";

// const handleClick = (title) => {
//     console.log(`You clicked me! ${title}`);
// }

export const columns = [
  {
    name: "NAME",
    selector: "name",
    sortable: true,
    width: "10%",
    // cell: (d) => <div className="fw-bold" style={{}}>{d.name}</div>
  },
  {
    name: "UID",
    selector: "uid",
    sortable: true,
    width: "10%",
    compact: true,
    cell: (d) => (
      <p class="align-text-bottom text-nowrap">
        {d.uid}
        <button type="submit" class=" btn btn-sm btn-outline-warning">
          <i class="fa-regular fa-copy "></i>
        </button>
      </p>
    ),
  },
  {
    name: "BUYER",
    selector: "buyer",
    sortable: true,
    width: "8%",
  },
  {
    name: "TYPE",
    selector: "type",
    sortable: true,
    width: "8%",
  },
  {
    name: "DESTINATION",
    selector: "destination",
    sortable: true,
    width: "10%",
  },
  {
    name: "LIVE",
    selector: "live",
    width: "6%",
  },
  {
    name: "CC",
    selector: "cc",
    width: "6%",
  },
  {
    name: "HOUR",
    selector: "hour",
    width: "6%",
  },
  {
    name: "DAY",
    selector: "day",
    width: "6%",
  },
  {
    name: "MONTH",
    selector: "month",
    width: "9%",
  },
  {
    name: "TOTAL",
    selector: "total",
    width: "6%",
  },
  {
    name: "STATUS",
    selector: "status",
    sortable: true,
    compact: true,
    width: "5%",
    cell: (d) => (
      <p class="align-text-bottom text-nowrap">
        {d.status}
        <svg height={24}>
          <circle cx="12" cy="12" r="5" fill="green" />
        </svg>
      </p>
    ),
  },


//   {
//     name: "ACTION",
//     center: true,
//     sortable: false,
//     selector: "null",
//     cell: (row) => [
//         <Link to="/edit-campaign" className="btn btn-sm btn-outline-warning">
//         <i className="fa-regular fa-pen-to-square"></i>
//       </Link>,
//         <button type="submit" class="btn btn-sm btn-outline-warning">
//             <i class="fa-solid fa-grip-lines fa-rotate-90"></i></button>,
//         <button type="submit" class="btn btn-sm btn-outline-warning" onClick={() => handleDelete(row.campaign_id)}><i class="fa-solid fa-xmark"></i></button>
//         // <button type="submit" class="btn btn-sm btn-outline-warning "><i class="fa-regular fa-copy "></i></button>,
//         // <button type="submit" class="btn btn-sm btn-outline-warning "><i class="fa-regular fa-trash-can"></i></button>
//     ]
// }
  {
    name: "ACTION",
    center: true,
    sortable: false,
    selector: "null",
    cell: (d) => [

      <button type="submit" class="btn btn-sm btn-outline-warning">
        <i class="fa-regular fa-pen-to-square"></i>
      </button>,
      <button type="submit" class="btn btn-sm btn-outline-warning">
        <i class="fa-regular fa-user"></i>
      </button>,
      <button type="submit" class="btn btn-sm btn-outline-warning">
        <i class="fa-solid fa-repeat"></i>
      </button>,
      <button type="submit" class="btn btn-sm btn-outline-warning ">
        <i class="fa-regular fa-copy "></i>
      </button>,
      <button type="submit" class="btn btn-sm btn-outline-warning ">
        <i class="fa-regular fa-trash-can"></i>
      </button>,
    ],
  },
];

export const data = [
  {
    id: 1,
    name: "PRC-PT",
    uid: "CVdCbfkNYdJ6P",
    buyer: "You",
    type: "Number",
    destination: "18187389991",
    live: "0 /",
    cc: "1",
    hour: "0 /",
    day: "0 /",
    month: "16/",
    total: "16/",
    status: "",
  },
  {
    id: 2,
    name: "VSC-1",
    uid: "QdjhUCVCBQ7Z",
    buyer: "You",
    type: "Number",
    destination: "15615811317",
    live: "0 /",
    cc: "1",
    hour: "0 /",
    day: "0 /",
    month: "12/",
    total: "12/",
    status: "",
  },
  {
    id: 3,
    name: "VIKI-KOL",
    uid: "PmM5jkyBZapyn",
    buyer: "You",
    type: "Number",
    destination: "13342474985",
    live: "0 /",
    cc: "1",
    hour: "0 /",
    day: "0 /",
    month: "20/",
    total: "20/",
    status: "",
  },
];
