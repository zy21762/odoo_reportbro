{
    'name': 'odoo_reportbro',
    'version': '1.0',
    'summary': 'report designer',
    'author': 'huaqiangyan@163.com',
    'website': 'https://github.com/huakkai',
    'category': 'Tools',
    'license': 'GPL-3',
    'depends': ['base'],
    'data': [
        'views/report_report.xml',
        'security/ir.model.access.csv',
    ],
    'assets': {
        'web.assets_common': [
        ],
        'web.assets_frontend': [
        ],
        'web.assets_backend': [
            'odoo_reportbro/static/src/xml/report_template.xml',
            'odoo_reportbro/static/src/js/report_template.js',
            'odoo_reportbro/static/src/dist/ext/spectrum.css',
            'odoo_reportbro/static/font/font.css',
            'odoo_reportbro/static/src/dist/reportbro.css',
            'odoo_reportbro/static/src/dist/ext/spectrum.js',
            'odoo_reportbro/static/src/dist/ext/autosize.js',
            'odoo_reportbro/static/src/dist/ext/JsBarcode.all.min.js',
            'odoo_reportbro/static/src/dist/reportbro.js',
        ],
    },
    'application': True,
    'installable': True,
}