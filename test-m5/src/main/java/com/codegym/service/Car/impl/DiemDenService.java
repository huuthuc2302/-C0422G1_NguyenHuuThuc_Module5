package com.codegym.service.Car.impl;

import com.codegym.model.DiemDen;
import com.codegym.repository.IDiemDenRepository;
import com.codegym.service.Car.IDiemDenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiemDenService implements IDiemDenService {

    @Autowired
    private IDiemDenRepository iDiemDenRepository;

    @Override
    public List<DiemDen> findAll() {
        return iDiemDenRepository.findAll();
    }

}
