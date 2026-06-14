package com.dangdepzaivaio.StudentManagement.exception;

import com.dangdepzaivaio.StudentManagement.dto.response.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(value = Exception.class)
    public ResponseEntity<ApiResponse<Object>> handlingRuntimeException(Exception exception) {
        ApiResponse<Object> apiResponse = new ApiResponse<>(
                ErrorCode.UNCATEGORIZED_EXCEPTION.getCode(),
                "Lỗi hệ thống không xác định: " + exception.getMessage(),
                null
        );
        return ResponseEntity.status(ErrorCode.UNCATEGORIZED_EXCEPTION.getStatusCode()).body(apiResponse);
    }

    @ExceptionHandler(value = AppException.class)
    public ResponseEntity<ApiResponse<Object>> handlingAppException(AppException exception) {
        ErrorCode errorCode = exception.getErrorCode();
        ApiResponse<Object> apiResponse = new ApiResponse<>(
                errorCode.getCode(),
                errorCode.getMessage(),
                null
        );
        return ResponseEntity.status(errorCode.getStatusCode()).body(apiResponse);
    }

    @ExceptionHandler(value = MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse<Object>> handlingValidation(MethodArgumentNotValidException exception) {
        String defaultMessage = exception.getFieldError() != null
                ? exception.getFieldError().getDefaultMessage()
                : ErrorCode.VALIDATION_ERROR.getMessage();

        ApiResponse<Object> apiResponse = new ApiResponse<>(
                ErrorCode.VALIDATION_ERROR.getCode(),
                defaultMessage,
                null
        );
        return ResponseEntity.status(ErrorCode.VALIDATION_ERROR.getStatusCode()).body(apiResponse);
    }

    @ExceptionHandler(value = AccessDeniedException.class)
    public ResponseEntity<ApiResponse<Object>> handlingAccessDenied(AccessDeniedException exception) {
        ApiResponse<Object> apiResponse = new ApiResponse<>(
                ErrorCode.ACCESS_DENIED.getCode(),
                ErrorCode.ACCESS_DENIED.getMessage(),
                null
        );
        return ResponseEntity.status(ErrorCode.ACCESS_DENIED.getStatusCode()).body(apiResponse);
    }

    @ExceptionHandler(value = AuthenticationException.class)
    public ResponseEntity<ApiResponse<Object>> handlingAuthentication(AuthenticationException exception) {
        ApiResponse<Object> apiResponse = new ApiResponse<>(
                ErrorCode.UNAUTHENTICATED.getCode(),
                ErrorCode.UNAUTHENTICATED.getMessage(),
                null
        );
        return ResponseEntity.status(ErrorCode.UNAUTHENTICATED.getStatusCode()).body(apiResponse);
    }
}
