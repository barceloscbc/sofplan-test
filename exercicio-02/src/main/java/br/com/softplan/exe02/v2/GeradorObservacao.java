package br.com.softplan.exe02.v2;

import java.util.Iterator;
import java.util.List;
/**
 * Concretização do gerador de observação do tipo inteiro.
 * 
 * @author <a href="mailto:barcelos.cbc@gmail.com">Cleber Barcelos Costa</a>
 * @version 0.1.0
 */
public class GeradorObservacao implements IGeradorObservacao<Integer> {
	private static final String PONTO = ".";
	private static final String E = " e ";
	private static final String VIRGULA = ", ";
	private static final String UMA_NOTA = "Fatura da nota fiscal de simples remessa: ";
	private static final String MAIS_NOTA = "Fatura das notas fiscais de simples remessa: ";

	/*
	 * (non-Javadoc)
	 * 
	 * @see br.com.softplan.exe02.v2.IGeradorObservacao#geraObservacao(java.util.List)
	 */
	public String geraObservacao(final List<Integer> lista) {
		if (lista != null && !lista.isEmpty()) {
			return this.retornaCodigos(lista);
		}
		return EMPTY;
	}

	private String retornaCodigos(final List<Integer> lista) {
		StringBuilder texto = new StringBuilder();
		if (lista.size() >= 2) {
			texto.append(MAIS_NOTA);
		} else {
			texto.append(UMA_NOTA);
		}

		StringBuilder codigos = new StringBuilder();
		for (Iterator<Integer> iterator = lista.iterator(); iterator.hasNext();) {
			Integer codigo = iterator.next();
			if (codigos.length() == 0) {
				codigos.append(EMPTY);
			} else if (iterator.hasNext()) {
				codigos.append(VIRGULA);
			} else {
				codigos.append(E);
			}
			codigos.append(codigo);
		}
		texto.append(codigos).append(PONTO);
		return texto.toString();
	}
}
