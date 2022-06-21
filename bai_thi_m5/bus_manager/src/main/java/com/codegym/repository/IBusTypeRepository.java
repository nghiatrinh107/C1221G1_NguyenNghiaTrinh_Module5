package com.codegym.repository;

import com.codegym.model.BusType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBusTypeRepository extends JpaRepository<BusType, Integer> {
}
