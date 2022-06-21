package com.codegym.repository;

import com.codegym.model.Bus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IBusRepository extends JpaRepository<Bus,Integer> {
    @Query(value = "select * from bus where `name` like :nameVal and type_id like :typeFind",
            countQuery = "select * from bus where `name` like :nameVal and type_id like :typeFind", nativeQuery = true)
    Page<Bus> findAndSearch(String nameVal, String typeFind, Pageable pageable);
}
