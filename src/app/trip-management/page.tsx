"use client";

import { useState } from "react";
import { Bus, Calendar, Clock, Users, Copy, FlipHorizontal, Save, Snowflake, List, Grid3X3, Plus } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function TripManagementPage() {
  const [viewMode, setViewMode] = useState("list");
  const [tripType, setTripType] = useState("pick");

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      <Header />
      <div className="wrapper relative">
        <Sidebar />
        <div className="content-wrapper p-4">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Bus className="w-5 h-5 text-[#0047B2]" />
              <h1 className="text-[18px] font-semibold text-[#222222]">Trip Management</h1>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-[#0047B2] text-white px-3 py-1 rounded text-[12px]">Cab</button>
              <button className="bg-[#F5F6FA] text-[#222222] border border-[#E0E4E9] px-4 py-2 rounded text-[13px] hover:bg-[#E0E4E9] transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" />
                New Trip
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="dashboard-card p-4 mb-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <label className="text-[13px] text-[#777777]">Date</label>
                <input
                  type="date"
                  className="border border-[#E0E4E9] rounded px-3 py-2 text-[13px]"
                  defaultValue="2026-06-05"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[13px] text-[#777777]">Pick/Drop</span>
                <div className="flex rounded border border-[#E0E4E9] overflow-hidden">
                  <button
                    onClick={() => setTripType("pick")}
                    className={`px-3 py-2 text-[13px] ${tripType === "pick" ? "bg-[#0047B2] text-white" : "bg-white text-[#222222]"}`}
                  >
                    Pick
                  </button>
                  <button
                    onClick={() => setTripType("drop")}
                    className={`px-3 py-2 text-[13px] ${tripType === "drop" ? "bg-[#0047B2] text-white" : "bg-white text-[#222222]"}`}
                  >
                    Drop
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-[13px] text-[#777777]">Shift Time</label>
                <select className="border border-[#E0E4E9] rounded px-3 py-2 text-[13px]">
                  <option>02:30</option>
                  <option>05:00</option>
                  <option>14:30</option>
                  <option>17:30</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-[13px] text-[#777777]">Routing Criteria</label>
                <span className="text-[13px] text-[#222222]">Max Employees : 5</span>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <button className="bg-[#0047B2] text-white px-4 py-2 rounded text-[13px] hover:bg-[#003a94] transition-colors">
                  Create Trips
                </button>
                <button className="bg-[#F5F6FA] text-[#222222] border border-[#E0E4E9] px-4 py-2 rounded text-[13px] hover:bg-[#E0E4E9] transition-colors flex items-center gap-2">
                  <Copy className="w-4 h-4" />
                  Copy Trips
                </button>
                <button className="bg-[#F5F6FA] text-[#222222] border border-[#E0E4E9] px-4 py-2 rounded text-[13px] hover:bg-[#E0E4E9] transition-colors flex items-center gap-2">
                  <FlipHorizontal className="w-4 h-4" />
                  Mirror Trips
                </button>
                <button className="bg-[#F5F6FA] text-[#222222] border border-[#E0E4E9] px-4 py-2 rounded text-[13px] hover:bg-[#E0E4E9] transition-colors">
                  Vendor
                </button>
                <button className="bg-[#0047B2] text-white px-4 py-2 rounded text-[13px] hover:bg-[#003a94] transition-colors flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  Save
                </button>
                <button className="bg-[#F5F6FA] text-[#222222] border border-[#E0E4E9] px-4 py-2 rounded text-[13px] hover:bg-[#E0E4E9] transition-colors flex items-center gap-2">
                  <Snowflake className="w-4 h-4" />
                  Freeze
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-5 gap-4 mb-4">
            <div className="dashboard-card p-4">
              <div className="text-[12px] text-[#777777] mb-1">New Rostered Emp</div>
              <div className="text-[24px] font-semibold text-[#0047B2]">0</div>
              <div className="text-[11px] text-[#848484]">M 0 | F 0</div>
            </div>
            <div className="dashboard-card p-4">
              <div className="text-[12px] text-[#777777] mb-1">Routed Emp</div>
              <div className="text-[24px] font-semibold text-[#0047B2]">0</div>
              <div className="text-[11px] text-[#848484]">M 0 | F 0</div>
            </div>
            <div className="dashboard-card p-4">
              <div className="text-[12px] text-[#777777] mb-1">Trips</div>
              <div className="text-[24px] font-semibold text-[#0047B2]">0</div>
            </div>
            <div className="dashboard-card p-4">
              <div className="text-[12px] text-[#777777] mb-1">Vehicles</div>
              <div className="text-[24px] font-semibold text-[#0047B2]">0</div>
            </div>
            <div className="dashboard-card p-4">
              <div className="text-[12px] text-[#777777] mb-1">Escorts</div>
              <div className="text-[24px] font-semibold text-[#0047B2]">0</div>
            </div>
          </div>

          {/* Tweaks Available */}
          <div className="dashboard-card p-4 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-[13px] text-[#777777]">Tweaks Available</span>
              <span className="text-[24px] font-semibold text-[#0047B2]">20</span>
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-[14px] font-medium text-[#222222]">No Trips Found</div>
            <div className="flex items-center gap-1 bg-white rounded border border-[#E0E4E9] p-1">
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded ${viewMode === "list" ? "bg-[#0047B2] text-white" : "text-[#777777]"}`}
              >
                <List className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${viewMode === "grid" ? "bg-[#0047B2] text-white" : "text-[#777777]"}`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Empty State */}
          <div className="dashboard-card p-8 text-center">
            <Bus className="w-12 h-12 text-[#E0E4E9] mx-auto mb-3" />
            <p className="text-[14px] text-[#777777] mb-3">No Trips Found</p>
            <button className="bg-[#0047B2] text-white px-4 py-2 rounded text-[13px] hover:bg-[#003a94] transition-colors flex items-center gap-2 mx-auto">
              <Plus className="w-4 h-4" />
              Add New Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
