var stremout :int %a var that is an int is needed to open a file 
open: stremout, "output.txt", put %this will open a connection to send data

procedure xput (fString : string)
    put: stremout, fString
end xput

procedure xget (fString : string)
	put: stremout, "'Get' is not supported at this point in time."
end xget

include "code1.txt"

