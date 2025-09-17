#include <stdio.h>

int main() {
    int opcao;

    do {
        printf("Digite 1 ou 0: ");
        scanf("%d", &opcao);

        if (opcao != 0 && opcao != 1) {
            printf("Opção inválida. Tente novamente.\n");
        }

    } while (opcao != 0 && opcao != 1);

    printf("Você digitou uma opção válida: %d\n", opcao);

    return 0;
}
