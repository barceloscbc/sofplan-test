package br.com.sofplan.test.lacus.api.data.entity;

import java.io.Serializable;

import lombok.Data;

public @Data class TipoVeiculo implements Serializable {
	private static final long serialVersionUID = 1L;
	private Long id;
	private String veiculo;
	private Double fator;
	
}
