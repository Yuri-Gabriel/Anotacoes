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

## Exercícios

1 ) Implemente uma função recursiva onde sejam passados 3 valores, $i$, $f$ e $p$, então exiba no terminal a sequencia de $i$ até $f$ pulando de $p$ em $p$.

Exemplo:
> $i = 1$
> $f = 15$
> $p = 2$
> Saída: 1, 3, 5, 7, 9, 11, 13, 15

2 )  Crie uma função recursiva onde o usuário digite um numero $n$ e ela mostre a sequência de fibonacci da posição $n$ para trás. 

Exemplo: 
> $n$ = 7
> Saída: 13, 8, 5, 3, 2, 1, 1

>  $n$ = 5
> Saída: 5, 3, 2, 1, 1



3 ) Escreva uma recursiva que calcule a potência de $x$ elevado a $y$, mas que não use o sinal de multiplicação *.

4 ) Crie com recursividade uma função que receba um array de inteiros e retorne a posição do menor valor.

5 ) Faça uma função recursiva que calcule a média dos valores presentes em um array de inteiros.

6 ) Com recursividade, crie uma função que receba duas palavras e informe se elas são iguais.