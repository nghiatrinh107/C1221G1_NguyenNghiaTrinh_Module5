import {Type} from "./type";

export interface Bus {
  readonly id: number;
  readonly numberPlate?: string;
  type: Type;
  name: string;
  start: string;
  end: string;
  phone: string;
  email: string;
  startHours: string;
  endHours: string;
}
