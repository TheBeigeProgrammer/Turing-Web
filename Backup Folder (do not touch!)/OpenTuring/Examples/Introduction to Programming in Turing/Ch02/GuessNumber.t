% The "GuessNumber" program
% Chooses a number at random between 1 and 99
% and allows you to guess it
var hidden, guess : int
var reply : string (1)
put "See if you can guess the hidden number"
put "It is between 1 and 99 inclusive"
loop
    var count : int := 0
    put "Do you want to play? Answer y or n " ..
    get reply
    exit when reply = "n"
    % Choose a random number between 1 and 99
    randint (hidden, 1, 99)
    loop
	put "Enter your guess ",
	    "(any number between 1 and 99) " ..
	get guess
	count := count + 1
	if guess < hidden then
	    put "You are low"
	elsif guess > hidden then
	    put "You are high"
	else
	    put "You got it in ", count, " guesses"
	    exit
	end if
    end loop
end loop
