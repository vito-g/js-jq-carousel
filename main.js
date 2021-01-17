$(document).ready(function() { //Esegui le istruzioni di codice che seguono solo dopo aver caricato il DOM. Questa istruzione, in realtà, non è necessaria visto che lo script.js è, nel file index, poco prima della chiusura del body e non nell'head.

  $('.next').click(function() { //Al click sull'elemento di Classe 'next' verrà eseguito il blocco di codice tra Graffe: le immagini saranno visualizzate, alternativamente, nell'ordine previsto dalla loro posizione nel DOM; dall'alto verso il basso.
    if ( $('.last').hasClass('active')) { //Se la Classe 'last' ha Classe 'active' (ed è quindi visibile, perchè dotata di display inline-block), esegui il codice tra Graffe.
      $('.last').removeClass('active'); // Rimuove la Classe 'active' restituendo alla classe' last' il suo display none (che, come da CSS, è associato a tutte le img)
      $('.first').addClass('active'); // Ripristina la classe 'active' alla prima immagine, consentendomi di ripartire daccapo
    } else {
      $ ('.active').removeClass('active').next().addClass('active'); // Altrimenti rimuovi la Classe 'active' dall'immagine corrente (per nasconderla), passa alla successiva e aggiungi a questa classe active (per visualizzarla)
    }
  })

  // Analogamente, ma agendo sull'elemento del DOM di Classe 'prev', scorrerò le img in senso inverso sostituendo l'action next() con l'action prev() e la classe .last con la .first
  $('.prev').click(function() { //Al click sull'elemento di Classe 'prev' verrà eseguito il blocco di codice tra Graffe
    if ( $('.first').hasClass('active')) { //Se la Classe 'first' ha Classe 'active' (ed è quindi visibile, perchè dotata di display inline-block), esegui il codice tra Graffe.
      $('.first').removeClass('active'); // Rimuove la Classe 'active' restituendo alla classe' first' il suo display none (che, come da CSS, è associato a tutte le img)
      $('.last').addClass('active'); // Ripristina la classe 'active' alla prima immagine, consentendomi di ripartire daccapo
    } else {
      $ ('.active').removeClass('active').prev().addClass('active'); // Altrimenti rimuovi la Classe 'active' dall'immagine corrente (per nasconderla), passa alla successiva e aggiungi a questa classe active (per visualizzarla)
    }
  })
  
  //N.B.: Si noti che, poichè le classi 'first', 'last' e 'active' sono condivise con i pallini...anche questi si attiveranno alternativamente in ragione del fatto che i selettori sono stati scelti nel modo più generico possibile: coinvolgendo, cioè, le sole classi comuni.
});
