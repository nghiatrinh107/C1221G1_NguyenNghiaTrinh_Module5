package com.codegym.service;

import com.codegym.model.Bus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IBusService {
    Page<Bus> findAndSearch(String nameVal, String typeFind, Pageable pageable);

    Bus findById(Integer id);

    void delete(Integer id);

    void save(Bus bus);
}
