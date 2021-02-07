package com.example.cursoangularspring.api.excpetion;

import lombok.Getter;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;


public class ApiError {

    @Getter
    private List<String> errors;

    public ApiError(List<String> errors){
        this.errors = errors;
    }

    public ApiError(String error){
        this.errors = Arrays.asList(error);
    }

}
