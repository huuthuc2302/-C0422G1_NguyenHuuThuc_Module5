import {CustomerType} from "./customer-type";

export interface Customer {
  id?: number,
  customerName?: string,
  dayOfBirth?: string,
  idCard?: string,
  customerPhone?: string,
  customerEmail?: string,
  customerAddress?: string,
  customerType?: CustomerType
}
