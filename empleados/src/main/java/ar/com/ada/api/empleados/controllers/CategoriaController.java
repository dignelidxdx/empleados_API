package ar.com.ada.api.empleados.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import ar.com.ada.api.empleados.entities.Categoria;
import ar.com.ada.api.empleados.services.CategoriaService;

@RestController
@CrossOrigin("*")
public class CategoriaController {
    @Autowired
    CategoriaService categoriaService = new CategoriaService();

    @PostMapping("/categorias")
    public ResponseEntity<?> crearCategoria(@RequestBody Categoria categoria) {
        categoriaService.crearCategoria(categoria);

        return ResponseEntity.ok(categoria.getCategoriaId());
    }
    @GetMapping("/categorias")
    public ResponseEntity<List<Categoria>> listarCategoria() {
        return ResponseEntity.ok(categoriaService.obtenerCategoria());
    }

}