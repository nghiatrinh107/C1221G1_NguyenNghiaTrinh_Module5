package com.codegym.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class CompositeKey implements Serializable {
    @Column(name = "invoice_id")
    String invoiceId;
    @Column(name = "medicine_id")
    String medicineId;

    public String getInvoiceId() {
        return invoiceId;
    }

    public void setInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
    }

    public String getMedicineId() {
        return medicineId;
    }

    public void setMedicineId(String medicineId) {
        this.medicineId = medicineId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof CompositeKey)) return false;
        CompositeKey that = (CompositeKey) o;
        return Objects.equals(getInvoiceId(), that.getInvoiceId()) &&
                Objects.equals(getMedicineId(), that.getMedicineId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getInvoiceId(), getMedicineId());
    }
}
