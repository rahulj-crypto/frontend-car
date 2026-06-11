"use client";

import { Users, Plus, Search, Download, Upload, Edit, Trash2, Eye } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const employees = [
  {
    id: "217650",
    name: "Manish Kumar",
    gender: "Male",
    contact: "8050404118",
    email: "manish.kumar@ironmountain.com",
    transportType: "Office Transport",
    transportMode: "cab",
    distance: "1.8",
    address: "Griffin Educational Nest, 64, A-Narayanapura, Naga...",
    location: "A-Narayanapura",
    nodalPoint: "A-Narayanapura",
    manager: "Anoop Philip",
    pinCode: "560016",
    shiftLogin: "",
    shiftLogout: "",
    fixedShift: "No",
    latLong: "12.994800174545157, 77.68039202171438",
    team: "Anu Janakappa Team",
    specialNeed: "No",
    route: "Added Route",
    active: "Yes",
  },
  {
    id: "218333",
    name: "Keerthi Dalavayi",
    gender: "Female",
    contact: "8500613430",
    email: "keerthi.dalavayi@ironmountain.com",
    transportType: "Office Transport",
    transportMode: "cab",
    distance: "2.93",
    address: "Vilaasa Ladies PG Abdul Kalam Enclave, Notting H...",
    location: "Marathahalli",
    nodalPoint: "Marathahalli",
    manager: "",
    pinCode: "560037",
    shiftLogin: "",
    shiftLogout: "",
    fixedShift: "No",
    latLong: "12.967102207605858, 77.70250670382308",
    team: "keerthi team",
    specialNeed: "No",
    route: "New Route",
    active: "Yes",
  },
];

export default function EmployeeManagementPage() {
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
              <h1 className="text-[18px] font-semibold text-[#222222]">Employee Management</h1>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-[#F5F6FA] text-[#222222] border border-[#E0E4E9] px-4 py-2 rounded text-[13px] hover:bg-[#E0E4E9] transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </button>
              <Link
                href="/employee-management/add"
                className="bg-[#0047B2] text-white px-4 py-2 rounded text-[13px] hover:bg-[#003a94] transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Employee
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-5 gap-4 mb-4">
            <div className="dashboard-card p-4">
              <div className="text-[12px] text-[#777777] mb-1">Male</div>
              <div className="text-[24px] font-semibold text-[#0047B2]">594</div>
            </div>
            <div className="dashboard-card p-4">
              <div className="text-[12px] text-[#777777] mb-1">Female</div>
              <div className="text-[24px] font-semibold text-[#D22630]">442</div>
            </div>
            <div className="dashboard-card p-4">
              <div className="text-[12px] text-[#777777] mb-1">Total Employee</div>
              <div className="text-[24px] font-semibold text-[#0047B2]">1036</div>
            </div>
            <div className="dashboard-card p-4">
              <div className="text-[12px] text-[#777777] mb-1">Employee without Km</div>
              <div className="text-[24px] font-semibold text-[#E65100]">1</div>
            </div>
            <div className="dashboard-card p-4">
              <div className="text-[12px] text-[#777777] mb-1">Active</div>
              <div className="text-[24px] font-semibold text-[#18751C]">View</div>
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
                  placeholder="Search employees..."
                  className="flex-1 border border-[#E0E4E9] rounded px-3 py-2 text-[13px]"
                />
              </div>
            </div>
          </div>

          {/* Employee Table */}
          <div className="dashboard-card overflow-x-auto">
            <table className="w-full data-table text-[11px]">
              <thead>
                <tr>
                  <th>EMP ID</th>
                  <th>NAME</th>
                  <th>GENDER</th>
                  <th>CONTACT</th>
                  <th>EMAIL</th>
                  <th>TRANSPORT TYPE</th>
                  <th>TRANSPORT MODE</th>
                  <th>DISTANCE</th>
                  <th>ADDRESS</th>
                  <th>LOCATION</th>
                  <th>NODAL POINT</th>
                  <th>MANAGER</th>
                  <th>PIN CODE</th>
                  <th>SHIFT LOGIN</th>
                  <th>SHIFT LOGOUT</th>
                  <th>FIXED SHIFT</th>
                  <th>LATITUDE/LONGITUDE</th>
                  <th>TEAM NAME</th>
                  <th>SPECIAL NEED</th>
                  <th>ROUTE NAME</th>
                  <th>ACTIVE</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td className="font-medium whitespace-nowrap">{emp.name}</td>
                    <td>{emp.gender}</td>
                    <td>{emp.contact}</td>
                    <td className="max-w-[150px] truncate">{emp.email}</td>
                    <td>{emp.transportType}</td>
                    <td>{emp.transportMode}</td>
                    <td>{emp.distance}</td>
                    <td className="max-w-[200px] truncate">{emp.address}</td>
                    <td>{emp.location}</td>
                    <td>{emp.nodalPoint}</td>
                    <td>{emp.manager}</td>
                    <td>{emp.pinCode}</td>
                    <td>{emp.shiftLogin}</td>
                    <td>{emp.shiftLogout}</td>
                    <td>{emp.fixedShift}</td>
                    <td className="max-w-[150px] truncate">{emp.latLong}</td>
                    <td>{emp.team}</td>
                    <td>{emp.specialNeed}</td>
                    <td>{emp.route}</td>
                    <td>
                      <span className="bg-[#E8F5E9] text-[#18751C] px-2 py-1 rounded text-[10px]">{emp.active}</span>
                    </td>
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
