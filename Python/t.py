num = ""
lista = []
soma = 0

while num != "fim":
    num = input("digite um numero ou finalize o programa com (fim):")
    if num.isdigit():
        num = int(num)
        lista.append(num)
    elif num != "fim":
        print("[ERRO]: numero invalido, tente inserir o numero novamente.")
    i = len(lista)
lista.remove(max(lista))
print("O maior numero digitado é {}".format(max(lista)))