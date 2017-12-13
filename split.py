import splittest
import subprocess
import os
import time

code = ""

F1 = open("C:\Turing-Web\code.txt", "r")
F2 = open("C:\Turing-Web\code1.txt", "w")
for line in F1:
   code+=line
code = splittest.replaceFunctions(code)

print code

F2.write(code)
F1.close
F2.flush()
F2.close()

#subprocess.call('turing -run "C:\Turing-Web\put_function.t"')
