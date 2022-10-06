package com.codegym.service.Car;

import com.codegym.model.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICarService {

    List<Car> findAll();

    void save(Car car);

    Car findById(Integer id);

    void remove(Integer id);

    Page<Car> findByBienSoXeContaining(String detailCar, Pageable pageable);

}
