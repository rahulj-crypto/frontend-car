"use client";

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

interface Column {
  key: string;
  header: string;
  width?: string;
}

interface DataTableProps {
  title: string;
  columns: Column[];
  data: Record<string, string | number>[];
  showPagination?: boolean;
}

export default function DataTable({ title, columns, data, showPagination = true }: DataTableProps) {
  return (
    <div className="dashboard-card">
      <div className="p-3 border-b border-[#E0E4E9] flex justify-between items-center">
        <h3 className="text-[14px] font-semibold text-[#222222]">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full data-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="text-[12px] font-semibold text-[#222222] bg-[#F5F6FA] px-3 py-2 text-left border-b border-[#E0E4E9]"
                  style={{ width: col.width }}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-[#F5F6FA]">
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="text-[12px] text-[#222222] px-3 py-2 border-b border-[#E0E4E9]"
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showPagination && (
        <div className="p-3 flex items-center justify-between border-t border-[#E0E4E9]">
          <div className="flex items-center gap-1">
            <button className="p-1 hover:bg-[#F5F6FA] rounded">
              <ChevronsLeft className="w-4 h-4 text-[#777777]" />
            </button>
            <button className="p-1 hover:bg-[#F5F6FA] rounded">
              <ChevronLeft className="w-4 h-4 text-[#777777]" />
            </button>
            <select className="text-[12px] border border-[#E0E4E9] rounded px-2 py-1">
              <option>1</option>
            </select>
            <button className="p-1 hover:bg-[#F5F6FA] rounded">
              <ChevronRight className="w-4 h-4 text-[#777777]" />
            </button>
            <button className="p-1 hover:bg-[#F5F6FA] rounded">
              <ChevronsRight className="w-4 h-4 text-[#777777]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
