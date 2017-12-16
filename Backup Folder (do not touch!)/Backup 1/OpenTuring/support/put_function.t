var stremout :int %a var that is an int is needed to open a file 
open: stremout, "output.txt", put %this will open a connection to send data

procedure xput (fString : string)
    put: stremout, fString
end xput

include "code1.txt"
