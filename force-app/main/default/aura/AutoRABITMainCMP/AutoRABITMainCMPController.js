({
	CreatePOC : function(component, event, helper) {
        alert("test");
		 var poc = component.get("v.NewPOC");
        var ps = component.get("v.NewPS");
       
        var action = component.get("c.saveDetails");
         
    action.setParams({ 
        "poc": poc,
        "ps": ps
    });
        
    action.setCallback(this, function(a) {
           var state = a.getState();
        console.log(state);
            if (state === "SUCCESS") {
                var name = a.getReturnValue();
                alert("hello from here"+name);
            }
        });
    $A.enqueueAction(action)
}
	
})