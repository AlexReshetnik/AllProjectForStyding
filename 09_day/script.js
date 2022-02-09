window.addEventListener('DOMContentLoaded', () => {
    
    function init() {
        let request = new XMLHttpRequest();
        request.open('GET', 'https://alexreshetnik.github.io/JS_marathon/09_day/data.json',true);
        request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        request.send();
        request.addEventListener('readystatechange',
            function () {
                if (request.readyState === 4 && request.status === 200) {
                    work(JSON.parse(request.response));
                } else {
                    console.log(request);
                }
            });
    }
   
    function work(response) {
        document.querySelector(".app").innerHTML += response.firstName + response.lastName+"\n";
        console.log(response);
    }
    document.querySelector('button').addEventListener('click', init);

}); 