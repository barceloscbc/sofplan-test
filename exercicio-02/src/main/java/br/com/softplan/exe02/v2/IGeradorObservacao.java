package br.com.softplan.exe02.v2;

import java.util.List;
/**
 * Define assinatura padrão para gerar observação.
 * 
 * @author <a href="mailto:barcelos.cbc@gmail.com">Cleber Barcelos Costa</a>
 * @version 0.1.0
 * @param <Type>
 *            de objetos a serem utilizados para gerar a observação.
 */
public interface IGeradorObservacao<Type extends Object> {
	/**
	 * String do tipo vazio.
	 */
	String EMPTY = new String();
	/**
	 * Gera Observação para a lista de valores
	 * 
	 * @param lista
	 *            lista de valores
	 * @return Observação gerada apartir da da lista.
	 */
	String geraObservacao(final List<Type> lista);
}
