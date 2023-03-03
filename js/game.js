
var game = {

    /**
     * True => X
     * False => O
     */
    turn: true,

    // Tabla de ganadores
    matrix_winner: [
        [0,1,2],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6]
    ],
    
    /**
     * Obtener el item seleccionado por el jugador
     * @param {*} item 
     */
    play(item){
        var box = item.target.getAttribute('box');

        if(!this.validate(box))
            return;

        document.getElementsByClassName('item')[box].innerHTML = '<span class="shape" box="'+box+'">'+this.get_shape()+'</span>';

        this.winner();
        this.turn = !this.turn;
    },

    //----------------------------------------------------------------------

    /**
     * Validar que el campo este vacio
     * @param {*} box 
     * @returns 
     */
    validate(box){
        var html = document.getElementsByClassName('item')[box];
        if(html.querySelector('.shape'))
            return false;
        else
            return true;
        
    },

    //----------------------------------------------------------------------

    /**
     * Validar que figura devolver dependiendo del turno
     * @returns 
     */
    get_shape(){

        switch(this.turn){
            case true:
                return 'X';
            break;

            case false:
                return 'O';
            break;

            default: 
                return 'X';
            break;
        }
    },

    //----------------------------------------------------------------------

    /**
     * Validar si hay ganador
     */
    winner(){

        // Obtener casillas marcadas
        var shape = document.getElementsByClassName('shape');

        var shape_x = [];
        var shape_o = [];
        
        for(var x = 0; x < shape.length; x++)
            if(shape[x].textContent == 'X')
                shape_x.push(parseInt((shape[x]).getAttribute('box')));
            else
                shape_o.push(parseInt((shape[x]).getAttribute('box')));
        
        
        // Buscar Ganador En X 
        if(this.validate_winner(shape_x))
            alert("Ganan las X");

        // Buscar Ganador En O
        if(this.validate_winner(shape_o))
            alert("Ganan las O");
    }, 

    //----------------------------------------------------------------------

    /**
     * Recorrer la tabla de ganador y compararlo con los movimientos
     * @param {*} data 
     * @returns 
     */
    validate_winner(data){
        
        for(var x = 0; x < this.matrix_winner.length; x++){
            
            var count = 0;
            for(var s = 0; s < data.length; s++)
                if(this.matrix_winner[x].includes(data[s]))
                    count++;

            if(count == 3)
                return true;
        }

        return false;
    }
}