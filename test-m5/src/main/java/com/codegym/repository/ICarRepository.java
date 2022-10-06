package com.codegym.repository;

import com.codegym.model.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICarRepository extends JpaRepository<Car, Integer> {

    Page<Car> findByBienSoXeContaining(String detailCar, Pageable pageable);

}
