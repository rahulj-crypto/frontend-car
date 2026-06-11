"use client";

import { User, Plus, Search, Download, Upload, Edit, Trash2 } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const drivers = [
  {
    name: "8828",
    gender: "Male",
    dlNumber: "8828",
    badgeNumber: "8828",
    contact: "9886027517",
    email: "",
    vendor: "RGL",
    dlEffectiveFrom: "",
    dlExpiry: "",
    address: "null null null",
    inductionDate: "4/11/2025 15:31",
    firstVaccination: "",
    secondVaccination: "",
    pvcExpiry: "",
    medicalExpiry: "",
    active: "Yes",
  },
  {
    name: "1335",
    gender: "Male",
    dlNumber: "1335",
    badgeNumber: "0",
    contact: "8660322355",
    email: "",
    vendor: "RGL",
    dlEffectiveFrom: "",
    dlExpiry: "",
    address: "null null null",
    inductionDate: "2/12/2025 11:47",
    firstVaccination: "",
    secondVaccination: "",
    pvcExpiry: "",
    medicalExpiry: "",
    active: "Yes",
  },
  {
    name: "6162",
    gender: "Male",
    dlNumber: "61622202",
    badgeNumber: "0",
    contact: "9731998015",
    email: "",
    vendor: "RGL",
    dlEffectiveFrom: "",
    dlExpiry: "",
    address: "null null null",
    inductionDate: "3/6/2026 11:29",
    firstVaccination: "",
    secondVaccination: "",
    pvcExpiry: "",
    medicalExpiry: "",
    active: "Yes",
  },
];

export default function DriverManagementPage() {
  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      <Header />
      <div className="wrapper relative">
        <Sidebar />
        <div className="content-wrapper p-4">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-[#0047B2]" />
              <h1 className="text-[18px] font-semibold text-[#222222]">Driver Management</h1>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-[#F5F6FA] text-[#222222] border border-[#E0E4E9] px-4 py-2 rounded text-[13px] hover:bg-[#E0E4E9] transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download templates
              </button>
              <button className="bg-[#F5F6FA] text-[#222222] border border-[#E0E4E9] px-4 py-2 rounded text-[13px] hover:bg-[#E0E4E9] transition-colors flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Upload
              </button>
              <button className="bg-[#0047B2] text-white px-4 py-2 rounded text-[13px] hover:bg-[#003a94] transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Driver
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="dashboard-card p-4">
              <div className="text-[12px] text-[#777777] mb-1">Uploaded</div>
              <div className="text-[24px] font-semibold text-[#18751C]">10</div>
            </div>
            <div className="dashboard-card p-4">
              <div className="text-[12px] text-[#777777] mb-1">Not Uploaded</div>
              <div className="text-[24px] font-semibold text-[#E65100]">188</div>
            </div>
            <div className="dashboard-card p-4">
              <div className="text-[12px] text-[#777777] mb-1">Active</div>
              <div className="text-[24px] font-semibold text-[#0047B2]">View</div>
            </div>
          </div>

          {/* Filters */}
          <div className="dashboard-card p-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <label className="text-[13px] text-[#777777]">Vendor</label>
                <select className="border border-[#E0E4E9] rounded px-3 py-2 text-[13px]">
                  <option>All</option>
                  <option>RGL</option>
                </select>
              </div>
              <div className="flex items-center gap-2 flex-1 ml-4">
                <Search className="w-4 h-4 text-[#777777]" />
                <input
                  type="text"
                  placeholder="Search drivers..."
                  className="flex-1 border border-[#E0E4E9] rounded px-3 py-2 text-[13px]"
                />
              </div>
            </div>
          </div>

          {/* Driver Table */}
          <div className="dashboard-card overflow-x-auto">
            <table className="w-full data-table text-[11px]">
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>GENDER</th>
                  <th>DL NUMBER</th>
                  <th>BADGE NUMBER</th>
                  <th>CONTACT NUMBER</th>
                  <th>EMAIL ID</th>
                  <th>VENDOR</th>
                  <th>DL EFFECTIVE FROM</th>
                  <th>DL EXPIRY DATE</th>
                  <th>ADDRESS</th>
                  <th>INDUCTION DATE</th>
                  <th>DRIVER FIRST VACCINATION DATE</th>
                  <th>DRIVER SECOND VACCINATION DATE</th>
                  <th>DRIVER PVC EXPIRY DATE</th>
                  <th>MEDICAL EXPIRY DATE</th>
                  <th>ACTIVE</th>
                  <th>SCANNED DOC</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map((driver, idx) => (
                  <tr key={idx}>
                    <td className="font-medium whitespace-nowrap">{driver.name}</td>
                    <td>{driver.gender}</td>
                    <td>{driver.dlNumber}</td>
                    <td>{driver.badgeNumber}</td>
                    <td>{driver.contact}</td>
                    <td>{driver.email}</td>
                    <td>{driver.vendor}</td>
                    <td>{driver.dlEffectiveFrom}</td>
                    <td>{driver.dlExpiry}</td>
                    <td className="max-w-[150px] truncate">{driver.address}</td>
                    <td>{driver.inductionDate}</td>
                    <td>{driver.firstVaccination}</td>
                    <td>{driver.secondVaccination}</td>
                    <td>{driver.pvcExpiry}</td>
                    <td>{driver.medicalExpiry}</td>
                    <td>
                      <span className="bg-[#E8F5E9] text-[#18751C] px-2 py-1 rounded text-[10px]">{driver.active}</span>
                    </td>
                    <td>No</td>
                    <td>
                      <div className="flex items-center gap-1">
                        <button className="p-1 hover:bg-[#F5F6FA] rounded text-[#0047B2]" title="Edit">
                          <Edit className="w-3 h-3" />
                        </button>
                        <button className="p-1 hover:bg-[#F5F6FA] rounded text-[#D22630]" title="Remove">
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
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
