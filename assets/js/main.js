$(function() {

		$('#sidebar-toggle-right').click(function(){
			// console.log('hi');
			$('body').toggleClass('sidebar-open-right');
		});	

		$('#sidebar-toggle-left').click(function(){
			// console.log('hi');
			$('body').toggleClass('sidebar-open-left');
		});	

		 // $('.edit').editable('http://www.example.com/save.php');
		$('body').on('click', '.edit', function() {
			var oldEl = $(this),
				newEl = $('<input class="edit-new" placeholder="" />');
				

				// $('.save-input').prepend( " | " );
				$('.save-input').show();
				

				oldEl.replaceWith(newEl);
				newEl.focus();
				

				$('.save-input').on('click', function(e) {
					newEl = $('.edit-new').val();
					// alert(newEl);
					// newEl.replaceWith(oldEl);
					e.preventDefault();
					$('.save-input').hide();
				});
		});




	


	
	
});