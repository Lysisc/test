/* 
中英文混合的字符串处理
//var str = "中国adf4.GIF"; 
//str1 = str.lastsubCHStr(10);  // "...国sdf4.GIF"
*/

//计算字符串长度
String.prototype.strLength = function() {
    if (this.charCodeAt) {
        var len = 0;
        for (var i = 0; i < this.length; i++) {
            if (this.charCodeAt(i) > 255 || this.charCodeAt(i) < 0) len += 2;
            else len++;
        }
        return len;
    }
}
//将字符串拆成字符，并存到数组中
String.prototype.strToChars = function() {
    var chars = new Array();
    for (var i = 0; i < this.length; i++) {
        chars[i] = [this.substr(i, 1), this.isCHS(i)];
    }
    String.prototype.charsArray = chars;
    return chars;
}
//判断某个字符是否是汉字
String.prototype.isCHS = function(i) {
    if (this.charCodeAt) {
        if (this.charCodeAt(i) > 255 || this.charCodeAt(i) < 0)
            return true;
        else
            return false;
    }
}
//截取字符串（从start字节到end字节）
String.prototype.subCHString = function(start, end) {
    var len = 0;
    var str = "";
    this.strToChars();
    for (var i = 0; i < this.length; i++) {
        if (this.charsArray[i][1])
            len += 2;
        else
            len++;
        if (end < len)
            return str;
        else if (start < len)
            str += this.charsArray[i][0];
    }
    return str;
}
//截取字符串（从start字节截取length个字节）
String.prototype.subCHStr = function(start, length) {
    return this.subCHString(start, start + length);
}

//截取字符串（从最后字节截取length个字节）
String.prototype.lastsubCHStr = function(length) {
    if (this.strLength) {
        if (!length || length >= this.strLength()) {
            return this.toString();
        }
        return "..." + this.subCHStr(this.strLength() - length + 1, length);
    }
};



(function() {
    this.JournalAction = {
        editor: null,
        travel: {
            OperateCategory: "2",
            TravelId: "1728238",
            AppendId: "0",
            TravelTitle: "厦门",
            TravelContent: "",
            TagList: "",
            DistrictList: [],
            ImageList: [],
            CoverImageId: "11733758",
            OperateUserId: "4880792"
        },
        init: function(e) { //初始化
            var _this = this;

            //save draft auto
            this.draftTimeoutID = setTimeout(function() {
                _this.draft(false);
                _this.draftTimeoutID = setTimeout(arguments.callee, 1000 * 10);
            }, 1000 * 10); //10秒后自动保存草稿

            //游记保存草稿action
            $("#draft").bind("click", function() {
                if (!_this.beforeSubmit()) {
                    _this.closePopup();
                    return false;
                }
                _this.draft(true);
            });

            //游记发布action
            $("#btn_submit").bind("click", function() {
                var operateCategory = _this.travel.OperateCategory;
                if (operateCategory == "1" || operateCategory == "2") {
                    _this.submit();
                }
                if (operateCategory == "3" || operateCategory == "4") {
                    _this.append();
                }
            });

            //游记选择目的地后提交
            $("#btnSubmit").bind("click", function() {
                _this.save();
            });
            //游记不选择目的地提交
            $("#btnSkip").bind("click", function() {
                _this.skip();
            });
            //离开页面监听
            this.addEventListener(window, "beforeunload", function(e) {
                var e = e ? e : event;
                var isChrome = window.google || window.chrome
                if (!_this.leavePage()) {
                    if (!isChrome)
                        e.returnValue = "您的游记未正式发表，确定要离开此页吗？";
                    else
                        return "您的游记未正式发表，确定要离开此页吗？";
                }
            });

            this.editor = UE.getEditor(e);

            this.GetTravel();
            //this.setTravelInfo();
        },
        leavePage: function() { //离开页面判断
            if (this.editor.getContent() && this.travel.TravelContent != this.editor.getContent()) {
                return false;
            }
            if ($("#title").val().trim() && this.travel.TravelTitle != $("#title").val().trim()) {
                return false;
            }
            if ($.editTagArr() && this.travel.TagList != $.editTagArr()) {
                return false;
            }
            return true;
        },
        addTags: function(el, e) { //前端事件绑定,标签添加事件
            var tagv = e.val();
            if ($.inArray($(el).html(), tagv.split(/\s*[,|，]\s*/)) == -1) {
                tagv += (tagv != '' && tagv.split('').pop() != ',') ? ',' : '';
                e.val(tagv + $(el).html());
            }
        },
        warn: function(id, text) { //前端,客户端校验,提示显示
            var el = document.getElementById(id);
            if (text) {
                el.innerHTML = text;
                el.style.display = "";
            } else {
                el.innerHTML = "";
                el.style.display = "none";
            }
        },
        addEventListener: function(el, type, handler) { //用户离开页面,监听
            if (el) {
                if (el.attachEvent) {
                    el.attachEvent("on" + type, handler);
                } else if (el.addEventListener) {
                    el.addEventListener(type, handler, false);
                } else {
                    el[type] = handler;
                }
            }
        },
        closePopup: function() {
            $('#popup_win_bg').remove();
            $('#popup_win').remove();
        },
        //游记提交
        submit: function() { //游记提交,弹出目的地层,若是续写,则直接提交
            if (!this.beforeSubmit()) {
                this.closePopup();
                return false;
            }

            //this.setTravelInfo();
            //提交成功
            var _this = this;

            //显示目的地层 chenxp(提交中...)
            $.popupbox.show({
                id: 'gsn_frame_nocontent',
                zIndex: 1001
            });

            //等待10毫秒
            //setTimeout(function () { _this.draft(false); }, 10);
            _this.draft(false);
            this.GetDistrictList();
            //modified by chenxp 2013-07-01(此时草稿保存计时器不能清除）
            //if (0 != this.draftTimeoutID) clearTimeout(this.draftTimeoutID);
        },
        append: function() {

            if (!this.beforeSubmit()) {
                this.closePopup();
                return false;
            }
            $("#submitsec").hide();

            //this.setTravelInfo();
            $.popupbox.show({
                id: 'gsn_frame_submiting',
                zIndex: 1001
            });
            if (this.webPhoto.length) {
                $.popupbox.close();
                $.popupbox.show({
                    id: 'gsn_frame_uploadimg',
                    zIndex: 10001
                });
                //异步请求
                this.uploadWebPhoto();
                return false;
            }

            var _this = this;
            //等待10秒
            //setTimeout(function () { _this.draft(false); }, 10);
            _this.draft(false);
            if (0 != this.draftTimeoutID) clearTimeout(this.draftTimeoutID);

            //setTimeout(function () {
            _this.doPost();
            //}, 10);
            return true;
        },
        save: function() {
            //清空草稿计时器(chenxp by 2013-07-01)
            if (0 != this.draftTimeoutID) clearTimeout(this.draftTimeoutID);

            this.destCombine();

            $.popupbox.close();
            if (this.webPhoto.length) {
                $.popupbox.show({
                    id: 'gsn_frame_uploadimg',
                    zIndex: 10001
                });
                //异步请求
                this.uploadWebPhoto();
                return false;
            } else {
                var _this = this;
                $.popupbox.show({
                    id: 'gsn_frame_submiting',
                    zIndex: 1001
                });
                //                    setTimeout(function () {
                //                        _this.doPost();
                //                    }, 10);
                _this.doPost();
                return true;
            }
        },
        skip: function() {
            if (0 != this.draftTimeoutID) clearTimeout(this.draftTimeoutID);
            $.popupbox.close();
            $.popupbox.show({
                id: 'gsn_frame_submiting',
                zIndex: 1001
            });
            $('.gsn-form .deslist').html(""); //清空选择的目的地列表
            if (this.webPhoto.length) {
                $.popupbox.show({
                    id: 'gsn_frame_uploadimg',
                    zIndex: 10001
                });
                //异步请求
                this.uploadWebPhoto();
                return false;
            }
            var _this = this;
            //setTimeout(function () {
            _this.doPost();
            //}, 10);
            return true;
        },
        doPost: function() { //游记提交
            //游记提交 AjaxWriteClassicTravel
            var travelData = this.GetTravel();
            $.ajax({
                type: "post",
                url: '/TravelSite/Member/OperateClassicTravel',
                dataType: "json",
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                data: $.toJSON(travelData),
                success: function(msg) {
                    if (msg.RetCode > 0) {
                        location.href = "/TravelSite/Member/ClassicTravelMessage?" + msg.Html;
                    } else {
                        alert(msg.ErrorMessage);
                    }
                }
            });
        },
        uploadWebPhoto: function() {
            if (this.webPhoto.length) {
                var _this = this;
                var urls = [],
                    ps = [];

                var uplist = [];
                for (var i = 0; this.webPhoto[i]; i++) {
                    urls[urls.length] = this.webPhoto[i].src;
                    ps[ps.length] = this.webPhoto[i];

                    if (i == this.webPhoto.length - 1 || 0 == (i + 1) % 3) {
                        uplist[uplist.length] = {
                            urls: urls,
                            ps: ps,
                            uploaded: false
                        };

                        urls = [];
                        ps = [];
                    }
                };

                (function uploading(ip) {
                    $.ajax({
                        type: "Post",
                        url: '/TravelSite/Member/AjaxUploadWebPhoto',
                        dateType: "text",
                        contentType: "application/x-www-form-urlencoded; charset=utf-8",
                        data: {
                            urls: uplist[ip].urls.join(",")
                        },
                        async: true,
                        success: function(msg) {
                            if (msg) {
                                var photos = msg;
                                for (var j = 0; uplist[ip].ps[j]; j++) {
                                    if (photos[j] && /^[1-9]\d*|0$/.test(photos[j].RetCode)) {
                                        //填充phsid
                                        uplist[ip].ps[j].setAttribute("phsid", photos[j].RetCode);
                                        //设置封面
                                        if ($(uplist[ip].ps[j]).attr('cover') == 'selected') {
                                            _this.travel.CoverImageId = photos[j].RetCode;
                                        }
                                    } else {
                                        uplist[ip].ps[j].setAttribute("phsid", 0);
                                    }
                                }
                            }

                            uplist[ip].uploaded = true;
                            if (ip < uplist.length - 1) {
                                uploading(ip + 1);
                            } else {
                                _this.draft(false);
                                if (0 != this.draftTimeoutID) clearTimeout(this.draftTimeoutID);
                                _this.doPost();
                            }
                        }
                    });
                })(0);
            }
        },
        beforeSubmit: function() {
            var travel = this.GetTravel();
            var tagList = travel.TagList;
            var flag = true;
            var target;

            //modify by chenxp
            if (getreallen(this.editor.getContent()) == 0) {
                this.warn("contentwarn", "请填写正文");
                target = "#wcontent";
                flag = false;
            } else {
                this.warn("contentwarn");
            }
            if (travel.OperateCategory == 1 || travel.OperateCategory == 2) { //只有发表游记与编辑游记需要校验
                if (tagList && tagList.length > 0) { //验证标签
                    if (10 < tagList.length) {
                        $(".mainCon .gsn-inputbox").show();
                        $(".mainCon .gsn-tiptext").text("最多可以添加10个分类标签");
                        target = "#wtag";
                        flag = false;
                    } else {
                        $(".mainCon .gsn-inputbox").hide();
                        //                            var flag1 = true;
                        //                            for (var i = 0; tagList[i]; i++) {
                        //                                if (10 < tagList[i].length) {
                        //                                    $(".mainCon .gsn-inputbox").show();
                        //                                    $(".mainCon .gsn-tiptext").text("标签请控制在10个字内");
                        //                                    target = "#wtag";
                        //                                    flag1 = false;
                        //                                    break;
                        //                                }
                        //                            }
                        //                            if (!flag1) {
                        //                                //$(".mainCon .gsn-inputbox").hide();
                        //                                flag = false;
                        //                            } else {
                        //                                $(".mainCon .gsn-inputbox").hide();
                        //                            }
                    }
                }

                if (this.travel.TravelTitle.isNullOrEmpty()) {
                    this.warn("titlewarn", "请填写标题");
                    target = "#wtitle";
                    flag = false;
                } else if (this.travel.TravelTitle.length > 50) {
                    this.warn("titlewarn", "标题不能大于50个字");
                    target = "#wtitle";
                    flag = false;
                } else {
                    this.warn("titlewarn");
                }
            }

            if (!flag) {
                location.href = target;
            }
            return flag;
        },
        destCombine: function() { //获取目的地信息,进行绑定
            var _this = this;
            var disList = [];
            $(".deslist span").each(function(i, s) {
                if ("tag-btn-selected" == s.className) {
                    var isFind = false;
                    for (i in _this.travel.DistrictList) {
                        if (_this.travel.DistrictList[i] == $(s).attr("data")) {
                            isFind = true;
                        }
                    }
                    if (!isFind) {
                        var district = {
                            RetCode: $(s).attr("data"),
                            Html: $(s).html()
                        };
                        disList[disList.length] = district;
                    }
                }
            });
            this.travel.DistrictList = disList;
        },
        highLine: function(ele, cls) { //显示提醒
            var highlineTimeout = 0;
            clearTimeout(highlineTimeout);
            ele.addClass(cls);
            highlineTimeout = setTimeout(function() {
                ele.removeClass(cls);
            }, 2000);
        },
        htmlEncode: function(html) {
            var temp = document.createElement("div"),
                l = document.createTextNode(html);
            temp.appendChild(l);
            var output = temp.innerHTML;
            return output;
        },
        //draft
        draftTimeoutID: 0,
        draft: function(auto) {
            var _this = this;

            var temp = this.editor.getContent().replace(/&[a-z0-9]+;/gmi, " ").replace(/\r?\n/gm, "").replace(/\s+/gm, " ").replace(/<[^>]*>/gmi, function() {
                if (/img/gim.test(arguments[0])) {
                    return arguments[0];
                }
                return "";
            });

            //游记内容不为空
            if (temp != "") {
                $(".savedCon").html('正在保存...');
                var travelData = this.GetTravel();
                travelData.OperateCategory = parseInt(travelData.OperateCategory) + 4;

                //alert(travelData.TravelContent);
                $.ajax({
                    type: "POST",
                    url: '/TravelSite/Member/SaveClassicTravelDraft',
                    dateType: "json",
                    data: $.toJSON(travelData),
                    contentType: "application/x-www-form-urlencoded; charset=utf-8",
                    async: true,
                    success: function(msg) {
                        //保存时间显示
                        if (auto == true) {
                            $.popupbox.show({
                                id: 'gsn_frame_draft',
                                zIndex: 10001
                            });
                            setTimeout(function() {
                                $.popupbox.close();
                            }, 3000);
                        }

                        var date = new Date();
                        $(".savedCon").html("已保存，" + date.toLocaleDateString() + " " + date.toLocaleTimeString());
                        $(".savedCon").show();
                        _this.highLine($('.savedCon'), 'highline');
                    }
                });
            }
        },
        setImageInfo: function() {
            var imgs = this.getImagesFromContent();
            this.travel.ImageList = imgs;
        },
        webPhoto: [], //存放img对象
        getImagesFromContent: function() {
            var imgs = this.editor.document.getElementsByTagName("img"),
                uploadedList = [];
            this.webPhoto = [];
            if (imgs && imgs.length) {
                for (var i = 0; i < imgs.length; i++) {
                    var phsid = imgs[i].getAttribute("phsid");

                    if ($(imgs[i]).attr('cover') == 'selected' && /^[1-9]\d*|0$/.test(phsid)) {
                        this.travel.CoverImageId = phsid;
                    }

                    if (!phsid || "0" == phsid) { //
                        this.webPhoto[this.webPhoto.length] = imgs[i];
                        uploadedList[uploadedList.length] = {
                            RetCode: 0,
                            Html: imgs[i].src
                        };
                        continue;
                    }

                    if (phsid && /^[1-9]\d*|0$/.test(phsid)) {
                        uploadedList[uploadedList.length] = {
                            RetCode: phsid,
                            Html: imgs[i].src
                        };
                    }
                }
            }
            return uploadedList;
        },
        GetTravel: function() { //返回游记信息,可传输
            var title = $("#title").val();
            if (title != undefined) {
                this.travel.TravelTitle = title.trim();
            }
            var tags = $.editTagArr();
            if (tags != undefined) {
                this.travel.TagList = tags.trim();
            }
            this.travel.TravelContent = this.editor.getContent();
            this.destCombine();
            this.setImageInfo();

            var result = {
                OperateCategory: this.travel.OperateCategory,
                TravelId: this.travel.TravelId,
                AppendId: this.travel.AppendId,
                TravelTitle: encodeURIComponent(this.travel.TravelTitle),
                TravelContent: encodeURIComponent(this.htmlEncode(filterBaiduEdit(this.travel.TravelContent))), //
                TagList: [],
                DistrictList: this.travel.DistrictList,
                ImageList: this.travel.ImageList,
                CoverImageId: this.travel.CoverImageId,
                OperateUserId: this.travel.OperateUserId
            };
            var tagList = [];
            if (this.travel.TagList.trim() != "") {
                var strList = this.travel.TagList.split(',');
                if (strList && strList.length > 0) {
                    for (var i = 0; strList[i]; i++) {
                        tagList[i] = strList[i];
                    }
                }
            }
            result.TagList = tagList;

            return result;
        },
        GetDistrictList: function() { //弹出层目的地
            window.setUserDesValue(); //???
            //已有目的地初始化
            var dhtml = "";
            var travel = this.GetTravel();
            if (travel.DistrictList && travel.DistrictList.length > 0) {
                var dnames = travel.DistrictList;
                for (var i = 0; dnames[i]; i++) { //记录下已选中的有哪些目的地
                    if (dnames[i].RetCode != "10000")
                        dhtml += "<span data=\"" + dnames[i].RetCode + "\" class=\"tag-btn-selected\" style=\"cursor:pointer\" onclick=\"javascript:void(0); return false;\">" + dnames[i].Html + "</span>";
                }
            }
            var travelData = travel;
            $.ajax({
                type: "Post",
                url: '/TravelSite/Member/GetDistrictByContent',
                dateType: "text",
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                data: {
                    title: travelData.TravelTitle,
                    content: travelData.TravelContent
                },
                async: true,
                success: function(msg) {
                    var existHtml = "";
                    if (msg.length > 0) {
                        for (var j = 0; msg[j]; j++) {
                            if (dhtml.indexOf("data=\"" + msg[j].RetCode + "\"") == -1) { //未选中
                                if (j == 0 && dhtml == "") { //若用户无选择过目的地,则默认选中第一条
                                    existHtml += "<span data=\"" + msg[j].RetCode + "\" class=\"tag-btn-selected\" style=\"cursor:pointer\" onclick=\"javascript:void(0); return false;\">" + msg[j].Html + "</span>";
                                } else {
                                    existHtml += "<span data=\"" + msg[j].RetCode + "\" class=\"tag-btn-normal\" style=\"cursor:pointer\" onclick=\"javascript:void(0); return false;\">" + msg[j].Html + "</span>";
                                }
                            } else { //选中状态,将目的地名，替换成搜索出来的名字
                                var mustReplace = "";
                                for (var i = 0; travel.DistrictList[i]; i++) { //查找出相同的目的地
                                    if (travel.DistrictList[i].RetCode == msg[j].RetCode) {
                                        mustReplace = travel.DistrictList[i].Html;
                                        break;
                                    }
                                }
                                if (mustReplace != "") {
                                    var mustReplace = "<span data=\"" + msg[j].RetCode + "\" class=\"tag-btn-selected\" style=\"cursor:pointer\" onclick=\"javascript:void(0); return false;\">" + mustReplace + "</span>";
                                    var rightReplace = "<span data=\"" + msg[j].RetCode + "\" class=\"tag-btn-selected\" style=\"cursor:pointer\" onclick=\"javascript:void(0); return false;\">" + msg[j].Html + "</span>";
                                    dhtml = dhtml.replace(mustReplace, rightReplace);
                                }
                            }
                        }
                    }
                    $('.gsn-form .deslist').html(dhtml + existHtml);
                    $.popupbox.close();
                    $.popupbox.show({
                        id: 'gsn_frame_selectdes',
                        layerContainer: "gs_pop_01",
                        zIndex: '500',
                        callback: null
                    });
                    //$("#selected-des").val($("#districtNames").val());
                }
            });

            return false;
        }
    };
    // this.JournalAction.init();
})();

String.prototype.trim = function() {
    return this.replace(/(^\s*)|(\s*$)/g, "");
};
String.prototype.isNullOrEmpty = function() {
    return null == this || "" == this;
};

//editor 输入字符长度check
function getreallen(str) {
    return str.replace(/&nbsp;|\s|\t|\n|<(?!img).*?>/gi, '').length;
};