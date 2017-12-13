 $.ajax({
        type: "put",
        url: "split.py",
        data: { param: "hi" },
        success: function(data) {
        	console.log(data);
        }
    });