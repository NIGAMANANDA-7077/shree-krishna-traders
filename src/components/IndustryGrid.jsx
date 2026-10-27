import React from 'react';
import { 
  LuFactory, 
  LuBuilding, 
  LuConstruction, 
  LuLayers, 
  LuZap, 
  LuHammer, 
  LuShieldAlert, 
  LuTruck, 
  LuHardHat, 
  LuCpu, 
  LuWrench, 
  LuWarehouse 
} from 'react-icons/lu';
import { industriesServed } from '../data/companyData';

// Map industry name to iconic symbols
const industryIcons = {
  "Manufacturing": LuFactory,
  "Construction": LuConstruction,
  "Infrastructure": LuBuilding,
  "Steel Plants": LuLayers,
  "Cement Plants": LuWarehouse,
  "Mining Operations": LuHardHat,
  "Power Generation": LuZap,
  "Warehousing & Logistics": LuTruck,
  "Engineering & Fabrication": LuHammer,
  "Industrial Maintenance": LuWrench,
  "Project Contractors": LuCpu,
  "Pre-Engineered Buildings (PEB)": LuBuilding,
};

export default function IndustryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {industriesServed.map((ind, idx) => {
        const IconComponent = industryIcons[ind.name] || LuFactory;
        return (
          <div
            key={idx}
            className="p-5 bg-industrial-900/90 border border-industrial-800 hover:border-accent/40 rounded-sm transition-all hover:bg-industrial-850 group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded bg-industrial-800 border border-industrial-700 flex items-center justify-center text-accent mb-4 group-hover:border-accent/60 group-hover:scale-105 transition-all">
                <IconComponent className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-base text-white group-hover:text-accent transition-colors mb-2">
                {ind.name}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {ind.desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-industrial-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>SUPPLY READY</span>
              <span className="text-accent">#0{idx + 1}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
