# S.O.L.I.D

Conjunto de diretrizes projetadas para promover práticas de desenvolvimento de software mais robustas e sustentáveis.

Os princípios SOLID compreendem cinco diretrizes essenciais (SRP, OCP, LSP, ISP e DIP), cada uma abordando aspectos específicos do design de software que podem impactar diretamente a facilidade de manutenção, a extensibilidade e a reutilização do código.

### ACBA (Alta coesão e baixo acoplamento)

Com SOLID, o nosso objetivo é: **Alta coesão e baixo acoplamento**

-> O **acoplamento** é o grau de ligação entre classes, se o acoplamento for alto as classes são engessadas, logo estão limitadas. Para ter baixo acoplamento entra em jogo as abstrações possibilitando trocar as implementações entre objetos.

-> O conceito de **coesão** é utilizado para definir o quanto as operações presentes em um objeto estão relacionadas umas com as outras. Basicamente, um objeto é coeso quando faz exatamente o que se propõe, sem ir além disso. Ou seja, é quando ele que possui operações que estão focadas em compor uma determinada responsabilidade, sem misturar conceitos que não estão relacionados entre si.

## SRP - Single Responsibility Principle

Esse princípio declara que uma classe deve ser especializada em um único assunto e possuir apenas uma responsabilidade dentro do software, ou seja, a classe deve ter uma única tarefa ou ação para executar.

### Exemplo

``` PHP
<?php 

class Order {
	public function calculateTotalSum(){/*...*/}
	public function getItems(){/*...*/}
	public function getItemCount(){/*...*/}
	public function addItem($item){/*...*/}
	public function deleteItem($item){/*...*/}

	public function printOrder(){/*...*/}
	public function showOrder(){/*...*/}

	public function load(){/*...*/}
	public function save(){/*...*/}
	public function update(){/*...*/}
	public function delete(){/*...*/}
}
```

A classe ``Order`` acima fere o SRP pois, além de lidar com as informações do pedido, ela também é responsável pela exibição e manipulação dos dados e com isso, realiza tarefas que não são de sua responsabilidade, como por exemplo ``printOrder()`` e ``load()``

``` PHP
<?php

class Order {
	public function calculateTotalSum(){/*...*/}
	public function getItems(){/*...*/}
	public function getItemCount(){/*...*/}
	public function addItem($item){/*...*/}
	public function deleteItem($item){/*...*/}
}

class OrderRepository {
	public function load($orderID){/*...*/}
	public function save($order){/*...*/}
	public function update($order){/*...*/}
	public function delete($order){/*...*/}
}

class OrderViewer {
	public function printOrder($order){/*...*/}
	public function showOrder($order){/*...*/}
}
```
Após consertar o exemplo, chegamos na divisão acima, dividimos a classe inicial com todos aquelas responsabilidades em três classes: 

1. ``Order``: Lida com as informações do pedido;
2. ``OrderRepository``: Manipula os dados;
3. ``OrderViewer``:  Responsável pela exibição.

## OCP - Open-Closed Principle

**Objetos ou entidades devem estar abertos para extensão, mas fechados para modificação**, ou seja, quando novos comportamentos e recursos precisam ser adicionados no software, devemos estender e não alterar o código fonte original.

### Exemplo

``` PHP
<?php

class ContratoClt {
	public function salario() {
		//...
	}
}

class Estagio {
	public function bolsaAuxilio() {
		//...
	}

}

class FolhaDePagamento {
	protected $saldo;
	public function calcular($funcionario) {
		if ($funcionario instanceof ContratoClt ) {
			$this->saldo = $funcionario->salario();
		} else if ($funcionario instanceof Estagio) {
			$this->saldo = $funcionario->bolsaAuxilio();
		}
	}	
}
```

Com essa classe ``FolhaDePagamento`` nós temos um problema, é necessário verificar qual o tipo do parâmetro ``$funcionario`` para que a função correta seja chamada e esse comportamento é contra o OCP pois caso  venhamos a adicionar um novo tipo de contratação, como o PJ, precisaremos modificar a classe para que funcione com esse novo tipo.

Para corrigir, criamos a interface ``Remuneravel`` com a função ``remuneracao()`` , fazemos as classes ``Estagio`` e ``ContratoClt`` a implementarem e por fim, escrevemos que a função ``calcular`` presente em ``FolhaDePagamento`` receba uma instancia que implemente essa interface e dentro dessa função chamamos ``remuneracao()`` da instancia enviada por parâmetro.

``` PHP
<?php

interface Remuneravel {
	public function remuneracao();
}

class ContratoClt implements Remuneravel {
	public function remuneracao() {
		//...
	}
}

class Estagio implements Remuneravel {
	public function remuneracao() {
		//...
	}
}

class FolhaDePagamento {
	protected $saldo;
	public function calcular(Remuneravel $funcionario){
		$this->saldo = $funcionario->remuneracao();
	}
}
```

## LSP -  Liskov Substitution Principle

Princípio da substituição de Liskov —  **Uma classe derivada deve ser substituível por sua classe base**.

O princípio da substituição de Liskov foi introduzido por  **Barbara Liskov** em sua conferência “Data abstraction” em 1987. A definição de Liskov diz que:

> Se S é um subtipo de T, então os objetos do tipo T, em um programa, podem ser substituídos pelos objetos de tipo S sem que seja necessário alterar as propriedades deste programa

### Exemplo

``` PHP
<?php

class A {
	public function getNome() {
		echo 'Meu nome é A';
	}
}

class B extends A {
	public function getNome() {
		echo 'Meu nome é B';
	}
}

$objeto1 = new A;
$objeto2 = new B;

function imprimeNome(A $objeto) {
	return $objeto->getNome();
}

imprimeNome($objeto1); // Meu nome é A
imprimeNome($objeto2); // Meu nome é B
```

## ISP - Interface Segregation Principle

Esse principio basicamente diz que é melhor criar interfaces para ações especificas ao invés de interfaces genéricas.

### Exemplo

``` PHP
<?php

interface Aves {
	public function comer();
	public function voar();
}

class Papagaio implements Aves {
	public function comer() {
		//...
	}

	public function voar() {
		//...
	}
}

class Pinguim implements Aves {
	public function comer() {
		//...
	}

	public function voar() {
		//...
	}
}
```

No código acima temos um problema, por mais que a classe ``Pinguim`` também represente um tipo de ave, ao estender os métodos da interface  ``Aves`` somos obrigados implementar a função ``voar()`` que nessa classe, é inútil já que pinguins não voam. Para corrigir, fazemos o método ``voar()`` ser de uma interface específica que será implementada apenas nas classes que representam aves que de fato voam.

``` PHP
<?php

interface Aves {
	public function comer();
	public function porOvo();
}

interface AvesQueVoam extends Aves {
	public function voar();
}

class Papagaio implements AvesQueVoam {
	public function comer() {
		//...
	}
	public function voar() {
		//...
	}
	public function porOvo() {
		//...
	}
}

class Pinguim implements Aves {
	public function comer() {
		//...
	}
	public function porOvo() {
		//...
	}
}
```

## DIP - Dependency Inversion Principle

Temos a classe **A**, que depende diretamente da classe **B1** para funcionar. Isso gera um problema: qualquer alteração em **B1** pode impactar o funcionamento de **A**. Para resolver, fazemos com que **A** dependa de uma abstração de **B1**, representada por uma classe **B**, que define características gerais. Dessa forma, se futuramente quisermos adicionar uma nova classe **B2**, basta fazer com que ela estenda **B**, e **A** poderá utilizá-la sem modificações. 

### Exemplo

``` PHP
<?php

use MySQLConnection;

class PasswordReminder {
	private $dbConnection;
	public function __construct(MySQLConnection $dbConnection) {
		$this->dbConnection = $dbConnection;
	}
	// Faz alguma coisa
}
```

No exemplo acima temos a classe ``PasswordReminder`` que possui uma forte dependência da classe ``MySQLConnection`` o que pode causar serias dificuldades em futuras atualizações como alteração do banco ou alguma modificação interna em  ``MySQLConnection``. Mas para resolver esses problemas, fazemos ``PasswordReminder`` depender de uma interface genérica ``DBConnectionInterface``, uma conexão qualquer desde que a mesma implemente essa interface, e em seguida implementamos essa interface em nossas classes de conexão como no exemplo abaixo:  

``` PHP
<?php

interface DBConnectionInterface {
    public function connect();
}


class MySQLConnection implements DBConnectionInterface {
    public function connect() {
        // ...
    }
}

class OracleConnection implements DBConnectionInterface {
    public function connect() {
        // ...
    }
}

class PasswordReminder {
    private $dbConnection;

    public function __construct(DBConnectionInterface $dbConnection) {
        $this->dbConnection = $dbConnection;
    }
  
    // Faz alguma coisa
}
```