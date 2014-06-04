(function($) {

    $('body').html('<div id="testDiv" class="content"><img class="loading_img" src="../img/pdf_loading.gif" alt="" /></div>');

    // 定义模型类  
    window._model = Backbone.Model.extend({
        defaults: {
            content: '<h2 class="bb_title">我是标题</h2>',
            list: '1'
        }
    });

    // 创建集合模型类  
    window._collection = Backbone.Collection.extend({
        model: _model
    });

    // 向模型添加数据  
    var _data = new _collection({
        content: '<h2 class="bb_title">hello, backbone!</h2>',
        list: '<ul class="bb_list"><li>我是列表第一列</li><li>2</li><li>3</li><li>4</li><li>5</li></ul>'
    });

    // 创建View对象  
    window._view = Backbone.View.extend({
        el: $("body"),
        initialize: function() {
            $("#testDiv").html(_data.models[0].get("content"));
            $('.bb_title').after(_data.models[0].get('list'));
            var obj = _(_data);
            console.log(obj);
        }
    });

    //实例化View对象  
    window.App = new _view();

})(jQuery);


// (function($) {
//     var Item = Backbone.Model.extend({
//         defaults: {
//             part1: 'hello',
//             part2: 'world'
//         }
//     });
//     var List = Backbone.Collection.extend({
//         model: Item
//     });
//     var ItemView = Backbone.View.extend({
//         tagName: 'li', // name of (orphan) root tag in this.el
//         initialize: function() {
//             _.bindAll(this, 'render'); // every function that uses 'this' as the current object should be in here
//         },
//         render: function() {
//             $(this.el).html('<span>' + this.model.get('part1') + ' ' + this.model.get('part2') + '</span>');
//             return this; // for chainable calls, like .render().el
//         }
//     });
//     var ListView = Backbone.View.extend({
//         el: $('body'), // el attaches to existing element
//         events: {
//             'click button#add': 'addItem'
//         },
//         initialize: function() {
//             _.bindAll(this, 'render', 'addItem', 'appendItem'); // every function that uses 'this' as the current object should be in here

//             this.collection = new List();
//             this.collection.bind('add', this.appendItem); // collection event binder

//             this.counter = 0;
//             this.render();
//         },
//         render: function() {
//             var self = this;
//             $(this.el).append("<button id='add'>Add list item</button>");
//             $(this.el).append("<ul></ul>");
//             _(this.collection.models).each(function(item) { // in case collection is not empty
//                 self.appendItem(item);
//             }, this);
//         },
//         addItem: function() {
//             this.counter++;
//             var item = new Item();
//             item.set({
//                 part2: item.get('part2') + this.counter // modify item defaults
//             });
//             this.collection.add(item);
//         },
//         appendItem: function(item) {
//             var itemView = new ItemView({
//                 model: item
//             });
//             $('ul', this.el).append(itemView.render().el);
//         }
//     });
//     var listView = new ListView();
// })(jQuery);