        function getData(url, data) {
            return fetch(url, {
                //body: JSON.stringify(data),
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "user-agent": "Mozilla/4.0 MDN Example",
                    "content-type": "application/json"
                },
                method: "GET", // POST to post data
                mode: "same-origin",
                redirect: "follow",
                referrer: "no-referrer"
            }).then(response => response.json());
        }
        
        function updateSelectOptions(data) {
            let table = document.getElementById("from");

            let selectdd = document.getElementById("select");

            console.log(JSON.stringify(data));
            selectdd.innerHTML = "";
            data[from.value].forEach(element => {
                console.log(element);
                let elements2 = element.split(".");
                let opt = document.createElement("option");
                opt.value = elements2[1];
                opt.innerText = elements2[0];
                selectdd.appendChild(opt);
            });

        }
        document.addEventListener("DOMContentLoaded", function () {
        	document.getElementById("select").style.display = "none";
        	document.getElementById("additional1").style.display = "none";
        	document.getElementById("value1").style.display = "none";
        	document.getElementById("additional2").style.display = "none";
        	document.getElementById("value2").style.display = "none";
        	let select = document.getElementById("select");
        	let from = document.getElementById("from");
        	let additional1 = document.getElementById("additional1");
        	let value1 = document.getElementById("value1");
        	let additional2 = document.getElementById("additional2");
        	let value2 = document.getElementById("value2");
        	let run = document.getElementById("run");
        	let selectString = select.value;
        	let fromString = from.value;
        	
        	console.log(run.value);
        	console.log(from.value);
        	console.log(select.value);
        	
    		from.addEventListener("change", function() {
    			console.log(from.value);
    			document.getElementById("select").style.display = "inline";
    			getData("json/selectoptions", from.value).then(data => updateSelectOptions(data));
    		})
    		select.addEventListener("change", function() {
    			console.log(select.value);
    			document.getElementById("additional1").style.display = "inline";
    			run.value = "BUILD,"+ select.value + from.value + additional1.value + value1.value + additional2.value + value2.value;
    			console.log(run.value);
    		})
    		additional1.addEventListener("change", function(){
    			document.getElementById("value1").style.display = "inline";
    		})
    		value1.addEventListener("change", function() {
    			document.getElementById("additional2").style.display = "inline";
    			run.value = "BUILD,"+ select.value + from.value + additional1.value + value1.value + additional2.value + value2.value;
    			console.log(run.value);
    		})
    		additional2.addEventListener("change", function(){
    			document.getElementById("value2").style.display - "inline";
    			run.value = "BUILD,"+ select.value + from.value + additional1.value + value1.value + additional2.value + value2.value;
    			console.log(run.value);
    		})
        })
        
    		
    		
