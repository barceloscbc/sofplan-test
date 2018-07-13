package br.com.sofplan.test.lacus.api.controller;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import br.com.sofplan.test.lacus.api.data.entity.TipoVeiculo;
import br.com.sofplan.test.lacus.api.services.TipoVeiculoService;

@RunWith(SpringRunner.class)
@WebMvcTest(value = TipoVeiculoController.class, secure = false)
public class TipoVeiculoControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private TipoVeiculoService tipoVeiculoService;

	@Before
	public void setUp() throws Exception {
		
	}

	@Test
	public void buscaTodosOsTiposVeiculos() throws Exception {
		Mockito.when(tipoVeiculoService.findAll()).thenReturn(this.loadMock());
		RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/api/tipo/veiculos").accept(org.springframework.http.MediaType.APPLICATION_JSON);
		MvcResult result = mockMvc.perform(requestBuilder).andReturn();
		System.out.println(result.getResponse());
		String expected = "[{'id':1,'veiculo':'Caminhão  baú','fator':1.0},{'id':2,'veiculo':'Caminhão  caçamba','fator':1.05},{'id':3,'veiculo':'Carreta','fator':1.12}]";
		JSONAssert.assertEquals(expected, result.getResponse().getContentAsString(), false);
	}

	public List<TipoVeiculo> loadMock() {
		List<TipoVeiculo> mockTipoVeiculo = new ArrayList<TipoVeiculo>();
		TipoVeiculo tv = new TipoVeiculo();
		tv.setId(1l);
		tv.setVeiculo("Caminhão  baú");
		tv.setFator(1.00);
		mockTipoVeiculo.add(tv);

		tv = new TipoVeiculo();
		tv.setId(2l);
		tv.setVeiculo("Caminhão  caçamba");
		tv.setFator(1.05);
		mockTipoVeiculo.add(tv);

		tv = new TipoVeiculo();
		tv.setId(3l);
		tv.setVeiculo("Carreta");
		tv.setFator(1.12);
		mockTipoVeiculo.add(tv);
		return mockTipoVeiculo;
	}

}
