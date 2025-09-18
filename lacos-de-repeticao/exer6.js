#include <stdio.h>

int main() {
    int numero, maior, contador = 1;

    printf("Digite o número 1: ");
    scanf("%d", &numero);
    maior = numero;

    do {
        contador++;
        printf("Digite o número %d: ", contador);
        scanf("%d", &numero);

        if (numero > maior) {
            maior = numero;
        }
    } while (contador < 5);

    printf("\nO maior número digitado foi: %d\n", maior);

    return 0;
}
