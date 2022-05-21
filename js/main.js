$(document).ready(function(){
    //SLIDER
    if(window.location.href.indexOf('index') > -1){
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200,
      responsive: true
    });
  }
    //POST
    //CONDICIONAL IF PARA CHEQUEAR DE QUE ESTEMOS EN LA PÁGINA INDEX
    if(window.location.href.indexOf('Index')> -1) {
    var posts = [
      {
        title:'Prueba de título 1',
        date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + ' de ' + moment().format("YYYY"),
        content:'loremLorem Ipsum es simplemente texto de relleno de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto de relleno estándar de la industria desde la década de 1500, cuando un impresor desconocido tomó una galera de tipos y la mezcló para hacer un libro de muestras tipográficas. Ha sobrevivido no solo a cinco siglos, sino también al salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de hojas de Letraset que contenían pasajes de Lorem Ipsum y, más recientemente, con software de autoedición como Aldus PageMaker que incluía versiones de Lorem Ipsum.',
      },
      {
        title:'Prueba de título 2',
        date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + ' de ' + moment().format("YYYY"),
        content:'loremLorem Ipsum es simplemente texto de relleno de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto de relleno estándar de la industria desde la década de 1500, cuando un impresor desconocido tomó una galera de tipos y la mezcló para hacer un libro de muestras tipográficas. Ha sobrevivido no solo a cinco siglos, sino también al salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de hojas de Letraset que contenían pasajes de Lorem Ipsum y, más recientemente, con software de autoedición como Aldus PageMaker que incluía versiones de Lorem Ipsum.',
      },
      {
        title:'Prueba de título 3',
        date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + ' de ' + moment().format("YYYY"),
        content:'loremLorem Ipsum es simplemente texto de relleno de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto de relleno estándar de la industria desde la década de 1500, cuando un impresor desconocido tomó una galera de tipos y la mezcló para hacer un libro de muestras tipográficas. Ha sobrevivido no solo a cinco siglos, sino también al salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de hojas de Letraset que contenían pasajes de Lorem Ipsum y, más recientemente, con software de autoedición como Aldus PageMaker que incluía versiones de Lorem Ipsum.',
      },
      {
        title:'Prueba de título 4',
        date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + ' de ' + moment().format("YYYY"),
        content:'loremLorem Ipsum es simplemente texto de relleno de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto de relleno estándar de la industria desde la década de 1500, cuando un impresor desconocido tomó una galera de tipos y la mezcló para hacer un libro de muestras tipográficas. Ha sobrevivido no solo a cinco siglos, sino también al salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de hojas de Letraset que contenían pasajes de Lorem Ipsum y, más recientemente, con software de autoedición como Aldus PageMaker que incluía versiones de Lorem Ipsum.',
      },
      {
        title:'Prueba de título 5',
        date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + ' de ' + moment().format("YYYY"),
        content:'loremLorem Ipsum es simplemente texto de relleno de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto de relleno estándar de la industria desde la década de 1500, cuando un impresor desconocido tomó una galera de tipos y la mezcló para hacer un libro de muestras tipográficas. Ha sobrevivido no solo a cinco siglos, sino también al salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de hojas de Letraset que contenían pasajes de Lorem Ipsum y, más recientemente, con software de autoedición como Aldus PageMaker que incluía versiones de Lorem Ipsum.',
      },
    ];

    //Tomo las propiedades que yo misma establecí (title/date/content)
    posts.forEach((item, index) => {
      var post = `
          <article class="post">
          <h2>${item.title}</h2>
          <span class="date">${item.date}</span>
          <p> ${item.content}</p>
          <a href="#" class="button-more">Leer más</a>
          </article>
      `;
      //Y ahora lo agrego con la prop append
      $("#posts").append(post);

    });

  } //CIERRA CONDICIONAL IF PARA CHEQUEAR DE QUE ESTEMOS EN LA PÁGINA INDEX.

    //Capturo el evento para cambiar de tema.
    var theme = $('#theme');

    $('#toGreen').click(function(){
      theme.attr('href', 'css/green.css');
    });
    
    $('#toRed').click(function(){
      theme.attr('href', 'css/red.css');
    });

    $('#toBlue').click(function(){
      theme.attr('href', 'css/blue.css');
    });

    //scroll arriba
    $('.subir').click(function(){
      e.preventDefault();

      $('html, body').animate({
        scrollTop: 0
        }, 500);
        return false;
    });

    //login Falso
    $('#login form').submit(function(){
      var form_name = $('#form_name').val();
      
      localStorage.setItem('form_name', form_name);
    });

    var form_name = localStorage.getItem('form_name');

      if (form_name != null && form_name != "undefined"){
        var about_parrafo = $('#about p');
        about_parrafo.html("<br><strong>Bienvenido/a, " + form_name + "</strong>");
        about_parrafo.append("<a href='#' id='logout'> Cerrar sesión </a>");
        $('#login').hide();

        $('#logout').click(function(){
          localStorage.clear();
          location.reload(); //recarga la página
      });
    }

    if(window.location.href.indexOf('about')> -1){
      $("#acordeon").accordion();
    }

    //Reloj
    if(window.location.href.indexOf('reloj')> -1){

      setInterval(function(){
        var reloj = moment().format("hh:mm:ss");
        $('#reloj').html(reloj);
     }, 1000);

    }

    //Validacißon formulario de contacto
    if(window.location.href.indexOf('contacto')> -1){

      $("form input[name='date]") datepicker({
        dateFormat: 'dd-mm-yy'
      });

      $.validate({
        lang: 'es',
        scrollToTopOnError: true
      
      });
    }



  });

