package com.codegym.model;

import javax.persistence.*;

@Entity
@Table(name= "khach_hang")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_khach_hang")
    private int id;

    @Column(name = "ho_ten")
    private String name;
    @Column(name = "ngay_sinh")
    private String dateOfBirth;
    @Column(name = "gioi_tinh")
    private boolean gender;
    @Column(name = "so_cmnd")
    private String idCard;
    @Column(name = "so_dien_thoai")
    private String phoneNumber;
    @Column(name = "email")
    private String email;
    @Column(name = "dia_chi")
    private String address;

    @ManyToOne
    @JoinColumn(name = "ma_loai_khach", referencedColumnName = "ma_loai_khach")
    private CustomerType customerType;

    public Customer() {
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public boolean isGender() {
        return gender;
    }

    public void setGender(boolean gender) {
        this.gender = gender;
    }

    public String getIdCard() {
        return idCard;
    }

    public void setIdCard(String idCard) {
        this.idCard = idCard;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public CustomerType getCustomerType() {
        return customerType;
    }

    public void setCustomerType(CustomerType customerType) {
        this.customerType = customerType;
    }

}
