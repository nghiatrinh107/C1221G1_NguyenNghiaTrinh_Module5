package com.codegym.model;


import javax.persistence.*;

@Entity
@Table(name = "invoice_medicine")
public class InvoiceMedicine {
   @EmbeddedId
    private CompositeKey invoiceMedicineId;
   @ManyToOne
    @MapsId("invoice_id")
    @JoinColumn(name = "invoice_id")
    private Invoice invoice;
    @ManyToOne
    @MapsId("medicine_id")
    @JoinColumn(name = "medicine_id")
    private Medicine medicine;
    private Integer quantity;

    public CompositeKey getInvoiceMedicineId() {
        return invoiceMedicineId;
    }

    public void setInvoiceMedicineId(CompositeKey invoiceMedicineId) {
        this.invoiceMedicineId = invoiceMedicineId;
    }

    public Invoice getInvoice() {
        return invoice;
    }

    public void setInvoice(Invoice invoice) {
        this.invoice = invoice;
    }

    public Medicine getMedicine() {
        return medicine;
    }

    public void setMedicine(Medicine medicine) {
        this.medicine = medicine;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
