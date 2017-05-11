﻿/**
 * Class: SuperMap.REST.TransferPathService
 * 交通换乘线路查询服务类，根据交通换乘分析结果(TransferSolutionResult)，获取某一条乘车路线的详细信息。
 * 返回结果通过该类支持的事件的监听函数参数获取
 *
 * Inherits from:
 *  - <SuperMap.ServiceBase>
 */
require('./ServiceBase');
require('./TransferPathParameters');
var SuperMap = require('../SuperMap');
SuperMap.REST.TransferPathService = SuperMap.Class(SuperMap.ServiceBase, {

    /**
     * Constructor: SuperMap.REST.TransferPathService
     * 交通换乘线路服务类构造函数。
     *
     * 例如：
     * (start code)
     * var myService = new SuperMap.REST.TransferPathService(url, {eventListeners: {
     *     "processCompleted": TrafficTransferCompleted, 
     *     "processFailed": TrafficTransferError
     *     }
     * };
     * (end)
     *
     * Parameters:
     * url - {String} 与客户端交互的交通换乘线路查询服务地址。
     * 例如:"http://localhost:8090/iserver/services/traffictransferanalyst-sample/restjsr/traffictransferanalyst/Traffic-Changchun"。
     * options - {Object} 参数。
     *
     * Allowed options properties:
     * eventListeners - {Object} 需要被注册的监听器对象。
     */
    initialize: function (url, options) {
        SuperMap.ServiceBase.prototype.initialize.apply(this, arguments);
    },

    /**
     * APIMethod: destroy
     * 释放资源,将引用资源的属性置空。
     */
    destroy: function () {
        SuperMap.ServiceBase.prototype.destroy.apply(this, arguments);
    },

    /**
     * APIMethod: processAsync
     * 负责将客户端的更新参数传递到服务端。
     *
     * Parameters:
     * params - {<SuperMap.TransferPathParameters>} 交通换乘参数。
     */
    processAsync: function (params) {
        if (!params) {
            return;
        }
        var me = this,
            method = "GET",
            jsonParameters,
            end;

        end = me.url.substr(me.url.length - 1, 1);
        me.url += (end === "/") ? '' : '/';
        me.url += me.isInTheSameDomain ? "path.json?" : "path.jsonp";

        jsonParameters = {
            points: SuperMap.Util.toJSON(params.points),
            transferLines: SuperMap.Util.toJSON(params['transferLines'])
        };

        me.request({
            method: method,
            params: jsonParameters,
            scope: me,
            success: me.serviceProcessCompleted,
            failure: me.serviceProcessFailed
        });
    },

    CLASS_NAME: "SuperMap.REST.TransferPathService"
});

module.exports = SuperMap.REST.TransferPathService;