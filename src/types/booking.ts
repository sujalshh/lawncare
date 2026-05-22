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
  "Standard Mowing",
  "Full Lawn Maintenance",
  "Landscaping & Design",
  "Hedge Trimming",
  "Seasonal Cleanup",
  "Fertilization & Treatment",
  "Irrigation Check",
  "Custom Project",
] as const;

export const PROPERTY_SIZES = [
  "Small (under 5,000 sq ft)",
  "Medium (5,000 – 15,000 sq ft)",
  "Large (15,000 – 30,000 sq ft)",
  "Estate (30,000+ sq ft)",
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
] as const;
