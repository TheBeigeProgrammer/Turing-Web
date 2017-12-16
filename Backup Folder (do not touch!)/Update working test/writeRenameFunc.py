import renameFunc #Import the function that renames the functions "get" and "put"

sCode = "" #Create an empty string

input = open('C:/Turing-Web/code.txt', "r") #Open file that is made by server containing the user's code
output = open('C:/Turing-Web/translatedCode.txt', "w") #Open file where the translated code is put for Turing to read

#Append each line of "code.txt" to "sCode"
for sLine in input:
   sCode+=sLine

sCode = renameFunc.replaceFunctions(sCode) #Rename functions of "sCode" 

#print sCode #Debugging

output.write(sCode) #Write the translated code to "code1.txt"

input.close #Close the input ("code.txt") file because we don't need it anymore, and so other programs can access it

output.flush() #Flush the buffer to the output file to make sure it is written to 

output.close() #Close the output file to so other programs can access it
