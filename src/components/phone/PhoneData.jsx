// Call Details
export const recentcallcolumns = [
  {
    name: " ",
    selector: "arrow",
    sortable: true,
    cell: (d) => (
      <p class="align-text-bottom text-nowrap">
        {d.id}
        <button type="submit" class=" btn btn-sm">
        <i class="bi bi-arrow-up-right-circle-fill mb-5" style={{ fontSize: '1.5rem' }}></i>
        </button>
      </p>
    ),
  },
  {
    name: "CONTACT",
    selector: "contact",
    sortable: true,
    width: "10%",
    // cell: (d) => (
    //     <p class="align-text-bottom text-nowrap">
    //         {d.id}
    //         <button type="submit" class=" btn btn-sm btn-outline-warning"><i class="fa-regular fa-copy "></i></button>
    //     </p>
    // )
    // cell: (d) => <div className="fw-bold" style={{}}>{d.name}</div>
  },
  {
    name: " ",
    selector: "call",
    sortable: true,
    compact: true,
    cell: (d) => (
      <p class="align-text-bottom text-nowrap">
        {d.id}
        <button type="submit" class=" btn btn-sm">
          <i class="fa-solid fa-phone"></i> Call
        </button>
      </p>
    ),
  },
  {
    name: "PHONE LINE",
    selector: "phoneline",
    sortable: true,
  },
  {
    name: "USER",
    selector: "user",
    sortable: true,
  },
  {
    name: "DURATION",
    selector: "duration",
    sortable: true,
    // cell: (d) => (
    //     <p class="align-text-bottom text-nowrap">
    //         {d.recording}
    //         <svg height={24}>
    //             <circle cx="12" cy="12" r="5" fill="green" />
    //         </svg>
    //     </p>
    // )
  },

  {
    name: "TIME",
    selector: "time",
  },
];
export const recentcalldata = [
  {
    arrow: "",
    contact: "+1 814-854-7548",
    call: "",
    phoneline: "plivoau",
    user: "-",
    duration: "-",
    time: "10 hours ago",
  },
  {
    arrow: "",
    contact: "+1 814-854-7548",
    call: "",
    phoneline: "plivoau",
    user: "-",
    duration: "-",
    time: "10 hours ago",
  },
  {
    arrow: "",
    contact: "+1 814-854-7548",
    call: "",
    phoneline: "plivoau",
    user: "-",
    duration: "-",
    time: "10 hours ago",
  },
  {
    arrow: "",
    contact: "+1 814-854-7548",
    call: "",
    phoneline: "plivoau",
    user: "-",
    duration: "-",
    time: "10 hours ago",
  },
  {
    arrow: "",
    contact: "+1 814-854-7548",
    call: "",
    phoneline: "plivoau",
    user: "-",
    duration: "-",
    time: "10 hours ago",
  },
  {
    arrow: "",
    contact: "+1 814-854-7548",
    call: "",
    phoneline: "plivoau",
    user: "-",
    duration: "-",
    time: "10 hours ago",
  },
];
// Call history
export const callhistorycolumns = [
  {
    name: " ",
    selector: "arrow",
    sortable: true,
    cell: (d) => (
      <p class="align-text-bottom text-nowrap">
        {d.id}
        <button type="submit" class=" btn btn-sm">
          <i class="fa-solid fa-arrow-up"></i>
        </button>
      </p>
    ),
  },
  {
    name: "CONTACT",
    selector: "contact",
    sortable: true,
    width: "15%",
    // cell: (d) => (
    //     <p class="align-text-bottom text-nowrap">
    //         {d.id}
    //         <button type="submit" class=" btn btn-sm btn-outline-warning"><i class="fa-regular fa-copy "></i></button>
    //     </p>
    // )
    // cell: (d) => <div className="fw-bold" style={{}}>{d.name}</div>
  },
  {
    name: " ",
    selector: "call",
    sortable: true,
    compact: true,
    cell: (d) => (
      <p class="align-text-bottom text-nowrap">
        {d.id}
        <button type="submit" class=" btn btn-sm">
          <i class="fa-solid fa-phone"></i> Call
        </button>
      </p>
    ),
  },
  {
    name: "PHONE LINE",
    selector: "phoneline",
    sortable: true,
  },
  {
    name: "USER",
    selector: "user",
    sortable: true,
  },
  {
    name: "DURATION",
    selector: "duration",
    sortable: true,
    // cell: (d) => (
    //     <p class="align-text-bottom text-nowrap">
    //         {d.recording}
    //         <svg height={24}>
    //             <circle cx="12" cy="12" r="5" fill="green" />
    //         </svg>
    //     </p>
    // )
  },

  {
    name: "TIME",
    selector: "time",
  },
];
export const callhistorydata = [
  {
    arrow: "",
    contact: "+1 814-854-7548",
    call: "",
    phoneline: "plivoau",
    user: "-",
    duration: "-",
    time: "10 hours ago",
  },
  {
    arrow: "",
    contact: "+1 814-854-7548",
    call: "",
    phoneline: "plivoau",
    user: "-",
    duration: "-",
    time: "10 hours ago",
  },
  {
    arrow: "",
    contact: "+1 814-854-7548",
    call: "",
    phoneline: "plivoau",
    user: "-",
    duration: "-",
    time: "10 hours ago",
  },
  {
    arrow: "",
    contact: "+1 814-854-7548",
    call: "",
    phoneline: "plivoau",
    user: "-",
    duration: "-",
    time: "10 hours ago",
  },
  {
    arrow: "",
    contact: "+1 814-854-7548",
    call: "",
    phoneline: "plivoau",
    user: "-",
    duration: "-",
    time: "10 hours ago",
  },
  {
    arrow: "",
    contact: "+1 814-854-7548",
    call: "",
    phoneline: "plivoau",
    user: "-",
    duration: "-",
    time: "10 hours ago",
  },
];
export const Phonedatacolumns = [
  {
    name: "Phone line name",
    selector: "phonelinename",
    sortable: true,
    compact: true,
  },
  {
    name: "Number",
    selector: "number",
    sortable: true,
    compact: true,
    // cell: (d) => <div style={{ backgroundColor: "rgb(135, 208, 104)", color: 'white', fontWeight: 'bold', padding: '3px' }}>{d.status}</div>
  },
  {
    name: "Status",
    selector: "status",
    sortable: true,
  },
  {
    name: "",
    selector: "settings",
    sortable: true,
    cell: (d) => (
      <p class="align-text-bottom text-nowrap">
        {d.id}
        <button type="submit" class=" btn btn-sm">
        <i class="fa-solid fa-gear"></i> Settings
        </button>
      </p>
    ),
  },
];
export const Phonedata = [
  {
    phonelinename: "plivoau",
    number: "+1878-888-2622",
    status: "Active",
    settings: "",
  },
  {
    phonelinename: "plivoau",
    number: "+1878-888-2622",
    status: "Active",
    settings: "",
  },
];
