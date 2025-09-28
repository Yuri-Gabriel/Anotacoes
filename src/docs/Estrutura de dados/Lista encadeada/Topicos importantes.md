Antes de aprender a implementar estruturas de dados em Java, precisamos descer um pouco o nível e conhecer o básico sobre ponteiro e passagem por referência.

## Ponteiros

Em linguagens como C, C++ e Rust é possível ter um acesso maior a memória do computador e utilizar ponteiros, que são variáveis que guardam o endereço de memória de outras variáveis, mas por que faríamos isso se podemos apenas armazenar o valor de uma variável em outra? É exatamente esse o problema, ao fazer isso estamos duplicando o valor da variável e consumindo um espaço que na grande maioria das vezes é desnecessário, mas com ponteiros economizamos no uso da memória do computador. 

``` C

void exemploSemPonteiro() {
	int variavel_a = 10;
	int variavel_b = variavel_a;
}

void exemploComPonteiro() {
	int variavel_a = 10;
	int* variavel_b = &variavel_a;
}

```
![Com_Ponteiros](https://drive.google.com/thumbnail?id=1sXCUuHTedJfycrahBZxNpRTVQsdLu2VY&sz=w400)

![Com_Ponteiros](https://drive.google.com/thumbnail?id=10Ts-0xji8dyqZGvC9DUure8_zPB9tSLd&sz=w400)


Tudo bem, mas o que isso tem a ver com Java já que nele não tem ponteiros? Bom, de fato não tem ponteiros no Java e em um primeiro momento, parece ser inútil sabermos disso, mas por trás dos panos o java usa ponteiros sem a gente saber, sabe quando? Quando Instanciamos um objeto e atribuímos ele a outra instancia do mesmo objeto.

``` Java

public class App {
	public static void main(String[] args) {
		Integer p1 = new Integer(10);
		Integer p2 = p1;
	}
}

```

Notem a semelhança entre os exemplos, são muito parecidos, a diferença é que a JVM abstrai o uso de ponteiros para o desenvolvedor, mas eles não deixam de ser usados. Para testar você pode criar instancias de uma classe qualquer e exibi-las na tela com o `System.out.print();`, caso você faça como no exemplo acima, verá que será exibido o mesmo código identificador do objeto no terminal.

## Passagem por referência

Outro assunto importante a aprender é passagem por referência que nada mais é do que passar o endereço de memória da variável por parâmetro em uma função, veja o exemplo abaixo:

``` C
void incrementarComReferencia(int* valor) {
	(*valor)++;
}

void incrementarSemReferencia(int valor) {
	valor++;
}

void main() {
	int a = 10;
	incrementarComReferencia(a); // a = 11
	
	int b = 10;
	incrementarSemReferencia(b); // b = 10
}
```

Na função `incrementarComReferencia`, passamos o endereço de da variável e realizamos o incremento no valor presente nesse endereço, diferente da função `incrementarSemReferencia`, que passamos uma cópia do valor da variável e novamente vem a pergunta: Mas para que tenho que ver isso? Se lembra que no tópico anterior, vimos que ao instanciar um objeto e atribui-lo a outra instancia do mesmo objeto na verdade estamos dizendo que a segunda instancia terá o mesmo endereço da primeira? Então, quando passamos uma instancia por parâmetro em uma função, nos não estamos passando o valor em sí, mas sim o endereço daquela instancia.

``` Java

public class App {
	public static void main(String[] args) {
		Pessoa p = new Pessoa("João");
		Syatem.out.println(p.getNome()); // João
		
		this.mudarNome(p);
		
		Syatem.out.println(p.getNome()); // Maria
	}
	
	public static void mudarNome(Pessoa pessoa) {
		pessoa.setNome("Maria");
	}
}

```

