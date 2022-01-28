window.addEventListener('DOMContentLoaded', () => {
    function init() {
        let request = new XMLHttpRequest();
        request.open('GET','https://drive.google.com/file/d/1JKsCkXAYw93lp4Piz-0U0gAy9MaPlPhy/view');
        request.setRequestHeader('Content-type','application/json; charset=utf-8');
        request.send();
        request.addEventListener('readystatechange', function() {
            if (request.readyState === 4 && request.status===200) {
                console.log(request.response);
            } else {
                console.log(request);
            }
        });
      
      
    }
    document.querySelector('button').addEventListener('click', init);

}); 