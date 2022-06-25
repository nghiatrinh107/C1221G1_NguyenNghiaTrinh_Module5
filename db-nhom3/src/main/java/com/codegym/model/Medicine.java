package com.codegym.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "medicine")
public class Medicine {
    @Id
    @Column(columnDefinition = "VARCHAR(20)")
    private String medicineId;
    private String name;
    private String nxs;
    @ManyToMany(mappedBy = "medicines")
    private List<Invoice> invoices;

    public String getMedicineId() {
        return medicineId;
    }

    public void setMedicineId(String medicineId) {
        this.medicineId = medicineId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNxs() {
        return nxs;
    }

    public void setNxs(String nxs) {
        this.nxs = nxs;
    }

    public List<Invoice> getInvoices() {
        return invoices;
    }

    public void setInvoices(List<Invoice> invoices) {
        this.invoices = invoices;
    }
}
