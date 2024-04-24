"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./scanprescription.module.css";

const ScanPrescription: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleLabelClick = () => {
    const uploadGiftCardInput = document.getElementById(
      "uploadGiftCard"
    ) as HTMLInputElement;
    if (uploadGiftCardInput) {
      uploadGiftCardInput.click();
    }
  };

  const removeImage = (index: number) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      // Convert FileList to an array
      const selectedImagesArray = Array.from(files);

      // Update the state with the selected images
      setSelectedImages((prevImages) => [
        ...prevImages,
        ...selectedImagesArray,
      ]);
    }
  };

  return (
    <div>
      <div className={`flex flex-col items-center ${styles.scanContainer}`}>
        <div className="w-4/5">
          <label
            onClick={handleLabelClick}
            className={`flex items-center justify-between rounded-2xl border-dashed border-2 cursor-pointer ${
              selectedImages.length > 0 ? "border-gray-500" : "border-gray-400"
            } px-4 py-6 mb-6 mr-5 ${styles.scanSubContainer}`}
            style={{
              borderWidth: "5px",
            }}
          >
            <div className="w-full flex justify-center items-center">
              <Image
                src="/ScanIcon.svg"
                alt="Scan Icon"
                width={32}
                height={32}
                priority
              />
              <p
                className="text-xl ml-2.5"
                style={{ color: "rgba(56, 8, 53, 1)" }}
              >
                Scan My Prescription
              </p>
            </div>
          </label>

          {selectedImages.length > 0 && (
            <div className="w-1/2 scrollbar-hide mb-2">
              {selectedImages.map((image, index) => (
                <div key={index} className="relative">
                  <Image
                    src={URL.createObjectURL(image)}
                    alt={`Selected ${index + 1}`}
                    width={500}
                    height={500}
                    priority
                    className="h-auto rounded-2xl mb-6"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-full"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-4 hidden"
            id="uploadGiftCard"
            multiple
          />
        </div>
      </div>
    </div>
  );
};

export default ScanPrescription;
