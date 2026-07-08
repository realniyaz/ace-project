export interface PropertyConfig {
  name: string;
  size: string;
  price: string;
  isAvailable: boolean;
}

export interface ContactDetails {
  address: string;
  phone: string;
  mobile: string;
  email: string;
}

export interface ProjectDetails {
  title: string;
  location: string;
  status: string;
  landParcel: string;
  totalUnits: string;
  totalTowers: string;
  structure: string;
  startingPrice: string;
  reraNumber: string;
  agentRera: string;
  footerDesc: string;
  contact: ContactDetails; // Fixed: Mapped cleanly to a proper contact structure
  configurations: PropertyConfig[];
}

export const projectData: ProjectDetails = {
  title: "ACE PARKWAY 2.0",
  location: "Sector 150, Noida",
  status: "Pre-Launch",
  landParcel: "15 Acres",
  totalUnits: "790",
  totalTowers: "11", 
  structure: "G+36 Storeys Of Elevated Living",
  startingPrice: "₹3.20 Cr*",
  configurations: [
    { name: "3 BHK", size: "1900 Sq. Ft.", price: "₹3.20 Cr* Onwards", isAvailable: true },
    { name: "4 BHK", size: "2600 Sq. Ft.", price: "On Request", isAvailable: true },
    { name: "4 BHK + Servant", size: "4400 Sq. Ft.", price: "On Request", isAvailable: true },
  ],
  reraNumber: "UPRERAPRJ622344/11/2025",
  agentRera: "COMING SOON",
  footerDesc: "Transforming expectations into luxury landmarks across the National Capital Region. Delivering high-end architecture, premium construction standards, and spaces designed for exceptional lifestyle living.",
  contact: {
    address: "Sector 150, Noida, ACE 150",
    phone: "+91 9910374156",
    mobile : "+91 70420 80055",
    email: "realtyfmleads@gmail.com"
  }, // Fixed: Now uses valid object notation matching the type template
};