package com.codegym.repository;

import com.codegym.model.CustomerType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICustomerTypeRepository extends JpaRepository<CustomerType,Integer> {

    Page<CustomerType> findByNameContaining(String name, Pageable pageable);

}
