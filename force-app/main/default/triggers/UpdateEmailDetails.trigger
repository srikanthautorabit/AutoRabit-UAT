trigger UpdateEmailDetails on Case (after insert, after update) {
    
    if(!checkRecursive.firstcall) {
       checkRecursive.firstcall = true;
       Id CaseID;
       for(case c:trigger.new){
           CaseID=c.Id;
       }
       Case Cas=[select Id,Description,experience__c,sales_areas_are_you_experienced_in__c,education_you_have_completed__c from Case Where Id=:CaseID];
       if(Cas.Description !=null){
          
           Cas.experience__c =Cas.Description.substringBetween('How many years of total work experience do you have?', 'What is the highest level of education you have completed?');
           Cas.education_you_have_completed__c =Cas.Description.substringBetween('What is the highest level of education you have completed?', 'Which of the following sales areas are you experienced in?');
           Cas.sales_areas_are_you_experienced_in__c =Cas.Description.substringBetween('Which of the following sales areas are you experienced in?', 'Testing String?');
           
       
       Update Cas;
}
    
}
}