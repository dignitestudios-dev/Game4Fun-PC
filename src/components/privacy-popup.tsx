import React from "react";
import PolicyTable from "@/components/policy-table";
import LocationIcon from "@/components/icons/location-icon";
import { PhoneIcon } from "lucide-react";
import EmailIcon from "@/components/icons/email-icon";

import privacyData from "../data/privacy.json";
import ArrowBtn from "./ui/arrow-btn";
import PopupHeader from "./ui/popup-header";

function PrivacyPopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  const renderSection = (section: any) => { //eslint-disable-line
    switch (section.type) {
      case "header":
        return <PopupHeader key={section.title} title={section.title} />;

      case "subheader":
        return (
          <h2 key={section.title} className="text-white font-semibold mt-4">
            {section.title}
          </h2>
        );

      case "paragraph":
        return (
          <p key={section.content} className="text-sm text-[#BDBDBD] leading-6">
            {section.content}
          </p>
        );

      case "list":
        return (
          <div
            key={section.title || section.items[0]}
            className="text-sm text-[#BDBDBD] space-y-1"
          >
            {section.title && (
              <span className="font-semibold text-white">{section.title}</span>
            )}
            <ul className="list-disc pl-6">
              {section.items.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            {section.note && (
              <p className="mt-2 text-sm text-[#BDBDBD]">{section.note}</p>
            )}
          </div>
        );

      case "table":
        return (
          <div key={section.title} className="pt-4">
            <h3 className="font-semibold text-white mb-2">{section.title}</h3>
            <PolicyTable
              columns={section.columns.map((c: string) => ({ key: c, label: c }))}
              data={section.rows.map((row: string[]) =>
                Object.fromEntries(
                  section.columns.map((col: string, i: number) => [
                    col.toLowerCase(),
                    row[i],
                  ])
                )
              )}
            />
            {section.note && (
              <p className="mt-2 text-sm text-[#BDBDBD]">{section.note}</p>
            )}
          </div>
        );

      case "contact":
        return (
          <div key="contact" className="text-sm text-[#BDBDBD] space-y-2">
            <p className="font-bold text-white">{section.company}</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <EmailIcon /> <b className="text-white">Email:</b>{" "}
                {section.email}
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon /> <b className="text-white">Phone:</b>{" "}
                {section.phone}
              </li>
              <li className="flex items-center gap-2">
                <LocationIcon /> <b className="text-white">Address:</b>{" "}
                {section.address}
              </li>
            </ul>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#141414] relative rounded-2xl shadow-lg w-[90%] max-w-3xl h-[90%] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* Meta */}
          <div className="border-b border-[#2b2b2b] pb-3 mb-4">
            <h1>
              Effective Date:{" "}
              <span className="text-[#BDBDBD] text-sm">
                {privacyData.meta.effectiveDate}
              </span>
            </h1>
            <h1>
              Governing Law:{" "}
              <span className="text-[#BDBDBD] text-sm">
                {privacyData.meta.governingLaw}
              </span>
            </h1>
          </div>

          {/* Dynamic Sections */}
          <div className="space-y-4">
            {privacyData.sections.map((section: any) => //eslint-disable-line
              renderSection(section)
            )}
          </div>
        </div>

        {/* Fixed Close Button */}
        <div className="border-t rounded-b-2xl p-4 text-end bg-[#141414]">
          <button onClick={onClose}>
            <ArrowBtn title="Close" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPopup;
