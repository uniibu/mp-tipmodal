$(document).ready(function() {
	$("#tipsubmit").on("click",function(){
		$("#tip-form").submit();
	})
    $("#tip-form").submit(function(e){
		var url = "https://api.moneypot.com/v1/tip?access_token="+worldStore.state.accessToken;
		$.post( url, JSON.stringify({"uname":  this.uname.value,  "amount": Math.floor( this.amount.value*100) }),
		function(data,status){
			$('#resp-title').text(response.responseJSON);
			$('#responseModal').modal('show');
        },'json').fail(function(response) {
			$('#responseModal').modal('show');
			$('#resp-title').text(response.responseJSON.error);
			});
	 e.preventDefault();
   })
});
