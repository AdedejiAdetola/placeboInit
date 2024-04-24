import ActionItemCard from "@/app/components/ActionItemCard/ActionItemCard";
import ScanPrescription from "@/app/components/ScanPrescription/ScanPrescription";
import React from "react";
import Image from "next/image";
import styles from "./dashboardmid.module.css";
import Category from "@/app/components/Category/Category";

interface Item {
  imageParam: string;
  drugName: string;
  drugTitle: string;
}

interface Category {
  drugCategory: string;
  categorySubtext: string;
  items: Item[];
}

const categories: Category[] = [
  {
    drugCategory: "Analgesics",
    categorySubtext: "Drugs that relieve pain",
    items: [
      {
        imageParam: "/Acetaminone.svg",
        drugName: "Acetaminone",
        drugTitle: "Acetaminone",
      },
      {
        imageParam: "/Ibrudome.svg",
        drugName: "Ibrudome",
        drugTitle: "Ibrupofen",
      },
      {
        imageParam: "/Fentanyl.svg",
        drugName: "B&S Fenta-G Tablets",
        drugTitle: "Fentanyl",
      },
      {
        imageParam: "/Emorphex.svg",
        drugName: "Emorphex",
        drugTitle: "Morphine",
      },
    ],
  },
  {
    drugCategory: "Antacids",
    categorySubtext:
      "Drugs that relieve indigestion and heartburn by neutralizing stomach acid",
    items: [
      {
        imageParam: "/Besticid.svg",
        drugName: "Bestid",
        drugTitle: "Aluminium Hydroxide",
      },
      {
        imageParam: "/Tadiscon.svg",
        drugName: "Tadiscon Double Action...",
        drugTitle: "Magnesium Hydroxide",
      },
      {
        imageParam: "/Alka.svg",
        drugName: "Alka-OnecovaTM Antaci...",
        drugTitle: "Calcium Bicarbonate",
      },
      {
        imageParam: "/Bums.svg",
        drugName: "Bums4Chums®",
        drugTitle: "Sodium Bicarbonate",
      },
    ],
  },
  // Add more categories as needed
];

const DashboardMid = () => {
  return (
    <div className={styles.actionItems}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>Action Items</p>
      </div>
      <ActionItemCard text="Validate your identity" image="/redWarning.svg" />

      <ActionItemCard text="Provide Consent" image="/redWarning.svg" />

      <ActionItemCard text="Generate Auth PIN" image="/redWarning.svg" />

      <ActionItemCard
        text="Set Up Two-Factor Authentication"
        image="/yellowWarning.svg"
      />

      <ScanPrescription />

      <Image
        src="/bigPicture.svg"
        alt="Country Flag"
        width={1200}
        height={320}
        priority
        className={styles.bigPicture}
      />

      <div>
        {/* Map through categories and render Category components */}
        {categories.map((category, index) => (
          <Category
            key={index}
            drugCategory={category.drugCategory}
            categorySubtext={category.categorySubtext}
            items={category.items}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardMid;
