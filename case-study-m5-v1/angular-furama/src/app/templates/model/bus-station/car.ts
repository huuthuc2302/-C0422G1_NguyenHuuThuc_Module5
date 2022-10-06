import {CarCompany} from "./car-company";

export interface Car {
  id?:number,
  garageName?: string,
  garagePhone?: string,
  garageEmail?: string,
  carCompany?: CarCompany
}
