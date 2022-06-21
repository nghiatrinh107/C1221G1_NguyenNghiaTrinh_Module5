package com.codegym.service.impl;
import com.codegym.model.Bus;
import com.codegym.repository.IBusRepository;
import com.codegym.service.IBusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BusService implements IBusService {
    @Autowired
    private IBusRepository iBusRepository;

    @Override
    public Page<Bus> findAndSearch(String nameVal, String typeFind, Pageable pageable) {
        return this.iBusRepository.findAndSearch("%"+nameVal+"%",typeFind,pageable);
    }

    @Override
    public Bus findById(Integer id) {
        return iBusRepository.findById(id).orElse(null);
    }

    @Override
    public void delete(Integer id) {
        iBusRepository.deleteById(id);
    }

    @Override
    public void save(Bus bus) {
        iBusRepository.save(bus);
    }
}
