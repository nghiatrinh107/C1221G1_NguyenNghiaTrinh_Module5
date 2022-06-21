package com.codegym.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name = "bus")
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
   private String numberPlate;
    @ManyToOne(cascade = CascadeType.DETACH)
    @JoinColumn(name = "type_id", referencedColumnName = "id")
    private BusType type;
    private String name;
    private String start;
    private String end;
    private String phone;
    private String email;
    @Column(columnDefinition = "TIME")
    private String startHours;
    @Column(columnDefinition = "TIME")
    private String endHours;

    public Bus() {
    }

    public Bus(String numberPlate, BusType type, String name, String start, String end, String phone, String email, String startHours, String endHours) {
        this.numberPlate = numberPlate;
        this.type = type;
        this.name = name;
        this.start = start;
        this.end = end;
        this.phone = phone;
        this.email = email;
        this.startHours = startHours;
        this.endHours = endHours;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNumberPlate() {
        return numberPlate;
    }

    public void setNumberPlate(String numberPlate) {
        this.numberPlate = numberPlate;
    }

    public BusType getType() {
        return type;
    }

    public void setType(BusType type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getStartHours() {
        return startHours;
    }

    public void setStartHours(String startHours) {
        this.startHours = startHours;
    }

    public String getEndHours() {
        return endHours;
    }

    public void setEndHours(String endHours) {
        this.endHours = endHours;
    }
}
