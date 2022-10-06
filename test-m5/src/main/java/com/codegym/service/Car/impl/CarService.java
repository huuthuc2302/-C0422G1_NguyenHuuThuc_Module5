package com.codegym.service.Car.impl;

import com.codegym.model.Car;
import com.codegym.repository.ICarRepository;
import com.codegym.service.Car.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService implements ICarService {

    @Autowired
    private ICarRepository iCarRepository;

    @Override
    public List<Car> findAll() {
        return iCarRepository.findAll();
    }

    @Override
    public void save(Car car) {
        iCarRepository.save(car);
    }

    @Override
    public Car findById(Integer id) {
        return iCarRepository.findById(id).orElse(null);
    }

    @Override
    public void remove(Integer id) {
        iCarRepository.deleteById(id);
    }

    @Override
    public Page<Car> findByBienSoXeContaining(String detailCar, Pageable pageable) {
        return iCarRepository.findByBienSoXeContaining(detailCar, pageable);
    }

}
