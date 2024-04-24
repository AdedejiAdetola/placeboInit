import React from "react";
import styles from "./searchmid.module.css";
import SortBy from "@/app/components/SortBy/SortBy";
import SearchCategory from "@/app/components/SearchCategory/SearchCategory";

interface SearchItem {
  drugImage: string;
  drugTitle: string;
  drugMiniTitle: string;
  drugRating: number;
  manufacturedBy: string;
  uses: string;
  warning: string;
  prescriptionType: string;
}

const searchDrugs: SearchItem[] = [
  {
    drugImage: "/paracetamol1.svg",
    drugTitle: "Paracetamol Tablets B.P. 500mg",
    drugMiniTitle: "Paracetamol",
    drugRating: 4.95,
    manufacturedBy: "B&S Pharmaceuticals",
    uses: "Instant relief from headaches, stomachaches and other types of pain.",
    warning:
      "May be accompanied by rashes, swelling and a sore throat. Overuse may lead to liver failure.",
    prescriptionType: "Over-The-Counter Medication.",
  },

  {
    drugImage: "/paracetamol2.svg",
    drugTitle: "Paracetamol Tablets B.P. 500mg",
    drugMiniTitle: "Paracetamol",
    drugRating: 4.95,
    manufacturedBy: "B&S Pharmaceuticals",
    uses: "Instant relief from headaches, stomachaches and other types of pain.",
    warning:
      "May be accompanied by rashes, swelling and a sore throat. Overuse may lead to liver failure.",
    prescriptionType: "Over-The-Counter Medication.",
  },

  {
    drugImage: "/paracetamol3.svg",
    drugTitle: "Paracetamol Tablets B.P. 500mg",
    drugMiniTitle: "Paracetamol",
    drugRating: 4.95,
    manufacturedBy: "B&S Pharmaceuticals",
    uses: "Instant relief from headaches, stomachaches and other types of pain.",
    warning:
      "May be accompanied by rashes, swelling and a sore throat. Overuse may lead to liver failure.",
    prescriptionType: "Over-The-Counter Medication.",
  },
];

const SearchMid = () => {
  return (
    <div className={styles.searchMidContainer}>
      <div className={styles.resultSort}>
        <div className={styles.sResult}>
          <span className={styles.sResultSpan}>20</span> results in{" "}
          <span className={styles.sResultSpan}>0.5</span> seconds
        </div>

        <div className={styles.sortContainer}>
          <p className={styles.sortP}>Sort By:</p>

          <div className={styles.sortContents}>
            <div className={styles.sortContents1}>
              <SortBy name="Brand Name" local={false} />
              <SortBy name="Generic Name" local={false} />
              <SortBy name="Symptoms" local={false} />
            </div>

            <div className={styles.sortContents2}>
              <SortBy name="Illness" local={false} />
              <SortBy name="Local" local={true} />
              <SortBy name="Foreign" local={false} />
            </div>
          </div>
        </div>
      </div>

      <div>
        {searchDrugs.map((search, index) => (
          <SearchCategory
            key={index}
            drugImage={search.drugImage}
            drugTitle={search.drugTitle}
            drugMiniTitle={search.drugMiniTitle}
            drugRating={search.drugRating}
            manufacturedBy={search.manufacturedBy}
            uses={search.uses}
            warning={search.warning}
            prescriptionType={search.prescriptionType}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchMid;
