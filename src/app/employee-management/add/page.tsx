"use client";

import { useState } from "react";
import { Folder, Save, X, ChevronDown, ChevronUp, Upload } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function AddEmployeePage() {
  const [basicOpen, setBasicOpen] = useState(true);
  const [locationOpen, setLocationOpen] = useState(false);
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeId: "",
    gender: "",
    contactNumber: "",
    email: "",
    userName: "",
    team: "",
    spocName: "",
    transportType: "",
    transportMode: "",
    shiftLogin: "",
    shiftLogout: "",
    qrBarcode: "",
    manager: "",
    cabRoute: "",
    fixedShift: false,
    specialNeed: false,
    narrowPath: false,
    address: "",
    location: "",
    pickCommonPoint: "",
    pickupLatLng: "",
    nodalPoint: "",
    dropLatLng: "",
  });

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      <Header />
      <div className="wrapper relative">
        <Sidebar />
        <div className="content-wrapper p-4">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Folder className="w-5 h-5 text-[#0047B2]" />
              <h1 className="text-[18px] font-semibold text-[#222222]">Create Employee:</h1>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/employee-management"
                className="bg-[#F5F6FA] text-[#222222] border border-[#E0E4E9] px-4 py-2 rounded text-[13px] hover:bg-[#E0E4E9] transition-colors flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Cancel
              </Link>
              <button className="bg-[#0047B2] text-white px-4 py-2 rounded text-[13px] hover:bg-[#003a94] transition-colors flex items-center gap-2">
                <Save className="w-4 h-4" />
                Save
              </button>
            </div>
          </div>

          {/* Basic Information Section */}
          <div className="dashboard-card mb-4 overflow-hidden">
            <button
              onClick={() => setBasicOpen(!basicOpen)}
              className="w-full flex items-center justify-between p-4 bg-[#F5F6FA] hover:bg-[#ECF0F5] transition-colors"
            >
              <span className="text-[14px] font-semibold text-[#222222]">Basic Information</span>
              {basicOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {basicOpen && (
              <div className="p-4 bg-white">
                <div className="grid grid-cols-2 gap-4">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[13px] text-[#222222] mb-1">
                        Employee Name <span className="text-[#D22630]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.employeeName}
                        onChange={(e) => handleChange("employeeName", e.target.value)}
                        className="w-full border border-[#E0E4E9] rounded px-3 py-2 text-[13px] focus:outline-none focus:border-[#0047B2]"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#222222] mb-1">
                        Employee Id <span className="text-[#D22630]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.employeeId}
                        onChange={(e) => handleChange("employeeId", e.target.value)}
                        className="w-full border border-[#E0E4E9] rounded px-3 py-2 text-[13px] focus:outline-none focus:border-[#0047B2]"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#222222] mb-1">
                        Gender <span className="text-[#D22630]">*</span>
                      </label>
                      <select
                        value={formData.gender}
                        onChange={(e) => handleChange("gender", e.target.value)}
                        className="w-full border border-[#E0E4E9] rounded px-3 py-2 text-[13px] focus:outline-none focus:border-[#0047B2] bg-white"
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#222222] mb-1">
                        Contact Number <span className="text-[#D22630]">*</span>
                      </label>
                      <input
                        type="number"
                        value={formData.contactNumber}
                        onChange={(e) => handleChange("contactNumber", e.target.value)}
                        className="w-full border border-[#E0E4E9] rounded px-3 py-2 text-[13px] focus:outline-none focus:border-[#0047B2]"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#222222] mb-1">
                        Email <span className="text-[#D22630]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="w-full border border-[#E0E4E9] rounded px-3 py-2 text-[13px] focus:outline-none focus:border-[#0047B2]"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#222222] mb-1">User Name</label>
                      <input
                        type="text"
                        value={formData.userName}
                        disabled
                        className="w-full border border-[#E0E4E9] rounded px-3 py-2 text-[13px] bg-[#F5F6FA] text-[#848484]"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#222222] mb-1">Select Team</label>
                      <select
                        value={formData.team}
                        onChange={(e) => handleChange("team", e.target.value)}
                        className="w-full border border-[#E0E4E9] rounded px-3 py-2 text-[13px] focus:outline-none focus:border-[#0047B2] bg-white"
                      >
                        <option value="">Select Team</option>
                        <option value="team1">Anu Janakappa Team</option>
                        <option value="team2">Keerthi Team</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#222222] mb-1">Spoc Name</label>
                      <textarea
                        rows={1}
                        disabled
                        className="w-full border border-[#E0E4E9] rounded px-3 py-2 text-[13px] bg-[#F5F6FA] resize-none"
                      />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[13px] text-[#222222] mb-1">
                        Transport Type <span className="text-[#D22630]">*</span>
                      </label>
                      <select
                        value={formData.transportType}
                        onChange={(e) => handleChange("transportType", e.target.value)}
                        className="w-full border border-[#E0E4E9] rounded px-3 py-2 text-[13px] focus:outline-none focus:border-[#0047B2] bg-white"
                      >
                        <option value="">Select</option>
                        <option value="Office Transport">Office Transport</option>
                        <option value="Personal">Personal</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#222222] mb-1">
                        Transport Mode <span className="text-[#D22630]">*</span>
                      </label>
                      <select
                        value={formData.transportMode}
                        onChange={(e) => handleChange("transportMode", e.target.value)}
                        className="w-full border border-[#E0E4E9] rounded px-3 py-2 text-[13px] focus:outline-none focus:border-[#0047B2] bg-white"
                      >
                        <option value="">Select</option>
                        <option value="Cab">Cab</option>
                        <option value="Bus">Bus</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#222222] mb-1">Shift Login Time</label>
                      <input
                        type="time"
                        value={formData.shiftLogin}
                        onChange={(e) => handleChange("shiftLogin", e.target.value)}
                        className="w-full border border-[#E0E4E9] rounded px-3 py-2 text-[13px] focus:outline-none focus:border-[#0047B2]"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#222222] mb-1">Shift Logout Time</label>
                      <input
                        type="time"
                        value={formData.shiftLogout}
                        onChange={(e) => handleChange("shiftLogout", e.target.value)}
                        className="w-full border border-[#E0E4E9] rounded px-3 py-2 text-[13px] focus:outline-none focus:border-[#0047B2]"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#222222] mb-1">QR or Barcode Id</label>
                      <input
                        type="text"
                        value={formData.qrBarcode}
                        onChange={(e) => handleChange("qrBarcode", e.target.value)}
                        className="w-full border border-[#E0E4E9] rounded px-3 py-2 text-[13px] focus:outline-none focus:border-[#0047B2]"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#222222] mb-1">Upload Image</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          id="employee-image"
                        />
                        <label
                          htmlFor="employee-image"
                          className="flex items-center gap-2 px-3 py-2 border border-[#E0E4E9] rounded text-[13px] cursor-pointer hover:bg-[#F5F6FA] transition-colors"
                        >
                          <Upload className="w-4 h-4" />
                          Choose File
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#222222] mb-1">Managers</label>
                      <select
                        value={formData.manager}
                        onChange={(e) => handleChange("manager", e.target.value)}
                        className="w-full border border-[#E0E4E9] rounded px-3 py-2 text-[13px] focus:outline-none focus:border-[#0047B2] bg-white"
                      >
                        <option value="">Select Manager</option>
                        <option value="manager1">Anoop Philip</option>
                        <option value="manager2">Manager 2</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#222222] mb-1">Cab Routes</label>
                      <select
                        value={formData.cabRoute}
                        onChange={(e) => handleChange("cabRoute", e.target.value)}
                        className="w-full border border-[#E0E4E9] rounded px-3 py-2 text-[13px] focus:outline-none focus:border-[#0047B2] bg-white"
                      >
                        <option value="">Select Route</option>
                        <option value="route1">Added Route</option>
                        <option value="route2">New Route</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-4 pt-2">
                      <label className="flex items-center gap-2 text-[13px] text-[#222222] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.fixedShift}
                          onChange={(e) => handleChange("fixedShift", e.target.checked)}
                          className="rounded border-[#E0E4E9]"
                        />
                        Fixed Shift
                      </label>
                      <label className="flex items-center gap-2 text-[13px] text-[#222222] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.specialNeed}
                          onChange={(e) => handleChange("specialNeed", e.target.checked)}
                          className="rounded border-[#E0E4E9]"
                        />
                        Special Need
                      </label>
                      <label className="flex items-center gap-2 text-[13px] text-[#222222] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.narrowPath}
                          onChange={(e) => handleChange("narrowPath", e.target.checked)}
                          className="rounded border-[#E0E4E9]"
                        />
                        Is Narrow Path
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Location Section */}
          <div className="dashboard-card overflow-hidden">
            <button
              onClick={() => setLocationOpen(!locationOpen)}
              className="w-full flex items-center justify-between p-4 bg-[#F5F6FA] hover:bg-[#ECF0F5] transition-colors"
            >
              <span className="text-[14px] font-semibold text-[#222222]">Location</span>
              {locationOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {locationOpen && (
              <div className="p-4 bg-white">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[13px] text-[#222222] mb-1">Address</label>
                      <textarea
                        rows={3}
                        value={formData.address}
                        onChange={(e) => handleChange("address", e.target.value)}
                        className="w-full border border-[#E0E4E9] rounded px-3 py-2 text-[13px] focus:outline-none focus:border-[#0047B2] resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#222222] mb-1">Location</label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => handleChange("location", e.target.value)}
                        placeholder="add locations"
                        className="w-full border border-[#E0E4E9] rounded px-3 py-2 text-[13px] focus:outline-none focus:border-[#0047B2]"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#222222] mb-1">Pick Common Point</label>
                      <input
                        type="text"
                        value={formData.pickCommonPoint}
                        onChange={(e) => handleChange("pickCommonPoint", e.target.value)}
                        className="w-full border border-[#E0E4E9] rounded px-3 py-2 text-[13px] focus:outline-none focus:border-[#0047B2]"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#222222] mb-1">Pickup Latitude/Longitude</label>
                      <input
                        type="text"
                        value={formData.pickupLatLng}
                        onChange={(e) => handleChange("pickupLatLng", e.target.value)}
                        className="w-full border border-[#E0E4E9] rounded px-3 py-2 text-[13px] focus:outline-none focus:border-[#0047B2]"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[13px] text-[#222222] mb-1">Nodal Point</label>
                      <input
                        type="text"
                        value={formData.nodalPoint}
                        onChange={(e) => handleChange("nodalPoint", e.target.value)}
                        placeholder="Add Nodal Point"
                        className="w-full border border-[#E0E4E9] rounded px-3 py-2 text-[13px] focus:outline-none focus:border-[#0047B2]"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#222222] mb-1">Drop Latitude/Longitude</label>
                      <input
                        type="text"
                        value={formData.dropLatLng}
                        onChange={(e) => handleChange("dropLatLng", e.target.value)}
                        className="w-full border border-[#E0E4E9] rounded px-3 py-2 text-[13px] focus:outline-none focus:border-[#0047B2]"
                      />
                    </div>
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
