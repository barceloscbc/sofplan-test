# SOFTPLAN-TEST 
Avaliação  para  Desenvolvedor  de  Software–Softplan  UNIC

* [Exercício 01 ](exercicio-01/README.md)
* [Exercício 02 ](exercicio-02/README.md)

### Check-Out
```cmd
 git clone git@github.com:barceloscbc/sofplan-test.git softplan-cleber
```
### Exercício 01
* Build 
	```cmd
	cd ./softplan-cleber/exercicio-01
	cd lacus-app
	npm install
	
	cd ../lacus-api
	mvn package
	
	cd ..
	```
* Running
	```cmd
	cd lacus-api/target
	java - jar lacus-api -1.0.0.jar
	
	cd ../../lacus-app
	npm run start
	```
* Acesso browser<br/>
	[http://localhost:4200/](http://localhost:4200/)

## Release notes

### 0.2.0 - 10-07-2018
#### Features
* [#1](https://github.com/barceloscbc/sofplan-test/issues/1) Auditoria do código enviado
* [#2](https://github.com/barceloscbc/sofplan-test/issues/2) Proposta de código
* [#4](https://github.com/barceloscbc/sofplan-test/issues/4) Calcular o custo de transporte - Front-End

