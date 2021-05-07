import {cuenta, cargadas, borremos,  registerImage} from "./lazy"
const urlBase = 'https://randomfox.ca/floof/';
const container = document.querySelector('#images'); 
const crear = document.querySelector('#crear');
const borrar = document.querySelector('#borrar');
const limpiar = document.querySelector('#limpiar');


const fetchUrl = async ()=> {
    try{
        
        //Hacemos fetch de la api
        const data = await fetch(urlBase);
        //Convertimos en Json la dara
        const dataJson = await data.json();
        //Creamos un div que nos sirve de container y le añadimos una clase
        const containerImage = document.createElement('div');
        containerImage.className = 'p-4 containerImage'
        //creamos una img para nuestras imágenes- le asignamos el atributo src, width y clase
        const image = document.createElement('img');
        image.dataset.src = dataJson.image
        image.className ='mx-auto';
        image.width = '250';

        
        //le agregamos el container de la imágen al container principal que está en el html y previamente habíamos seleccioando con un query selector
        container.append(containerImage)
 
        //agregamos la imágen al container
        containerImage.append(image)
           
        //Instanciamos la api de intersection oberver

        setTimeout(function(){registerImage(containerImage)}, 500)
        
       
        
     
        
    }
    catch{
    
    }
    
}


let  limpiemos = ()=> {
    window.location.reload()
   
    
}
crear.addEventListener('click', fetchUrl)
borrar.addEventListener('click', borremos)
limpiar.addEventListener('click', limpiemos)

// const minium = 1;
// const maxium = 122; 
// const random = () => Math.floor(Math.random() * (maxium - minium) + minium);



// const crearImagen = ()=> {
//     const containerImage = document.createElement('div');
//         containerImage.className = 'p-4'
//     const image = document.createElement('img');
//         image.src = `https:randomfox.ca/images/${random()}.jpg `;
//         image.className ='mx-auto';
//         image.width = '250';
//         containerImage.append(image)
//         return containerImage;
// }

// const agregarImagen = () => {
//     container.append(crearImagen())
// }

// button.addEventListener('click', agregarImagen)
