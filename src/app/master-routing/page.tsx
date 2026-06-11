"use client";

import { useState } from "react";
import { Grid3X3, MapPin, Minimize2, Trash2, FileText, Download, Upload, Save, Plus } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const routes = [
  { id: 1, name: "Added Route", count: 5, type: "added" },
  { id: 2, name: "Added Route", count: 8, type: "added" },
  { id: 3, name: "Added Route", count: 46, type: "added" },
  { id: 4, name: "New Route", count: 303, type: "new" },
  { id: 5, name: "Added Route", count: 193, type: "added" },
  { id: 6, name: "Added Route", count: 69, type: "added" },
  { id: 7, name: "Route-3", count: 2, type: "added" },
  { id: 8, name: "Added Route", count: 358, type: "added" },
  { id: 9, name: "Munekolala", count: 53, type: "added" },
];

export default function MasterRoutingPage() {
  const [selectedView, setSelectedView] = useState("cab");

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      <Header />
      <div className="wrapper relative">
        <Sidebar />
        <div className="content-wrapper p-4">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Grid3X3 className="w-5 h-5 text-[#0047B2]" />
              <h1 className="text-[18px] font-semibold text-[#222222]">Master Routing</h1>
              <div className="flex gap-2 ml-4">
                <span className="bg-[#0047B2] text-white px-3 py-1 rounded text-[12px]">
                  Routes Unassigned employees <b>0</b>
                </span>
                <span className="bg-[#0047B2] text-white px-3 py-1 rounded text-[12px]">
                  Routes Assigned Employees <b>1037</b>
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedView(selectedView === "cab" ? "bus" : "cab")}
                className={`px-4 py-2 rounded text-[13px] font-medium transition-colors ${
                  selectedView === "cab"
                    ? "bg-[#0047B2] text-white"
                    : "bg-[#F5F6FA] text-[#222222] border border-[#E0E4E9]"
                }`}
              >
                Cab
              </button>
              <button className="p-2 hover:bg-[#F5F6FA] rounded text-[#777777]" title="Hide Map">
                <MapPin className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-[#F5F6FA] rounded text-[#777777]" title="Collapse">
                <Minimize2 className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-[#F5F6FA] rounded text-[#777777]" title="Bulk Delete">
                <Trash2 className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-[#F5F6FA] rounded text-[#777777]" title="Export">
                <FileText className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-[#F5F6FA] rounded text-[#777777]" title="Download Template">
                <Download className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-[#F5F6FA] rounded text-[#777777]" title="Upload">
                <Upload className="w-4 h-4" />
              </button>
              <button className="bg-[#F5F6FA] text-[#222222] border border-[#E0E4E9] px-4 py-2 rounded text-[13px] hover:bg-[#E0E4E9] transition-colors">
                Auto Generate
              </button>
              <button className="bg-[#0047B2] text-white px-4 py-2 rounded text-[13px] hover:bg-[#003a94] transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" />
                New Route
              </button>
              <button className="bg-[#0047B2] text-white px-4 py-2 rounded text-[13px] hover:bg-[#003a94] transition-colors flex items-center gap-2">
                <Save className="w-4 h-4" />
                Save
              </button>
            </div>
          </div>

          {/* Routes Grid */}
          <div className="flex gap-4">
            {/* Left Panel - Routes */}
            <div className="w-[300px] bg-white rounded shadow-sm">
              <div className="p-3 border-b border-[#E0E4E9]">
                <label className="flex items-center gap-2 text-[13px] text-[#222222]">
                  <input type="checkbox" className="rounded border-[#E0E4E9]" />
                  Select All Routes
                </label>
              </div>
              <div className="p-3 space-y-2 max-h-[600px] overflow-y-auto">
                {routes.map((route) => (
                  <div
                    key={route.id}
                    className={`p-3 rounded border cursor-pointer hover:shadow-md transition-shadow ${
                      route.type === "new"
                        ? "bg-[#E8F4FD] border-[#0047B2]"
                        : "bg-[#F9F9F9] border-[#E0E4E9]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-medium text-[#222222]">{route.name}</span>
                      <span className="bg-[#0047B2] text-white text-[11px] px-2 py-0.5 rounded-full">
                        {route.count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel - Map Placeholder */}
            <div className="flex-1 bg-[#E8F4FD] rounded shadow-sm flex items-center justify-center min-h-[600px]">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#0047B2] mx-auto mb-3" />
                <p className="text-[14px] text-[#777777]">Map View</p>
                <p className="text-[12px] text-[#848484] mt-1">Routes will be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
