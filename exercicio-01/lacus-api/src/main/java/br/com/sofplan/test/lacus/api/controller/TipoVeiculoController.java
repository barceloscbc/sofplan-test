package br.com.sofplan.test.lacus.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import br.com.sofplan.test.lacus.api.data.entity.TipoVeiculo;
import br.com.sofplan.test.lacus.api.services.TipoVeiculoService;
import lombok.Getter;
import lombok.Setter;

@RestController
public class TipoVeiculoController {
	@Autowired
	private @Getter @Setter TipoVeiculoService tipoVeiculoService;

	@GetMapping("/api/tipo/veiculos")
	public List<TipoVeiculo> findAll() {
		return this.getTipoVeiculoService().findAll();
	}
}
