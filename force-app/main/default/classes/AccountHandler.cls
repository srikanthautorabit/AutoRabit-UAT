//testing
public class AccountHandler {
public static Account insertNewAccount()
{
//testing for mergepull
     Account act = New Account();
        act.Name = 'sri';
    try {
  
        insert act;
        }
    catch (DmlException e) {

       return null;
                           }
    return act;
}
//testing Audibene

//testing
//tesing123
}