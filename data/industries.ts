export interface Industry {
  id: string;
  name: string;
  description: string;
}

export const industriesData: Industry[] = [
  {
    id: "food-pharma",
    name: "Food & Pharmaceutical Processing",
    description: "Specialized cutting tools for compatible processing equipment, subject to application and material requirements."
  },
  {
    id: "textile-fabric",
    name: "Textile & Fabric Processing",
    description: "Cutting blades designed for compatible textile cutting, slitting, and fabric-processing machinery."
  },
  {
    id: "rubber-tyre",
    name: "Rubber & Tyre Manufacturing",
    description: "Industrial cutting tools for suitable rubber processing and tyre manufacturing applications."
  },
  {
    id: "paper-packaging",
    name: "Paper & Packaging",
    description: "Cutting knives for paper converting, trimming, slitting, and related production processes."
  },
  {
    id: "metal-processing",
    name: "Metal Processing",
    description: "Industrial blades for suitable shearing, slitting, trimming, and metalworking operations."
  },
  {
    id: "plastics-polymer",
    name: "Plastics & Polymer Processing",
    description: "Cutting solutions for compatible plastic granulating, shredding, pelletizing, and processing applications."
  }
];
