//Author: Ali Najafizadeh
//Date: Nov, 2012
define(function() {
	var subscribers = {};
	
	function Notify() {
		this.internalCallbacks = {};
	}
	
	Notify.prototype.publish = function(topic, message) {
		setTimeout(function() {
            if (subscribers.hasOwnProperty(topic)) {
                var sub = subscribers[topic];
                for (var i = 0; i < sub.length; i++) {
                    sub[i](message);
                }
            }
		}, 13);
	};
	
	Notify.prototype.subscribe = function(topic, callback) {
        if (!subscribers.hasOwnProperty(topic)) {
            subscribers[options.notify] = [];
        }
        this.internalCallbacks[topic] = callback;
        subscribers[topic].push(callback);		
	};
	
	Notify.prototype.unsubscribe = function(topic) {
        if (this.internalCallbacks.hasOwnProperty(topic)) {
            if (subscribers.hasOwnProperty(topic)) {
                var callback = this.internalCallbacks[topic],
                    all = subscribers[topic];
                for (var i = 0; i < all.length; i++) {
                    if (all[i] == callback) {
                        all.splice(i, 1);
                    }
                }
            }
        }		
	};
	
	return new Notify();
});