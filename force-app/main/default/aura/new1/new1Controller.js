({
	invoke : function(component, event, helper) {
        var cols =[
            {label:"Name",fieldName:"Name",type:"text"},
            {label:"Model",fieldName:"Model__c",type:"text"},
            {label:"Type",fieldName:"Type__c",type:"text"},
            {label:"Prospect",fieldName:"AccountName",type:"text"},
            {label:"Status",fieldName:"Status__c",type:"text"},
            {label:"Assigned to dealership",fieldName:"Assigned_To_Dealership__c",type:"Date"},
            {label:"Outcome",fieldName:"Outcome__c",type:"text"},
            {label:"Consultant",fieldName:"UserName",type:"text"}
          ]
        component.set("v.columns",cols);
            
		var action = component.get("c.leadData");
        action.setCallback(this,function(response){
            var state= response.getState();
            if(state === 'SUCCESS'){
                 var rows = response.getReturnValue();
                for (var i = 0; i < rows.length; i++) {
                    var row = rows[i];
                    if (row.Prospect__c){
                        row.AccountName = row.Prospect__r.Name;
                        console.log('row.AccountName'+row.AccountName);
                    }
                    if (row.Consultant__c){
                        row.UserName = row.Consultant__r.Name;
                    }
                }
            component.set("v.leadslist",rows);
                  
           }
            else{
                console.log('Error');       
                    } 
        }              
                          );
        $A.enqueueAction(action);
	},
    selectedRows : function (component, event) {
    var selectedRows = event.getParam('selectedRows'); 
        var setRows = [];
        for ( var i = 0; i < selectedRows.length; i++ ) {
            
            setRows.push(selectedRows[i]);

        }
        component.set("v.selleads", setRows);
        var records = component.get("v.selleads");
        var leadid = records[0].Id;
         component.set("v.selleadID",leadid);
        //alert(leadid);
      
        var selaccid= records[0].Prospect__c;
        component.set("v.selaccid",selaccid);
        //alert(selaccid);
        
}           
})