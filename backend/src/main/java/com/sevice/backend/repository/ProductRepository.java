package com.sevice.backend.repository;

import com.sevice.backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.UUID;

@Repository
public interface ProductRepository extends JpaRepository<Product, UUID> {
    List<Product> findByNameContainingIgnoreCaseOrBrandContainingIgnoreCase(String name, String brand);
}