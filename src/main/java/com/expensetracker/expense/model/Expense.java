package com.expensetracker.expense.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.time.Instant;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "expense")
public class Expense {

    @Id
    private Long id;

//    Uses Java Instant time to get the time for that moment.
    private Instant expensedate;

    private String descript;

    @ManyToOne
    private Category category;

    @ManyToOne
    private User user;



}
