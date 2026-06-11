import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import DashboardContent from "@/components/DashboardContent";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      {/* Header */}
      <Header />

      {/* Wrapper */}
      <div className="wrapper relative">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <DashboardContent />
      </div>
    </div>
  );
}
