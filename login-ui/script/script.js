var spinButton = (function() {
	function processSubmitLoader() {
		$('button[data-spinning-button]').click(function(e) {
			var $this = $(this);
			let formId = $this.data('spinning-button');
			let $form = formId ? $('#' + formId) : $this.parents('form');
			if ($form.length) {
				$this.append("<i class='fa fa-spinner fa-spin' style='margin-left: 10px'></i>").attr('disabled', '');
				setTimeout(() => {
					$form.submit();
				}, 2000);
			}
		});
	}
	return {
		initSpinnerButton: processSubmitLoader
	};
})();

$(document).ready(function() {
	spinButton.initSpinnerButton();
});
