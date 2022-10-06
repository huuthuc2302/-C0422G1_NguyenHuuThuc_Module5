import {DiemDen} from './diem-den';

export interface Car {
  id?:number,
  bienSoXe?: string,
  loaiXe?: string,
  tenNhaXe?: string,
  soDienThoaiNhaXe?: string,
  emailNhaXe?: string,
  gioDi?: string,
  gioDen?: string
  diemDi?: string
  diemDen?: DiemDen
}
