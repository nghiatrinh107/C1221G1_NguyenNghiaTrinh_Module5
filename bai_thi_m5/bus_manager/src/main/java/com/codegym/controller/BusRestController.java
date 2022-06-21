package com.codegym.controller;

import com.codegym.dto.BusDto;
import com.codegym.model.Bus;
import com.codegym.model.BusType;
import com.codegym.service.IBusService;
import com.codegym.service.IBusTypeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin
@RequestMapping(value = "/busRest")
@RestController
public class BusRestController {
    @Autowired
    private IBusService iBusService;
    @Autowired
    private IBusTypeService iBusTypeService;

    @GetMapping(value = "/list")
    public ResponseEntity<Page<Bus>> getBus(@PageableDefault(value = 40) Pageable pageable,
                                                 @RequestParam("name") Optional<String> name,
                                                 @RequestParam("type") Optional<String> type,
                                                 @RequestParam("sort") Optional<String> sort) {
        String nameVal = name.orElse("");
        String sortByName = sort.orElse("");
        String typeFind = type.orElse("%");
        Page<Bus> customersPage = this.iBusService.findAndSearch(nameVal, typeFind, pageable);
        if (!customersPage.hasContent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(customersPage, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id){
        Bus bus = this.iBusService.findById(id);
        System.out.println(bus);
        if(bus == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        this.iBusService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/type_list")
    public ResponseEntity<List<BusType>> get() {
       List<BusType> busTypeList = this.iBusTypeService.findAll();
        return new ResponseEntity<>( busTypeList,HttpStatus.OK);
    }
    @PostMapping(value = "/create")
    public ResponseEntity<List<FieldError>> create(@Validated @RequestBody BusDto busDto,
                                                       BindingResult bindingResult){
        if(bindingResult.hasFieldErrors()){
            return new ResponseEntity<>(bindingResult.getFieldErrors(),HttpStatus.BAD_REQUEST);
        }
        Bus bus = new Bus();
        BeanUtils.copyProperties(busDto,bus);
        this.iBusService.save(bus);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PatchMapping(value = "/update/{id}")
    public ResponseEntity<Bus> updateCustomer(@PathVariable("id") Integer id,
                                                              @Validated @RequestBody BusDto busDto,
                                                              BindingResult bindingResult) {
        Bus bus= iBusService.findById(id);
        System.out.println(bus);
        if(bus == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        BeanUtils.copyProperties(busDto,bus);
            bus.setId(bus.getId());
            this.iBusService.save(bus);
            return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping(value = "/list/{id}")
    public ResponseEntity<Bus> getFindBus(@PathVariable("id") Integer id){
        Bus bus = this.iBusService.findById(id);
        return new ResponseEntity<>( bus,HttpStatus.OK);
    }

}
