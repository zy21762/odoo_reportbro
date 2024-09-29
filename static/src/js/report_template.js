odoo.define('odoo_reportbro.report_template', function (require) {
    "use strict";
    var core = require('web.core');
    console.log("odoo_reportbro.report_template define");
    // var Widget = require('web.Widget');
    var AbstractAction = require('web.AbstractAction')
    var ReportPage = AbstractAction.extend({
        template: 'odoo_reportbro.template',
        init: function (parent, params) {
            console.log("ReportPage init");
            this.name = "Print";
            this.params = params;
            var data = params.params.data;
            var number = params.params.number;
            $(document).ready(function () {
                    function saveReport() {
                        console.log("ReportPage document ready");
                        var report = $('#reportbro').reportBro('getReport');
                        $.ajax({
                            url: '/report_save',
                            data: JSON.stringify({
                                'params': report,
                            }),
                            dataType: 'json',
                            type: 'POST',
                            async: false,
                            contentType: 'application/json',
                            success: function (data) {
                                alert("Save Success");
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                alert('Save Fail');
                            }
                        });
                    }

                    $('#reportbro').reportBro({
                        saveCallback: saveReport,
                        reportServerUrl: "https://www.reportbro.com/report/run",
                        additionalFonts:[
                            {name: 'zh_CN', value: 'zh_CN'}
                        ],
                    });
                    var report =
                        {
                            "docElements": [],
                            "parameters":
                                JSON.parse(data)
                            ,
                            "styles": [],
                            "version": 1,
                            "documentProperties":
                                {
                                    "pageFormat": "A4",
                                    "pageWidth": "",
                                    "pageHeight": "",
                                    "unit": "mm",
                                    "orientation": "portrait",
                                    "contentHeight": "",
                                    "marginLeft": "20",
                                    "marginTop": "20",
                                    "marginRight": "20",
                                    "marginBottom": "10",
                                    "header": true,
                                    "headerSize": "60",
                                    "headerDisplay": "always",
                                    "footer": true,
                                    "footerSize": "60",
                                    "footerDisplay": "always",
                                    "patternLocale": "de",
                                    "patternCurrencySymbol": number
                                }
                        };
                    $('#reportbro').reportBro('load', report);
                });
        },
        events: {
            'click button#btnPrint': 'print',
            'click button#btnRen': 'ren'
        },
    });
    core.action_registry.add('odoo_reportbro.report_template', ReportPage);
    
    console.log("END odoo_reportbro.report_template define");
    return ReportPage;
});
//odoo.define声明一个模块
//触发一个在客户端实现(即js文件中定义的函数，通过core.action_registry.add(tag,函数名) 注册到odoo中)动作
//import { registry } from "@web/core/registry";
//import { AbstractAction } from "@web/AbstractAction";

//in report_template.js file