({
	showSelectedlead : function(component, event) {
       var customerid;
        var selleadid;
         var selleadid123;
       //component.set("v.Leaddeatilstab",true);
        var records = component.get("v.selectedleads");
        console.log('records'+records);
        for ( var i = 0; i < records.length; i++ ) {
         	
           // alert(records[i].Name);
            customerid = records[i].Prospect__c;
            selleadid = records[i].Id;
           console.log('cs' +customerid );
            console.log('lead' + selleadid );
            if(customerid != null && customerid != undefined){
                component.set("v.selCustomerID", customerid);}
            if(selleadid != null && selleadid != undefined){
                component.set("v.selleadID", selleadid);
            }
           
        }
    } , 
    
   /* LoadAccountIds : function(component, event) {
       console.log('account');
        var customerid;
        
       
        var recordsacc = component.get("v.leadslist");
        console.log('records'+recordsacc);
      //  for ( var i = 0; i < recordsacc.length; i++ ) {
         	
            customerid = recordsacc[0].Prospect__c;
          
           console.log('cs' +customerid );
           
            if(customerid != null && customerid != undefined){
                component.set("v.selCustomerID", customerid);}
                       
          //  }
        
        }, 
        
   
    LoadLeadIds : function(component, event) {
		console.log('lead');
        var selleadid;
        
      //  var records = component.get("v.leadslist");
        var recordslead = component.get("v.leadslist");
        console.log('records'+recordslead);
      //  for ( var i = 0; i < recordslead.length; i++ ) {
         	selleadid = recordslead[0].Id;
            console.log('lead' + selleadid );
            if(selleadid != null && selleadid != undefined){
                component.set("v.selleadID", selleadid);
            }
            
       // }
       
	},*/
        
    
    
})