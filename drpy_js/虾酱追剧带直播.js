var rule = { 
     模板: 'mxpro', 
     title: '虾酱追剧', 
     host: 'https://www.xiajiangzj.top', 
     url: '/index.php/vod/show/id/fyclassfyfilter.html', 
     filterable: 1, 
     filter_url: '{{fl.area}}{{fl.by}}{{fl.class}}{{fl.lang}}/page/fypage', 
 filter:'H4sIAAAAAAAAA+2Y3U4aQRTH32WvTWhtL1pfpfGCGtKaWpsU28QYExRBoJavIGhB8QtFKyBIKS4FXmZndnmLLpzh7HKWxKXxohdzub/978yZMzP/ObMbynNl4c2G8sG3riwoLHrFgyFlTln1fvTZn796V774RsLVIQ6VB8HyEJsPyuacoNmCqRfUs7Ti9fs9go0leqQu2rMkgo0lfCvJA9lJiWDYUaysdQukI2DY0VWKPXRIR8CwFRybrRVgGEvkQFOjJBZgY4lRuWR7N5MSwTCWWE3vEolgthHpmY5jREOGktKuY0SCYbiVS613QsIFhq2E04PDa9IKMGzl+MYcI2kF2AxzxLdv9WyKSIChJBjj2z+IBBimrpNgoTZJHbCxZHCU5gelSYlg2FF214iqpCNgmJdeVc/8Yt06SQ1iFCYujHO6aoChJB5miQaRAMNV00+a00tWDTBrpgr8KEVnasRQstPXf5KhC4YJ7Kb0TmHa0CbebC4OPwAPMGoVoxywPACfXXlAvmvqxz2teFffeQTCoX+rU4VAGHPjgioEwjnPddn3HBVZFHXFa4cIEC6NXIkqBELF/b5DAchaO78dYwaEilCLVYOTCkD2xPN4mqkJK/H4PJl4nmsNck3r5bDJt+uetWXzo3GHmqryu4xD8355zW9NRG2HRcIOjX/p02ffMK7FOWX+yY6Gx3eNC6+Fbc22WiyYmLbhxZsZziNWbTG1QiTAZnPvx84jF+7t4jxy4SwuHFN7OHU4i2CWNYf4YY1a84hhLPthxzEhmM18HBMgmG1naB1ykggmPUl60hRPevFUnjQIRPWrAPERYPZtsFN0bgOTYcTVvnEXISc5MGwlXeExckwLZk15iLfJrhXMWjf32kOShAsMF2kvPjgn4QqGEvWGVY+JBBjGkm84qyVg2EqmyJu0ugaGrbTbPJLQ1LSjzpl4g2lsnpkuRdIIDFusbxtbe6QtYNIqpFVMsYqXT2UVLnzAxYVTD1aMU2I4gmFH8bKeDJOOgKEkeazf0osVsBkueUbyyIiTaksw7OjklOVJbSTYDIUPL6jO2ySwGS5DLopDdmcmu0liAWaXlO6dEpPhHF30tD/kTiqYVYQVWSRPi7ARs9Zvg1WIVwuGHeVj/JC4rGBWduusn6PZHTFZPklP/Mcr3Sv5u0/+7pO/++TvPnk2yLOBXK2f2c6G/y+8+deynpf1vKznpWdLzxamuPkXIuAA678fAAA=', 
     searchUrl: '/vod/search//page/fypage/wd/**.html', 
     class_parse: '.navbar-items li:gt(1):lt(9);a&&Text;a&&href;/(\\d+).html', 
 }