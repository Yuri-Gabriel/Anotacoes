# GoF

### Tabela (Propósito × Escopo)

| Propósito        | Classe               | Objeto                                                                 |
|------------------|----------------------|------------------------------------------------------------------------|
| **Criação**      | Factory Method       | Abstract Factory, Builder, Prototype, Singleton                        |
| **Estrutura**    | Class Adapter        | Object Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy |
| **Comportamento**| Template Method      | Interpreter, Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Visitor |

##   Padrões de criação
### Factory Method

Nesse padrão, temos a classe abstrata `Creator`  que possui um método `create()` também abstrato que retorna um `Product` e é implementando em outras classes como `Creator_A` e `Creator_B`que nelas retornam respectivamente uma instancia de `Product_A` e de `Product_B` que são implementações de `Product`.

#### Exemplo

``` JAVA
abstract class Creator {
	public abstract Product create();
}

class Creator_A extends Creator {
	public Product create() {
		return new Product_A();
	}
}

class Creator_B extends Creator {
	public Product create() {
		return new Product_B();
	}
}

interface Product {  }

class Product_A implements Product {}
class Product_B implements Product {}

public class App {
	public static void main(String[] args) {
		Creator creator;
		boolean wantA = true;
		
		if(wantA) {
			creator = new Creator_A();
		} else {
			creator = new Creator_B();
		}
		
		Product p = creator.create();
	}
}
```

### Abstract Factory

Aqui nos temos uma classe abstrata `Frabic` que é estendida por outras classes, como `A_Fabric` e `B_Fabric` e ela criam uma certa familila `Product` sendo respectivamente `A_Products` e `B_Products`.

``` JAVA
interface Frabic {
	public ProductSmall createSmall();
	public ProductBig createBig();
}

class A_Fabric extends Frabic {
	public ProductSmall createSmall() {
		return new Product_A_Small();
	}
	public ProductBig createBig() {
		return new Product_A_Big();
	}
}

class B_Fabric extends Frabic {
	public ProductSmall createSmall() {
		return new Product_B_Small();
	}
	public ProductBig createBig() {
		return new Product_B_Big();
	}
}

interface ProductSmall {  }
interface ProductBig {  }

class Product_A_Big implements ProductBig {}
class Product_B_Big implements ProductBig {}
class Product_A_Small implements ProductSmall {}
class Product_B_Small implements ProductSmall {}

public class App {
	public static void main(String[] args) {
		Creator creator;
		boolean wantA = true;
		
		if(wantA) {
			creator = new Creator_A();
		} else {
			creator = new Creator_B();
		}
		
		ProductSmall p = creator.createSmall();
		ProductBig p = creator.createBig();
	}
}
```

### Adapter

Esse padrão funciona como uma camada de intermediaria de tradução entre uma classe e outra e existem duas formas de ser implementada:

#### 1. Class Adapter

Usa a ideia de herança múltipla e de maneira resumida temos: 

- `MyExistingServiceClass`: Nossa classe base que, por exemplo, possui uma lógica que precisamos usar em nosso sistema, mas ela trabalha de uma forma totalmente diferente;
- `ClientInterface`: Interface que informará os métodos que o nosso sistema usa;
- `MyNewObjectAdapter`: Nossa classe intermediaria que estende a classe base e implementá a nossa interface, transformando assim possível o uso de `MyExistingServiceClass` em nosso sistema.

E implementado fica:
``` JAVA
class MyExistingServiceClass {
    public void show() {
        System.out.println("Inside Service method show()");        
    }
}

interface ClientInterface {
    void display();
}

class MyNewClassAdapter extends MyExistingServiceClass implements ClientInterface {
    void display() {
        show();
    }
}
```

#### 2. Object Adapter

Podendo ser usada em qualquer linguagem de programação OO, ela trabalha diretamente com uma instancia da nossa classe base ao invés de estendela, mas continua implementando a nossa interface.

``` JAVA
class MyNewObjectAdapter implements ClientInterface {

    MyExistingServiceClass existingClassObject;

    void display() {
        existingClassObject.show();
    }
} 
```

### Composite

O **Composite** é um padrão de projeto estrutural que permite que você componha objetos em estruturas de árvores e então trabalhe com essas estruturas como se elas fossem objetos individuais. Esse padrão é muito usado em Frameworks como React que utilizam componentes em seus projetos.

#### Exemplo

``` JAVA
interface Node {
	public void render();
}

class Div implements Node {
	private Node node;
	public Div(Node node) {
		this.node = node;
	}
	@Override
	public void render() {
		System.out.println("<div>");
		node.render();
		System.out.println("</div>");
	}
}

class P implements Node {
	private String data;
	public Div(String data) {
		this.data = data;
	}
	@Override
	public void render() {
		System.out.println("<p>");
		System.out.println(this.data);
		System.out.println("</p>");
	}
}

public class App {
	public static void main(String[] args) {
		P p = new P("Olá, Mundo!");
		
		Div div1 = new Div(p);
		Div div2 = new Div(div1);
		
		div2.render();
	}
}
``` 