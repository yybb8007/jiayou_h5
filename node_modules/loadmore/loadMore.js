/**
 * @license 
 * loadMore 0.1.0 <>
 * Copyright 2015-2015 Ahmad Zuhdi
 * Available under MIT license
 */

;
(function() {

    /**
     * constructor
     * @param  {Object} config 
     *
     * @example
     * new loadMore({
     *  datas: [1,2,3,4,5,6,7,8,9,0],
     *  dataPerPage: 10, // default: 5
     *  events : {
     *      onPageChange : [Function], // get called on page change
     *      onNext: [Function], // get called on loadMore.nextPage()
     *      onPrev : [Function], // get called on loadMore.prevPage()
     *  }
     * })
     *
     * loadMore.nextPage() // set a new page and return data of next page
     *
     * loadMore.prevPage() // set a new page and return data of prev page
     *
     * loadMore.changePage(2) // set a new page and return data of new page
     *
     * loadMore.getDataCurrentPage() // return data in current page
     * 
     */
    function loadMore(config) {
        if (!(this instanceof loadMore)) {
            return new loadMore(config)
        }
        if (!config.dataPerPage) config.dataPerPage = 5
        this.config = config
        this.currentPage = 1
    }

    /**
     * get current page
     * @return {Number} 
     */
    loadMore.prototype.getCurrentPage = function getCurrentPage() {
        return this.currentPage
    }

    /**
     * set a new page and return data of next page
     * @return {Array} 
     */
    loadMore.prototype.nextPage = function nextPage() {
        this.currentPage++
            return this.getData(this.currentPage)
    }

    /**
     * set a new page ant return data of prev page
     * @return {Array} 
     */
    loadMore.prototype.prevPage = function prevPage() {
        this.currentPage--
            return this.getData(this.currentPage)
    }

    /**
     * set a new page and return data of new page
     * @param  {Number} page 
     * @return {Array}      
     */
    loadMore.prototype.changePage = function changePage(page) {
        this.currentPage = parseInt(page)
        return this.getData(this.currentPage)
    }

    /**
     * get data of current page
     * @return {Array}
     */
    loadMore.prototype.getDataCurrentPage = function getDataCurrentPage() {
        return this.changePage(this.currentPage)
    }

    /**
     * get data of given page
     * @param  {Number} page 
     * @return {Array}      
     */
    loadMore.prototype.getData = function getData(page) {

        /**
         * data per page
         * @type {Number}
         */
        var dataPerPage = this.config.dataPerPage

        /**
         * start index to used by Array#Slice
         * @type {[type]}
         */
        var startIndex = (page * dataPerPage) - dataPerPage

        /**
         * end index to used by Array#Slice
         * @type {Number}
         */
        var endIndex = startIndex + dataPerPage

        // for debug purpose only
        // console.log(page, startIndex, endIndex)

        return this.config.datas.slice(startIndex, endIndex)
    }

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports'], function() {
            return loadMore
        });
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        module.exports = loadMore
    } else {
        // Browser globals
        window.loadMore = loadMore
    }

}.call(this))

