package com.codegym.service.impl;
import com.codegym.model.BusType;
import com.codegym.repository.IBusTypeRepository;
import com.codegym.service.IBusTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusTypeServiceService implements IBusTypeService {
    @Autowired
    private IBusTypeRepository iBusTypeRepository;
    @Override
    public List<BusType> findAll() {
        return iBusTypeRepository.findAll();
    }
}
