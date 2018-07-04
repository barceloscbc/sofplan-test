# Exercício 02
Este exercício tem como objetivo elencar alguns pontos que poderia melhor o código de forma a tornar mais seguro e mais otimizado, maximizando recursos de infra e melhorando a legibilidade do código.
### Auditoria
* Uso de variáveis globais compartilhando o escopo e permitindo acesso indevido.;
	```java
	String texto;
	```
* Não utiliza objetos imutável quando passado como parâmetro;
	```java
	public String geraObservacao(List lista)
	private String retornaCodigos(List lista)
	```
* Concatenação de string, causa um desperdício de memória, pois a cada concatenação e feito uma cópia do array.
	```java
	retornaCodigos(lista) + ".";
	cod.append(s + c);
	return texto + cod;
	```
* Nome de variáveis não representativos;
	```java
	Integer c = iterator.next();
	String s = "";
	```
* Condição que nunca vai acontecer; 
	```java
	cod.toString() == null
	```
* Endentação do código incorreta dificultando a legibilidade do código; 
	```java
	if( cod.toString() == null || cod.toString().length() <= 0 )
		s =  "";
		else if( iterator.hasNext() )
			s =  ", ";
		else
			s =  " e ";
	```
* Uso desnecessário do toString();
	```java
	cod.toString().length() <= 0
	```
* Uso de objetos genéricos;
	```java
	List lista
	```
