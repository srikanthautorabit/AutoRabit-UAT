({
	invoke : function(component, event, helper) {
        component.set("v.columns",[
            {label:"Name",fieldName:"Name",type:"text"},
            /*{label:"Amount",fieldName:"amount",type:"currency",typeAttributes: { currencyCode: 'USD'}}, 
               {label:"CloseDate",fieldName:"CloseDate",type:"date"} */
            {label:"Model",fieldName:"Model__c",type:"text"},
            {label:"Type",fieldName:"Type__c",type:"text"},
            {label:"Prospect",fieldName:"Prospect__c",type:"text"},
            {label:"Status",fieldName:"Status__c",type:"text"},
            {label:"Assigned to dealership",fieldName:"Assigned_To_Dealership",type:"text"},
            {label:"Outcome",fieldName:"Outcome__c",type:"text"},
            {label:"Consultant",fieldName:"Consultant__c",type:"text"},
         
            
        ]);
		/*var dummy = '1232436';
            component.set("v.selleadID",dummy);
            component.set("v.selCustomerID",dummy);*/
        var test; 
             var test; 
               var test123; 
		var action = component.get("c.leadData");
        action.setCallback(this,function(response){
            var state= response.getState();
            if(state === 'SUCCESS'){
           component.set("v.leadslist",response.getReturnValue());
            
   // helper.LoadLeadIds(component, event);
  // helper.LoadAccountIds(component, event);
          
           }
            else{
                console.log('Error');       
                    } 
        }              
                          );
        $A.enqueueAction(action);
	},
    handleRowAction : function(component, event, helper){
            var setRows = [];
            var selectedRows = event.getParam("selectedRows");
        console.log('selectedRow: ' + JSON.stringify(selectedRows));
          
        for ( var i = 0; i < selectedRows.length; i++ ) {
            
            setRows.push(selectedRows[i]);

        }
        component.set("v.selectedleads", setRows);
       /*  var records = component.get("v.selectedleads");
        console.log('records'+records);
        var customerid = records[0].Prospect__c;
            var selleadid = records[0].Id;
        component.set("v.selCustomerID", customerid);
            component.set("v.selleadID", selleadid);*/
        helper.showSelectedlead(component, event);
      		                 
 	},
                 
            
})