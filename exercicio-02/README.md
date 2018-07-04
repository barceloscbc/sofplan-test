# Exercício 02
Este exercício tem como objetivo elencar alguns pontos que poderia melhor o código de forma a tornar mais seguro e mais otimizado, maximizando recursos de infra e melhorando a legibilidade do código.
### Auditoria
* Uso de variáveis globais compartilhando o escopo e permitindo acesso indevido.;<pre>String texto;</pre>
* Não utiliza objetos imutável quando passado como parâmetro;<pre>public String geraObservacao(List lista) </pre><pre>private String retornaCodigos(List lista)</pre>
* Concatenação de string, causa um desperdício de memória, pois a cada concatenação e feito uma cópia do array.<pre>retornaCodigos(lista) + ".";<pre><pre>cod.append(s + c);</pre><pre>texto + cod</pre>
* Nome de variáveis não representativos;<pre>Integer c = iterator.next();</pre><pre>String s = "";</pre>
* Condição que nunca vai acontecer; <pre>cod.toString() == null</pre>
* Endentação do código incorreta dificultando a legibilidade do código; <pre>if( cod.toString() == null || cod.toString().length() <= 0 )
	s =  "";
	else if( iterator.hasNext() )
		s =  ", ";
	else
		s =  " e ";</pre>
* Uso desnecessário do toString(); <pre>cod.toString().length() <= 0</pre>
* Uso de objetos genéricos;<pre>List lista</pre>