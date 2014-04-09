jQuery(document).ready(function(){
  var $bar = jQuery('#wnb-bar');
  var url = $bar.find('a').attr('href');
  $bar.one('click', function(event){
    var target = event.srcElement || event.target
    var $target = jQuery(target);
    if ($target.hasClass('wnb-close-button')) {
      $bar.remove();
    } else {
      window.location.href = url;  
    }
    
  });
  $closeButton = jQuery('<span class="wnb-close-button" style="height: 30px;"></span>');  
  $closeButton.css( {
    width: '28px',
    display: 'block',
    outline: 'none',
    border: 'none',
    margin: '0 auto',
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    right: '5px',
    background: "url('/wp-content/themes/2012-webapplog/img/x-white.png') no-repeat 0px center"
  });
  
  $bar.append($closeButton)
  $bar.css('cursor', 'pointer');
});