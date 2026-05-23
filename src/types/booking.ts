export type BookingPayload = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zip: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  propertySize: string;
  frequency: string;
  notes: string;
};

export const SERVICE_TYPES = [
  "Lawn & Turf Maintenance",
  "Landscape & Bed Care",
  "Seasonal Property Cleanup",
  "Brush & Lot Clearing",
  "Mulching & Ground Cover",
  "Irrigation & Drainage",
  "Erosion & Grading Support",
  "Full Property Management Visit",
  "Custom Land Project",
] as const;

export const PROPERTY_SIZES = [
  "Small (under 1/4 acre)",
  "Medium (1/4 to 1/2 acre)",
  "Large (1/2 to 1 acre)",
  "Estate (1 acre+)",
] as const;

export const TIME_SLOTS = [
  "8:00 AM – 10:00 AM",
  "10:00 AM – 12:00 PM",
  "12:00 PM – 2:00 PM",
  "2:00 PM – 4:00 PM",
  "4:00 PM – 6:00 PM",
] as const;

export const FREQUENCIES = [
  "One-time visit",
  "Weekly",
  "Bi-weekly",
  "Monthly",
  "Seasonal contract",
] as const;
