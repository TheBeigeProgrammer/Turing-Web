import splittest
import os
import time

if os.path.isfile("C:\Turing-Web\code1.txt"):
    os.remove("C:\Turing-Web\code1.txt")

code = ""

F1 = open("C:\Turing-Web\code.txt", "r")
F2 = open("C:\Turing-Web\code1.txt", "w")

for line in F1:
   code+=line
   
#code = splittest.replaceFunctions(code)

#print code

F2.write(code)
#F2.write("")

F2.flush()

F1.close
F2.close

#time.sleep(1)

os.system('turing -run "C:\Turing-Web\put_function.t"')
