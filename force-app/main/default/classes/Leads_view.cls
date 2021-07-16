Public class Leads_view{
Public string lead;
@AuraEnabled
  public static list<lead> leadData(){
  
    list<lead> leadlist1 = [select id,Name,Firstname,Lastname,Model__c,Type__c,Status__c,Source__c,Prospect__r.Name,
             Outcome__c,Consultant__r.Name,Assigned_To_Dealership__c from lead order by createddate desc limit 10 ];
                      
           return leadlist1;
  
  }

}