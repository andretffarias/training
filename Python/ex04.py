# ATV dos slides:

i = 1
lista = []
while i <= 10:
      lista.append(int(input("digite um numero:")))
      i += 1
lista.sort()
print(lista)



contador = 1
while (contador <= 1000):
       print(contador)
       contador   = contador + 1


valor = 1
while valor == 1:
      valor = int(input("digite um numero:"))
      print ("voce digitou: {}".format(valor))


i = 1
while i <= 1000:
  i+=1
  if i % 2 == 0:
    print(i)


# ATV dia 5

#1)

i = 1
while i <= 10:
  print(i)
  i+=1


#2)

num = float(input("digite um numero:"))
i = 1

while i <= num :
  print(i)
  i+=1
  

#3)

senha = 0

while senha != 1234:
  senha = int(input("senha:"))


#4)

i = 1
lista = []
while i <= 5:
      lista.append(int(input("digite um numero:")))
      i += 1
soma = lista.pop() + lista.pop() + lista.pop() + lista.pop() + lista.pop()
print(soma)


#5)

nome = ""
lista = []
while nome != "fim":
    nome = input("digite um nome ou finalize o programa com (fim):")
    if nome != "fim":
        lista.append(nome)
while lista:
    print(lista.pop())


#6)

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
while lista:
    soma = soma + lista.pop()
media = soma / i
print("a media dos numeros é {}".format(media))


#7)

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
print("O maior numero digitado é {}".format(max(lista)))


#8)

def verifica_primo(numero):
    if numero <= 1:
        return False
    for i in range(2, int(numero**0.5) + 1):
        if numero % i == 0:
            return False
    return True

numero = int(input("Digite um número: "))
if verifica_primo(numero):
    print("O número é primo.")
else:
    print("O número não é primo.")

#9)

palavra = input("Digite uma palavra: ")
palavra = palavra.lower()
palavra_invertida = palavra[::-1]
if palavra == palavra_invertida:
    print("A palavra é um palíndromo.")
else:
    print("A palavra não é um palíndromo.")


#10)

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