"use client";

import { useState } from "react";
import { Settings, Search, Download } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const employees = [
  { id: "261187", name: "A Kiran Kumar", facility: "Ironmountain", transportType: "Office Transport", transportMode: "Cab", active: true },
  { id: "272322", name: "Aditya P", facility: "Ironmountain", transportType: "Office Transport", transportMode: "Cab", active: true },
  { id: "300017", name: "Aravind Sudhir Kamath", facility: "Ironmountain", transportType: "Office Transport", transportMode: "Cab", active: true },
  { id: "290231", name: "Ganesh.K", facility: "Ironmountain", transportType: "Office Transport", transportMode: "Cab", active: true },
  { id: "253250", name: "Lingaraj B Patil", facility: "Ironmountain", transportType: "Office Transport", transportMode: "Cab", active: true },
  { id: "251625", name: "Mahesh Prabhu", facility: "Ironmountain", transportType: "Office Transport", transportMode: "Cab", active: true },
];

export default function ActivateDeactivatePage() {
  const [activeTab, setActiveTab] = useState("employee");

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      <Header />
      <div className="wrapper relative">
        <Sidebar />
        <div className="content-wrapper p-4">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Settings className="w-5 h-5 text-[#0047B2]" />
              <h1 className="text-[18px] font-semibold text-[#222222]">Activation/Deactivation</h1>
            </div>
            <button className="bg-[#F5F6FA] text-[#222222] border border-[#E0E4E9] px-4 py-2 rounded text-[13px] hover:bg-[#E0E4E9] transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 mb-4">
            {[
              { id: "employee", label: "Employee" },
              { id: "vehicle", label: "Vehicle" },
              { id: "driver", label: "Driver" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-t text-[13px] capitalize transition-colors ${
                  activeTab === tab.id
                    ? "bg-[#0047B2] text-white"
                    : "bg-white text-[#777777] hover:bg-[#F5F6FA]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="dashboard-card p-4 mb-4">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-[#777777]" />
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                className="flex-1 border border-[#E0E4E9] rounded px-3 py-2 text-[13px]"
              />
            </div>
          </div>

          {/* Table */}
          <div className="dashboard-card overflow-x-auto">
            <table className="w-full data-table">
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>EMP ID</th>
                  <th>FACILITY</th>
                  <th>TRANSPORT TYPE</th>
                  <th>TRANSPORT MODE</th>
                  <th>ACTIVE</th>
                  <th>LOGIN RESTRICTIONS</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => (
                  <tr key={emp.id}>
                    <td className="font-medium">{emp.name}</td>
                    <td>{emp.id}</td>
                    <td>{emp.facility}</td>
                    <td>{emp.transportType}</td>
                    <td>{emp.transportMode}</td>
                    <td>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked={emp.active} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0047B2]"></div>
                      </label>
                    </td>
                    <td></td>
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
