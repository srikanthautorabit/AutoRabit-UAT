public with sharing class PocController{
    @AuraEnabled

    public static Customer_POC_Request__c saveDetails(Customer_POC_Request__c poc,AutoRABIT_POC__c ps ) {
       
    upsert poc;
    
    //ps.Customer_POC_Request__c=poc.id;
    //tezting
    upsert ps;
    return poc;
    }
}