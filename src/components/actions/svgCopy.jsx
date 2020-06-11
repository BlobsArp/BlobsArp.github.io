import React, { useState } from "react";
import { view } from "@risingstack/react-easy-state";
import Button from "../common/button";
import { appStore } from "../../store";
import Modal from "../common/modal";
import Highlight from "../common/highlight";
import Copy from "../common/copy";
import Download from "../common/download";
import formatter from "../../services/formatter";

const SVGCopy = view(({ onClose }) => {
  const [isModalOpen, openModal] = useState(false);
  const ID = `${appStore.edges}-${appStore.growth}-${appStore.id}`;
  const svgEl = document.getElementById("blobSvg");
  const code = svgEl ? formatter(svgEl.outerHTML) : "";
  return (
    <>
      <Button
        isPrimary={false}
        tooltipText="Copy SVG code"
        onClick={() => {
          openModal(true);
        }}
      >
        <i className="ri-code-s-slash-fill inline-block transform scale-150"></i>
      </Button>
      <Modal isOpen={isModalOpen} onClose={() => openModal(false)}>
        <div className="flex justify-end">
          <Download content={code} filename={`blob_${ID}.svg`} />
          <Copy text={code} />
        </div>
        <Highlight code={code} lang={"markup"} />
      </Modal>
    </>
  );
});

export default SVGCopy;
