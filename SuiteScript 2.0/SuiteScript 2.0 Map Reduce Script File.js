/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType MapReduceScript
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799161}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4387799161.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Declarations]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Declarations}
 */
define([],
  
  /**
   * @return {{
   *   getInputData: Function,
   *   map?: Function,
   *   reduce?: Function,
   *   summarize?: Function,
   * }}
   */
  function () {
    
    /**
     * @param {GetInputContext} context
     * @return {GetInputReturn}
     */
    function getInputData(context) {
      try {
        log.audit('getInputData', context);
      } catch (e) {
        log.error('getInputData', JSON.parse(JSON.stringify(e)));
      }
    }
    
    /**
     * @param {MapContext} context - Data collection containing raw key/value pairs
     * @return {void}
     */
    function map(context) {
      try {
        log.audit('map', context);
      } catch (e) {
        log.error('map', JSON.parse(JSON.stringify(e)));
      }
    }
    
    /**
     * @param {ReduceContext} context - Data collection containing grouped key/value pairs
     * @return {void}
     */
    function reduce(context) {
      try {
        log.audit('reduce', context);
      } catch (e) {
        log.error('reduce', JSON.parse(JSON.stringify(e)));
      }
    }
    
    /**
     * @param {SummarizeContext} context - Holds statistics regarding the execution of a map/reduce script
     * @return {void}
     */
    function summarize(context) {
      try {
        log.audit('summarize', context);
      } catch (e) {
        log.error('summarize', JSON.parse(JSON.stringify(e)));
      }
    }
    
    return {
      getInputData: getInputData,
      map: map,
      reduce: reduce,
      summarize: summarize,
    };
    
  }
);
