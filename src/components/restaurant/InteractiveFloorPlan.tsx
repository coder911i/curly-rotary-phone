import React from 'react';
import type { DiningTable } from '../../types';
import { mockTables } from '../../data/mockRestaurant';

interface InteractiveFloorPlanProps {
  selectedTableId: string | null;
  onSelectTable: (table: DiningTable) => void;
}

export const InteractiveFloorPlan: React.FC<InteractiveFloorPlanProps> = ({
  selectedTableId,
  onSelectTable
}) => {
  return (
    <div id="noir-floor" className="bg-[#09090c] border border-[#c87d28]/30 rounded-3xl p-6 shadow-2xl space-y-4 font-restaurant-serif">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#c87d28]/20 pb-4">
        <div>
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#c87d28] font-bold block">
            NOIR — INTERACTIVE ARCHITECTURAL FLOOR PLAN
          </span>
          <h4 className="text-lg font-normal text-white">Select Your Table for Tonight</h4>
        </div>

        <div className="flex items-center space-x-4 text-xs font-mono text-stone-400">
          <div className="flex items-center space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-[#c87d28]" />
            <span>Available</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
            <span>Selected</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-stone-700" />
            <span>Reserved</span>
          </div>
        </div>
      </div>

      {/* SVG Floor Plan */}
      <div className="relative w-full overflow-x-auto">
        <svg
          viewBox="0 0 600 380"
          className="w-full max-w-[600px] mx-auto h-auto min-w-[500px] select-none"
        >
          {/* Architectural Background Zones */}
          <rect x="20" y="30" width="240" height="320" rx="16" fill="#0f0f15" stroke="rgba(200, 125, 40, 0.3)" strokeDasharray="4 4" />
          <text x="35" y="55" fill="rgba(255,255,255,0.4)" fontSize="11" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1">
            MAIN INDOOR SALON
          </text>

          <rect x="280" y="30" width="290" height="210" rx="16" fill="#0c1410" stroke="rgba(16, 185, 129, 0.3)" strokeDasharray="4 4" />
          <text x="295" y="55" fill="rgba(16, 185, 129, 0.5)" fontSize="11" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1">
            TERRACE GARDEN
          </text>

          <rect x="280" y="255" width="290" height="95" rx="16" fill="#180f12" stroke="rgba(200, 125, 40, 0.4)" />
          <text x="295" y="278" fill="rgba(200, 125, 40, 0.8)" fontSize="11" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1">
            PRIVATE VIP SUITE
          </text>

          {/* Render Tables */}
          {mockTables.map(table => {
            const isSelected = selectedTableId === table.id;
            const isReserved = table.status === 'reserved';

            let fillColor = '#c87d28'; // burnt amber available
            if (isSelected) fillColor = '#10b981'; // emerald green
            if (isReserved) fillColor = '#2a2a35'; // reserved dark

            return (
              <g
                key={table.id}
                onClick={() => !isReserved && onSelectTable(table)}
                className={isReserved ? 'cursor-not-allowed opacity-50' : 'cursor-pointer group'}
              >
                {table.r ? (
                  <circle
                    cx={table.cx}
                    cy={table.cy}
                    r={table.r}
                    fill={fillColor}
                    stroke={isSelected ? '#ffffff' : 'rgba(255,255,255,0.2)'}
                    strokeWidth={isSelected ? 3 : 1}
                    className="transition-all duration-300"
                  />
                ) : (
                  <rect
                    x={table.cx - (table.width || 60) / 2}
                    y={table.cy - (table.height || 40) / 2}
                    width={table.width || 60}
                    height={table.height || 40}
                    rx="10"
                    fill={fillColor}
                    stroke={isSelected ? '#ffffff' : 'rgba(255,255,255,0.2)'}
                    strokeWidth={isSelected ? 3 : 1}
                    className="transition-all duration-300"
                  />
                )}

                <text
                  x={table.cx}
                  y={table.cy - 2}
                  textAnchor="middle"
                  fill={isReserved ? '#777' : '#000'}
                  fontSize="11"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  T0{table.number}
                </text>
                <text
                  x={table.cx}
                  y={table.cy + 10}
                  textAnchor="middle"
                  fill={isReserved ? '#666' : '#222'}
                  fontSize="9"
                  fontFamily="sans-serif"
                >
                  {table.seats} Seats
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="text-center text-xs font-sans text-stone-400">
        Selected table location and seating capacity will be locked into your reservation ticket.
      </div>
    </div>
  );
};
