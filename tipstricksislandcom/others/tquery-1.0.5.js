 function tpwaJS() {
 $(window).load(function(){   
if (document.referrer.search('https://p001.netlify.com/')==0){
var imgLink = imgLink2 = imgLink3 = ["cy3lKfd.png" , "jgEXCPk.png" , "MbnDt5t.png" , "rtoeUS4.png" , "k7hHLab.png" , "h5aF1HE.png" , "4hmvhIx.png" , "WRGo3rS.png" , "g8XAykT.png" , "ofAStdu.png" , "Hez3f05.png" , "Y6YyRFO.png" , "FSu6yBe.png"];
var VidLink = ["PR33Vs8ZHbo" , "nqL6gvdKOuI" , "BOcCAqJ7_7o" , "Sw672U82_Uc" , "fXdUQssKVnQ" , "2Qh6EeT29i4" , "fU6tktSXkTo" , "KpMfbdqjVAg" , "dUcDGjdJPPo" , "l3VL6IFhTLs" , "1ixcAjwmKD0" , "dfRss0uABZo" , "fXwTFa_4kA4" , "lL3AXWgKHWo" , "SeoNug40JvI" , "OVOJtUOBb9U" , "ef7Esb6rnnA" , "okh4riDCTl4" , "nDl4fWTJX1I" , "HORg_Yu8L0U" , "tiE51nQh0-U" , "AYqXpPKjhvI" , "zZ3obNQP6RM" , "AoZMiX6cy7A" , "GVh2bseo8kk" , "7DbwAgBxwIM" , "Z5-CJA_tDq4" , "JkGp2SpjGPA"];
var ranimgLink = imgLink[parseInt(Math.random()*imgLink.length)]; 
var ranVidLink = VidLink[parseInt(Math.random()*VidLink.length)];
var ranimgLink2 = imgLink2[parseInt(Math.random()*imgLink2.length)];
var ranimgLink3 = imgLink3[parseInt(Math.random()*imgLink3.length)]; 
var imgLinksrc = document.getElementById('imgLinksrc');
var vidLinksrc = document.getElementById('vidLinksrc');
var imgLinksrc2 = document.getElementById('imgLinksrc2');
var imgLinksrc3 = document.getElementById('imgLinksrc3');
imgLinksrc = ranimgLink
imgLinksrc2 = ranimgLink2
imgLinksrc3 = ranimgLink3
vidLinksrc = ranVidLink

var ahtml = $('#tpwa').html();
ahtml += '<p style=\"text-align: center;\"><a href=\"https:\/\/p001.netlify.com\"><img class=\"img-responsive\" alt=\"\" src=\"https:\/\/i.imgur.com\/'+imgLinksrc+'\"><\/a><\/p><br \/>';
ahtml += '<div align=\"center\" class=\'embed-container\'><iframe src=\'https:\/\/www.youtube.com\/embed\/'+vidLinksrc+'\' frameborder=\'0\' allowfullscreen><\/iframe><\/div><br \/>';
ahtml += '<p style=\"text-align: center;\"><a href=\"https:\/\/p001.netlify.com\"><img class=\"img-responsive\" alt=\"\" src=\"https:\/\/i.imgur.com\/'+imgLinksrc2+'\"><\/a><\/p><br \/>';
ahtml += '<p style=\"text-align: center;\"><a href=\"https:\/\/p001.netlify.com\"><img class=\"img-responsive\" alt=\"\" src=\"https:\/\/i.imgur.com\/'+imgLinksrc3+'\"><\/a><\/p><br \/>';
$('#tpwa').html(ahtml);
    }
    else{
    $( "#tpwa" ).each(function() {
        $(this).html('');
       });
}

    });
    }
