"use client";

import StatCard from "./StatCard";
import DataTable from "./DataTable";

// Mock data for dashboard
const rosteringStats = [
  { label: "General Roster", value: 234, subLabel: "54 Login / 180 Logout" },
  { label: "Adhoc", value: 45, subLabel: "5 Login / 40 Logout" },
  { label: "Plan", value: 0, subLabel: "0 Login / 0 Logout" },
];

const employeeStats = [
  { label: "Total Employees", value: 256, subLabel: "59 Login / 197 Logout" },
  { label: "Employees Routed", value: 230, subLabel: "Login" },
  { label: "Routing Pending", value: 455, subLabel: "Pending" },
];

const tripStats = [
  { label: "Completed", value: 80, subLabel: "18 Pickup / 62 Drop" },
  { label: "Late", value: 22, subLabel: "0 Pickup / 22 Drop" },
  { label: "No Show", value: 0, subLabel: "0 Pickup / 0 Drop" },
];

const tripsInProgressColumns = [
  { key: "type", header: "Type", width: "80px" },
  { key: "count", header: "Emp Count", width: "80px" },
  { key: "vehicle", header: "Rto No.", width: "100px" },
  { key: "vendor", header: "Vendor", width: "80px" },
  { key: "driver", header: "Driver", width: "150px" },
];

const tripsInProgressData = [
  { type: "PickUp", count: 2, vehicle: "KA03AN4642", vendor: "RGL", driver: "Rangaswamy JN 4642" },
  { type: "PickUp", count: 2, vehicle: "KA53AC06158", vendor: "RGL", driver: "6158NW" },
  { type: "PickUp", count: 1, vehicle: "KA04AE 1159", vendor: "RGL", driver: "Sharanabasava 1159" },
  { type: "PickUp", count: 3, vehicle: "KA03AG1918", vendor: "RGL", driver: "Manjunath 1918" },
  { type: "PickUp", count: 3, vehicle: "KA53M2408", vendor: "RGL", driver: "Krishnamurthy N 2408" },
];

const upcomingTripsData = [
  { type: "PickUp", count: 1, vehicle: "KA09C5176", vendor: "RGL", driver: "KA09C5176" },
  { type: "PickUp", count: 1, vehicle: "KA03AM5529", vendor: "RGL", driver: "5529 NARASIMHA" },
  { type: "PickUp", count: 1, vehicle: "KA05AC2359", vendor: "RGL", driver: "Govindaraju 2359" },
];

const completedTripsData = [
  { type: "DropOff", count: 1, vehicle: "KA53AC6167", vendor: "RGL", driver: "Deepu 6167" },
  { type: "DropOff", count: 2, vehicle: "KA03AL6140", vendor: "RGL", driver: "6140 CHANDRAK" },
  { type: "DropOff", count: 1, vehicle: "KA05AM1201", vendor: "RGL", driver: "Basavaraju A 1" },
];

const vendorPerformanceColumns = [
  { key: "vendor", header: "Vendor", width: "100px" },
  { key: "percentage", header: "Percentage", width: "100px" },
  { key: "tripCount", header: "TripCount", width: "100px" },
  { key: "completed", header: "Completed Trip Count", width: "150px" },
];

const vendorPerformanceData = [
  { vendor: "RGL", percentage: 68, tripCount: 119, completed: 82 },
];

export default function DashboardContent() {
  return (
    <div className="content-wrapper p-4">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[18px] font-semibold text-[#222222]">Dashboard</h1>
        <div className="flex items-center gap-4 text-[12px] text-[#777777]">
          <div>
            <span className="text-[#848484]">Last refreshed :</span>{" "}
            <span>5/6/2026 15:03</span>
          </div>
          <div>
            <span className="text-[#848484]">Next Refresh :</span>{" "}
            <span className="text-[#0047B2]">00 min 53 sec</span>
          </div>
        </div>
      </div>

      {/* Stats Cards Row 1 */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <StatCard title="Rostering" stats={rosteringStats} />
        <StatCard title="Employees Trips" stats={employeeStats} />
      </div>

      {/* Live Trips Stats */}
      <div className="mb-4">
        <StatCard title="Live Trips" stats={tripStats} className="w-full" />
      </div>

      {/* Data Tables Grid */}
      <div className="grid grid-cols-3 gap-4">
        <DataTable
          title="Trips In Progress"
          columns={tripsInProgressColumns}
          data={tripsInProgressData}
        />
        <DataTable
          title="Upcoming Trips"
          columns={tripsInProgressColumns}
          data={upcomingTripsData}
        />
        <DataTable
          title="Completed"
          columns={tripsInProgressColumns}
          data={completedTripsData}
        />
      </div>

      {/* Second Row of Tables */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <DataTable
          title="Auto Cancel"
          columns={tripsInProgressColumns}
          data={[
            { type: "DropOff", count: 3, vehicle: "KA05AM4177", vendor: "RGL", driver: "4177" },
            { type: "DropOff", count: 5, vehicle: "KA53AS3653", vendor: "RGL", driver: "3653" },
          ]}
        />
        <DataTable
          title="Vendor Performance"
          columns={vendorPerformanceColumns}
          data={vendorPerformanceData}
        />
        <div className="dashboard-card p-4">
          <h3 className="text-[14px] font-semibold text-[#222222] mb-3">Approval</h3>
          <div className="space-y-3">
            <div className="border-b border-[#E0E4E9] pb-2">
              <div className="text-[13px] font-medium text-[#222222] mb-1">Rostering</div>
              <div className="flex justify-between text-[12px]">
                <span className="text-[#777777]">Ad-hoc</span>
                <div className="flex gap-3">
                  <span className="text-[#777777]">Pending - 0</span>
                  <span className="text-[#0047B2]">Approved - 0</span>
                </div>
              </div>
            </div>
            <div className="border-b border-[#E0E4E9] pb-2">
              <div className="text-[13px] font-medium text-[#222222] mb-1">Employee Address Change</div>
              <div className="flex justify-between text-[12px]">
                <span className="text-[#777777]">Employee</span>
                <div className="flex gap-3">
                  <span className="text-[#FB6767]">Pending - 1533</span>
                  <span className="text-[#18751C]">Approved - 194</span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-[13px] font-medium text-[#222222] mb-1">Workspace Booking</div>
              <div className="flex justify-between text-[12px]">
                <span className="text-[#777777]">Workspace</span>
                <div className="flex gap-3">
                  <span className="text-[#777777]">Pending - 0</span>
                  <span className="text-[#0047B2]">Approved - 0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
