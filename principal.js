var cajatexto = document.querySelector(".app__cajatexto");
var lista = document.querySelector(".app__lista");
var num = document.querySelector(".app__info__numeros__numeroTotal");
var cantidad = document.querySelector(".app__info__numeros__texto");
var btnTodos = document.querySelector(".app__info__btn__todos");
var btnActivos = document.querySelector(".app__info__btn__activos");
var btnCompletos = document.querySelector(".app__info__btn__completos");
var btnEliminar = document.querySelector(".app__info__bt__eliminar");


cajatexto.addEventListener('keydown', function AgregaLista(){
    
    if( event.keyCode == 13 && cajatexto.value != " "){
        
        
        agregaElemento(this.value);
        num.innerHTML++;
        
        
    }
    
    
    
    function agregaElemento(valor){
        
        var elemento = document.createElement('div');
        elemento.innerHTML = `<li class = "app__elemento"> <input class="app__elemento__completado" type= "checkbox"> <p  class="app__elemento__contenido" contenteditable> ${valor} </p> <button class="app__elemento__eliminar"> X </button></li> `
        elemento.setAttribute( 'class' , 'elemento');
        lista.appendChild(elemento);
        
        var contenido = elemento.querySelector('.app__elemento__eliminar');
        var texto = elemento.querySelector('.app__elemento__contenido');
        contenido.addEventListener('click', function eliminaElemento(){
            elemento.remove();
            num.innerHTML--;
            
            if(num.innerHTML<=0 ){
                num.innerHTML=0;
            }
            
            
        });

        elemento.addEventListener('mouseover', function verEliminar(){
            contenido.style.opacity= '1';

        });
        elemento.addEventListener('mouseout', function verEliminar(){
            contenido.style.opacity= '0';

        });
        
        
        
        
        var completo = elemento.querySelector('.app__elemento__completado');
        
        completo.addEventListener('click', function completar(){
            if( completo.checked == true){
                console.log("completado");
                texto.style.textDecoration = 'line-through';

                num.innerHTML--; 
                if(num.innerHTML<=0 ){
                    num.innerHTML=0;
                }    
                btnEliminar.style.display = 'flex';
            }
            else{
                btnEliminar.style.display = 'none';
                texto.style.textDecoration = 'none';
                num.innerHTML++;

            }
            
            
        });
        
        
        btnActivos.addEventListener('click', function verActivos(){
            
            if(completo.checked == true ){
                elemento.style.display = 'none';
            }
            else{
                elemento.style.display = 'flex';
            }
            
            
        });
        
        
        btnCompletos.addEventListener('click', function verCompletos(){
            
            if(completo.checked == false ){
                elemento.style.display = 'none';
            }
            else{
                elemento.style.display = 'flex';
            }
            
            
            
        });
        
        btnEliminar.addEventListener('click', function eliminarCompletado(){
            
            if( completo.checked == true  ){
                elemento.remove();
            }
            
            
        } );
        
        btnTodos.addEventListener('click', function verTodos (){
            if(completo.checked == false || completo.checked == true  ){
                elemento.style.display = 'flex';
            }
            
            
        });
        
        
    }
    
    
    
    
});

