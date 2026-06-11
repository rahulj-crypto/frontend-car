"use client";

import { useState } from "react";
import { Users, Calendar, Search, Download, Upload, Plus, X } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function RosteringPage() {
  const [activeTab, setActiveTab] = useState("login");
  const [rosterType, setRosterType] = useState("normal");

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      <Header />
      <div className="wrapper relative">
        <Sidebar />
        <div className="content-wrapper p-4">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-[#0047B2]" />
              <h1 className="text-[18px] font-semibold text-[#222222]">Rostering</h1>
            </div>
          </div>

          {/* Filters */}
          <div className="dashboard-card p-4 mb-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <label className="text-[13px] text-[#777777]">From</label>
                <input
                  type="date"
                  className="border border-[#E0E4E9] rounded px-3 py-2 text-[13px]"
                  defaultValue="2026-06-05"
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-[13px] text-[#777777]">To</label>
                <input
                  type="date"
                  className="border border-[#E0E4E9] rounded px-3 py-2 text-[13px]"
                  defaultValue="2026-06-05"
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-[13px] text-[#777777]">Teams</label>
                <select className="border border-[#E0E4E9] rounded px-3 py-2 text-[13px]">
                  <option>All</option>
                  <option>Anu Janakappa Team</option>
                  <option>Keerthi team</option>
                </select>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <button className="bg-[#0047B2] text-white px-4 py-2 rounded text-[13px] hover:bg-[#003a94] transition-colors">
                  Roster
                </button>
                <button className="bg-[#0047B2] text-white px-4 py-2 rounded text-[13px] hover:bg-[#003a94] transition-colors flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Save
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 mb-4">
            {["login", "logout", "both"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-t text-[13px] capitalize transition-colors ${
                  activeTab === tab
                    ? "bg-[#0047B2] text-white"
                    : "bg-white text-[#777777] hover:bg-[#F5F6FA]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Roster Type */}
          <div className="dashboard-card p-4 mb-4">
            <div className="flex items-center justify-between">
              <select
                value={rosterType}
                onChange={(e) => setRosterType(e.target.value)}
                className="border border-[#E0E4E9] rounded px-3 py-2 text-[13px]"
              >
                <option value="normal">Normal</option>
                <option value="medical-planned">Medical Emergency Planned</option>
                <option value="medical-unplanned">Medical Emergency Unplanned</option>
              </select>
              <div className="flex items-center gap-2">
                <button className="bg-[#F5F6FA] text-[#222222] border border-[#E0E4E9] px-4 py-2 rounded text-[13px] hover:bg-[#E0E4E9] transition-colors flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Template
                </button>
                <button className="bg-[#F5F6FA] text-[#222222] border border-[#E0E4E9] px-4 py-2 rounded text-[13px] hover:bg-[#E0E4E9] transition-colors flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  Upload Template
                </button>
                <button className="bg-[#0047B2] text-white px-4 py-2 rounded text-[13px] hover:bg-[#003a94] transition-colors flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add New
                </button>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="dashboard-card p-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 flex-1">
                <Search className="w-4 h-4 text-[#777777]" />
                <input
                  type="text"
                  placeholder="Search employees..."
                  className="flex-1 border border-[#E0E4E9] rounded px-3 py-2 text-[13px]"
                />
              </div>
              <div className="flex items-center gap-2">
                <button className="text-[13px] text-[#0047B2] hover:underline">Show All Employees</button>
                <span className="text-[#E0E4E9]">|</span>
                <button className="text-[13px] text-[#0047B2] hover:underline">Show selected Employees</button>
                <span className="text-[#E0E4E9]">|</span>
                <button className="text-[13px] text-[#FB6767] hover:underline flex items-center gap-1">
                  <X className="w-3 h-3" />
                  Clear Check
                </button>
              </div>
            </div>
          </div>

          {/* Employee Table */}
          <div className="dashboard-card">
            <div className="overflow-x-auto">
              <table className="w-full data-table">
                <thead>
                  <tr>
                    <th className="w-10">
                      <input type="checkbox" className="rounded border-[#E0E4E9]" />
                    </th>
                    <th>NAME</th>
                    <th>EMP ID</th>
                    <th>SHIFT TIME</th>
                    <th>ROUTE</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={6} className="text-center py-8 text-[#777777]">
                      No items to display
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
