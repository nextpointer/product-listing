package com.sevice.backend.exception;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
public class ApiError {
    private HttpStatus status;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    private LocalDateTime timestamp;
    private String message;
    private List<SubError> subErrors = new ArrayList<>();

    public ApiError(HttpStatus status) {
        this.timestamp = LocalDateTime.now();
        this.status = status;
    }

    public void addSubError(String field, String message) {
        subErrors.add(new SubError(field, message));
    }

    @Data
    private static class SubError {
        private String field;
        private String message;

        public SubError(String field, String message) {
            this.field = field;
            this.message = message;
        }
    }
}
