/**
 * Created by mserrano on 9/03/17.
 */

$(document).ready(function () {
    $("#contenidoRss").rss("http://bogota.extra.com.co/taxonomy/term/19857/feed",
        {
            limit:10,
            dateFormat: 'DD-MM-YYYY',
            entryTemplate:'<li class="list-group-item"><a href="{url}">[{date}] {title}</a><br/>{teaserImage}</li>'
        })
});



