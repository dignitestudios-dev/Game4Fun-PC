import React, { useRef, useEffect } from "react";
import PolicyTable from "@/components/policy-table";
import LocationIcon from "@/components/icons/location-icon";
import { PhoneIcon } from "lucide-react";
import EmailIcon from "@/components/icons/email-icon";

import warrantyData from "../data/pc-guide.json";
import ArrowBtn from "./ui/arrow-btn";
import PopupHeader from "./ui/popup-header";

function PCGuidePopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // prevent scroll
    } else {
      document.body.style.overflow = ""; // restore scroll
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const renderSection = (section: any) => { // eslint-disable-line
    switch (section.type) {
      case "intro":
        return (
          <p key={section.content} className="text-sm text-[#BDBDBD] leading-6">
            {section.content}
          </p>
        );

      case "header":
        return <PopupHeader key={section.title} title={section.title} />;

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
              <span className="font-semibold text-white block">{section.title}</span>
            )}
            <ul className="list-disc pl-6">
              {section.items.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
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
            <p className="font-bold text-white">Game4FunPCS</p>
            <ul className="space-y-2">
              {section.email && (
                <li className="flex items-center gap-2">
                  <EmailIcon /> <b className="text-white">Email:</b> {section.email}
                </li>
              )}
              {section.phone && (
                <li className="flex items-center gap-2">
                  <PhoneIcon /> <b className="text-white">Phone:</b> {section.phone}
                </li>
              )}
              {section.address && (
                <li className="flex items-center gap-2">
                  <LocationIcon /> <b className="text-white">Address:</b> {section.address}
                </li>
              )}
              {section.website && (
                <li>
                  <b className="text-white">Website:</b> {section.website}
                </li>
              )}
              {section.discord && (
                <li>
                  <b className="text-white">Discord:</b> {section.discord}
                </li>
              )}
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
      onClick={handleOverlayClick}
    >
      <div
        ref={popupRef}
        className="bg-[#141414] relative rounded-2xl shadow-lg w-[90%] max-w-3xl h-[90%] flex flex-col"
      >
        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* Meta */}
          <div className="border-b border-[#2b2b2b] pb-3 mb-4">
            <h1 className="text-lg font-semibold text-white">
              {warrantyData.meta.title}
            </h1>
            <p className="text-[#BDBDBD] text-sm">Version: {warrantyData.meta.version}</p>
          </div>

          {/* Dynamic Sections */}
          <div className="space-y-4">
            {warrantyData.sections.map((section: any, idx: number) => // eslint-disable-line
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

export default PCGuidePopup;
