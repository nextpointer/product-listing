package com.sevice.backend.controller;

import com.sevice.backend.model.Product;
import com.sevice.backend.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping
    @Operation(summary = "Get all products or search products")
    public ResponseEntity<List<Product>> getProducts(
            @Parameter(description = "Search term for product name/brand")
            @RequestParam(required = false) String search
    ) {
        if (search != null && !search.isEmpty()) {
            return ResponseEntity.ok(productService.searchProducts(search));
        }
        return ResponseEntity.ok(productService.getAllProducts());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get product by ID")
    public ResponseEntity<Product> getProductById(
            @Parameter(description = "Product ID") @PathVariable UUID id
    ) {
        return ResponseEntity.ok(productService.getProductById(id));
    }
}
