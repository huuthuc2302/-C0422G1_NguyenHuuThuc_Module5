package com.codegym.controller;

import com.codegym.model.Car;
import com.codegym.service.Car.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("carsRest")
public class CarRestController {

    @Autowired
    private ICarService iCarService;

    @GetMapping("list")
    public ResponseEntity<List<Car>> listCar() {

        List<Car> carList = iCarService.findAll();

        if (carList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(carList, HttpStatus.OK);
    }

}
