"use client";

import { useState } from "react";
import { MapPin, Calendar, Search, Download, X, Navigation } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const statusCounts = [
  { label: "Not Started Yet", count: 2, color: "bg-[#F5F6FA] text-[#777777]" },
  { label: "Driver Accepted", count: 0, color: "bg-[#E8F5E9] text-[#18751C]" },
  { label: "Driver Rejected", count: 0, color: "bg-[#FFEBEE] text-[#D22630]" },
  { label: "Trip Started", count: 22, color: "bg-[#E3F2FD] text-[#0047B2]" },
  { label: "Pickup Started", count: 2, color: "bg-[#FFF3E0] text-[#E65100]" },
  { label: "Drop Started", count: 0, color: "bg-[#E0F2F1] text-[#00695C]" },
  { label: "Completed", count: 80, color: "bg-[#E8F5E9] text-[#18751C]" },
  { label: "Completed Late", count: 2, color: "bg-[#FFF3E0] text-[#E65100]" },
  { label: "No Show Completed", count: 0, color: "bg-[#FFEBEE] text-[#D22630]" },
  { label: "Auto Cancelled", count: 11, color: "bg-[#FFEBEE] text-[#D22630]" },
];

const trips = [
  {
    id: "TRIP_00001_DO_05062026_0230",
    status: "AUTO CANCELLED",
    statusColor: "text-[#D22630]",
    type: "Drop",
    date: "05/06/2026 02:30",
    escort: "No",
    shiftTime: "05/06/2026 02:30",
    empCount: 3,
    location: "Domlur",
    vendor: "RGL",
    vehicleNo: "KA05AM4177",
  },
  {
    id: "TRIP_00002_DO_05062026_0230",
    status: "AUTO CANCELLED",
    statusColor: "text-[#D22630]",
    type: "Drop",
    date: "05/06/2026 02:30",
    escort: "No",
    shiftTime: "05/06/2026 02:30",
    empCount: 5,
    location: "Kumaraswamy Layout",
    vendor: "RGL",
    vehicleNo: "KA53AS3653",
  },
  {
    id: "TRIP_00003_DO_05062026_0230",
    status: "COMPLETED LATE",
    statusColor: "text-[#E65100]",
    type: "Drop",
    date: "05/06/2026 02:30",
    escort: "No",
    shiftTime: "05/06/2026 02:30",
    empCount: 1,
    location: "Somasundarapura",
    vendor: "RGL",
    vehicleNo: "KA04AE1159",
  },
];

export default function LiveTripMonitorPage() {
  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      <Header />
      <div className="wrapper relative">
        <Sidebar />
        <div className="content-wrapper p-4">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#0047B2]" />
              <h1 className="text-[18px] font-semibold text-[#222222]">Live Trip Monitor</h1>
            </div>
            <div className="flex items-center gap-4 text-[12px] text-[#777777]">
              <div>
                <span className="text-[#848484]">Last refreshed :</span>{" "}
                <span>5/6/2026 15:34</span>
              </div>
              <div>
                <span className="text-[#848484]">Next Refresh :</span>{" "}
                <span className="text-[#0047B2]">00 min 53 sec</span>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="dashboard-card p-4 mb-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <label className="text-[13px] text-[#777777]">From Date</label>
                <input
                  type="date"
                  className="border border-[#E0E4E9] rounded px-3 py-2 text-[13px]"
                  defaultValue="2026-06-05"
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-[13px] text-[#777777]">To Date</label>
                <input
                  type="date"
                  className="border border-[#E0E4E9] rounded px-3 py-2 text-[13px]"
                  defaultValue="2026-06-05"
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-[13px] text-[#777777]">Shift Time</label>
                <select className="border border-[#E0E4E9] rounded px-3 py-2 text-[13px]">
                  <option>All</option>
                  <option>02:30</option>
                  <option>05:00</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[13px] text-[#777777]">Trip Type</span>
                <div className="flex gap-1">
                  <button className="bg-[#0047B2] text-white px-3 py-1 rounded text-[12px]">Pick</button>
                  <button className="bg-[#F5F6FA] text-[#222222] border border-[#E0E4E9] px-3 py-1 rounded text-[12px]">Drop</button>
                  <button className="bg-[#F5F6FA] text-[#222222] border border-[#E0E4E9] px-3 py-1 rounded text-[12px]">Both</button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="bg-[#0047B2] text-white px-3 py-1 rounded text-[12px]">Cab</button>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <button className="bg-[#0047B2] text-white px-3 py-1 rounded text-[12px]">RGL</button>
                <button className="text-[13px] text-[#0047B2] hover:underline flex items-center gap-1">
                  <X className="w-3 h-3" />
                  Clear Filter
                </button>
                <div className="flex items-center gap-2 border border-[#E0E4E9] rounded px-3 py-2">
                  <Search className="w-4 h-4 text-[#777777]" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent text-[13px] outline-none"
                  />
                </div>
                <button className="bg-[#F5F6FA] text-[#222222] border border-[#E0E4E9] px-4 py-2 rounded text-[13px] hover:bg-[#E0E4E9] transition-colors flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Export
                </button>
              </div>
            </div>
          </div>

          {/* Status Counts */}
          <div className="grid grid-cols-5 gap-2 mb-4">
            {statusCounts.map((status) => (
              <div key={status.label} className={`dashboard-card p-3 ${status.color}`}>
                <div className="text-[11px] mb-1">{status.label}</div>
                <div className="text-[20px] font-semibold">{status.count}</div>
              </div>
            ))}
          </div>

          {/* Special Stats */}
          <div className="grid grid-cols-6 gap-2 mb-4">
            <div className="dashboard-card p-3 bg-[#FCE4EC]">
              <div className="text-[11px] text-[#880E4F] mb-1">Women Travelling Alone</div>
              <div className="text-[20px] font-semibold text-[#880E4F]">10</div>
            </div>
            <div className="dashboard-card p-3 bg-[#E8F5E9]">
              <div className="text-[11px] text-[#18751C] mb-1">Yet To Pick</div>
              <div className="text-[20px] font-semibold text-[#18751C]">32</div>
            </div>
            <div className="dashboard-card p-3 bg-[#E3F2FD]">
              <div className="text-[11px] text-[#0047B2] mb-1">Yet To Drop</div>
              <div className="text-[20px] font-semibold text-[#0047B2]">35</div>
            </div>
            <div className="dashboard-card p-3 bg-[#E8F5E9]">
              <div className="text-[11px] text-[#18751C] mb-1">Show</div>
              <div className="text-[20px] font-semibold text-[#18751C]">139</div>
            </div>
            <div className="dashboard-card p-3 bg-[#FFEBEE]">
              <div className="text-[11px] text-[#D22630] mb-1">No Show</div>
              <div className="text-[20px] font-semibold text-[#D22630]">2</div>
            </div>
            <div className="dashboard-card p-3 bg-[#FFF8E1]">
              <div className="text-[11px] text-[#F57C00] mb-1">Safe Home</div>
              <div className="text-[20px] font-semibold text-[#F57C00]">46</div>
            </div>
          </div>

          {/* Trips Table */}
          <div className="dashboard-card overflow-x-auto">
            <table className="w-full data-table">
              <thead>
                <tr>
                  <th>TRIP ID</th>
                  <th>STATUS</th>
                  <th>FACILITY REACH STATUS</th>
                  <th>TYPE</th>
                  <th>TRIP DATE TIME</th>
                  <th>ESCORT</th>
                  <th>SHIFT TIME</th>
                  <th>EMP COUNT</th>
                  <th>LOCATION</th>
                  <th>VENDOR</th>
                  <th>VEHICLE NO</th>
                  <th>TRACKING</th>
                </tr>
              </thead>
              <tbody>
                {trips.map((trip) => (
                  <tr key={trip.id}>
                    <td className="font-medium">{trip.id}</td>
                    <td className={trip.statusColor}>{trip.status}</td>
                    <td></td>
                    <td>{trip.type}</td>
                    <td>{trip.date}</td>
                    <td>{trip.escort}</td>
                    <td>{trip.shiftTime}</td>
                    <td>{trip.empCount}</td>
                    <td>{trip.location}</td>
                    <td>{trip.vendor}</td>
                    <td>{trip.vehicleNo}</td>
                    <td>
                      <button className="text-[#0047B2] text-[12px] hover:underline flex items-center gap-1">
                        <Navigation className="w-3 h-3" />
                        track vehicle
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
