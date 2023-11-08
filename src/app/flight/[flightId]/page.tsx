// import UnixToJalaliConverter from "@/components/dateTime/ConverUnix";
// import React from "react";

// type Props = {};
// type AirPort = {
//   airport: any;
// };
// type Arrivals = {
//   arrivals: any[];
// };
// type Departures = {
//   departures: any[];
// };
// type Ground = {
//   ground: any[];
// };
// type Result = {
//   arrivals: Arrivals[];
//   departures: Departures[];
//   Ground: Ground[];
// };
// type Flight = {
//   result: Result;
// };

// const FlightId = async (props: Props) => {
//   const body: AirPort = {
//     airport: "mhd",
//   };
//   const res = await fetch("http://77.238.108.34:8086", {
//     method: "POST",
//     body: JSON.stringify(body),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   const flight: Flight = await res.json();
//   console.log(flight.result.arrivals);
//   return (
//     <div>
//       {flight.result.arrivals.map((item) => (
//         <>
//           <div className=" flex flex-row ">
//             <h1 className=" w-1/5">{item.flight.airline.name}</h1>
//             <h1 className=" w-1/5">{item.flight.status.text}</h1>
//             {/* <h1 className=" text-justify">
//               {item.flight.time.scheduled.arrival}
//             </h1>
//             <h1 className=" text-justify">
//               {item.flight.time.scheduled.departure}
//             </h1> */}
//             <UnixToJalaliConverter
//               unixTimestamp={item.flight.time.scheduled.departure}
//             />
//             <UnixToJalaliConverter
//               unixTimestamp={item.flight.time.scheduled.arrival}
//             />
//             <h1 className="w-1/5">{item.flight.airline.code.icao}</h1>
//             <h1 className="w-1/5">{item.flight.aircraft.model.text}</h1>

//             <h1 className="w-1/5">{item.flight.airport.origin.name}</h1>

//             <h1 className="w-1/5">{item.flight.status.generic.status.type}</h1>
//             <h1 className="w-1/5">{item.flight.status.generic.status.color}</h1>
//             <h1 className="w-1/5">
//               {item.flight.identification.number.default}
//             </h1>
//             <h1 className="w-1/5">
//               {item.flight.airport.origin.visible ? "true" : "false"}
//             </h1>

//             <h1 className="w-1/5">
//               {item.flight.airport.destination.info.baggage ?? "-"}
//             </h1>
//             <h1 className="w-1/5">
//               {item.flight.status.live ? "Live" : "notLive"}
//             </h1>
//           </div>
//         </>
//       ))}
//     </div>
//   );
// };

// export default FlightId;

import React from "react";

type Props = {};

const page = (props: Props) => {
  return <div>page</div>;
};

export default page;
