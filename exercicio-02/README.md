# Exercício 02

### Auditoria
* Uso de variaveis globais compartilhando o escopo e permitindo acesso indevido.<pre>String texto;</pre>
* Não usa objetos imutável ( quando objeto e passado como parametro )<pre>public String geraObservacao(List lista) </pre><pre>private String retornaCodigos(List lista)</pre>
* Contanenação de string, causa um desperdicio de memoria, pois a cada concatenção causa um excesso de lixo e copia do array.<pre>retornaCodigos(lista) + ".";<pre><pre>cod.append(s + c);</pre><pre>texto + cod</pre>
* Nome de variaveis não representativos;<pre>Integer c = iterator.next();</pre><pre>String s = "";</pre>
* Condição que nunca vai acontecer; <pre>cod.toString() == null</pre>
* Identação do código incorreta dificultando a legibilidade do codigo; <pre>if( cod.toString() == null || cod.toString().length() <= 0 )
	s =  "";
	else if( iterator.hasNext() )
		s =  ", ";
	else
		s =  " e ";</pre>
* Uso desnecessario do toString(); <pre>cod.toString().length() <= 0</pre>
* Uso de objetos genericos <pre>List lista</pre>