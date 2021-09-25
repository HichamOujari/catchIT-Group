(function($) {
	$(document).ready(function(){
		var windowWidth = $(window).width();

		var objBorders = '<span class="qw-borders edgtf-hover-border"><span class="edgtf-line-1"></span><span class="edgtf-line-2"></span><span class="edgtf-line-3"></span><span class="edgtf-line-4"></span></span>';

		if(windowWidth >= 991){
			if($('.edgtf-hover-border').length  === 0){
				$('.eut-portfolio-item figure.eut-image-hover').append(objBorders);
			}
		}

		$("#eut-header #eut-feature-section .eut-title").append(objBorders);

		setTimeout(function(){
			$("#eut-header #eut-feature-section .eut-title > span:first-child").addClass('animated');
		}, 1800);


		setTimeout(function(){
			$("#eut-header #eut-feature-section .eut-title").addClass('animate');
		}, 2200);


		// Form checkbox

		jQuery('#eut-theme-wrapper input[type=checkbox], #eut-theme-wrapper input[type=radio]').click(function(){
			if(!jQuery(this).parent('.wpcf7-list-item').hasClass('active')){
				jQuery(this).attr('checked', 'checked').parent('.wpcf7-list-item').addClass('active');
			}else{
				jQuery(this).removeAttr('checked').parent('.wpcf7-list-item').removeClass('active');
			}
		});
		jQuery('#eut-theme-wrapper .wpcf7-list-item-label').click(function(){
			if(!jQuery(this).parent('.wpcf7-list-item').hasClass('active')){
				jQuery(this).parent('.wpcf7-list-item').addClass('active').children('input').attr('checked', 'checked');
			}else{
				jQuery(this).parent('.wpcf7-list-item').removeClass('active').children('input').removeAttr('checked');
			}
		});

		jQuery('.wpcf7-file').parent('.wpcf7-form-control-wrap').append('<label class="wpcf7-file-label">Joindre un fichier</label><span class="file-name"></span>');
		jQuery('.wpcf7-file-label').click(function(){
			jQuery(this).parent('.wpcf7-form-control-wrap').children('.wpcf7-file').trigger('click');
		});

		jQuery('.wpcf7-file').on( "change", function( event ) {  
		    var thisValue = this.value;
		    var splitValue = thisValue.split("\\");
		    var fileName = splitValue[splitValue.length-1];

		    jQuery(this).parent('.wpcf7-form-control-wrap').children('.file-name').html(fileName);
		});

	});

})(jQuery)