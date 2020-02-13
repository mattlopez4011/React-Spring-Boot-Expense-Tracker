package com.expensetracker.expense.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.persistence.*;
import java.util.Set;

// @AllArgsConstructor creates a constructor with all your fields.
@AllArgsConstructor
//This is for JPA, adds the empty constructor (@NoArgsConstructor)
@NoArgsConstructor
//Lombok handles the getters, setters(@Data)
@Data
@Entity
@Table(name="user")
public class User {

    @Id
//    @GeneratedValue
    private Long id;

    private String name;

    private String email;

@OneToMany
    private Set<Category> category;


}
