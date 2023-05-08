#Exercício 1

nome = str(input("Qual o seu nome:"))
print("eja bem vindo {}!".format(nome))

#Exercício 2

age_str = (input("Qual a sua idade:"))

if age_str.isdigit():
    age = int(age_str)
    if age > 100 or age < 1:
        print("[ERRO] idade invalida:\nTente colocar uma idade entre 1 e 100")
    elif age >= 18:
        print("Você tem {} anos e você é maior de idade".format(age))
    else:
        print("Você tem {} anos e você não é maior de idade".format(age))
else:
    print("[ERRO]: entrada invalida, tente novamente.")
    
#Exercício 3

word = input("digite uma palavra:")

if word.isdigit():
    print("[ERRO]: Palavra invalida.")
else:
    for i in word:
        print(i)