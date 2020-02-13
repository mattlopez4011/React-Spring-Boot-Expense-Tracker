package com.expensetracker.expense.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.persistence.Entity;
import javax.persistence.Table;

// @AllArgsConstructor creates a constructor with all your fields.
@AllArgsConstructor
//This is for JPA, adds the empty constructor (@NoArgsConstructor)
@NoArgsConstructor
//Lombok handles the getters, setters(@Data)
@Data
@Entity
@Table(name="user")
public class User {

    private Long id;

    private String name;

    private String email;


}
