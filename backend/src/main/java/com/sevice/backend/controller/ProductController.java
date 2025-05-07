package com.sevice.backend.controller;

import com.sevice.backend.model.Product;
import com.sevice.backend.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @Operation(summary = "Search products")
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    content = @Content(
                            schema = @Schema(
                                    implementation = Product.class,
                                    type = "array"
                            )
                    )
            )
    })
    @GetMapping
    public ResponseEntity<List<Product>> searchProducts(
            @Parameter(description = "Search term for product name/brand")
            @RequestParam(required = false) String search
    ) {
        return ResponseEntity.ok(
                search != null ?
                        productService.searchProducts(search) :
                        productService.getAllProducts()
        );
    }

    @Operation(summary = "Get product by ID")
    @ApiResponse(
            responseCode = "200",
            content = @Content(
                    schema = @Schema(implementation = Product.class)
            )
    )
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(
            @Parameter(description = "Product ID") @PathVariable UUID id
    ) {
        return ResponseEntity.ok(productService.getProductById(id));
    }

    @Operation(summary = "Upload product image")
    @ApiResponse(
            responseCode = "200",
            content = @Content(
                    schema = @Schema(implementation = String.class)
            )
    )
    @PostMapping("/upload-image")
    public ResponseEntity<String> uploadImage(
            @Parameter(description = "Image file to upload")
            @RequestParam("file") MultipartFile file
    ) throws IOException {
        return ResponseEntity.ok(productService.uploadImage(file));
    }
}