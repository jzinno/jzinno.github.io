import React from "react";
import { FaChevronRight, FaPlus } from "react-icons/fa";

export interface AccordionItem {
  role: string;
  company: string;
  duration: string;
  responsibilities?: string[];
}

interface AccordionListProps {
  items: AccordionItem[];
}

const AccordionList: React.FC<AccordionListProps> = ({ items }) => {
  return (
    <div className="w-full max-w-5xl px-4 space-y-3">
      {items.map((item, index) => {
        const hasDetails = !!(item.responsibilities && item.responsibilities.length > 0);

        return (
          // Each accordion hint shows when there is content to expand.
          <details
            key={index}
            className="border border-gray-200 bg-white rounded-lg shadow-sm p-4 text-left"
          >
            <summary className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-2 cursor-pointer">
              <div className="space-y-1">
                <h2 className="text-lg text-slate-800 font-semibold">
                  {item.role}
                </h2>
                <h3 className="text-slate-700">{item.company}</h3>
              </div>
              <div className="text-sm text-slate-500 md:text-right flex items-center gap-2 md:justify-end">
                <span className="font-medium">{item.duration}</span>
              </div>
              {hasDetails && (
                <span className="pointer-events-none absolute right-3 bottom-0 flex items-center text-slate-400 translate-y-1">
                  <FaPlus className="text-sm" />
                </span>
              )}
            </summary>
            {hasDetails && (
              <div className="mt-3 border-t border-gray-100 pt-3">
                <ul className="text-sm text-slate-700 space-y-1">
                  {item.responsibilities?.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FaChevronRight className="text-xs mt-1" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </details>
        );
      })}
    </div>
  );
};

export default AccordionList;
