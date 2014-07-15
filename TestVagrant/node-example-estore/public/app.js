// Generated by CoffeeScript 1.3.3
(function() {
  var hCart, quickCart, root, ttl,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  root = typeof global !== "undefined" && global !== null ? global : window;

  if (!(root.ap != null)) {
    root.ap = {};
  }

  ttl = (function(_super) {

    __extends(ttl, _super);

    function ttl() {
      this.render = __bind(this.render, this);
      return ttl.__super__.constructor.apply(this, arguments);
    }

    ttl.prototype.initialize = function() {
      this.model = {};
      this.model.products = {};
      return this.render();
    };

    ttl.prototype.render = function() {
      var html;
      console.log(this.model);
      html = "<tr class=\"shipping\">\n	<th>\n		<strong>Shipping</strong>Australia</th>\n		<td>Free Shipping<input id=\"shipping_method\" name=\"shipping_method\" type=\"hidden\" value=\"free_shipping\">\n		</td></tr><tr class=\"total alt-table-row\"><th><strong>Order Total</strong></th>\n	<td>\n		<strong>\n			<span class=\"amount\">" + this.model.total + "</span>\n		</strong>\n	</td>\n</tr>\n</tbody>";
      return $("#hTotal").html(html);
    };

    return ttl;

  })(Backbone.View);

  hCart = (function(_super) {

    __extends(hCart, _super);

    function hCart() {
      this.render = __bind(this.render, this);
      return hCart.__super__.constructor.apply(this, arguments);
    }

    hCart.prototype.initialize = function() {
      this.model = {};
      this.model.products = {};
      return this.render();
    };

    hCart.prototype.render = function() {
      var html, p, x, _ref;
      console.log(this.model);
      html = "";
      _ref = this.model.products;
      for (x in _ref) {
        p = _ref[x];
        html = "	" + html + "\n<tr>\n	<td class=\"product-thumbnail\">\n		<a href=\"\"><img src=\"http://placehold.it/40&amp;color=#979797\"></a>\n		</td><td class=\"product-name\"><a href=\"#\">" + p.product + "</a>Product\n		</td><td class=\"product-price\"><span class=\"amount\">$" + p.price + "</span>\n		</td><td class=\"product-quantity\">\n			<div class=\"quantity\">\n			<input onclick=\"comm('remove','" + p.product_code + "');\" id=\"minus1\" type=\"button\" value=\"-\" class=\"minus\">\n			<input disabled data-max=\"0\" data-min=\"\" maxlength=\"12\" size=\"4\" title=\"Qty\" value=\"" + p.count + "\" class=\"input-text qty text\">\n			<input onclick=\"comm('add','" + p.product_code + "');\" id=\"add1\" type=\"button\" value=\"+\" class=\"plus\">\n			</div>\n		</td><td class=\"product-subtotal\"><span class=\"amount\">" + p.total + "</span>\n	</td>\n</tr>";
      }
      html = "" + html;
      return $("#hCart").html(html);
    };

    return hCart;

  })(Backbone.View);

  quickCart = (function(_super) {

    __extends(quickCart, _super);

    function quickCart() {
      this.render = __bind(this.render, this);
      return quickCart.__super__.constructor.apply(this, arguments);
    }

    quickCart.prototype.initialize = function() {
      this.model = {};
      this.model.products = {};
      return this.render();
    };

    quickCart.prototype.render = function() {
      var html, p, x, _ref;
      console.log(this.model);
      html = "<ul class='cart-list product-list'>";
      _ref = this.model.products;
      for (x in _ref) {
        p = _ref[x];
        html = "" + html + "\n<li>\n                	<a href=\"#\">\n               	    	" + p.product + "\n                	</a>\n                	<span style=\"font-weight:normal;\" class=\"amount\">Each: $" + p.price + "</span>\n	<div class=\"quantity\" style=\"padding: 0px; background-color:#F3F3F3;\">\n		\n		<input style=\"padding:5px 5px 5px 5px\" disabled data-max=\"0\" data-min=\"0\" maxlength=\"12\" size=\"4\" title=\"Qty\" value=\"Qty:\" class=\"input-text qty text\">\n		<input onclick=\"comm('remove','" + p.product_code + "');\" style=\"padding:5px 5px 5px 5px\" id=\"minus1\" type=\"button\" value=\"-\" class=\"minus\">\n		<input style=\"padding:5px 5px 5px 5px; width:30px;\" disabled data-max=\"0\" data-min=\"0\" maxlength=\"12\" size=\"4\" title=\"Qty\" value=\"" + p.count + "\" class=\"input-text qty text\">\n		<input onclick=\"comm('add','" + p.product_code + "');\" style=\"padding:5px 5px 5px 5px\" id=\"add1\" type=\"button\" value=\"+\" class=\"plus\">\n	</div>                 		\n                 	<span style=\"font-weight:normal;\" class=\"amount\">Subtotal: " + p.total + "</span>\n\n                	</span>\n              	</li>";
      }
      html = "" + html + "\n		  	</ul>  \n		  	<p class=\"total\">\n              <strong>Subtotal:</strong>\n              <span class=\"amount\">" + this.model.total + "</span>\n            </p>\n<p class=\"buttons\">\n              <a class=\"checkout\" href=\"/cart\">\n                <span>Checkout →</span>\n              </a>\n            </p>";
      return $("#quickCart").html(html);
    };

    root.comm = function(method, object) {
      return socket.emit("comm", sid, method, object);
    };

    root.card = function(ak) {
      var hax;
      hax = "<div class=\"bs-docs-example form-horizontal\">\n   <legend>Visa</legend>\n   <div class=\"control-group\">\n      <label class=\"control-label\" for=\"inputEmail\"> Name On Card</label>\n      <div class=\"controls\">\n         <input id=\"expN\"type=\"text\" id=\"inputEmail\" placeholder=\"Name On Card\" />\n      </div>\n   </div>\n   <div class=\"control-group\">\n      <label class=\"control-label\" for=\"inputPassword\">Card Number</label>\n      <div class=\"controls\">\n         <input id=\"expC\" \"type=\"text\" id=\"inputPassword\" placeholder=\"Card Number\" />\n      </div>\n   </div>\n</div>\n<div class=\"form-horizontal\">\n   <div style=\"float:left;\" class=\"control-group\">\n      <label class=\"control-label\">Card Expiry</label>\n      <div class=\"input\">\n         <div class=\"controls\">\n            <select id=\"expM\" type=\"text\" placeholder=\"First\" class=\"span1\">\n               <option>01</option>\n               <option>02</option>\n               <option>03</option>\n               <option>04</option>\n               <option>05</option>\n               <option>06</option>\n               <option>07</option>\n               <option>08</option>\n               <option>09</option>\n               <option>10</option>\n               <option>11</option>\n               <option>12</option>\n            </select>\n            /\n         </div>\n      </div>\n   </div>\n   <div class=\"control-group\">\n      <div class=\"input\">\n         <div class=\"controls\">\n            <select id=\"expY\" type=\"text\" placeholder=\"last\" class=\"span1\">\n               <option>12</option>\n               <option>13</option>\n               <option>14</option>\n               <option>15</option>\n               <option>16</option>\n               <option>17</option>\n               <option>18</option>\n               <option>19</option>\n               <option>20</option>\n               <option>21</option>\n               <option>22</option>\n               <option>23</option>\n            </select>\n         </div>\n      </div>\n   </div>\n	<div class=\"control-group\">\n	   <label class=\"control-label\" for=\"inputEmail\"> Security Code (CCV)</label>\n	   <div class=\"controls\">\n	      <input type=\"text\" id=\"expS\" placeholder=\"Security Code (CCV)\" />\n	   </div>   \n	</div>\n	<button onclick=\"check('visa');\">procceed to payment</button>\n\n</div>    ";
      return $("#restof").html(hax);
    };

    return quickCart;

  })(Backbone.View);

  root.commit = function(typ) {
    root.comm("checkout");
    return console.log("happenings");
  };

  root.check = function(typ) {
    var payload;
    console.log("madcnt");
    $('#first').css("background-color", "#FFF");
    $('#last').css("background-color", "#FFF");
    $('#contact').val();
    $('#bname').val();
    $('#abn').val();
    $('#addr1').val();
    $('#addr2').val();
    $('#post').val();
    $('#expN').val();
    $('#expC').val();
    $('#expM').val();
    $('#expY').val();
    $('#expS').val();
    $('#state').val();
    payload = {
      first: $('#first').val(),
      last: $('#last').val(),
      contact: $('#contact').val(),
      bname: $('#bname').val(),
      abn: $('#abn').val(),
      addr1: $('#addr1').val(),
      addr2: $('#addr2').val(),
      post: $('#post').val(),
      expN: $('#expN').val(),
      expC: $('#expC').val(),
      expM: $('#expM').val(),
      expY: $('#expY').val(),
      expS: $('#expS').val(),
      state: $('#state').val(),
      type: typ
    };
    return root.comm("validate", payload);
  };

  $(function() {
    NotifierjsConfig.defaultTimeOut = 2000;
    root.sid = $("#sess").attr('content');
    root.socket = io.connect();
    socket.on("error", function(payload) {
      var x, _i, _len, _results;
      console.log(payload);
      _results = [];
      for (_i = 0, _len = payload.length; _i < _len; _i++) {
        x = payload[_i];
        $(x[0]).css("background-color", "#FDD");
        if (payload != null) {
          _results.push(Notifier.notify(x[1]));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    });
    socket.on("updateCart", function(payload) {
      console.log(payload);
      root.list.model = payload;
      root.apple.model = payload;
      root.flap.model = payload;
      root.list.render();
      root.apple.render();
      root.flap.render();
      if (payload.ini != null) {
        return Notifier.notify(payload.ini);
      }
    });
    socket.on("goahead", function(payload) {
      var html, k, s, _ref;
      html = "<label>Your are purchasing the following</label>\n<label><strong>Items:  </strong></label>\n<ul>";
      console.log(payload.products);
      console.log(payload);
      _ref = payload.calc.products;
      for (k in _ref) {
        s = _ref[k];
        html = "" + html + "				<li>" + s.count + " x [" + s.product_code + "] " + s.product + " @ " + s.price + " </li>			";
      }
      html = "" + html + " </ul>		<label><strong>Total: </strong>" + payload.calc.total + "</label>		";
      console.log(html);
      $("#finalCart").html(html);
      if (payload.type === "bank") {
        console.log("lol");
      } else {
        console.log("lol");
      }
      return $('#myModal').modal();
    });
    $('#myModal').on('hide', function() {
      console.log("awesome");
      return root.comm("unlock", null);
    });
    root.list = new quickCart({
      el: "quickCart"
    });
    root.apple = new hCart({
      el: "hCart"
    });
    root.flap = new ttl({
      el: "hTotal"
    });
    console.log("done");
    return root.comm("updateCart", null);
  });

}).call(this);