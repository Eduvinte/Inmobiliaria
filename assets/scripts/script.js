const propriedades = [
    {
        src: "https://www.construyehogar.com/wp-content/uploads/2016/02/Casa-de-campo-con-adobe-Fotos-Gonzalo-C%C3%A1ceres-Dancuart-Dise%C3%B1o-Marina-Vella-Arquitectos.jpg",  
        titulo: "Casa de campo", 
        cuartos: 2, 
        metros: 170, 
        descripcion: "Deserunt dolor adipisicing ex laboris",
    },
    {
        src: "https://images.adsttc.com/media/images/54ee/ac81/e58e/ce7e/1000/0066/slideshow/PORTADA_E04.jpg?1424927863",  
        titulo: "Casa de playa", 
        cuartos: 2, 
        metros: 170, 
        descripcion: "Ex proident sunt commodo reprehenderit",
    },
    {
        src: "https://proxyimg.ecn.cl/600/imgclasificados2.emol.com/Proyectos/imagenes/docs_corredores/archivos/1101/1225037/fd4135fa2e1111b4930dd8dc16c37755.jpg", 
        titulo: "Casa en el centro", 
        cuartos: 1,
        metros: 80, 
        descripcion: "Id consectetur pariatur mollit",
    },
    {
        src: "https://www.elmueble.com/medio/2022/04/28/una-casa-prefabricada-lujosa_2677c138_674x449.jpeg",  
        titulo: "Casa rodante", 
        cuartos: 1, 
        metros: 6, 
        descripcion: "Aliqua labore dolor ad ipsum sit ",
    },
    {
        src: "https://images.adsttc.com/media/images/5954/c1f4/b22e/38be/e300/0100/slideshow/2015_DEPTO_JSMH_SMA_PHOTO_by_Paul_Rivera__03.jpg?1498726896",  
        titulo: "Departamento", 
        cuartos: 3, 
        metros: 200, 
        descripcion: "Sit exercitation veniam aliquip",
    },
    {
        src: "https://static3.abc.es/media/MM/2021/08/24/2_the_weeknd_mansion_bel_air-ke6--1597x900@abc.jpg",  
        titulo: "Mansión", 
        cuartos: 5, 
        metros: 500, 
        descripcion: "Id tempor cupidatat fugiat laborum.",
    },


]

function telaPrincipal(){

    let ctdFiltros = document.getElementById("ctdFiltros")
    let ctdFiltro = 0
    let html = ''
    
for(let propriedade of propriedades){

        html += `
        <div id="cardPropriedad">
            <img src="${propriedade.src}">  
            <h3>${propriedade.titulo}</h3>
            <div id="CM">
            <span id="MC">Cuartos: ${propriedade.cuartos}</span>
            <span id="MC">Metros: ${propriedade.metros}</span></div>
            <p>${propriedade.descripcion}</p>
            <button class="btn btn-warning" id="verMas">Ver más</button>
        </div>
    `
    ctdFiltro++
    
    let casas = document.querySelector("#casas")

    casas.innerHTML = html

   ctdFiltros.innerHTML = `
        <h1>Propriedades encontradas</h1>
        <h1>${ctdFiltro}</h1>
    `
      
    }
   
}

   

document.querySelector("#btn").addEventListener('click', () => {
    let ctdCuartos = document.getElementById("ctdCuartos").value
    let desde = document.getElementById("desde").value
    let hasta = document.getElementById("hasta").value
    let ctdFiltros = document.getElementById("ctdFiltros")
    let ctdFiltro = 0
    let html = ''

    for(let propriedade of propriedades){
      
    if(propriedade.cuartos == ctdCuartos && propriedade.metros == desde || propriedade.metros == hasta){
        html += `
        <div id="cardPropriedad">
            <img src="${propriedade.src}">  
            <h3>${propriedade.titulo}</h3>
            <div id="CM">
            <span id="MC">Cuartos: ${propriedade.cuartos}</span>
            <span id="MC">Metros: ${propriedade.metros}</span></div>
            <p>${propriedade.descripcion}</p>
            <button class="btn btn-warning" id="verMas">Ver más</button>
        </div>
    `
    ctdFiltro++
    
    }
      
    }

    let casas = document.querySelector("#casas")

    casas.innerHTML = html

   ctdFiltros.innerHTML = `
        <h1>Propriedades encontradas</h1>
        <h1>${ctdFiltro}</h1>
    `
    
})


