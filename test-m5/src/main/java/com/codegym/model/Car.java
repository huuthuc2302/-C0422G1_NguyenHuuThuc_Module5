package com.codegym.model;

import javax.persistence.*;

@Entity
@Table(name = "xe_khach")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String bienSoXe;
    private String loaiXe;
    private String tenNhaXe;
    private String soDienThoaiNhaXe;
    private String emailNhaXe;
    private String gioDi;
    private String gioDen;
    private String diemDi;

    @ManyToOne
    private DiemDen diemDen;

    public Car() {
    }

    public Car(Integer id, String bienSoXe, String loaiXe, String tenNhaXe, String soDienThoaiNhaXe, String emailNhaXe, String gioDi, String gioDen, String diemDi, DiemDen diemDen) {
        this.id = id;
        this.bienSoXe = bienSoXe;
        this.loaiXe = loaiXe;
        this.tenNhaXe = tenNhaXe;
        this.soDienThoaiNhaXe = soDienThoaiNhaXe;
        this.emailNhaXe = emailNhaXe;
        this.gioDi = gioDi;
        this.gioDen = gioDen;
        this.diemDi = diemDi;
        this.diemDen = diemDen;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBienSoXe() {
        return bienSoXe;
    }

    public void setBienSoXe(String bienSoXe) {
        this.bienSoXe = bienSoXe;
    }

    public String getLoaiXe() {
        return loaiXe;
    }

    public void setLoaiXe(String loaiXe) {
        this.loaiXe = loaiXe;
    }

    public String getTenNhaXe() {
        return tenNhaXe;
    }

    public void setTenNhaXe(String tenNhaXe) {
        this.tenNhaXe = tenNhaXe;
    }

    public String getSoDienThoaiNhaXe() {
        return soDienThoaiNhaXe;
    }

    public void setSoDienThoaiNhaXe(String soDienThoaiNhaXe) {
        this.soDienThoaiNhaXe = soDienThoaiNhaXe;
    }

    public String getEmailNhaXe() {
        return emailNhaXe;
    }

    public void setEmailNhaXe(String emailNhaXe) {
        this.emailNhaXe = emailNhaXe;
    }

    public String getGioDi() {
        return gioDi;
    }

    public void setGioDi(String gioDi) {
        this.gioDi = gioDi;
    }

    public String getGioDen() {
        return gioDen;
    }

    public void setGioDen(String gioDen) {
        this.gioDen = gioDen;
    }

    public String getDiemDi() {
        return diemDi;
    }

    public void setDiemDi(String diemDi) {
        this.diemDi = diemDi;
    }

    public DiemDen getDiemDen() {
        return diemDen;
    }

    public void setDiemDen(DiemDen diemDen) {
        this.diemDen = diemDen;
    }
}
