export interface Meta {
  LastUpdated: Date;
  TotalResults: number;
  Agreement: string;
  License: string;
  TermsOfUse: string;
}

export interface OtherServiceAndFacility {
  Code: string;
  Name: string;
  Description: string;
}

export interface OpeningHour {
  OpeningTime: string;
  ClosingTime: string;
}

export interface Day {
  Name: string;
  OpeningHours: OpeningHour[];
}

export interface StandardAvailability {
  Day: Day[];
}

export interface Availability {
  StandardAvailability: StandardAvailability;
}

export interface ContactInfo {
  ContactType: string;
  ContactContent: string;
}

export interface GeographicCoordinates {
  Latitude: string;
  Longitude: string;
}

export interface GeoLocation {
  GeographicCoordinates: GeographicCoordinates;
}

export interface PostalAddress {
  AddressLine: string[];
  TownName: string;
  CountrySubDivision: string[];
  Country: string;
  PostCode: string;
  GeoLocation: GeoLocation;
}

export interface Branch {
  Identification: string;
  SequenceNumber: string;
  Name: string;
  Type: string;
  CustomerSegment: string[];
  OtherServiceAndFacility?: OtherServiceAndFacility[];
  Availability: Availability;
  ContactInfo: ContactInfo[];
  PostalAddress: PostalAddress;
  Accessibility?: string[];
  ServiceAndFacility?: string[];
  Shown?: boolean;
}

export interface Brand {
  BrandName: string;
  Branch: Branch[];
}

export interface Datum {
  Brand: Brand[];
}

export interface RootObject {
  meta: Meta;
  data: Datum[];
}
