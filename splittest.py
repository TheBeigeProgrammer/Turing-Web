#Import the library for splitting the strings
import re

def replaceFunctions(fString):
    #===========Split String Into Array============
    aSplit=re.split('(\n)', fString) #Split on enter
    
    for iCounter in range (0,len(aSplit)):
        aSplit[iCounter] = re.split('(")',aSplit[iCounter]) #Split on quotation
    
    aSplit = [item for sublist in aSplit for item in sublist] #Make into 1D array
    
    for iCounter in range (0,len(aSplit)):
        aSplit[iCounter]=re.split('( )', aSplit[iCounter]) #Split on space
    
    aSplit = [item for sublist in aSplit for item in sublist] #Remake into 1D array
    
    for iCounter in range (0,len(aSplit)):
        aSplit[iCounter]=re.split('(\t)', aSplit[iCounter]) #Split on tab
    
    aSplit = [item for sublist in aSplit for item in sublist] #Remake into 1D array
    
    aSplit.append("\n") #Add enter to to make the adding brakets works
    
    #==========Remove Null strings ("")===========
    iCounter = 0 #Generic counter for loops
    for iCounter2 in range (0,len(aSplit)):
        if aSplit[iCounter]=="":
            iCounter+=1 #Count how many times to remove
    
    for iCounter2 in range (0,iCounter):
        aSplit.remove("")
    
    #===========Remove Redundant Enters============
    iCounter = 0
    while iCounter < len(aSplit): #While loop is used because iCounter can be changed
        #Try and except to prevent "iCounter+1" throwing "Out of Index Range" error
        try:
            if aSplit[iCounter] == "\n":
                if aSplit[iCounter+1]=="\n":
                    aSplit.pop(iCounter) #remove enter
                    iCounter = 0 #Reset because length has changed
            iCounter+=1
        except IndexError:
            break
    
    #===========Replace "get" and "put"===========
    iCounter = 0
    for iCounter in range (0,len(aSplit)):
        #Replace "put" with "xput" which will be another function in Turing
        if aSplit[iCounter] == "put":
            aSplit[iCounter] = "xput ("
            for iCounter2 in range (iCounter,len(aSplit)):
                if aSplit[iCounter2] == "\n":
                    aSplit[iCounter2] = ")\n" #Add bracket at the end of the line
                    
        #Replace "get" with "xget" which will be another function in Turing            
        else:
            if aSplit[iCounter] == "get":
                aSplit[iCounter] = "xget ("
                for iCounter2 in range (iCounter,len(aSplit)):
                    if aSplit[iCounter2] == "\n":
                        aSplit[iCounter2] = ")\n" #Add bracket at the end of the line
                        
    
    #=========Convert array into a string=========
    sString = ""
    
    for iCounter in range (0,len(aSplit)):
        sString += aSplit[iCounter]
    
    #==============Return the String==============
    return sString

#================Test Function====================
#This function may seam inefficient, but for our purposes, but it can do about 20,000 lines per second (without printing)
#and that is more than enough for our purposes
'''
for i in range (0,1):
    print "get (put)" 
    print replaceFunctions("get (put)")
    
    print "put \"put this\"\nput put (get)\n\n\nput\n"
    print replaceFunctions("put \"put this\"\nput put (get)\n\n\nput")
'''