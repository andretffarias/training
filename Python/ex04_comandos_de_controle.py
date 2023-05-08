#Exercício 1

num = input("digite um número:")

if num.isdigit():
    num = int(num)
    if num % 2 == 0:
        print("O número {} é par.".format(num))
    else:
        print("O número {} e impar.".format(num))
else : print("[ERRO]: numero invalido.")

#Exercício 2

nota = input("digite sua nota:")

if nota.isdigit():
    nota = int(nota)

    if nota > 10:
        print("[ERRO]: nota invalida.")
    elif nota >= 7:
        print("Você foi aprovado.")
    elif nota >= 5:
        print("Você ficou de recuperação.")
    elif nota <= 4:
        print("Você foi reprovado.")
else: print("[ERRO]: nota invalida.")
