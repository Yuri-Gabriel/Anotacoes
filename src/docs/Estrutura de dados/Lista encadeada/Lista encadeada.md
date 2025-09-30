# Recursividade

Recursividade nada mais é do que o ato de uma função chamar ela mesma, porém, se não for definida uma condição de parada o código entrará em looping e irá parar de funcionar.

![Resursividade](https://drive.google.com/thumbnail?id=1V2ur_aSAhptIggSk2IZfPMHShLOKUK0-&sz=w400)

Analisando alguns pontos citados anteriormente como looping e condição de parada, o que isso lembra? Estruturas de repetição, se pararmos para analisar, recursividade nada mais é do que uma forma diferente de escrever uma estrutura de repetição, porém, diferente do _for_, _while_ ou _do-while_ onde conseguimos  realizar tarefas apenas em um sentido (no sentido de ida, fazendo uma analogia com a imagem acima) com a recursividade também podemos realizar tarefas no sentido de volta, como veremos mais adiante.

## Exemplo

``` Java

public class Repeticao {
	public void contarWhile() {
		int i = 0;
		while(i <= 10) {
			System.out.println("Ida: " + i);
			i++;
		}
	}
	
	public void contarRecursivo(int i) {
		System.out.println("Ida: " + i);
		if(i <= 10) this.contarRecursivo(i + 1);
		System.out.println("Volta: " + i);
	}
}

public class App {
	public static void main(String[] args) {
		Repeticao rep = new Repeticao();
		rep.contarWhile();
		rep.contarRecursivo(1);
	}
}
```

Como citado anteriormente e exemplificado no código acima, com a recursividade podemos executar códigos em ambos os sentidos (ida e volta) e dessa forma lidar com algumas tarefas como o caminhamento em arvores (tópico que veremos mais futuramente) sem tantas complicações.
