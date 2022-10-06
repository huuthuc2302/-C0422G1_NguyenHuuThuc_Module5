package com.codegym.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "diem_den")
public class DiemDen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer id;
    private String diaDiem;

    @OneToMany(mappedBy = "diemDen")
    @JsonBackReference
    private List<Car> carList;

    public DiemDen() {
    }

    public DiemDen(Integer id, String diaDiem, List<Car> carList) {
        this.id = id;
        this.diaDiem = diaDiem;
        this.carList = carList;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDiaDiem() {
        return diaDiem;
    }

    public void setDiaDiem(String diaDiem) {
        this.diaDiem = diaDiem;
    }

    public List<Car> getCarList() {
        return carList;
    }

    public void setCarList(List<Car> carList) {
        this.carList = carList;
    }
}
