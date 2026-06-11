"use client";

import { useState } from "react";
import { MapPin, Navigation, Search, Plus, Minus } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const vehicles = [
  "KA02AL0593", "KA04AD9489", "KA53AS3653", "KA04AE2279", "KA03AD6270",
  "KA04AB1663", "KA03AN4318", "KA01AM6568", "KA32D2267", "KA53C6646",
  "KA53D8526", "KA03AM7144", "KA41AA6308", "KA51AK6866", "KA592308",
  "KA53AB7781", "KA05AH4731", "KA09AA4816", "KA51AA8553", "KA04AE9485",
];

const statusFilters = [
  { id: "all", label: "All Vehicles", count: 329, color: "bg-[#0047B2]" },
  { id: "running", label: "Running", count: 0, color: "bg-[#18751C]", desc: "Vehicle speed is greater than 0 and ignition is on for less than 2 min" },
  { id: "idle", label: "Idle", count: 3, color: "bg-[#E65100]", desc: "Vehicle speed is 0 and ignition is on for more than 2 minutes" },
  { id: "stopped", label: "Stopped", count: 4, color: "bg-[#D22630]", desc: "Vehicle speed is zero and ignition is off" },
  { id: "no-gps", label: "No GPS Coverage", count: 23, color: "bg-[#777777]", desc: "No data received from past 30 minutes" },
  { id: "offline", label: "Offline", count: 299, color: "bg-[#848484]", desc: "No data available for these vehicles" },
];

export default function VehicleTrackingPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      <Header />
      <div className="wrapper relative">
        <Sidebar />
        <div className="content-wrapper p-0">
          {/* Map Container */}
          <div className="relative h-[calc(100vh-51px)]">
            {/* Map Placeholder */}
            <div className="absolute inset-0 bg-[#E8F4FD] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#0047B2] mx-auto mb-4" />
                <p className="text-[16px] text-[#777777]">Vehicle Tracking Map</p>
                <p className="text-[14px] text-[#848484] mt-2">Real-time vehicle locations will be displayed here</p>
              </div>
            </div>

            {/* Map Controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button className="w-8 h-8 bg-white rounded shadow-md flex items-center justify-center hover:bg-[#F5F6FA]">
                <Plus className="w-4 h-4 text-[#222222]" />
              </button>
              <button className="w-8 h-8 bg-white rounded shadow-md flex items-center justify-center hover:bg-[#F5F6FA]">
                <Minus className="w-4 h-4 text-[#222222]" />
              </button>
            </div>

            {/* Left Panel - Status Filters */}
            <div className="absolute top-4 left-4 w-[280px] bg-white rounded-lg shadow-md p-4">
              <h3 className="text-[14px] font-semibold text-[#222222] mb-3">Vehicles</h3>
              <div className="space-y-2">
                {statusFilters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`w-full flex items-center justify-between p-2 rounded text-left transition-colors ${
                      activeFilter === filter.id ? "bg-[#E8F4FD]" : "hover:bg-[#F5F6FA]"
                    }`}
                    title={filter.desc}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${filter.color}`}></span>
                      <span className="text-[13px] text-[#222222]">{filter.label}</span>
                    </div>
                    <span className={`text-[13px] font-semibold ${filter.id === "all" ? "text-[#0047B2]" : "text-[#777777]"}`}>
                      {filter.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Panel - Vehicle List */}
            <div className="absolute top-4 right-16 w-[200px] bg-white rounded-lg shadow-md max-h-[calc(100vh-100px)] overflow-hidden flex flex-col">
              <div className="p-3 border-b border-[#E0E4E9]">
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-[#777777]" />
                  <input
                    type="text"
                    placeholder="search"
                    className="flex-1 text-[13px] outline-none"
                  />
                </div>
              </div>
              <div className="overflow-y-auto flex-1 p-2">
                {vehicles.map((vehicle) => (
                  <button
                    key={vehicle}
                    onClick={() => setSelectedVehicle(vehicle)}
                    className={`w-full text-left p-2 rounded text-[12px] transition-colors ${
                      selectedVehicle === vehicle
                        ? "bg-[#E8F4FD] text-[#0047B2]"
                        : "hover:bg-[#F5F6FA] text-[#222222]"
                    }`}
                  >
                    {vehicle}
                  </button>
                ))}
              </div>
              <div className="p-3 border-t border-[#E0E4E9]">
                <button className="w-full bg-[#F5F6FA] text-[#222222] border border-[#E0E4E9] px-3 py-2 rounded text-[12px] hover:bg-[#E0E4E9] transition-colors">
                  Add (0) Vehicles
                </button>
              </div>
            </div>

            {/* Bottom Panel - Selected Vehicle Info */}
            {selectedVehicle && (
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Navigation className="w-5 h-5 text-[#0047B2]" />
                    <div>
                      <p className="text-[14px] font-semibold text-[#222222]">{selectedVehicle}</p>
                      <p className="text-[12px] text-[#777777]">Last updated: 5/6/2026 15:34</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[13px]">
                    <div>
                      <span className="text-[#777777]">Speed: </span>
                      <span className="text-[#222222]">0 km/h</span>
                    </div>
                    <div>
                      <span className="text-[#777777]">Status: </span>
                      <span className="text-[#18751C]">Stopped</span>
                    </div>
                    <button
                      onClick={() => setSelectedVehicle(null)}
                      className="text-[#777777] hover:text-[#D22630]"
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
