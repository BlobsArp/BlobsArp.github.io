import React from "react";
import { Popover } from "antd";

export default function SettingsItem({ label, children, info }) {
  return (
    <div className="block w-full py-6">
      <div className="flex justify-between">
        <h3>{label}</h3>
        {info && (
          <Popover content={info} title={null} trigger="click">
            <i className="ri-question-line text-gray-500 cursor-pointer"></i>
          </Popover>
        )}
      </div>
      {children}
    </div>
  );
}
