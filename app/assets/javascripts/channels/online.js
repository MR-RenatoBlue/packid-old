$(document).on("turbolinks:load", function(){
  if ($("meta[name='current-user']").length > 0) {
    App.online = App.cable.subscriptions.create("OnlineChannel", {
      connected: function () {
        // Called when the subscription is ready for use on the server
      },

      disconnected: function () {
        // Called when the subscription has been terminated by the server
      },

      received: function (data) {
        // Called when there's incoming data on the websocket for this channel
        //$("#notifications").prepend(data.html);
      }
    });
  }
});