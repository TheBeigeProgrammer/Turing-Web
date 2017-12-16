var iStremout :int %An int is needed to open a file 
open: iStremout, "output.txt", put %This will open output.txt to write the results to

%Instead of outputting to the screen, output to "output.txt"
procedure xput (fString : string)
    put: iStremout, fString
end xput

%Instead running "get" (which would cause the website load for 5 minutes before ending doing nothing), say get is not supported
procedure xget (fString : string)
	put: iStremout, "'Get' is not supported at this point in time."
end xget

include "translatedCode.txt" %Add the translated code

