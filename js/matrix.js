var matrix = {

    /**
     * Dibujar la matriz
     */
    draw: function(){

        var draw_html = "";
        
        for(var x = 0; x < 9; x++)
            draw_html += '<div class="item" box="'+x+'"></div>';

        
        container.innerHTML = draw_html;
    },

    //----------------------------------------------------------------------

    /**
     * Crear los eventos clic
     */
    render(){

        var items = document.getElementsByClassName('item');

        for(var x = 0; x < 9; x++)
            items[x].addEventListener('click',($event) => game.play($event));
            
    }
}