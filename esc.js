 (function () {
     'use strict';
     var esc = function (options) {

         if (!(this instanceof esc)) {
             return new esc(options);
         }
         this.options = this.extend({
             backgroundUrl: '',
             height: '1000px',
             opacity: '0.3'
         }, options);
         this.show = true;
         this.init();
     };

     esc.prototype = {
         init: function () {
             this.event();
         },
         extend: function (obj1, obj2) {
             for (var key in obj2) {
                 obj1[key] = obj2[key]; //参数唯一
             }
             return obj1;
         },
         event: function () {
             var _this = this;

             _this.options.open && _this.options.open(); //开始回调
             window.addEventListener('keyup', function (event) {
                 if (event.keyCode == 27) {
                      console.log("当前的参数值为" + "\n" + _this.options.backgroundUrl + "\n" + _this.options.height + "\n" + _this.options.opacity);
                     if (_this.show) {
                        document.querySelector("body").style.background = "url('" + _this.options.backgroundUrl + " ') top center no-repeat"  ;
                        document.querySelector("body").style.height = _this.options.height;
                       document.querySelector(".warpper").style.opacity = _this.options.opacity;
                     } else {

                        document.querySelector("body").style.background = "url('') top center no-repeat"  ;
                        document.querySelector(".warpper").style.opacity = 1;

                     }
                     _this.show = !_this.show;
                     return _this.show;
                 }
             });
                

             _this.options.close && _this.options.close(); //结束回调
         }
     };
     window.esc = esc;
 })();
