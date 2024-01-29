namespace my.bookshop;

entity Books {
  key ID : Integer;
  title  : String;
  stock  : Integer;
}

entity CC_EMAIL{

key ID    : UUID;
SYSTEM_ID : String;
CLIENT : String;
COMPANY_CODE : String;
EMAIL : String;
 
}
