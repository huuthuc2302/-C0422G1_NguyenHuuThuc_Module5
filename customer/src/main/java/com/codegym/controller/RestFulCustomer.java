package com.codegym.controller;

import com.codegym.model.Customer;
import com.codegym.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("customer/api")
public class RestFulCustomer {

    @Autowired
    private ICustomerService iCustomerService;

    @GetMapping("")
    public ResponseEntity<Page<Customer>> findAll(@PageableDefault(page = 0, size = 5) Pageable pageable,
                                                  @RequestParam Optional<String> name){
        String nameVal = name.orElse("");
        Page<Customer> customers = iCustomerService.findCustomerAll(nameVal, pageable);
        if(customers.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else {
            return new ResponseEntity<>(customers, HttpStatus.OK);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<?> createCustomer(@RequestBody Customer customer){
        iCustomerService.create(customer);
        return new ResponseEntity<>(customer,HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@RequestBody Customer customer) {
        iCustomerService.update(customer);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id ){
        Optional<Customer> optionalCustomer = iCustomerService.findById(id);
        if (!optionalCustomer.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        iCustomerService.delete(id);
        return new ResponseEntity<>(optionalCustomer.get(), HttpStatus.NO_CONTENT);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<?> findById(@PathVariable("id") Integer id) {
        Optional<Customer> optionalCustomer = iCustomerService.findById(id);
        if(!optionalCustomer.isPresent()){
            return new ResponseEntity<>(optionalCustomer, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(optionalCustomer, HttpStatus.OK);
    }

}
