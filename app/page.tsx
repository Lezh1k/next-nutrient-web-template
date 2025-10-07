"use client";
import { useEffect, useState } from "react";
import Viewer from "@/components/Viewer";

export default function Home() {
  const PDFS = [
    { label: 'pikepdf ', url: 'https://nice-stone-0bf35800f-preview.eastus2.1.azurestaticapps.net/prosecution_history_full_8799451 pikepdf.pdf' },
    { label: 'adobe', url: 'https://nice-stone-0bf35800f-preview.eastus2.1.azurestaticapps.net/prosecution_history_full_8799451%20adobe%20-%20optimized.pdf' },
    { label: 'otimized by nutrient', url: 'https://nice-stone-0bf35800f-preview.eastus2.1.azurestaticapps.net/prosecution_optimized.pdf' },
    { label: 'prosecution_history_full_8799451 original.pdf (110M)', url: 'https://nice-stone-0bf35800f-preview.eastus2.1.azurestaticapps.net/10000432_full_prosecution_history.pdf' },
  ];

  // Dropdown selection (doesn't load until button click)
  const [selectedFile, setSelectedFile] = useState(PDFS[0].url);

  // The URL currently loaded in the viewer
  // Start with the first file so the app shows something right away.
  const [activeUrl, setActiveUrl] = useState(PDFS[0].url);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLoadClick = () => {
    setActiveUrl(selectedFile);
  };

  return (
    <main className="flex flex-col h-full">
      <div className="flex flex-row p-4 bg-apryse-blue justify-between w-full items-center">
        <h1 className="text-xl font-bold">Nutrient WebViewer - Next.js Sample</h1>
        <a href="https://docs.apryse.com/documentation/web/guides/">
          <button className="bg-white text-black rounded p-1">Guides</button>
        </a>
      </div>

      {/* Controls */}
      <div className="flex flex-row gap-2 p-4 items-center border-b">
        <label className="text-sm font-medium">Choose PDF:</label>
        <select
          className="border rounded px-2 py-1 bg-white text-black"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.value)}
        >
          {PDFS.map((f) => (
            <option key={f.url} value={f.url}>
              {f.label}
            </option>
          ))}
        </select>
        <button
          className="bg-black text-white rounded px-3 py-1"
          onClick={handleLoadClick}
        >
          Load PDF
        </button>
      </div>

      {/* Viewer */}
      <div className="flex-1 overflow-hidden">
        {/* Pass activeUrl into the viewer */}
        {isClient ? <Viewer document={activeUrl} /> : null}
      </div>
    </main>
  );
}
