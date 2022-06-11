import {RentType} from './rent-type';
import {FacilityType} from './facility-type';

export interface Facility {
  id: number;
  name: string;
  code?: string;
  image?: string;
  rentType?: RentType;
  rentalFee?: number;
  floorSquare?: number;
  maximumPeople?: number;
  roomStandard?: string;
  description?: string;
  poolSquare?: number;
  numberFloor?: number;
  facilityType?: FacilityType;
  freeServiceInclude?: string;
}
